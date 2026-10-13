export function validarTitulo(valor: string): string | null {
  const tamanho = valor.trim().length;
  return tamanho >= 5 && tamanho <= 80
    ? null : 'O título deve ter entre 5 e 80 caracteres.';
}

export function validarData(valor: string): string | null {
  if (!valor) return 'A data é obrigatória.';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(valor)) return 'Informe uma data válida.';

  const [ano, mes, dia] = valor.split('-').map(Number);
  const data = new Date(ano, mes - 1, dia);
  if (data.getFullYear() !== ano || data.getMonth() !== mes - 1 || data.getDate() !== dia) {
    return 'Informe uma data válida.';
  }

  // Compara dias no horário local, sem converter a entrada para UTC.
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return data < hoje ? 'A data não pode estar no passado.' : null;
}

export function validarLocal(valor: string): string | null {
  return valor.trim() ? null : 'O local não pode ficar em branco.';
}

export function validarEmailResponsavel(valor: string): string | null {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/.test(valor)
    ? null : 'E-mail em formato inválido.';
}

export function validarVagas(valor: number | null): string | null {
  return valor !== null && Number.isInteger(valor) && valor >= 1 && valor <= 200
    ? null : 'As vagas devem ser um número inteiro de 1 a 200.';
}
