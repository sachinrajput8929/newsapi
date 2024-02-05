import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FetchData = ({cat}) => {
    const[Data,setData] = useState("");

    const fetchData = async ()=>{
        await axios
        .get(
          cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=488f049593be44b79540f6abc0514fb2`
          : `https://newsapi.org/v2/top-headlines?country=in&apiKey=488f049593be44b79540f6abc0514fb2`
      )
        .then((res)=>setData(res.data.articles));
    };
useEffect(() => {
    fetchData();
}, [cat])
//
   


  return (
    <div className='container my-4'>
      <h3 style={{fontFamily: 'YourFontFamily, sans-serif',fontWeight: "700",color: "red"}}>TOP HEADLINES : <span style={{color:"blue"}}>{cat}</span></h3>
      <div className='container d-flex justify-content-center align-items-center flex-column my-3' style={{minHeight:"100vh"}}>
      {
        Data
          ? Data.map((item, index) => (
            <div className='container my-3 p-4' style={{width:"100%",boxShadow:"2px 2px 10px silver",borderRadius:"10px"}}>  
            <h5 className='my-2' style={{fontWeight: "700"}} key={index}>{item.title}</h5>
            <div className='d-flex justify-content-center align-items-center'>
            <img src={item.urlToImage ? item.urlToImage : 'https://static.aer.ca/prd/styles/aer_landing_banner_large/azblob/images/content/Stories/In-the-news-banner.jpg?itok=b9yQ6FZc'} className='img-fluid' alt='not image' style={{width:"90%",height:"300px",objectFit:"cover"}} />
            </div>
            
            <p  style={{fontFamily: 'YourFontFamily, sans-serif',fontWeight: "800"}} className='my-1' key={index}>{item.content}</p>
            <small style={{fontFamily: 'YourFontFamily, sans-serif',fontWeight: "bold"}}>{item.description}</small>
            <Link to={item.url} target='blank'>View-More</Link><br/>
            <small>{item.publishedAt}</small>
            </div>
            ))
          : "Loading..."
      }
    </div>
    </div>
  )
}

export default FetchData
