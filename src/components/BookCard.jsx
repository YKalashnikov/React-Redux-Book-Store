import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'




    const BookCard = book =>{
        const {title, authors, price, image, addToCart, addedCount, pages, categories, shipping} = book;
        return(
        <Card>
    <Image src={image}/>
    <Card.Content>
      <Card.Header >
        {title}
        
      </Card.Header>
      <Card.Meta>
          {authors}
      </Card.Meta>
     
    </Card.Content>
    <Card.Content extra >
      <a>
        <Icon name='dollar' />
        {price}
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a> 
      <span data-tooltip={shipping} data-position="top center">
      Free &nbsp;
        <Icon name='shipping fast' />
        </span>
      </a>
      <span class="right floated">
      <span data-tooltip={categories} data-position="top center">
      <a>
        <Icon name='pencil alternate' />
        {pages}
      </a>
      </span>
     </span>
    </Card.Content>
    <Button  onClick={addToCart.bind(this, book)}>
    Add in the cart {addedCount > 0 && `(${addedCount})`}
    </Button> 
  </Card>
      );  
    };
    
export default BookCard;