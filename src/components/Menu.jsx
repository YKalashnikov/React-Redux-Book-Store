import React from 'react'
import CartPop from '../containers/CartPop.js'
import { Menu, Popup, Label } from'semantic-ui-react'

 const  TopMenu =({totalPrice,count, items, addedCountInCart}) => (
         <Menu>
        <Menu.Item>
        <div className='nameStore'> Book Store ReactJs + Redux </div> 
        {addedCountInCart}
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
           Total: &nbsp; $ &nbsp;<b>{totalPrice}</b>
          </Menu.Item>
          <Popup
          trigger={
          <Menu.Item>
           Cart: &nbsp;
            <Label color={count ? 'teal' : 'grey'}>{count}
            </Label>
          </Menu.Item>
          }
          content ={items.map(book =>
            <CartPop  {...book}
           />)}
         on='click'
         
          />
        </Menu.Menu>
      </Menu>  
   )   
  
  
  export default TopMenu;

