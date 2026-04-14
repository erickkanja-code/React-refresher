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

// const result = (arr: number[]): [number, number] => {
//   let max: number = 0
//   for (let num of arr) {
//     if (num > max){
//       max = num
//     }
//   }
//   let min: number = arr[0]
//   for (let num of arr) {
//     if (num < min){
//       min = num
//     }
//   }
//   return [max, min]
// }

// console.log(result([9876, 333, 92, 102, 10101010]))

// const safeParseJSON= (input: unknown): string => {
//   if(typeof input == "string") {
//     return JSON.parse(input)
//   } else {
//     throw Error("Unable to parse")
//   }
// }

// console.log(safeParseJSON(20))


const getType = (a: unknown): string => {
  if (typeof a == "number") {
    return "number"
  } else if (typeof a == 'string') {
    return "string"
  } else if (typeof a == 'boolean') {
    return "boolean"
  } else if (Array.isArray(a)) {
    return "array"
  } else if (typeof a =='object') {
    return "object"}
    else {
      return "Unknown type"
    }
}

console.log(getType(1))
console.log(getType("hello"))
console.log(getType([]))
console.log(getType({id: 100}))
