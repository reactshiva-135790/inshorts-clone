import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavInshort from "./components/NavInshort";
import NewsContent from "./components/NewsContent/NewsContent";

function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("general");

  console.log(process.env);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=c0fa148ceacb4b479c502d91c6e15f14&pageSize=${loadMore}&category=${category}`
      );
      // console.log(news);
      setNewsArray(news.data.articles);
      console.log(news.data.articles);
      setNewsResults(news.data.totalResults);
      console.log(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, loadMore, category]);

  return (
    <div className="App" id="#home">
      <NavInshort setCategory={setCategory} />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
