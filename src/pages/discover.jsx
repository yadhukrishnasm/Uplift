// import React, { useState, useEffect } from 'react';
import '../components/firebaseConfig'
import { getFirestore, addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import EventPreview from '../components/eventPreview';

export default function Discover() {
//   const [eventData, setEventData] = useState('')
  //const UserInfo = sessionStorage.getItem('UserInfo');
  const desiredSkills = ["Event Planning & Organization","Videography"]; 
  console.log(desiredSkills)
  const db = getFirestore();
  const eventList = async () => {
    const q = query(collection(db, 'EventData'),where('skills', 'array-contains-any', desiredSkills))
    const querySnapshot = await getDocs(q);

    const listevent = [];
    querySnapshot.forEach(doc => {
      listevent.push(doc.data());
    });
    console.log(listevent)
  }
  return (
    <div className="p-10 relative flex flex-col gap-5">
        <span className="text-2xl">Discover</span>
        <div className="flex flex-col justify-center items-center">
        {/* {listevent.map((content,index)=>(
             <EventPreview img={content.image} title={content} desc={} time={} slots={}/> 
        ))} */}
        </div>
    </div>
  )
}
