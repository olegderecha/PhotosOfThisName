export const divideByThousands = (value, maximumFractionDigits = 2) => {
  return Number(value).toLocaleString('en-US', {
    maximumFractionDigits,
  })
}
