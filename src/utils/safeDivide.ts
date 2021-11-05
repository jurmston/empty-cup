export function safeDivide(dividend: number, divisor: number): number {
  if (!divisor) {
    return 0
  }

  return dividend / divisor
}
