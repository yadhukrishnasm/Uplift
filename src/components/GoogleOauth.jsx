import { useState,  } from 'react';
import {auth,provider} from'./firebaseConfig'
import { signInWithPopup } from 'firebase/auth';

function GoogleSignIn() {
    const [value,setValue] = useState('');
    const signIn = () => {
        signInWithPopup(auth,provider).then((data) => {
            setValue(data)
            console.log(data)
            console.log(value)
        })
    }

    return (
        <button onClick={signIn}>Sign In</button>
    );
}

export default GoogleSignIn;