import ArrayBufferConverter from "../ArrayBufferConverter"
import getBuffer from "../getBuffer"

test('should load buffer correctly', () => {
  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();
  
  converter.load(buffer);
  
  expect(converter.buffer).toEqual(buffer);
});

test('should convert buffer to string correctly', () => {
  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();
  
  converter.load(buffer);
  const result = converter.toString();
  
  const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(result).toBe(expectedString);
});