import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchCollectionStartAsync} from '../../Redux/store/store.actions'
import ShopOverviewContainer from '../../Components/ShopOverview/ShopOverviewComponent';



const ShopPage = ({fetchCollectionStartAsync, match})=> {
    useEffect(() => {
        fetchCollectionStartAsync()
        var blocks = document.getElementsByClassName("collection-item")
var container= document.getElementsByClassName("items")





        
    }, [])

   return ( <div className="shop-page">
				<Route exact path={`${match.path}`} component={ShopOverviewContainer}/>
				
			</div>)
}


const mapdispatchToProps =(dispatch) => ({
    fetchCollectionStartAsync: ()=> dispatch(fetchCollectionStartAsync())
  })

export default connect(null,mapdispatchToProps)(ShopPage)