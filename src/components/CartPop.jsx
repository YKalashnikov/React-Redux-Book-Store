import React from 'react'
import  { Menu, List, Popup, Button, Image, Icon } from'semantic-ui-react';


const CartPop = ({title, id, image, removeFromCart, price, addedCountInCart, addToCart, count, items, book, addedCount}) =>{
    return(
    <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button  onClick={removeFromCart.bind(this, id)} color='red'>Remove</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title} </List.Content>
      </List.Item>
       <Icon name='dollar'/>
       {price}
       <Icon name='rub'/>
        {addedCount}
      </List>         
)
}
export default CartPop;