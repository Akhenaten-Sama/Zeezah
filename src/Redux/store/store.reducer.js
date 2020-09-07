import  StoreActionTypes from './store.types'

const INITIAL_STATE = {
    collections:null,
    errorMessage:undefined,
    isFetching : false
}


export const  storeReducer =(state = INITIAL_STATE, action) => {
   switch (action.type) {
       case StoreActionTypes.FETCH_COLLECTION_START:
           return{
               ...state,
               isFetching: true
           }
           
           case StoreActionTypes.FETCH_COLLECTION_SUCCESS:
               return{
                   ...state,
                   isFetching: false,
                   collections: action.payload

               }
            
               case StoreActionTypes.FETCH_COLLECTION_FAILURE:
                   return{
                    ...state,
                       isFetching: false,
                       errorMessage: action.payload,
                       
                   }
   
       default:
           return state
   }


}