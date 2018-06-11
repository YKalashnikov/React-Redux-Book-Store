import React from 'react'
import { Card, Icon, Image, Button, Rating, Grid, Label } from 'semantic-ui-react'

    const BookCard = book =>{
        const {title, authors, price, image, addToCart, addedCount, pages, categories, shipping, rating, countRating} = book;
        return(
        <Card >
         
    <Image src={image} />
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
   
    <Card.Content extra>
    <Grid divided>
        <Grid.Row stretched>
        <Grid.Column width={addedCount && 12}>
        
            <Button
              onClick={addToCart.bind(this, book)}
              content="Add in the cart"
              color={addedCount ? 'green' : 'green'}
              basic={!!addedCount}
              fluid
            />
          </Grid.Column>
          {addedCount > 0 && ( 
           <Grid.Column width={4}>
              <Label color="green"><h3>{addedCount}</h3></Label>
            </Grid.Column>
          )}
        </Grid.Row>
        
      </Grid>
      </Card.Content>
      <div>
      
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Rating icon="star" rating={rating}  maxRating={5} />&nbsp;&nbsp;({countRating})&nbsp;&nbsp;&nbsp;
        <b><a>customer reviews</a></b>
        
      </div>
  
    </Card>
    
     
      );  
    };
    
export default BookCard;