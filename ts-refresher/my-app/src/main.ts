//Write a function formatPrice(amount: number, currency: 
// string): string that returns a formatted string like 
// '$49.99'. Add full type annotations.

// const formatPrice = (amount: number, currency: string): string => {
//   return `${currency}${amount}`
// }

// console.log(formatPrice(49.99, '$'))

// const isAdult = (age: number) : boolean => {
//   if(age >= 18) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(isAdult(10))

// const getFullName = (firstName: string, lastName: string) => {
//   return `${firstName} ${lastName}`
// }

// console.log(getFullName("Erick", "Muchiri"))

// const getFirstAndLast = (arr: string[]): [string, string] => {
//   return [arr[0], arr[arr.length - 1]]
// }

// console.log(getFirstAndLast(['h', 'e', 'l', 'o']))

const result = (arr: number[]): [number, number] => {
  let max: number = 0
  for (let num of arr) {
    if (num > max){
      max = num
    }
  }
  let min: number = arr[0]
  for (let num of arr) {
    if (num < min){
      min = num
    }
  }
  return [max, min]
}

console.log(result([9876, 333, 92, 102, 10101010]))