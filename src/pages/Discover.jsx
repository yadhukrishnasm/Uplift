// import React, { useState, useEffect } from 'react';
import '../components/firebaseConfig'
import { getFirestore, addDoc, collection, query, where, getDocs } from 'firebase/firestore';

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
    <div>
    <button onClick={eventList}>search</button>
    </div>
  )
}
