// hooks/useVariables.js

import { useMemo } from 'react';

export const useVariables = (text) => {
  return useMemo(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g; // {{a9}}
    const matches = [...text.matchAll(regex)];
    return [...new Set(matches.map(m => m[1]))];
  }, [text]);
};