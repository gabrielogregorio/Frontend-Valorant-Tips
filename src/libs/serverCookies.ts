/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import {
  getCookie as getCookieLib,
  getCookies as getCookiesLib,
  setCookie as setCookieLib,
  deleteCookie as deleteCookieLib,
  hasCookie as hasCookieLib,
  OptionsType,
} from 'cookies-next/server';

export type CookieValueTypes = string | undefined;

export type TmpCookiesObj =
  | {
      [key: string]: string;
    }
  | Partial<{
      [key: string]: string;
    }>;

export class ServerCookies {
  static async getCookie(key: string, options?: OptionsType): Promise<CookieValueTypes> {
    return getCookieLib(key, options);
  }

  static async getCookies(options?: OptionsType): Promise<TmpCookiesObj> {
    return getCookiesLib(options);
  }

  static async setCookie(key: string, data: any, options?: OptionsType): Promise<void> {
    return setCookieLib(key, data, options);
  }

  static async deleteCookie(key: string, options?: OptionsType): Promise<void> {
    return deleteCookieLib(key, options);
  }

  static async hasCookie(key: string, options?: OptionsType): Promise<boolean> {
    return hasCookieLib(key, options);
  }
}
