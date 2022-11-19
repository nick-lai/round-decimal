function approximateUlp (value: number): number {
  return Math.pow(2, Math.ceil(Math.log2(Math.abs(value))) - 52);
}

function getSignificantFractionDigits (value: number): number {
  return Math.trunc(Math.abs(Math.log10(approximateUlp(value))));
}

const defaultMinSignificantFractionDigits: number = 3;

function roundDecimal (value: number, minSignificantFractionDigits: number = defaultMinSignificantFractionDigits): number {
  const significantFractionDigits: number = getSignificantFractionDigits(value);

  if (significantFractionDigits < minSignificantFractionDigits) {
    return value;
  }

  const raised: number = value < 0
    ? -Math.pow(10, significantFractionDigits)
    : Math.pow(10, significantFractionDigits);

  return Math.round(value * raised) / raised;
}

export {
  approximateUlp,
  getSignificantFractionDigits,
  defaultMinSignificantFractionDigits,
  roundDecimal,
  roundDecimal as default,
};
