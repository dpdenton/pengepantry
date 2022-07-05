import {useEffect, useState} from 'react';

/**
 * pattern to get around mismatch in state between service and client during hydration
 *
 * @param newValue
 * @param defaultValue
 */
export const useDefaultState = <T>(newValue: T, defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue);
  useEffect(() => {
    if (value !== newValue) {
      setValue(newValue);
    }
  }, [newValue]);
  return value;
};
