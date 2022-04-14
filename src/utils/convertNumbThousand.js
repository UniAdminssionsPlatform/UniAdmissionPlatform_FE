export default function convertNumbThousand(number) {
  let str = ''
  if (number < 1000) {
    str = String(number)
  } else {
    str = (number / 1000).toFixed(1) + 'k'
  }
  return str
}
