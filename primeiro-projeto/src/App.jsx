import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
// import { Counter } from "./components/Counter/Counter";
import { Audio } from 'react-loader-spinner';


import "./styles/App.css";
import axios from "axios";

//componente em classe é uma classe que herda a classe Component do React, 
// e retorna HTML dentro do método render.

//Componente funcional é uma função que retorna HTML

function App () {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews(){
      const response = await axios.get("https://api.spaceflightnewsapi.net/v3/articles");
      const newsData = response.data;

      setNews(newsData);
    }

    loadNews();
    
  }, []);
  // Método responsável por renderizar o conteúdo HTML do nosso componente
    return (
      //fragment
      <> 
        {/* <Counter/> */}
        <Navbar/> 

        <section id="articles">
          {news.length === 0 ? (
            <div 
              style = {{ 
                height: '400px', 
                width: '100%' , 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Audio
                height="80"
                width="80"
                radius="9"
                color="white"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          ) : (
            news.map((article) => {
              return(
                <Article
                  key = {article.id}
                  title= {article.title}
                  provider= {article.newsSite}
                  description= {article.summary}
                  thumbnail={article.imageUrl}
                />
              )
            }) 
          )}
          
        </section> 
      </>
    )
}

export default App;
