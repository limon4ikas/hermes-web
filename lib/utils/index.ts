import queryString from 'query-string';

export const stringifyQuery = (query: any) => queryString.stringify(query);
export const parseQuery = <T extends Record<string, unknown>>(
  query: string
): T => queryString.parse(query) as T;

export const isObjectEmpty = (obj: Record<string, unknown>) => {
  return Object.keys(obj).length === 0;
};
