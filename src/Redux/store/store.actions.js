import StoreActionTypes from './store.types'
import {firestore, convertColleectionSnapShotToMap} from '../../Firebase/Firebase.utils'


export const fetchCollectionStart = ()=>({
    type:StoreActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = (collections) => ({
    type:StoreActionTypes.FETCH_COLLECTION_SUCCESS,
    payload:collections
})
export const fetchCollectionFailure = (error) => ({
    type:StoreActionTypes.FETCH_COLLECTION_FAILURE,
    payload:error
})

export const fetchCollectionStartAsync = ()=>  {
      return dispatch => {
           const userRef = firestore.collection('Collections')
           dispatch(fetchCollectionStart())
           userRef.get().then(snapshot =>{
            const collections = convertColleectionSnapShotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collections))
           }).catch(error => dispatch(fetchCollectionFailure(error.Message)))

    }
}