import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const NewsFeed = () => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {

        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://crypto-news-live.p.rapidapi.com/news/coindesk',
            headers: {
                'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setArticles(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    const firstArticles = articles?.slice(0,5)

    return (
        <div className='news-feed'>

        <h2> NewsFeed </h2>
            {firstArticles?.map( article => (
            <div key='article'>
           <a href={article.url} target='_blank' rel='noreferrer'> <p> {article.title} </p> </a>
            </div>
            ))}
        </div>
    );
}

export default NewsFeed;