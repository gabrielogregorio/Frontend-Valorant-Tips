/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
  getCookie as getCookieLib,
  getCookies as getCookiesLib,
  setCookie as setCookieLib,
  deleteCookie as deleteCookieLib,
  hasCookie as hasCookieLib,
  OptionsType,
} from 'cookies-next/client';

export type TmpCookiesObj =
  | {
      [key: string]: string;
    }
  | Partial<{
      [key: string]: string;
    }>;

export type CookieValueTypes = string | undefined;

export class ClientCookies {
  static getCookie(key: string, options?: OptionsType): CookieValueTypes {
    return getCookieLib(key, options);
  }

  static getCookies(_options?: OptionsType): TmpCookiesObj | undefined {
    return getCookiesLib(_options);
  }
  static setCookie(key: string, data: any, options?: OptionsType): void {
    return setCookieLib(key, data, options);
  }

  static deleteCookie(key: string, options?: OptionsType): void {
    return deleteCookieLib(key, options);
  }

  static hasCookie(key: string, options?: OptionsType): boolean {
    return hasCookieLib(key, options);
  }
}
