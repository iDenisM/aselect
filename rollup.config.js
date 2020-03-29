import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/aselect.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/aselect.cjs.min.js',
      format: 'cjs',
      plugins: [terser()]
    },
    {
      file: 'dist/aselect.umd.js',
      format: 'umd',
      name: 'aselect'
    },
    {
      file: 'dist/aselect.umd.min.js',
      format: 'umd',
      name: 'aselect',
      plugins: [terser()]
    }
  ],
  plugins: [json()]
};