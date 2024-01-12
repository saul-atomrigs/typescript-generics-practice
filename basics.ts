const getFirstElement = <T>(array: T[]): T => {
 return array[0]
}

const numbers = [1, 2, 3]
// const getFirstElement: <number>(array: number[]) => number
const firstNumber = getFirstElement(numbers)

const strings = ["hello", "world"]
// const getFirstElement: <string>(array: string[]) => string
const firstString = getFirstElement(strings)
