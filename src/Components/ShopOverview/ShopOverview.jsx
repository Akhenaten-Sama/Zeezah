import React from 'react'
import {connect} from 'react-redux'
import  {shopSelectorForObjects} from '../../Redux/store/store.selector'
import {createStructuredSelector} from 'reselect'
import './shopDisplayOverview.scss'
import ShopDisplay from '../Shop Display/shopDisplay'

const ShopOverview = ({collections})=> {
    


    return(
        <div>
        { collections.map(({id, ...otherCollectionProps} )=> (
             <ShopDisplay key = {id} {...otherCollectionProps}/>
         ))
        }
         </div>
        
        )
}

const mapStateToProps = createStructuredSelector({
    collections:shopSelectorForObjects
 })
 export default connect(mapStateToProps)(ShopOverview)