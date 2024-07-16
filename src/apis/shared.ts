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


export type ListItem = {
    art_id: string
    title: string
    aut_id: number
    comm_count: string
    is_top: number
    pubdate:string
    cover: {
        type: number
        images: string[]
    }
}

export type ListRes = {
    results: ListItem[]
    pre_timestamp: string
}

export type ResParams={
    channel_id: string
    timestamp: string
}

