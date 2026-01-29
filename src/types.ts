type Or<T, U> = void extends T ? U : T;

interface _URL extends Or<URL, globalThis.URL> {}

interface _URLSearchParams extends Or<
  URLSearchParams,
  globalThis.URLSearchParams
> {}

export type { _URL as URLLike, _URLSearchParams as URLSearchParamsLike };
