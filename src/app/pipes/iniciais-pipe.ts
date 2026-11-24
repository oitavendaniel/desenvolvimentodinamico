import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'iniciais' })
export class IniciaisPipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    return (valor ?? '').trim().split(/\s+/).filter(Boolean).map(nome => nome[0]).join('').toLocaleUpperCase('pt-BR');
  }
}
