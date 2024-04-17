import { useState,  } from 'react';
import {auth,provider} from'../components/firebaseConfig'
import { signInWithPopup } from 'firebase/auth';

export default function Signin() {
    const [value,setValue] = useState('');
    const signIn = () => {
        signInWithPopup(auth,provider).then((data) => {
            setValue(data)
            console.log(data)
            console.log(value)
        })
    }
  return (
    <div className="justify-between flex flex-col h-screen p-16">
        <p className="text-2xl"><b>Discover</b> meaningful volunteer opportunities near you</p>
    <div className="gap-3 flex flex-col">
        <span>
            <p>sign up with google -</p>
        </span>
        <div className="flex flex-col justify-center items-center">
            <button onClick={signIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-fit shadow border border-blue-900">
                <img src="" alt="" />
                google
            </button>
        </div>
    </div>
    
    </div>
  )
}
