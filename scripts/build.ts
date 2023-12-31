import dts from "bun-plugin-dts";

const buildTask = Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./out",
  target: "browser",
  format: "esm",
  sourcemap: "external",
  plugins: [dts()],
});

await buildTask;
