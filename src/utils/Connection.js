

export const Connection = (setArticles) => {

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`

    fetch(url)
    .then((response) => response.json())
    .then((data) => setArticles(data.articles));
}

export const CustomConnection = (setArticles,setCategory) => {

     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${setCategory}&apiKey=${process.env.REACT_APP_API_KEY}`

    fetch(url)
    .then((response) => response.json())
    .then((data) => setArticles(data.articles));
}