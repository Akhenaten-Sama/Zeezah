import React, {useEffect, useState, useMemo} from 'react'

function Newdoc() {
const [state, setState] = useState({items:[],
title:""})

const handleChange=(e)=>{
    e.preventDefault()
    const {name, value} = e.target;
    if(name==='title'){
        setState({
            ...state,
           [name]:value
            
        })
    }

}


console.log(state)

    return (
        <div>
           <input type='text' name="title" onChange={handleChange} value={state.title}label="title"/> 
           <input type='number' name="id" onChange={handleChange} value={state.items[0].id}label="id"/>
           <input type='text' name="name" onChange={handleChange}  value={state.items[0].name}label="name"/>
           <input type='text' name="imgUrl" onChange={handleChange}  value={state.items[0].imgUrl}label="imgUrl"/>
           <input type='number' name="price" onChange={handleChange}  value={state.items[0].price}label="price"/>
          
        </div>
    )
}

export default Newdoc
