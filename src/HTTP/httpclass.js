import { instance, cancelToken } from '../axios/axios'
import axios from '../axios/axios'

export class axiosFetch {
    constructor() {
        this.source = cancelToken.source()
    }
    abortreq = () => {
        this.source.cancel()
    }
    sendReq = async (req, method, values)=> {
        let result = null
        try {
            result = await instance({
                method: method,
                url: req,
                data: { ...values },
                cancelToken: this.source.token
            });
            return { data: result.data }
        } catch (error) {
            if (axios.isCancel(error)) {
            }
            return { error: error.message }
        }
    }


}




