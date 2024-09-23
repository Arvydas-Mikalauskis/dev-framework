export const calculateDiscount = (price, discountedPrice) => {
  const hasDiscount = price > discountedPrice
  const discountedPercentage = hasDiscount
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0

  return { hasDiscount, discountedPercentage }
}
