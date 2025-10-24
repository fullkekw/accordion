import { useState } from 'react';

import { StateSetter } from './Interfaces';



/** Use provided state or default */
export function useMixedState<T>(
  initialValue: T,
  outerValue?: T,
  outerSetter?: StateSetter<T>
): [T, StateSetter<T>] {
  const [innerValue, setInnerValue] = useState<T>(outerValue ?? initialValue);

  const value = outerValue !== undefined ? outerValue : innerValue;

  const setValue: StateSetter<T> = (v) => {
    if (outerSetter) outerSetter(v);
    else setInnerValue(v);
  };

  return [value, setValue];
}