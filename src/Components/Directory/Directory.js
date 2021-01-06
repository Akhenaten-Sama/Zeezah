import React from 'react'
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../Redux/Directory/directorySelector'
import {createStructuredSelector} from 'reselect'
import './directory.scss'
import Newdoc from '../Admin/newdoc';

import MenuItem from '../Menu-Item/Menu';

const Directory = ({sections}) => {
    
    
        return(
            <div className="directory-menu">
             {sections.map(({id, ...otherSectionProps}) =>(
                 <MenuItem  key={id} {...otherSectionProps}/>
             ))}
               <Newdoc />

            </div>
        )
    
    
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})




export default connect(mapStateToProps)(Directory)