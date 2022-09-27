import React, { useState, useEffect} from 'react'
import Card from './Card'

export default function Home() {

  // let products = [
  // {
  //   title: "React Card 1",
  //   description: "Trying To Make A Simple Cart Using React But W'll Improve It Later",
  //   image: "images/image-1.jpg"
  // },
  // {
  //   title: "React Card 2",
  //   description: "Trying To Make A Simple Cart Using React But W'll Improve It Later",
  //   image: "images/image-1.jpg"
  // },
  // {
  //   title: "React Card 3",
  //   description: "Trying To Make A Simple Cart Using React But W'll Improve It Later",
  //   image: "images/image-1.jpg"
  // }
  // ];

  
  async function getData(resource) {

    let response = await fetch (resource);

    if (response.ok) {
      
      throw new Error("Data Could Not Load Properly");
      
    };
    
    let data = await response.json();

    return data;
    
  };

  
  let useEffect = (() => {
    
    getData("https://dummyjson.com//products/search?q=Laptop").
  
    then((blogs) => {
  
      setPending(false);
        
    }).catch((error) => {
      
      setError();
      
    });
   
  }, setPending);

  let [pending, setPending] = useState(true);

  let [blogs, setBlogs] = useState();

  let [error, setError] = useState();

  return (
    <>
      {/* <Card productsData={products}></Card> */}
      <Card></Card>
    </>
  )
}
