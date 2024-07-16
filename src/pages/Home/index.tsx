import { Tabs } from "antd-mobile";
import "./style.css";
import { useEffect, useState } from "react";
import type { ChannelItem } from "@/apis/shared";
import { fetchChannelAPI } from "@/apis/list";

const Home = () => {
  const [channels, setChannels] = useState<ChannelItem[]>([]);
  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannelAPI();
        setChannels(res.data.data.channels);
      } catch (error) {
        throw new Error("fetch channel error");
      }
    };
    getChannels();
  }, []);
  return (
    <div>
      <div className="tabContainer">
        <Tabs>
          {channels.map((item) => (
            <Tabs.Tab title={item.name} key={item.id}>
              {item.name}
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
