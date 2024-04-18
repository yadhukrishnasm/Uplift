// import React, { useState, useEffect } from 'react';
import "../components/firebaseConfig";
import { getFirestore, addDoc, collection, query, where, getDocs } from "firebase/firestore";
import EventPreview from "../components/eventPreview";
import { useEffect, useState } from "react";

export default function Discover() {
  //   const [eventData, setEventData] = useState('')
  //const UserInfo = sessionStorage.getItem('UserInfo');
  const desiredSkills = JSON.parse(sessionStorage.getItem("user_skills"));
  console.log(desiredSkills);
  const db = getFirestore();
  const [listevent, setListEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const eventList = async () => {
      const q = query(
        collection(db, "EventData"),
        where("skills", "array-contains-any", desiredSkills.skills)
      );
      const querySnapshot = await getDocs(q);
      const list = [];

      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setListEvent(list);
      console.log(listevent);
      setLoading(false);
    };

    const fetchData = async () => {
      await eventList();
    };
    fetchData();
  }, []);

  return (
    <div className="p-10 relative flex flex-col gap-5">
      <span className="text-2xl">Discover</span>
      <div className="flex flex-col justify-center items-center">
        {loading ? (
          <div>loading...</div>
        ) : listevent.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        ) : (
          <div>No events found with your skills.</div>
        )}
        {/* {listevent.map((content, index) => (
          <EventPreview
            key={index}
            img={content.image}
            title={content.title}
            desc={content.description}
            time={content.date}
            slots={content.slot}
          />
        ))} */}
      </div>
    </div>
  );
}
