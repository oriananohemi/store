export const getProducts = () => {
    const API_URL = 'https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json'
    return fetch(API_URL)
    .then(res => res.json())
    .then((result) => {
            return result
        },
        (error) => {
            console.log(error)
        }
    )
}