import React from 'react'
import { Menu, List, Popup, Button, Image, Icon } from'semantic-ui-react'
import '../menu.css'



const CartPop = ({title, id, image, removeFromCart, price}) =>(
    <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color='red'>Remove</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title} </List.Content>
      </List.Item>
       <Icon name='dollar'/>
       {price}
      </List>
      
     
)

const  TopMenu =({totalPrice, count, items}) => (
         <Menu>
        <Menu.Item  onClick={this.handleItemClick}>
        <div className='nameStore'> Book Store ReactJs + Redux</div>
       
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
           Total: &nbsp; $ &nbsp;<b>{totalPrice}</b>
          </Menu.Item>

          <Popup
          trigger={
          <Menu.Item onClick={this.handleItemClick}>
           Cart: &nbsp; <b>{count}</b>
          </Menu.Item>
          }
          content ={items.map(book => <CartPop {...book}/>)}
          on='click'
          hideOnScroll
          />
        </Menu.Menu>
      </Menu>     
  )
  export default TopMenu;
