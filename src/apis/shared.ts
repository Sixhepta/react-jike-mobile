// 1. 定义泛型
export type ResType<T> = {
    message: string;
    data: T;
};
//  2. 定义具体的接口类型
export type ChannelItem = {
    id: number;
    name: string;
};
export type ChannelRes = {
    channels: ChannelItem[];
};


