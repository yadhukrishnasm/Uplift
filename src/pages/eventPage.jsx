import '../components/firebaseConfig';
import { getFirestore, addDoc,doc,getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

export default function EventPage() {
  const {id} = useParams();
  const status = "Open";
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
        const db = getFirestore();
        const eventRef = doc(db, 'EventData', id);
        const eventSnap = await getDoc(eventRef);
        const eventData = eventSnap.data()
        console.log(eventData)
        setEventData(eventData);
        setLoading(false);
    }
    fetchEventData();
  },[]);

  
  
  return (
    <div className="mb-4">
      <img src={eventData.image} alt="" className="h-36 w-full border-b-4 border-b-teal-500" />
      <button className="absolute top-24 right-4 px-4 py-1 rounded-full bg-teal-500">
        Volunteer!
      </button>
      <div className="flex justify-between ">
        <span className="bg-teal-500 text-lg ml-8 px-5 text-white p-1">{status}</span>
        <p className="mr-5 mt-2 font-semibold">{eventData.date}</p>
      </div>

      <div className="px-8">
        <span className="font-thin">{eventData.address}</span>
        <h1 className="text-3xl">{eventData.title}</h1>
      </div>

      <div className="pl-8 pr-9">{eventData.description}</div>
      <div className="pl-8 pr-9">Slot : {eventData.slot}</div>
      <div className="pl-8 pr-9">
        <h1 className="font-bold mt-8 mb-5">required spots</h1>
        {loading ? (<div>...</div>) : eventData.skills.map((spot) => (
                    <OptIn item={spot} />
        ))}
      </div>

      <div className="pl-8 pr-9">
        <h1 className="font-bold mt-8 mb-5">required resources</h1>
        {loading ? (<div>...</div>) : eventData.resources.map((spot) => (  <OptIn item={spot} />  ))}
      </div>
    </div>
  );
}

const OptIn = (props) => {
  return (
    <div className="flex justify-between border items-center rounded-xl shadow-[-4px_4px_0_0_rgba(56,163,165,1)] border-[#38A3A5] border mb-3 p-2">
      <span className="font-thin text-sm">{props.item}</span>
     
    </div>
  );
};
