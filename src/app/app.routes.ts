import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Pessoa } from './pessoa/pessoa';
import { Padrao } from './padrao/padrao';
import { NaoEncontrada } from './nao-encontrada/nao-encontrada';
import { Eventos } from './eventos/eventos';
import { CadastroEvento } from './eventos/pages/cadastro-evento/cadastro-evento';
import { Empresa } from './empresa/empresa';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home',   component: Home },
  { path: 'pessoa', component: Pessoa },
  { path: 'padrao', component: Padrao },
  { path: 'eventos', component: Eventos },
  { path: 'eventos/novo', component: CadastroEvento },
  { path: 'empresa', component: Empresa },

  // curinga: precisa ser SEMPRE a ultima rota
  { path: '**', component: NaoEncontrada }
];


