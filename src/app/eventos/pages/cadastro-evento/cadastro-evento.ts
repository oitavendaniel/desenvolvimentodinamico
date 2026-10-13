import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Evento } from '../../../models/evento';
import { validarTitulo, validarData, validarLocal, validarEmailResponsavel, validarVagas } from '../../../models/evento.validacao';

type CampoEvento = keyof Omit<Evento, 'id'>;

@Component({
  selector: 'app-cadastro-evento',
  imports: [FormsModule],
  templateUrl: './cadastro-evento.html',
  styleUrl: './cadastro-evento.css'
})
export class CadastroEvento {
  // O rascunho contém apenas os campos preenchidos na tela.
  rascunho: Omit<Evento, 'id'> = this.criarRascunho();
  cadastrados: Evento[] = [];
  private proximoId = 1;
  tocados: Partial<Record<CampoEvento, boolean>> = {};
  tentouSalvar = false;

  get erros(): Record<CampoEvento, string | null> {
    return {
      titulo: validarTitulo(this.rascunho.titulo),
      data: validarData(this.rascunho.data),
      local: validarLocal(this.rascunho.local),
      emailResponsavel: validarEmailResponsavel(this.rascunho.emailResponsavel),
      vagas: validarVagas(this.rascunho.vagas)
    };
  }

  get temErro(): boolean {
    return Object.values(this.erros).some(erro => erro !== null);
  }

  mensagem(campo: CampoEvento): string | null {
    return this.tocados[campo] || this.tentouSalvar ? this.erros[campo] : null;
  }


  salvar(formulario: NgForm): void {
    this.tentouSalvar = true;
    if (this.temErro) return;

    this.cadastrados.push({ ...this.rascunho, id: this.proximoId++ });
    this.limpar(formulario);
  }

  limpar(formulario: NgForm): void {
    this.rascunho = this.criarRascunho();
    formulario.resetForm(this.rascunho);
    this.tocados = {};
    this.tentouSalvar = false;
  }

  private criarRascunho(): Omit<Evento, 'id'> {
    return { titulo: '', data: '', local: '', emailResponsavel: '', vagas: null };
  }
}

