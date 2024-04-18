import "../components/firebaseConfig";
import {
  getFirestore,
  addDoc,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react"; // Import useEffect and useState
import EventPreview from "../components/eventPreview";
import { Link } from "react-router-dom";

export default function Events() {
  const [joinedEventData, setJoinedEventData] = useState([]);
  // State to store joined event data
  const [createdEventData, setCreatedEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pIds, setPIds] = useState([]);

  useEffect(() => {
    // useEffect to fetch data once component mounts
    const fetchDataCreate = async () => {
      const db = getFirestore();
      const UserId = sessionStorage.getItem("userinfo");

      if (!UserId) {
        return; // Handle missing user info in session storage
      }

      const uid = JSON.parse(UserId);
      const q = query(collection(db, "UserData"), where("uid", "==", uid.uid));

      const querySnapshot = await getDocs(q);

      const createdEventIds = [];
      querySnapshot.forEach((doc) => {
        createdEventIds.push(...doc.data().createdevent);
      });

      const createdEventData = await Promise.all(
        createdEventIds.map(async (eventId) => {
          const eventRef = doc(db, "EventData", eventId);
          const eventSnap = await getDoc(eventRef);
          return eventSnap.exists() ? eventSnap.data() : null;
        })
      );
      setCreatedEventData(createdEventData.filter((event) => event !== null));
      console.log(createdEventData);
    };

    const fetchDataJoin = async () => {
      const db = getFirestore();
      const UserId = sessionStorage.getItem("userinfo");

      if (!UserId) {
        return; // Handle missing user info in session storage
      }

      const uid = JSON.parse(UserId);
      const q = query(collection(db, "UserData"), where("uid", "==", uid.uid));

      const querySnapshot = await getDocs(q);

      const joinedEventIds = [];
      querySnapshot.forEach((doc) => {
        joinedEventIds.push(...doc.data().joinedevent);
      });

      setPIds(joinedEventIds);

      const joinedEventData = await Promise.all(
        joinedEventIds.map(async (eventId) => {
          const eventRef = doc(db, "EventData", eventId);
          const eventSnap = await getDoc(eventRef);
          return eventSnap.exists() ? eventSnap.data() : null;
        })
      );

      setJoinedEventData(joinedEventData.filter((event) => event !== null));
      console.log(joinedEventData);
    };

    fetchDataJoin();
    fetchDataCreate();
    setLoading(false);
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <div className="p-10 relative flex flex-col gap-6 mb-14">
        <span className="text-2xl">Events</span>
        <div>
          <div className="flex flex-row place-content-end w-full mb-6">
            <Link
              to="/event/new"
              className="place-self-end border border-black py-[.1rem] px-3 h-fit bg-green-200 rounded-full"
            >
              create event
            </Link>
          </div>
          <span className="text-base font-bold my-4">Events you created</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          {createdEventData.map((event, index) => (
            <EventPreview
              key={index}
              slots={event.slot}
              img={event.image}
              title={event.title}
              desc={event.description}
              time={event.date}
            />
          ))}
        </div>
        <span className="font-bold">Participating Events</span>
        <div className="flex flex-col justify-center items-center">
          {loading ? (
            <div>...</div>
          ) : (
            joinedEventData.map((event, index) => (
              <Link to={`/event/${pIds[index]}`} key={index} className="w-full">
                <EventPreview
                  slots={event.slot}
                  img={event.image}
                  title={event.title}
                  desc={event.description}
                  time={event.date}
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
