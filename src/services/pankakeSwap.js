import axios from 'axios';

//Return the token price
export const tokenPrice = async ({token}) => { 
  try {
    const response = await axios.get(`https://api.pancakeswap.info/api/v2/tokens/${token}`)

    if(!response.data)
      throw new Error({
        code: 'RETURN_TOKEN_PRICE',
        message: response.body
      })

    return response.data
  } catch (error) {
    return error.response.body
  }
}
