import React from 'react'
import { useNavigate } from 'react-router-dom';


const Error = () => {

    const history = useNavigate();
    return (
        <>
            <div className='conatainer'>
                <div className="error d-flex flex-coloumn justify-content-lg-center align-items-center" >
                    <image src="./public/error.png" alt="error" className='erroring' />
                    <h4>404 ERROR ! Page-Not-found </h4>
                   
                </div>
                <h5 className='text-center'> <button className='btn btn-primary' onClick={() => history("/")}>Redirect to Login-Page</button></h5>
            </div>

        </>
    )
}

export default Error