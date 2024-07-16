import { http } from "@/utils";
import type { ChannelRes, ResType } from "./shared";

// 请求频道
export function fetchChannelAPI() {
  return http.request<ResType<ChannelRes>>({
    url: "/channels",
  });
}
