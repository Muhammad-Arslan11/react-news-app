// import from react
import React from 'react'

// other import
import loading from './loading.gif'


// spinner function
const Spinner = ()=> {
        return (
            <div className="text-center">
                <img className="my-3" src={loading} alt="loading" />
            </div>
        )
}

export default Spinner