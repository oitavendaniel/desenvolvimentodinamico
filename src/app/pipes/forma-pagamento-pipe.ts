import { Pipe, PipeTransform } from '@angular/core';

const ROTULOS: Record<string, string> = {
  pix: 'Pix',
  cartao: 'Cartão de crédito',
  boleto: 'Boleto',
  dinheiro: 'Dinheiro',
  '': 'Não informado'
};

@Pipe({
  name: 'formaPagamento'
})
export class FormaPagamentoPipe implements PipeTransform {

  transform(valor: string): string {
    return ROTULOS[valor] ?? 'Não informado';
  }
}