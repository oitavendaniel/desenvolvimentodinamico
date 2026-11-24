import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'diasPara' })
export class DiasParaPipe implements PipeTransform {
  transform(valor: string | null | undefined, hoje: Date = new Date()): string {
    if (!valor) return '';
    const partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(valor);
    if (!partes) return valor;
    const [, a, m, d] = partes.map(Number);
    const data = new Date(a, m - 1, d);
    if (data.getFullYear() !== a || data.getMonth() !== m - 1 || data.getDate() !== d) return valor;
    const dias = Math.round((Date.UTC(a, m - 1, d) - Date.UTC(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())) / 86400000);
    return dias === 0 ? 'Hoje' : dias < 0 ? 'Evento encerrado' : `Faltam ${dias} dia${dias === 1 ? '' : 's'}`;
  }
}
