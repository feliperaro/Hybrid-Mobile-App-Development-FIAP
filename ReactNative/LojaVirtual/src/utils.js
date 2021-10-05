export const valorEmRealFormatado = (valor) => {
  return `R$ ${valor.toFixed(2).toString().replace('.', ',')}`
}