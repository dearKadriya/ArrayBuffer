import { ArrayBufferConverter, getBuffer } from './ArrayBufferConverter';

test('Проверка добавления буффера в загрузчик', () => {
  const expected = '{\"data\":{\"user\":{\"id\":1,\"name\":\"Hitman\",\"level\":10}}}'
  const convert = new ArrayBufferConverter();
  convert.load(getBuffer());
  /* eslint-disable */
    expect(`${convert}`).toBe(expected);
});
