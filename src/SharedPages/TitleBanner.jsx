import React from 'react';

const TitleBanner = (props) => {
    return (
        <div>
             <div className='h-40 bg-slate-100 bg-contain bg-no-repeat flex items-center justify-center my-bg-2' 	>;

             

            {/* <img src="../../assets/All Images/Vector-1.png" alt="" /> */}
            <h1 className='text-center font-bold text-4xl '>{props.text}</h1>
            {/* <img className='w-56 bg-gradient-to-tr' src="../../assets/All Images/Vector.png" alt="" /> */}
        </div>
        </div>
    );
};

export default TitleBanner;