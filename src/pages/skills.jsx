import {auth} from '../components/firebaseConfig'
import { useState } from 'react'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
let skills = [];
export default function Skills() {
  const db = getFirestore();
  
  const subscribed = auth.auth.onAuthStateChanged((user) => {
    if (user) {
      // Extract user data if signed in
      console.log(user)
    } else {
      console.log("Not logged In")
    }
  });
subscribed();

  const SaveUserData = async () => {
    const savedata = await addDoc(collection(db,'UserData'), {
      name : "",
    })
  }

  return (
    <div className='py-12 flex flex-col h-screen gap-8'>
        <div className="break-words w-3/4 px-8">
            <p>Select your <b>skills</b> to connect with events that need you.</p>
        </div>
        <div className="pl-8 pr-3 gap-2 flex flex-col"> 
            <input type="number" placeholder="Enter PhoneNo." className="box"/>
            <div>
                <span className="text-xs font-bold">Construction & Maintenance</span>
                <div>
                    <Skill value="carpentary"/><Skill value="painting"/><Skill value="plumbing"/><Skill value="electrical work  "/><Skill value="landscaping"/><Skill value="carpentary"/>
                </div>
            </div>

            <div>
                <span className="text-xs font-bold">Cleaning & Organizing</span>
                <div>
                    <Skill value="sorting"/><Skill value="sweeping"/><Skill value="mopping"/><Skill value="trash removal "/><Skill value="washing"/><Skill value="furniture arrangement"/>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <button className='px-4 rounded-full border w-fit h-12 bg-green-300'>discover events</button>
        </div>
</div>
  )
}


function Skill({value}) {
  const AddSkills = () => {
    skills.push(value)
    console.log(skills)
  }
    return (
      <button onClick={AddSkills} className="border mr-2 mb-2 border-black border-solid rounded-full px-3  text-sm">
        {value}
      </button>
    );
  }