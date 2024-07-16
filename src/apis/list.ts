import { http } from "@/utils";
import type { ChannelRes, ListRes, ResParams, ResType } from "./shared";

// 请求频道
export function fetchChannelAPI() {
  return http.request<ResType<ChannelRes>>({
    url: "/channels",
  });
}

// 请求文章列表
export function fetchListAPI(params: ResParams) {
  return http.request<ResType<ListRes>>({
    url: '/articles',
    params
  })
}
