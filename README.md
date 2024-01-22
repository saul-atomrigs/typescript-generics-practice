# typescript-generics-practice
https://www.youtube.com/watch?v=EcCTIExsqmI

### 1. 기본 Generics 사용예시
``` typescript
const getFirstElement = <T>(array: T[]): T => {
 return array[0]
}

const numbers = [1, 2, 3]
// const getFirstElement: <number>(array: number[]) => number
const firstNumber = getFirstElement(numbers)

const strings = ["hello", "world"]
// const getFirstElement: <string>(array: string[]) => string
const firstString = getFirstElement(strings)
```
