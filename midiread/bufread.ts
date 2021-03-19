export function bufferReader(buffer: ArrayBuffer | Uint8Array) {
  let _offset = 0;
  const bl = buffer.byteLength;
  const fgetc = () => _offset < bl && buffer[_offset++];
  const btoa = () => String.fromCharCode(fgetc());
  const read32 = () =>
    (fgetc() << 24) | (fgetc() << 16) | (fgetc() << 8) | fgetc();
  const read16 = () => (fgetc() << 8) | fgetc();
  const read24 = () => (fgetc() << 16) | (fgetc() << 8) | fgetc();
  const fgets = (n) => (n > 1 ? btoa() + fgets(n - 1) : btoa());
  const fgetnc = (n) => (n > 1 ? fgetnc(n - 1).concat(fgetc()) : [fgetc()]);
  const readVarLength = () => {
    let v = 0;
    let n = fgetc();
    v = n & 0x7f;
    while (n & 0x80) {
      n = fgetc();
      v = (v << 7) | (n & 0x7f);
    }
    return v;
  };
  return {
    get offset() {
      return _offset;
    },
    set offset(offset) {
      _offset = offset;
    },
    fgetc,
    btoa,
    read32,
    read16,
    read24,
    fgetnc,
    readVarLength,
    fgets,
  };
}
