const formatPrice = (price: number, currencyId: string): string => {
  switch (currencyId) {
    case "NGN":
      return price.toFixed(4).replace(".", ",");
    default:
      return price.toFixed(2);
  }
};

export default formatPrice;
