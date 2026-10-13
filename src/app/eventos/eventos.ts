import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Evento {
  nome: string;
  email: string;
  data: string;
  horario: string;
  local: string;
  vagas: number | null;
  descricao: string;
}

@Component({
  selector: 'app-eventos',
  imports: [FormsModule],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css'
})
export class Eventos {
  rascunho: Evento = {
    nome: '', email: '', data: '', horario: '', local: '', vagas: null, descricao: ''
  };
  cadastrados: Evento[] = [];

  salvar(formulario: NgForm): void {
    if (formulario.invalid) return;

    this.cadastrados.push({ ...this.rascunho });
    this.limpar(formulario);
  }

  limpar(formulario: NgForm): void {
    this.rascunho = {
      nome: '', email: '', data: '', horario: '', local: '', vagas: null, descricao: ''
    };
    formulario.resetForm(this.rascunho);
  }
}

