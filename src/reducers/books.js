const initialState= {
    isLoading: false,
    items:null,
 
  
};

export default (state=initialState, action)=> {
switch(action.type){
    case 'SET_BOOKS':
    return {
        ...state,
        items: action.payload,
        isLoading: true
    };
    case 'SET_IS_READY':
    return {
        ...state,
        isLoading: action.payload
    };
    default:
       return state;

 }
};