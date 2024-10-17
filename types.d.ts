export type Person = {
  name: string
  age: number
}

export type HandleEvent = {
  handleClick: (e: Event, cb: () => void) => void
}