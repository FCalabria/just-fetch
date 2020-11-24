declare module 'just-fetch' {
  interface JustFetch {
    get(url: string, options?: RequestInit): Promise<any>;
    head(url: string, options?: RequestInit): Promise<any>;
    post(url: string, data: any, options?: RequestInit): Promise<any>;
    put(url: string, data: any, options?: RequestInit): Promise<any>;
    delete(url: string, options?: RequestInit): Promise<any>;
    options(url: string, options?: RequestInit): Promise<any>;
  }

  const f: JustFetch;
  export default f;
}
