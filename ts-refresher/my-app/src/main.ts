//Write a function formatPrice(amount: number, currency: 
// string): string that returns a formatted string like 
// '$49.99'. Add full type annotations.

const formatPrice = (amount: number, currency: string): string => {
  return `${currency}${amount}`
}

console.log(formatPrice(49.99, '$'))