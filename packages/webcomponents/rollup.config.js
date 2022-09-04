import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

const types = [
  "flatline",
  "isometric",
  "monochromatic",
  "outline",
  "two_color",
];

export default types.map((type) => ({
  input: "../svelte/" + type + "/svelte.js",
  output: [
    { file: type + "/module.mjs", format: "es" },
    {
      file: type + "/main.js",
      format: "umd",
      name: name + type.charAt(0).toUpperCase() + type.slice(1),
    },
  ],
  plugins: [
    svelte({
      compilerOptions: {
        generate: "dom",
        customElement: true,
      },
    }),
    terser(),
  ],
}));
