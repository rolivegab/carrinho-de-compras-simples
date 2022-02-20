const numberToReal = (num) => `R$${num.toFixed(2).replace(/\./, ',')}`

export default numberToReal