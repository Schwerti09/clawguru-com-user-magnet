export function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ")
}

export function formatNumber(n: number) {
  return n.toLocaleString("de-DE")
}
