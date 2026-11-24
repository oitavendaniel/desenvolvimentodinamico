import { FormaPagamentoPipe } from './forma-pagamento-pipe';
describe('FormaPagamentoPipe', () => {
  const pipe = new FormaPagamentoPipe();
  it("cartao", () => expect(pipe.transform("cartao")).toBe("Cart?o de cr?dito"));
  it("pix", () => expect(pipe.transform("pix")).toBe("Pix"));
  it("vazio", () => expect(pipe.transform("")).toBe("N?o informado"));
  it("invalido", () => expect(pipe.transform("invalido")).toBe("N?o informado"));
});
