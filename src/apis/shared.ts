// 1. 定义泛型
export type ResType<T> = {
    message: string;
    data: T;
};

// list
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


// detial
export type DetailDataType = {
    art_id: string
    title: string
    pubdate: string
    aut_id: string
    content: string
    aut_name: string
    aut_photo: string
    is_followed: boolean
    is_collected: boolean
    attitude: number
    comm_count: number
    read_count: number
    like_count: number
}