import { DiasParaPipe } from './dias-para-pipe';
describe('DiasParaPipe', () => {
  const pipe = new DiasParaPipe();
  const hoje = new Date(2026, 10, 24);
  it('hoje', () => expect(pipe.transform('2026-11-24', hoje)).toBe('Hoje'));
  it('amanha', () => expect(pipe.transform('2026-11-25', hoje)).toBe('Faltam 1 dia'));
  it('passado', () => expect(pipe.transform('2026-11-23', hoje)).toBe('Evento encerrado'));
  it('invalido', () => expect(pipe.transform('2026-02-30', hoje)).toBe('2026-02-30'));
  it('vazio', () => expect(pipe.transform('', hoje)).toBe(''));
});
