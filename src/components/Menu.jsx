import React from 'react'
import CartPop from '../containers/CartPop.js'
import { Menu, Popup, Label } from'semantic-ui-react'

 const  TopMenu =({totalPrice,count, items, addedCountInCart}) => (
         <Menu>
        <Menu.Item>
       
        <div class="ui animated fade button ">
  <div class="visible content ">Questions?</div>
  <div class="hidden content">
  <a href="mailto:uk2709@gmail.com"><i class="envelope outline icon"></i>Email </a>
  </div>
          </div> 
        {addedCountInCart}
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
           Total: &nbsp; $ &nbsp;<b>{totalPrice}</b>
          </Menu.Item>
          <Popup  className="cart-popup"
          trigger={
          <Menu.Item>
           Cart: &nbsp;
            <Label color={count ? 'teal' : 'grey'}>{count}
            </Label>
          </Menu.Item>
          }
          on='click' 
          content ={items.map(book =>
            <CartPop  {...book}/>)}
        
         
          />
        </Menu.Menu>
      </Menu>  
   )   
  
  
  export default TopMenu;

