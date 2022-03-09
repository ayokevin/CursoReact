





export const getGifs = async (categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (categoria) }&limit=10&api_key=Av9rCQDiho6INKzCUMSb6g0M1LAdhbkw`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img => {
        return{
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });
    return gifs;

}



