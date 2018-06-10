import React from 'react'
import  { Menu, List, Popup, Button, Image, Icon, Label, Rating } from'semantic-ui-react';


const CartPop = ({title, id, image, removeFromCart, price, addedCountInCart, addToCart, count, items, book, addedCount, rating}) =>{
    return(
    <List  divided verticalAlign='middle'>
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
    <i class='icon rating'></i><Rating icon="star" rating={rating}  maxRating={5} />
    </a>
  </div>
  </List.Content>
  </List.Item>
  <List.Content floated='right'><br></br> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        <Button  onClick={removeFromCart.bind(this, id)} color='blue' style={{'font-size':12}}>Buy</Button>
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        <Button  onClick={removeFromCart.bind(this, id)} color='red' style={{'font-size':12}}>Remove</Button>  
        <hr></hr>
      </List.Content>
        </List>         
)
}
export default CartPop;