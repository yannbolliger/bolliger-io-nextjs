import { useReducer } from "react"

interface Value<T> {
  type: "value"
  value: T
}

interface Error {
  type: "error"
  error: string
}

type Action<T> = Value<T> | Error

interface State<T> {
  value: T
  error: string
}

export default <T>(initialState: T) => {
  const reducer = (state: State<T>, action: Action<T>) => {
    switch (action.type) {
      case "error":
        return { ...state, error: action.error }
      default:
        return { ...state, value: action.value }
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    value: initialState,
    error: "",
  })

  return {
    ...state,
    setValue: (value: T) => dispatch({ type: "value", value }),
    hasError: state.error !== "",
    setError: (error: string) => dispatch({ type: "error", error }),
  }
}
