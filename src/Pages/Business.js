import React, { useEffect } from 'react'
import { useState } from 'react'
import { CustomConnection } from '../utils/Connection';
import NewsCard from '../Components/NewsCard';

const Business = () => {

    const [category,setCategory] = useState('business');
    const [articles,setArticles] = useState([]);


    useEffect(
      ()=>{
        CustomConnection(setArticles,category);
      },[]
    )
    console.log(articles)
  

  return (
    <section className='py-4 '>
        <div className="container">
            <h2 className='text-dark text-center my-4 mb-5'>Latest <span className='c-news bg-danger text-light'>News</span></h2>

            <div className='row g-4'>
                {
                    articles.map(
                        (news)=>{
                            return(
                            <div className=' col-lg-3 col-md-4'>
                                <NewsCard
                                    title={news.title}
                                    description={news.description}
                                    url={news.url}
                                    src={news.urlToImage}
                                />
                            </div>
                            )
                        }
                    )
                }
            </div>

            
        </div>
    </section>
  )
}

export default Business
