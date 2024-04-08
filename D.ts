const contaNumerosBonitos = (inicio: number, fim: number): number => {
  let count = 0;
  for (let i = inicio; i <= fim; i++) {
    if (temDigito(8, i) && !temDigito(3, i)) {
      count++;
    }
  }
  return count;
};

const temDigito = (digito: number, valor: number): boolean => {
  return String(valor).includes(String(digito));
};

const inicio = 18907;
const fim = 33306;

console.log(contaNumerosBonitos(inicio, fim));
