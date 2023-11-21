const API_KEY = import.meta.env.VITE_API_KEY;
const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(({ id, title, images }) => {
        return {
            id: id,
            title: title,
            url: images?.downsized_medium.url,
        };
    });
};

export default getGifs;