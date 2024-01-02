import {useParams} from 'react-router-dom'
import allProducts from '../items';
import './SingleProduct.css'
import { Button, Grid } from '@mui/material';
const SingleProduct = () => {
  const {id} = useParams();
  var {title, img, desc, price, type} = id < allProducts.length ? allProducts[id - 1] : {};
  return (
    <div className='single-product'>
      <div className='left'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item></Item>
                <img src={img} alt="" />
            </Grid>
            <Grid item xs={3}>
                <img src={img} alt="" />
            </Grid>
            <Grid item xs={3}>
                <img src={img} alt="" />
            </Grid>
            <Grid item xs={3}>
                <img src={img} alt="" />
            </Grid>
          </Grid>
      </div>
      <div className="right">
        <div className="details">
          <h1>{title}</h1>
         <p>{desc}</p>
         <span>Category: {type}</span> <br /> <br />
         <span>  Rs {price} </span>  <Button variant='contained'>Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct;