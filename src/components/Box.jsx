import { Button } from '@mui/material';
import {Link} from 'react-router-dom'
import './Box.css'
const Box = ({id, img, title, price, desc, type}) => {
  return (
    <div className="product">
        <Link to={`/singleProduct/${id}`} ><div className="image">
          <img src={img} alt="product-img" />
        </div> </Link>
        <div className="detail">
          <div className="namePrice">
            <h4>{title.toUpperCase()}</h4> Rs {price}
            <p>{desc}</p> 
          </div>
          <Button style={{backgroundColor: '#2B2730'}} variant="contained">ADD TO CART</Button>
          
        </div>
    </div>

  )
}

export default Box