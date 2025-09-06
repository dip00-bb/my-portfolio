import React from 'react';
import Lottie from 'lottie-react';


const LottieAnimation = ({lottieFile}) => {
    return (
        <div>
            <Lottie animationData={lottieFile}/>
        </div>
    );
};

export default LottieAnimation;