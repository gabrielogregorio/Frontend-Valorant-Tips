/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosResponse, CancelTokenSource, InternalAxiosRequestConfig } from 'axios';

export interface HttpClientResponseInterface<T> {
  data: T;
}

export type CustomHeaderValue = string | string[] | number | boolean | null;

interface CustomHeaders {
  [key: string]: CustomHeaderValue;
}

export interface CustomAxiosRequestConfigInterface {
  headers?: CustomHeaders;
}

export class HttpClient {
  private client: AxiosInstance;

  private cancelTokens: CancelTokenSource[];

  constructor(apiBaseUrl: string) {
    this.client = axios.create({
      baseURL: apiBaseUrl,
      timeout: 0,
    });

    this.cancelTokens = [];
  }

  private createCancelToken<T extends CustomAxiosRequestConfigInterface | undefined>(config: T): T {
    const source = axios.CancelToken.source();
    this.cancelTokens.push(source);

    return { ...config, cancelToken: source.token };
  }

  public async middlewareResponse(
    onFulfilled?:
      | ((value: AxiosResponse<any, any>) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>)
      | null
      | undefined,
    onRejected?: (error: any) => any,
  ): Promise<void> {
    this.client.interceptors.response.use(onFulfilled, onRejected);
  }

  public async middlewareRequest(
    onFulfilled?:
      | ((
          value: InternalAxiosRequestConfig<any>,
        ) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>)
      | null
      | undefined,
  ): Promise<void> {
    this.client.interceptors.request.use(onFulfilled);
  }

  public cancelAllRequests(): void {
    this.cancelTokens.forEach((source) => {
      source.cancel('Request canceled by ui');
    });

    this.cancelTokens = [];
  }

  public async get<T = unknown>(
    url: string,
    config?: CustomAxiosRequestConfigInterface | undefined,
  ): Promise<HttpClientResponseInterface<T>> {
    return this.client.get(url, this.createCancelToken(config));
  }

  public async delete<T = unknown>(
    url: string,
    config?: CustomAxiosRequestConfigInterface | undefined,
  ): Promise<HttpClientResponseInterface<T>> {
    return this.client.delete(url, this.createCancelToken(config));
  }

  public async post<T = unknown>(
    url: string,
    data?: any,
    config?: CustomAxiosRequestConfigInterface | undefined,
  ): Promise<HttpClientResponseInterface<T>> {
    return this.client.post(url, data, this.createCancelToken(config));
  }

  public async put<T = unknown>(
    url: string,
    data?: any,
    config?: CustomAxiosRequestConfigInterface | undefined,
  ): Promise<HttpClientResponseInterface<T>> {
    return this.client.put(url, data, this.createCancelToken(config));
  }

  public async patch<T = unknown>(
    url: string,
    data?: any,
    config?: CustomAxiosRequestConfigInterface | undefined,
  ): Promise<HttpClientResponseInterface<T>> {
    return this.client.patch(url, data, this.createCancelToken(config));
  }
}
