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

### 2. 기본 Generics 사용예시 2
``` typescript
const input = document.querySelector<HTMLInputElement>("#input")!

input?.value
```

### 3. API 응답 예시
``` typescript
// So so
type ApiResponse = {
 data: any
 isError: boolean
}

const response: ApiResponse = {
 data: {},
 isError: false,
}

// Better (with generic)
type BetterResponseType<Data> = {
 data: Data
 isError: boolean
}

const betterResponse: BetterResponseType<{ name: string; age: number }> = {
 data: {
  name: "John",
  age: 30,
 },
 isError: false,
}
```

### 4. 기본값
``` typescript
type ApiResponseWithDefaultValue<Data extends object = { status: number }> = {
 data: Data
 isError: boolean
}

const response: ApiResponseWithDefaultValue = {
 data: {
  status: 200,
 },
 isError: false,
}
```
