import React, {useState} from 'react';
import Input from './Input';

function Form() {

    const [name, setName] = useState('');
    const [inputList, setInputList] = useState([{ name: '' }, { name: ''}]);

    const handleInputChange = (e, index) => {
        const {name, value} = e.target; 
        const nameList = [...inputList];
        nameList[index][name] = value;
        setInputList(nameList);
    }

    const handleRemoveClick = index => {
        const nameList = [...inputList];
        nameList.splice(index, 1);
        setInputList(nameList);
      };


    const handleAddClick = () => {
        setInputList([...inputList, { name: '' }]);
    };

    return (
        <div>
            <form action='' method='get'>
                <div class='form-group'>
                {inputList.map((user, index) => {
                    return (
                        <div class='input'>
                            {index != inputList.length && 
                            <Input 
                                value = {user.name}
                                name={'name'}
                                placeholder={'Enter the name'} 
                                onChange={(e) => handleInputChange(e, index)} 
                            />}

                            {inputList.length !== 1 && <button 
                                                            class='btn btn-primary btn-relative'
                                                            type='submit'
                                                            onClick={() => handleRemoveClick(index)}>
                                                                <img src='imgs/minus.png' />
                                                            </button>}

                            {inputList.length - 1 === index && <button 
                                                                    class='btn btn-primary btn-relative'
                                                                    type='submit'

                                                                    onClick={() => handleAddClick(index)}>
                                                                        <img src='imgs/plus-symbol-button.png' />
                                                                    </button>}
                        </div>
                    );
                })}
                </div>

                <button class='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;