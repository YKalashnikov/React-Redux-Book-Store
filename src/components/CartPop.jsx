import React from 'react'
import  { List, Image, Rating } from'semantic-ui-react';


const CartPop = ({title, id, image, removeFromCart, price, addedCountInCart, addToCart, count, items, book, addedCount, rating, countRating, totalPrice}) =>{
    return(
    <List  divided verticalAlign='middle'   >
    <List.Item>
      <Image avatar src={image} />
      <br></br>
      <List.Content floated='right' style={{'font-size':12}}><b>{title}</b> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</List.Content>
      <List.Content>
      <br></br> <br></br>
      <div class="ui compact menu">
  <a class="item">
    <i class="icon dollar"></i> {price}
    <div class="floating ui blue label">{addedCount}&nbsp;&nbsp;&nbsp;{addedCount >1 ? 'Items' : 'Item'}</div>
  </a> 
  <a class='item'>
    <i class='icon rating'></i><Rating icon="star" rating={rating}  maxRating={5} /> &nbsp;&nbsp;({countRating})
    </a>
  </div>
  </List.Content>
  </List.Item>
  <List.Content floated='right'><br></br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
  <div onClick={removeFromCart.bind(this, id)}  class="ui animated button red" tabindex="8">
  <div  class="visible content">Remove</div>
  <div class="hidden content">
    <i class="angle double right icon" ></i>
    <i class="trash alternate outline icon"></i>
  </div>
</div>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <hr></hr>
      </List.Content>
      
    
  </List> 
 

    )
  }    



export default CartPop;




