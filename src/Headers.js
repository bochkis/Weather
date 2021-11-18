import React, {useState} from 'react'

function Headers(  ){
    const [value, setValue] = useState('')

    function submitHandler(event){
        event.preventDefault()

        console.log(value)
        
    }
    return(
        <div> 
        <form onSubmit={submitHandler} className = 'foungt'>
            <input style = {{width: '450px' }} value={value} onChange={event => setValue(event.target.value)}/>
            <button type='submit'> пошук </button>
        </form>
        <div> Погода в  </div>
        </div>
    );
}

export default Headers;