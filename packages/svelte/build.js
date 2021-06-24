const path = require("path");
const { pascalCase } = require("pascal-case");
const fs = require("fs-extra");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { optimize } = require("svgo");

const getFileName = (name) => name.split(".").slice(0, -1).join(".");

const componentTemplate = (icon) =>
  `<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => \`${icon.svg}\`
</script>

{@html svg(className, width, height)}
`;

// directory path
const srcDir = "../svg/src";

const getFSEntries = (source) =>
  fs.readdirSync(source).map((name) => path.join(source, name));
const isFile = (source) => fs.lstatSync(source).isFile();
const getFiles = (source) => getFSEntries(source).filter(isFile);
const isDirectory = (source) => fs.lstatSync(source).isDirectory();
const getDirectories = (source) => getFSEntries(source).filter(isDirectory);

const dirs = getDirectories(srcDir);

dirs.forEach((dirName) => {
  dirName = path.basename(dirName);

  const illustrations = getFiles(srcDir + "/" + dirName).map((file) => {
    let name = path.basename(getFileName(file));

    if (name.startsWith("3D")) {
      name = name.replace("3D", "") + "3D";
    } else if (name.startsWith("404")) {
      name = name.replace("404", "");
    }

    const svg = fs.readFileSync(file);
    const dom = new JSDOM(svg);
    const svgEl = dom.window.document.body.children[0];
    if (svgEl) {
      svgEl.setAttribute(
        "class",
        `manypixels manypixels-${name} \${className}`
      );
      svgEl.setAttribute("width", "${width}");
      svgEl.setAttribute("height", "${height}");
    } else {
      console.warn(`Unable to find svg element for icon '${dirName}/${name}'.`);
    }

    const optimizeResult = optimize(dom.window.document.body.innerHTML, {
      multipass: true,
    });

    return {
      path: file,
      name,
      svg: optimizeResult.data,
    };
  });

  Promise.all(
    illustrations.map((icon) => {
      const filepath = `./src/${dirName}/${icon.name}.svelte`;
      return fs
        .ensureDir(path.dirname(filepath))
        .then(() => fs.writeFile(filepath, componentTemplate(icon), "utf8"));
    })
  ).then(() => {
    const main = illustrations
      .map(
        (icon) =>
          `export { default as ${icon.name} } from './${icon.name}.svelte';`
      )
      .join("\n");
    return fs.outputFile(`./src/${dirName}/index.js`, main, "utf8");
  });
});

const main = dirs
  .map((dir) => path.basename(dir))
  .map((dir) => `export * as ${pascalCase(dir)} from './${dir}/index.js';`)
  .join("\n");
fs.outputFile(`./src/index.js`, main, "utf8");
