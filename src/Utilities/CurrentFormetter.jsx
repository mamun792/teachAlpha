export const CurrentFormetter = (price) => {
  if (!price) return;

  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
