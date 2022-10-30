import {AppThunk} from "./store";
import {getModelType, giphyAPI} from "../api/giphy-api";

const initialState = {
    data: [],
    // {
    //     type: "",
    //     id: "",
    //     url: "",
    //     slug: "",
    //     bitly_gif_url: "",
    //     bitly_url: "",
    //     embed_url: "",
    //     username: "",
    //     source: "",
    //     title: "",
    //     rating: "",
    //     content_url: "",
    //     source_tld: "",
    //     source_post_url: "",
    //     is_sticker: 0,
    //     import_datetime: "",
    //     trending_datetime: "",
    //     images: {
    //         original: {
    //             height: "",
    //             width: "",
    //             url: "",
    //             mp4_size: "",
    //             mp4: "",
    //             webp_size: "",
    //             webp: "",
    //             frames: "",
    //             hash: ""
    //         },
    //         downsized: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: ""
    //         },
    //         downsized_large: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: ""
    //         },
    //         downsized_medium: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: ""
    //         },
    //         downsized_small: {
    //             height: "",
    //             width: "",
    //             mp4_size: "",
    //             mp4: ""
    //         },
    //         downsized_still: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: ""
    //         },
    //         fixed_height: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: "",
    //             mp4_size: "",
    //             mp4: "",
    //             webp_size: "",
    //             webp: ""
    //         },
    //         fixed_height_downsampled: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: "",
    //             webp_size: "",
    //             webp: ""
    //         },
    //         fixed_height_small: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: "",
    //             mp4_size: "",
    //             mp4: "",
    //             webp_size: "",
    //             webp: ""
    //         },
    //         fixed_height_small_still: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: ""
    //         },
    //         fixed_height_still: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: ""
    //         },
    //         fixed_width: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: "",
    //             mp4_size: "",
    //             mp4: "",
    //             webp_size: "",
    //             webp: ""
    //         },
    //         fixed_width_downsampled: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: "",
    //             webp_size: "",
    //             webp: ""
    //         },
    //         fixed_width_small: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: "",
    //             mp4_size: "",
    //             mp4: "",
    //             webp_size: "",
    //             webp: ""
    //         },
    //         fixed_width_small_still: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: ""
    //         },
    //         fixed_width_still: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: ""
    //         },
    //         looping: {
    //             mp4_size: "",
    //             mp4: ""
    //         },
    //         original_still: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: ""
    //         },
    //         original_mp4: {
    //             height: "",
    //             width: "",
    //             mp4_size: "",
    //             mp4: ""
    //         },
    //         preview: {
    //             height: "",
    //             width: "",
    //             mp4_size: "",
    //             mp4: ""
    //         },
    //         preview_gif: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: ""
    //         },
    //         preview_webp: {
    //             height: "",
    //             width: "",
    //             size: "",
    //             url: ""
    //         },
    //         // 480w_still: {
    //         //     height: "",
    //         //     width: "",
    //         //     size: "",
    //         //     url: ""
    //         // }
    //     },
    //     analytics_response_payload: "",
    //     analytics: {
    //         onload: {
    //             url: ""
    //         },
    //         onclick: {
    //             url: ""
    //         },
    //         onsent: {
    //             url: ""
    //         }
    //     }
    // }
    pagination: {
        total_count: 37384,
        count: 25,
        offset: 5
    },
    meta: {
        status: 0,
        msg: "",
        response_id: ""
    }
}
type InitialStateType = {
    data: GifItemType[],
    pagination: {
        total_count: number
        count: number
        offset: number
    },
    meta: {
        status: number
        msg: string
        response_id: string
    }
}

type GifItemType = {
    type: string
    id: string
    url: string
    slug: string
    bitly_gif_url: string
    bitly_url: string
    embed_url: string
    username: string
    source: string
    title: string
    rating: string
    content_url: string
    source_tld: string
    source_post_url: string
    is_sticker: number
    import_datetime: string
    trending_datetime: string
    images: {
        original: {
            height: string
            width: string
            url: string
            mp4_size: string
            mp4: string
            webp_size: string
            webp: string
            frames: string
            hash: string
        },
        downsized: {
            height: string
            width: string
            size: string
            url: string
        },
        downsized_large: {
            height: string
            width: string
            size: string
            url: string
        },
        downsized_medium: {
            height: string
            width: string
            size: string
            url: string
        },
        downsized_small: {
            height: string
            width: string
            mp4_size: string
            mp4: string
        },
        downsized_still: {
            height: string
            width: string
            size: string
            url: string
        },
        fixed_height: {
            height: string
            width: string
            size: string
            url: string
            mp4_size: string
            mp4: string
            webp_size: string
            webp: string
        },
        fixed_height_downsampled: {
            height: string
            width: string
            size: string
            url: string
            webp_size: string
            webp: string
        },
        fixed_height_small: {
            height: string
            width: string
            size: string
            url: string
            mp4_size: string
            mp4: string
            webp_size: string
            webp: string
        },
        fixed_height_small_still: {
            height: string
            width: string
            size: string
            url: string
        },
        fixed_height_still: {
            height: string
            width: string
            size: string
            url: string
        },
        fixed_width: {
            height: string
            width: string
            size: string
            url: string
            mp4_size: string
            mp4: string
            webp_size: string
            webp: string
        },
        fixed_width_downsampled: {
            height: string
            width: string
            size: string
            url: string
            webp_size: string
            webp: string
        },
        fixed_width_small: {
            height: string
            width: string
            size: string
            url: string
            mp4_size: string
            mp4: string
            webp_size: string
            webp: string
        },
        fixed_width_small_still: {
            height: string
            width: string
            size: string
            url: string
        },
        fixed_width_still: {
            height: string
            width: string
            size: string
            url: string
        },
        looping: {
            mp4_size: string
            mp4: string
        },
        original_still: {
            height: string
            width: string
            size: string
            url: string
        },
        original_mp4: {
            height: string
            width: string
            mp4_size: string
            mp4: string
        },
        preview: {
            height: string
            width: string
            mp4_size: string
            mp4: string
        },
        preview_gif: {
            height: string
            width: string
            size: string
            url: string
        },
        preview_webp: {
            height: string
            width: string
            size: string
            url: string
        },
        // 480w_still: {
        //     height: "",
        //     width: "",
        //     size: "",
        //     url: ""
        // }
    },
    analytics_response_payload: string
    analytics: {
        onload: {
            url: string
        },
        onclick: {
            url: string
        },
        onsent: {
            url: string
        }
    }
}

type ActionType = GetGifACType
export const giphyReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "GIF/GET-GIPHY":
            return {...state, data: action.gifsData.data}
        default:
            return state
    }
}

export const getGifAC = (gifsData: InitialStateType) => {
    return {type: "GIF/GET-GIPHY", gifsData} as const
}
type GetGifACType = ReturnType<typeof getGifAC>

export const getGifTC = (data: getModelType): AppThunk => async dispatch => {
    try {
       const res = await giphyAPI.getGiphy(data)
        dispatch(getGifAC(res.data))
    } catch (e) {
        console.log(e)
    } finally {

    }
}
