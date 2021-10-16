import queryString from 'query-string';

export const stringifyQuery = <T extends Record<string, unknown>>(query: T) =>
  queryString.stringify(query);

export const parseQuery = <T extends Record<string, unknown>>(
  query: string
): T => queryString.parse(query) as T;

export const isObjectEmpty = (obj: Record<string, unknown>) => {
  return Object.keys(obj).length === 0;
};
