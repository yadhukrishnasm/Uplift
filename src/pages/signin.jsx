import { useState,  } from 'react';
import {auth,provider} from'../components/firebaseConfig'
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
export default function Signin() {
    const navigate = useNavigate();
    const signIn = async () => {
        signInWithPopup(auth,provider)
        .then((data) => {
            const userInfo = {name : data.user.displayName,
            email : data.user.email,
            uid : data.user.uid,
            }
            const userInfoJSON = JSON.stringify(userInfo);
            console.log(userInfo)
            sessionStorage.setItem('userinfo', userInfoJSON);
            navigate('/skills');
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
