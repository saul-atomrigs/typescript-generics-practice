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
