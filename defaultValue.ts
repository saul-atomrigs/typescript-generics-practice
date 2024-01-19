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
