import { version } from '../package.json';
import Test from './aselect'

export default function() {
  console.log('version: ' + version)
}

new Test();