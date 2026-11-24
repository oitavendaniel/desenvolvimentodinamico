import { IniciaisPipe } from './iniciais-pipe';
describe('IniciaisPipe', () => {
  const pipe = new IniciaisPipe();
  it("Ana Maria Santos", () => expect(pipe.transform("Ana Maria Santos")).toBe("AMS"));
  it("  Ana   Silva  ", () => expect(pipe.transform("  Ana   Silva  ")).toBe("AS"));
  it("vazio", () => expect(pipe.transform("")).toBe(""));
});
