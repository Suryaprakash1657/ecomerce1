import { useParams } from "react-router-dom";
import React, {useState} from "react";
import { use } from "react";
import axios from 'axios'
import server from '../server';
import Nav from '../components/nav';
import {IoAddOutline} from "react-icons/io5";
import { RiSubtractFill} from "react-icons/ri";
const ProductDetail=()=>{
    const[product,setProduct]=useState([])
    constv[error,setError]
}


const addToCart=async() => {
    try{
      if (state <= 0) {
        console.log("Select at least 1 quantity before adding to cart.");
        return;
      }
      const res = await axios.post(`${server}/product/addTocart`,{
        userId:email,
        productId:id,
        quantity:state
      })
      console.log(res)
    }catch(e){
    console.log(e)
    }
      }
































return(
    <div>
    <Nav/>
    product details
    <h1 className="text-xl font-bold">{Product.name}</h1>
        <button>Add to Wishlist</button>
        <button>Add to Cart</button>
    </div>
    </div>
)


export default ProductDetail
