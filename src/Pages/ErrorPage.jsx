import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='my-bg-1 h-screen flex flex-col items-center'>
            <img src="https://i.ibb.co/DQhqCLf/Error-404-Page-Under-Construction-Concept-Social-Media.png" alt=""  className='w-1/3 mx-auto my-auto '/>
            <Link to='/'><button className=' btn my-btn-3 text-center mb-20'>Back to Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;