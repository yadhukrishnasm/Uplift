import { Skill } from './skills.jsx';
import ExpCard from '../components/expCard.jsx';
import '../components/firebaseConfig';
import { getFirestore, addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function Profile() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    skills: [],
    badges: [],
    joinedevent: [],
    createdevent: [],
    exp: '',
    phone: '',
  });

  // Function to handle errors during data fetching
  const handleError = (error) => {
    console.error('Error fetching user data:', error);
    // Optionally display an error message to the user
  };

  // Fetch user data from Firestore
  useEffect(() => {
    const fetchUserData = async () => {
      const UserId = sessionStorage.getItem('userinfo');
      if (!UserId) {
        return; // Handle missing user info in session storage
      }
      const uid = JSON.parse(UserId);
      const db = getFirestore();

      const q = query(collection(db, 'UserData'), where("uid", '==', uid.uid));

      try {
        const querySnapshot = await getDocs(q);
        let fetchedUserData = null;
        querySnapshot.forEach((doc) => {
          fetchedUserData = doc.data();
          console.log(fetchedUserData)
          return false; // Stop iterating after the first document (assuming single user)
        });

        if (fetchedUserData) {
          setUserData(fetchedUserData);
        } else {
          console.log('No user data found');
        }
      } catch (error) {
        handleError(error);
      }
    };

    fetchUserData(); // Call the function to fetch data
  }, []);

  return (
    <div className="pl-8 pt-8 flex flex-col gap-6">
      <span className="text-xl">Profile</span>
      <div className="mt-4">
        <span className="text-3xl">{userData.name}</span>
        <div className="relative h-20 ">
          <div className="absolute right-0 h-16 w-16 flex flex-col">
            <p className="text-2xl text-yellow-300">24K</p>
            <span>XP</span>
          </div>
          <p className="text-sm my-2">email</p>
          <p className="font-bold">number</p>
        </div>
      </div>

      <div>
        <p className="font-bold">badges</p>
        <div className="w-full h-20 my-4">
          {/* Display badges here (replace with your badge rendering logic) */}
        </div>
      </div>

      <div>
        <p className="font-bold mb-4">skills</p>
        <Skill value="cleaning" />
        <Skill value="sewing" />
        <Skill value="sewing" />
        <Skill value="sewing" />
        <Skill value="sewing" />
      </div>

      <div className="pr-8">
        <p className="font-bold">Experience</p>
        <ExpCard />
      </div>
    </div>
  );
}
