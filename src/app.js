import getBuffer from './buffer';
import ArrayBufferConverter from './converter';

const data = new ArrayBufferConverter();
data.load(getBuffer());

const parse = data.toString();
console.log(parse);
