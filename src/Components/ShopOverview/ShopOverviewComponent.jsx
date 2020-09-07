import React from 'react';
import withSpinner from '../withSpinner/with-spinner.component'
import ShopOverview from './ShopOverview'
import   {SelectisCollectionFetching} from '../../Redux/store/store.selector.js'
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux'



const mapStateToProps = createStructuredSelector({
    isloading:SelectisCollectionFetching
})


const ShopOverviewContainer = connect(mapStateToProps)(withSpinner(ShopOverview))
export default ShopOverviewContainer
