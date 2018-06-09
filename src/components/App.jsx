import React, { Component } from 'react';
import axios from 'axios';
import { Container } from'semantic-ui-react';
import  BookCard  from '../containers/BookCard';
import Menu from '../containers/Menu';
import  Filter  from '../containers/Filter';
import { Card } from 'semantic-ui-react'

class App extends Component {

  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({data})=> {
      setBooks(data);
    }).catch ((error)=> {
      console.log(error)
    })
  }
  render() {
const { books, isLoading } = this.props;
    return (
      <Container>
        <Menu/>
        <Filter/>
        
        <Card.Group itemsPerRow={4}>
        { !isLoading 
        ? 
        <div class="ui active inverted dimmer">
        <div class="ui large text loader">Loading...</div>
        </div>
        : books.map((book, index) => (
           <BookCard id={index} key={index} {...book} />
           ))}
        </Card.Group>
      
        </Container>
    );
  }
}



export default App
