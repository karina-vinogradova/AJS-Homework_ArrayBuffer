import getBuffer from '../buffer';
import ArrayBufferConverter from '../converter';

test('testing (getBuffer->data) === (toString->text)', () => {
  const testObj = new ArrayBufferConverter();
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  testObj.load(getBuffer());
  const text = testObj.toString();
  expect(data).toEqual(text);
});
