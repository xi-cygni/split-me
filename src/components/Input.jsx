import React from 'react';

function Input(props) {
    return (
        <div class='formInput'>
            <input class='form-control' 
                   type="text"
                   name={props.name}
                   value={props.value} 
                   placeholder={props.placeholder} 
                   onChange={props.onChange}
                />    
        </div>
    );
}

export default Input;