import {instance} from "./baseInstance";

export const giphyAPI = {
    getGiphy(getModel: getModelType) {
        return instance.get('trending', getModel)
    }
}

export type getModelType = {
    params: {
        api_key: string
        // q: string
        limit?: number
        offset?: number
        rating?: string
        // lang?: string
        random_id?: string
        bundle?: string

    }
}
