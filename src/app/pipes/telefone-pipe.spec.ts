import { TelefonePipe } from './telefone-pipe';
describe('TelefonePipe', () => {
  const pipe = new TelefonePipe();
  it("71988887777", () => expect(pipe.transform("71988887777")).toBe("(71) 98888-7777"));
  it("7133334444", () => expect(pipe.transform("7133334444")).toBe("(71) 3333-4444"));
  it("vazio", () => expect(pipe.transform("")).toBe(""));
  it("123", () => expect(pipe.transform("123")).toBe("123"));
});
