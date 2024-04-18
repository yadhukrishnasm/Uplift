import '../components/firebaseConfig';
import { getFirestore, addDoc,doc,getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react'; // Import useEffect and useState

export default function Events() {
  const [joinedEventData, setJoinedEventData] = useState([]);
   // State to store joined event data
  const [createdEventData, setCreatedEventData] = useState([]);

  useEffect(() => { // useEffect to fetch data once component mounts
    const fetchDataCreate = async () => {
      const db = getFirestore();
      const UserId = sessionStorage.getItem('userinfo');
      
      if (!UserId) {
        return; // Handle missing user info in session storage
      }

      const uid = JSON.parse(UserId);
      const q = query(collection(db, 'UserData'), where("uid", '==', uid.uid));

      const querySnapshot = await getDocs(q);

      const createdEventIds = [];
      querySnapshot.forEach((doc) => {
        createdEventIds.push(...doc.data().createdevent);
      });

      const createdEventData = await Promise.all(createdEventIds.map(async (eventId) => {
        const eventRef = doc(db, 'EventData', eventId);
        const eventSnap = await getDoc(eventRef);
        return eventSnap.exists() ? eventSnap.data() : null;
      }));
      setCreatedEventData(createdEventData.filter(event => event !== null));
      console.log(createdEventData)
    }

    const fetchDataJoin = async () => {
      const db = getFirestore();
      const UserId = sessionStorage.getItem('userinfo');
      
      if (!UserId) {
        return; // Handle missing user info in session storage
      }

      const uid = JSON.parse(UserId);
      const q = query(collection(db, 'UserData'), where("uid", '==', uid.uid));

      const querySnapshot = await getDocs(q);

      const joinedEventIds = [];
      querySnapshot.forEach((doc) => {
        joinedEventIds.push(...doc.data().joinedevent);
      });

      const joinedEventData = await Promise.all(joinedEventIds.map(async (eventId) => {
        const eventRef = doc(db, 'EventData', eventId);
        const eventSnap = await getDoc(eventRef);
        return eventSnap.exists() ? eventSnap.data() : null;
      }));

      setJoinedEventData(joinedEventData.filter(event => event !== null));

      console.log(joinedEventData)
    };

    fetchDataJoin();
    fetchDataCreate();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <div className="p-10 relative flex flex-col gap-6">
        <span className="text-2xl">Events</span>
        <span className="text-base font-bold my-4">Events you created</span>
        <div className="flex flex-col justify-center items-center">
          {/* Render events you created */}
        </div>
        <span className="font-bold">Participating Events</span>
        <div className="flex flex-col justify-center items-center">
          {/* Render participating events */}
          {joinedEventData.map((event, index) => (
            <div key={index}>
              {/* Render event details */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
