import { Image, InfiniteScroll, List } from "antd-mobile";
// mock数据
// import { users } from "./users";
import { useEffect, useState } from "react";
import type { ListRes } from "@/apis/shared";
import { fetchListAPI } from "@/apis/list";

type Props = {
  channelId: string;
};

const HomeList = (props: Props) => {
  const { channelId } = props;
  // 获取数据
  const [listRes, setListRes] = useState<ListRes>({
    results: [],
    pre_timestamp: "" + new Date().getTime(),
  });
  useEffect(() => {
    const getList = async () => {
      try {
        const res = await fetchListAPI({
          channel_id: channelId,
          timestamp: "" + new Date().getTime(),
        });
        setListRes({
          results: res.data.data.results,
          pre_timestamp: res.data.data.pre_timestamp,
        });
      } catch (error) {
        throw new Error("fetch list error");
      }
    };
    getList();
  }, [channelId]);

  // 开关  标记当前是否还有新数据
  // 上拉加载触发的必要条件：1. hasMore = true  2. 小于threshold
  const [hasMore, setHasMore] = useState(true);
  // 加载下一页的函数
  const loadMore = async () => {
    // 编写核心逻辑
    console.log("上拉加载");
    try {
      const res = await fetchListAPI({
        channel_id: channelId,
        timestamp: listRes.pre_timestamp,
      });
      // 拼接新数据 + 存取下一次请求的时间戳
      setListRes({
        results: [...listRes.results, ...res.data.data.results],
        pre_timestamp: res.data.data.pre_timestamp,
      });
      // 停止监听
      if (res.data.data.results.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      throw new Error("fetch list error");
    }
    // setHasMore(false)
  };

  return (
    <>
      <List>
        {listRes.results.map((item) => (
          <List.Item
            key={item.art_id}
            prefix={
              <Image
                src={item.cover.images?.[0]}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={item.pubdate}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} threshold={10} hasMore={hasMore} />
    </>
  );
};

export default HomeList;
