import React, { useState } from 'react';

const Input = () => {
    // const [curInput,setInput] = useState("");
    // const [item,setItems] = useState([]);

    // const setListItem = (event) => {
    //     setInput(event.target.value);
    // };

    // const addItem = () => {
    //     setItems((oldItem) => {
    //         return [...oldItem,curInput];
         
    //     });
    //     setInput("");
    // };

    const[oldList,setList] = useState("");
   const setListItem = (event) => {
    setList(event.target.value);
   };

   const [item,setItem] = useState([]);
   const addItem = () => {
    setItem((olddata)=> {
        return([...olddata,oldList]);
    });
    setList("");
   };

    return( 
    <>
        <div className = "input_field">
            <input type = "text" placeholder = "Add a Item" onChange = {setListItem} value = {oldList} />
            <button onClick = {addItem}> + </button>

                <ol className = "list">

               {
                   item.map((itemVal)=> {
                       return(
                           <li> {itemVal} </li>
                       );
                   })
               }
                    
             {/* {   item.map((itemval) => {
                    return (
                        <li> {itemval} </li>
                    );
                })} */}
                </ol>
            
        </div>
    </>
    );
}

export default Input;