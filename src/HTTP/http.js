import { instance, cancelToken} from '../axios/axios'
import axios from '../axios/axios'

export const  axiosFetch = async (req, method, values) => {
  let result = null
  let token = cancelToken.source().token
  try {
    result = await instance({
      method: method,
      url: req,
      data: { ...values },
      cancelToken : token
    });
    return { data: result.data }
  } catch (error) {
    if(axios.isCancel(error)){
      }
    return { error: error.message }
  }
}






