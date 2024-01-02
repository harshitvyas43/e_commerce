import Box from "./Box"
import './Product.css'
import allProducts from '../items'
import { Button } from "@mui/material";
import {useState } from "react";
const Products = () => {
  const [cat, setCat] = useState('all');
  const getItems = (cat) => {
    if(cat == 'all') return allProducts;
    var arr = [];
    for(let i = 0; i < allProducts.length; i++){
      if(allProducts[i].type == cat) arr.push(allProducts[i]);
    }
    return arr;
  }
  const items = getItems(cat);
  const handelBtnClick = (btn) => {
    setCat(btn);
  }
  return (
    <>
    <div className="filter-box">
      <Button onClick={() => handelBtnClick('all')} variant={cat === 'all' ? "contained" : "outlined"} color="success">ALL</Button>
      <Button onClick={() => handelBtnClick('shoes')} variant={cat === 'shoes' ? "contained" : "outlined"} color="success">Shoes</Button>
      <Button onClick={() => handelBtnClick('jacket')} variant={cat === 'jacket' ? "contained" : "outlined"} color="success">Jacket</Button>
      <Button onClick={() => handelBtnClick('dress')} variant={cat === 'dress' ? "contained" : "outlined"} color="success">Dress</Button>
    </div>
    <div className="products">
      {items.map(({id, img, title, price, desc}) => {
        return( <Box id={id} img={img} title={title} price={price} desc={desc} key={id}/>)
      })}
    </div>
    </>
    
  )
}

export default Products