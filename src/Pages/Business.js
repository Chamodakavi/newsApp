import React, { useEffect } from "react";
import { useState } from "react";
import { CustomConnection } from "../utils/Connection";
import NewsCard from "../Components/NewsCard";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Business = () => {
  const [category, setCategory] = useState("business");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    CustomConnection(setArticles, category);
    setIsLoading(false);
  }, []);

  return (
    <section className="py-4 ">
      <div className="container">
        <h2 className="text-dark text-center my-4 mb-5">
          Latest <span className="c-news bg-danger text-light">News</span>
        </h2>

        <div className="row g-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : articles.length === 0 ? (
            <Backdrop
              sx={(theme) => ({
                color: "#fff",
                zIndex: theme.zIndex.drawer + 1,
              })}
              open
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          ) : (
            articles.map((news,index) => {
              return (
                <div key={index} className=" col-lg-3 col-md-4">
                  <NewsCard
                    title={news.title}
                    description={news.description}
                    url={news.url}
                    src={news.urlToImage}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Business;
