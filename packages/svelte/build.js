const path = require("path");
const fs = require("fs-extra");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { optimize } = require("svgo");
const Case = require("case");
const { glob } = require("glob");

const getFileName = (name) => name.split(".").slice(0, -1).join(".");

const componentTemplate = (icon) =>
  `<svelte:options tag={null} />

<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;
</script>

${icon.svg}
`;

// directory path
const srcDir = "../svg";
const outDir = ".";

const getFSEntries = (source) =>
  fs.readdirSync(source).map((name) => path.join(source, name));
const isFile = (source) => fs.lstatSync(source).isFile();
const getFiles = (source) => getFSEntries(source).filter(isFile);
const isDirectory = (source) => fs.lstatSync(source).isDirectory();
const getDirectories = (source) => getFSEntries(source).filter(isDirectory);

// const dirs = getDirectories(srcDir);

function convertSvgToSvelteComponent(svgFilePath) {
  const name = path.basename(getFileName(svgFilePath));

  const svg = fs.readFileSync(svgFilePath);
  const dom = new JSDOM(svg);
  const body = dom.window.document.body;
  const svgEl = body.children[0];
  if (svgEl) {
    svgEl.setAttribute(
      "class",
      `manypixels manypixels-illustration manypixels-illustration-${Case.kebab(
        name
      )} \${className}`
    );
    svgEl.setAttribute("width", "${width}");
    svgEl.setAttribute("height", "${height}");
  } else {
    console.error(`Unable to find svg element for icon '${svgFilePath}'.`);
  }

  const optimizeResult = optimize(body.innerHTML, {
    full: true,
    multipass: true,
  });

  return {
    path: svgFilePath,
    name,
    svg: optimizeResult.data,
  };
}

(async () => {
  const files = await new Promise((resolve, reject) =>
    glob(srcDir + '/**/*.svg', (error, matches) => (error ? reject(error) : resolve(matches)))
  ).catch(console.error);

  console.log(files);
})();

// dirs.forEach((dirName) => {
//   dirName = path.basename(dirName);

//   const illustrations = getFiles(srcDir + "/" + dirName).map((file) => {
//     console.log("Processing ", file);

//     return convertSvgToSvelteComponent(file);
//   });

//   Promise.all(
//     illustrations.map((icon) => {
//       const filepath = outDir + `/${dirName}/${icon.name}.svelte`;
//       return fs
//         .ensureDir(path.dirname(filepath))
//         .then(() => fs.writeFile(filepath, componentTemplate(icon), "utf8"));
//     })
//   ).then(() => {
//     const main = illustrations
//       .map(
//         (icon) =>
//           `export { default as ${icon.name} } from './${icon.name}.svelte';`
//       )
//       .join("\n");
//     return fs.outputFile(outDir + `/${dirName}/svelte.js`, main, "utf8");
//   });
// });
