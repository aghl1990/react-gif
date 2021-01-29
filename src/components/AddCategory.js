import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setcategories}) => {

    // const handledAdd = () => {
    //     // setcategories( ['Hunter X',...categories]);
    //     // setcategories( [...categories,'Hunter X']);
    //     setcategories(cats =>[...categories,'Hunter X']);
    // }

    const handledInputChange = (e)=>{
        setinputValue(e.target.value);
    }

    const habdledSubmit =(e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setcategories(cats =>[inputValue,...cats]);
            setinputValue('');
        }}

    const [inputValue, setinputValue] = useState('')

    return (
        <form onSubmit={habdledSubmit}>
          {/* <h1>{inputValue}</h1> */}
          {/* <h2>Add Category</h2> */}
          <input 
            type="text"
            value={inputValue}
            onChange={
                handledInputChange
            }

          /> 
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}
