import { ArrayBufferConverter, getBuffer } from './ArrayBufferConverter';

test('Проверка добавления буффера в загрузчик', () => {
  const buffData = getBuffer();
  const convert = new ArrayBufferConverter();
  convert.load(buffData);
  const result = convert.toString();
  /* eslint-disable */
    expect(result).toBe('{\"data\":{\"user\":{\"id\":1,\"name\":\"Hitman\",\"level\":10}}}');
});
