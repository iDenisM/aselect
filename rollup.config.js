import json from '@rollup/plugin-json';
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";

let config1 = {
  input: 'src/main.js',
  output: [
    {
      file: "dist/aselect.amd.js",
      format: "amd"
    },
    {
      file: "dist/aselect.amd.min.js",
      format: "amd",
      plugins: [terser()]
    },

    {
      file: "dist/aselect.iife.js",
      name: "LazyLoad",
      format: "iife"
    },
    {
      file: "dist/aselect.iife.min.js",
      name: "LazyLoad",
      format: "iife",
      plugins: [terser()]
    },
    {
      file: "dist/aselect.js",
      name: "LazyLoad",
      format: "umd"
    },
    {
      file: "dist/aselect.min.js",
      name: "LazyLoad",
      format: "umd",
      plugins: [terser()]
    }
  ],
  plugins: [
    json(),
    resolve(),
    babel({
      exclude: "node_modules/**"
    })
  ]
};

let config2 = {
  input: "src/main.js",
  output: [
    {
      file: "dist/aselect.esm.js",
      format: "esm"
    },
    {
      file: "dist/aselect.esm.min.js",
      format: "esm",
      plugins: [terser()]
    }
  ],
  plugins: [json()]
}

module.exports = [config1,config2];