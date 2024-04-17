// import React, { useState, useEffect } from 'react';
import "../components/firebaseConfig";
import { getFirestore, addDoc, collection, query, where, getDocs } from "firebase/firestore";
import EventPreview from "../components/eventPreview";

export default function Discover() {
  //   const [eventData, setEventData] = useState('')
  //const UserInfo = sessionStorage.getItem('UserInfo');
  const desiredSkills = JSON.parse(sessionStorage.getItem("user_skills"));
  console.log(desiredSkills);
  const db = getFirestore();
  const listevent = [];

  const eventList = async () => {
    const q = query(
      collection(db, "EventData"),
      where("skills", "array-contains-any", desiredSkills.skills)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      listevent.push(doc.data());
    });
    console.log(listevent);
  };

  eventList();

  return (
    <div className="p-10 relative flex flex-col gap-5">
      <span className="text-2xl">Discover</span>
      <div className="flex flex-col justify-center items-center">
        {listevent.map((content, index) => (
          <EventPreview
            key={index}
            img={content.image}
            title={content.title}
            desc={content.description}
            time={content.date}
            slots={content.slot}
          />
        ))}
      </div>
    </div>
  );
}
