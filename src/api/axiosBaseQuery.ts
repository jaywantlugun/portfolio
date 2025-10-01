import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import apiClient from "./apiClient";

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      baseUrl?: string; // allow overriding backend
      headers?: Record<string, string>; // custom headers
    },
    unknown,
    { status?: number; data?: string | object }
  > =>
  async ({ url, method = "get", data, params, baseUrl, headers }) => {
    try {
      const result = await apiClient.request({
        url,
        method,
        data,
        params,
        baseURL: baseUrl || apiClient.defaults.baseURL, // override if provided
        headers,
      });

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
