import './news.css'
/*import React, { Component } from 'react';*/
const NewsConstructor =(props) => {
    return (
        <div className="postOfNews">
            <header><h3>{props.header}</h3></header>
            <div>{props.postText}</div>
        </div>
    )
}
const News = (props) =>{
    
    return (
        <div className="contentNews">
           <h1>Новости</h1>
          {props.news.map((e) => <NewsConstructor key ={e.id} header ={e.newsHeading} postText ={e.newsText}/>)}
        </div>
    )
}
 
export default News;