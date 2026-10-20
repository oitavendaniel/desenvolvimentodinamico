import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface DadosEmpresa {
  nome: string;
  cnpj: string;
  logomarca: string;
  fundacao: Date;
  descricao: string;
}

@Component({
  selector: 'app-empresa',
  imports: [CommonModule, FormsModule],
  templateUrl: './empresa.html',
  styleUrl: './empresa.css',
})
export class Empresa {
  empresa: DadosEmpresa = {
    nome: '',
    cnpj: '',
    logomarca: '',
    fundacao: new Date(),
    descricao: '',
  };

  empresas: DadosEmpresa[] = [];

  salvar(formulario: NgForm): void {
    if (formulario.invalid) return;

    this.empresas.push({ ...this.empresa });

    this.empresa = {
      nome: '',
      cnpj: '',
      logomarca: '',
      fundacao: new Date(),
      descricao: '',
    };

    formulario.resetForm(this.empresa);
  }
}