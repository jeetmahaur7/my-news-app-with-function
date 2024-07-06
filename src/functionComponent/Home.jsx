import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItems";

export default function Home({ language, q }) {
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResuslts] = useState(0);
  let [page, setPage] = useState(1);
  let size = 18;

  async function getAPIData() {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${q}&pageSize=${size}&sortBy=publishedAt&language=${language}&apiKey=b8c041e7325d4e228cb14059f841a136`
    );
    response = await response.json();
    if (response.articles) {
      setArticles(response.articles.filter((x) => x.title !== "[removed]"));
      setTotalResuslts(response.totalResults);
    }
  }

  let fetchData = async () => {
    setPage(page + 1);
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=${size}&sortBy=publishedAt&language=${language}&apiKey=b8c041e7325d4e228cb14059f841a136`
    );
    response = await response.json();
    if (response.articles) {
      setArticles(response.articles.filter((x) => x.title !== "[removed]"));
    }
  };

  useEffect(() => {
    getAPIData();
  }, [language, q]);

  return (
    <>
      <div className="container-fluid my-3">
        <h5 className="background text-center p-2">{q} News Article</h5>

        <InfiniteScroll
          className="text"
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={
            <div className="my-3 text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            {articles.map((item, index) => {
              return (
                <NewsItem
                  key={index}
                  source={item.source.name}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage}
                  date={item.publishedAt}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
