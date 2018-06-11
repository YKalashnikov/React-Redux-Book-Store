import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => {
  return(
    <Menu secondary>
    <Menu.Item 
    active={filterBy === 'all'} 
    onClick={setFilter.bind(this, 'all')}>
    All
    </Menu.Item>

    <Menu.Item 
     active={filterBy === 'price_hight'} 
     onClick={setFilter.bind(this, 'price_hight')} >Price Hight
     </Menu.Item>

    <Menu.Item 
     active={filterBy === 'price_low'}
     onClick={setFilter.bind(this, 'price_low')} >Price Low
    </Menu.Item>

    <Menu.Item 
     active={filterBy === 'author'}
     onClick={setFilter.bind(this, 'author')} >Author
     </Menu.Item>

     <Menu.Item 
     active={filterBy === 'rating' }
     onClick={setFilter.bind(this, 'rating')}>Rating
     </Menu.Item>&nbsp;&nbsp;

     <Input icon='search' onChange={e => setSearchQuery(e.target.value)} value={searchQuery} placeholder='Search for a book...'></Input>
    <Menu.Menu position='right'>
    </Menu.Menu>
  </Menu>
    ) }

export default Filter;

