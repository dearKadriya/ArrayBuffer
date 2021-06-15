export class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    return String.fromCharCode.apply(...[null, new Uint16Array(this.buffer)]);
  }
}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    /* eslint-disable */
      for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

// const buffData = getBuffer();
// const convert = new ArrayBufferConverter();
// console.log(convert.load(buffData));
// console.log(convert.toString())
