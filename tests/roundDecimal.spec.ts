import { describe, expect, it } from 'vitest';
import roundDecimal from '../src/roundDecimal';
import { defaultMinSignificantFractionDigits } from '../src/roundDecimal';

describe('roundDecimal', () => {
  function runPureFunctionTest (value: number, minSignificantFractionDigits: number = defaultMinSignificantFractionDigits) {
    const roundedValue: number = roundDecimal(value, minSignificantFractionDigits);
    expect(roundedValue).toBe(roundDecimal(roundedValue, minSignificantFractionDigits));

    const roundedNegativeValue: number = roundDecimal(-value, minSignificantFractionDigits);
    expect(roundedNegativeValue).toBe(roundDecimal(roundedNegativeValue, minSignificantFractionDigits));
  }

  it('0.1 + 0.2', () => {
    for (let n: number = 0; n <= 12; n++) {
      // x = 10^n
      const x: number = 10 ** n;
      // x.1 + x.2
      const positiveCase: number = Number(`${x}.1`) + Number(`${x}.2`);
      // -x.1 - x.2
      const negativeCase: number = Number(`-${x}.1`) - Number(`${x}.2`);

      expect(roundDecimal(positiveCase)).toBe(Number(`${x + x}.3`));
      runPureFunctionTest(positiveCase);

      expect(roundDecimal(negativeCase)).toBe(Number(`-${x + x}.3`));
      runPureFunctionTest(negativeCase);
    }
  });

  it('10000000000000.1 + 10000000000000.2', () => {
    const x: number = 10000000000000.1;
    const y: number = 10000000000000.2;

    expect(roundDecimal(x + y, 1)).toBe(20000000000000.3);
    runPureFunctionTest(x + y, 1);

    expect(roundDecimal(x + y, 2)).toBe(20000000000000.3);
    runPureFunctionTest(x + y, 2);

    expect(roundDecimal(x + y, 3)).toBe(20000000000000.297);
    runPureFunctionTest(x + y, 3);

    expect(roundDecimal(x + y)).toBe(20000000000000.297);
    expect(roundDecimal(x + y)).toBe(x + y);
    runPureFunctionTest(x + y);
  });

  it('-10000000000000.1 - 10000000000000.2', () => {
    const x: number = -10000000000000.1;
    const y: number = 10000000000000.2;

    expect(roundDecimal(x - y, 1)).toBe(-20000000000000.3);
    runPureFunctionTest(x - y, 1);

    expect(roundDecimal(x - y, 2)).toBe(-20000000000000.3);
    runPureFunctionTest(x - y, 2);

    expect(roundDecimal(x - y, 3)).toBe(-20000000000000.297);
    runPureFunctionTest(x - y, 3);

    expect(roundDecimal(x - y)).toBe(-20000000000000.297);
    expect(roundDecimal(x - y)).toBe(x - y);
    runPureFunctionTest(x - y);
  });

  // https://stackoverflow.com/a/11832950
  it('1.255 * 100', () => {
    expect(roundDecimal(1.255 * 100)).toBe(125.5);
    runPureFunctionTest(1.255 * 100);
  });

  it('-1.255 * 100', () => {
    expect(roundDecimal(-1.255 * 100)).toBe(-125.5);
    runPureFunctionTest(-1.255 * 100);
  });

  it('10000000000.255 * 100', () => {
    expect(roundDecimal(10000000000.255 * 100)).toBe(1000000000025.5);
    runPureFunctionTest(10000000000.255 * 100);
  });

  it('-10000000000.255 * 100', () => {
    expect(roundDecimal(-10000000000.255 * 100)).toBe(-1000000000025.5);
    runPureFunctionTest(-10000000000.255 * 100);
  });

  // https://stackoverflow.com/a/12830454
  it('1.3549999999999998', () => {
    expect(roundDecimal(1.3549999999999998)).toBe(1.355);
    runPureFunctionTest(1.3549999999999998);
  });
});
