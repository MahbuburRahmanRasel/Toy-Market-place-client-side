import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import app from '../../Firebase/firebase.config';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [user, setUser] = useState(null);
  const {googleProvider} = useContext(AuthContext)
  const auth = getAuth(app);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/';

  //google signin 
  const handleGoogleSignIn = () => {

    signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error);
        })
}
    return (
        <div>
            <img onClick={handleGoogleSignIn}   src="https://i.ibb.co/BNpZdWP/pl216rvkx1xcg65i6yb0.webp" alt=""  className="cursor-pointer"/>
        </div>
    );
};

export default SocialLogin;