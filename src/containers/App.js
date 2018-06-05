import { connect } from 'react-redux';
import * as booksActions from '../actions/books';
import { bindActionCreators} from 'redux';
import App from '../components/App'
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy) =>{
   switch(filterBy) {
    case 'all':
       return books;
    case 'price_hight':
       return orderBy(books, 'price', 'desc');
    case 'price_low':
        return orderBy(books,'price', 'ads' )
    case 'author':
    return orderBy(books, 'authors', 'ads')      
       default: 
       return books;
       
   }
};
const filterBooks = (books, searchQuery) =>
 books.filter(o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0 ||
      o.authors.toString().toLowerCase().indexOf( searchQuery.toLowerCase()) >=0,
);

const searchBooks = (books, filterBy, searchQuery)=> {
    return sortBy(filterBooks(books, searchQuery), filterBy)
}
const mapStateToProps = ({ books, filter })=>({
     books:
     books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
     isLoading:books.isLoading
  });
  const mapDispatchToProps = dispatch=> ({
      ...bindActionCreators(booksActions, dispatch),

  });
  
  export default connect(mapStateToProps, mapDispatchToProps) (App);