import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './../actions/index';

const Todo = () => {
    const [inputData, setInputData] = useState('')
    const dispatch = useDispatch();
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        {/* <img src={todo} alt="todologo" /> */}
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input onChange={(e) => setInputData(e.target.value)} value={inputData} type="text" placeholder="✍ Add Items..."
                        />
                        <i onClick={() => dispatch(addTodo(inputData))} className="fa fa-plus add-btn" title="Add Item"></i>
                        {/* <i className="far fa-edit add-btn" title="Update Item"</i> */}
                    </div>
                </div>
            </div>


        </>
    );
};

export default Todo;