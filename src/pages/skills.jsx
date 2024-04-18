import { useNavigate } from "react-router-dom";
import {useState} from 'react'

import { addDoc, collection, getFirestore } from "firebase/firestore";
let skills = [];

export default function Skills() {
  const navigate = new useNavigate();
  const db = getFirestore();
  const userdata = JSON.parse(sessionStorage.getItem("userinfo"));
  const SaveUserData = async () => {
    const phonenum = document.getElementById("phone-no").value;
    const Skills = { skills: skills, phone: phonenum };
    sessionStorage.setItem("user_skills", JSON.stringify(Skills));
    const savedata = await addDoc(collection(db, "UserData"), {
      name: userdata.name,
      email: userdata.email,
      uid: userdata.uid,
      phone: phonenum,
      skills: skills,
      badges: [],
      exp: "",
      joinedevent: [],
      createdevent: [],
    });
    navigate("/d/discover");
  };

  function clearSelections(){
    skills = [];
  }

  return (
    <div className="py-12 flex flex-col h-screen gap-8">
      <div className="break-words w-3/4 px-8">
        <p>
          Select your <b>skills</b> to connect with events that need you.
        </p>
      </div>
      <div className="pl-8 pr-3 gap-2 flex flex-col">
        <input type="number" placeholder="Enter PhoneNo." className="box" id="phone-no" />
        <div>
          <span className="text-xs font-bold">Construction & Maintenance</span>
          <div>
            <Skill value="carpentary" />
            <Skill value="painting" />
            <Skill value="plumbing" />
            <Skill value="electrical work  " />
            <Skill value="landscaping" />
            <Skill value="heavy lifting" />
          </div>
        </div>

        <div>
          <span className="text-xs font-bold">Cleaning & Organizing</span>
          <div>
            <Skill value="sorting" />
            <Skill value="sweeping" />
            <Skill value="mopping" />
            <Skill value="trash removal " />
            <Skill value="washing" />
            <Skill value="furniture arrangement" />
          </div>
        </div>
      </div>
        <button onClick={clearSelections} className="px-4 rounded-full border">clear selection</button>
      <div className="flex justify-center">
        <button
          onClick={SaveUserData}
          className="px-4 rounded-full border w-fit h-12 shadow-[-3px_3px_0_0_rgba(56,163,165,1)]bg-green-300"
        >
          discover events
        </button>
      </div>
    </div>
  );
}

const Skill = ({ value }) => {
  const [selected, setSelected] = useState(false);
  const bg = "bg-[#8DD7D8]";

  const [clicked, setClicked] = useState(false);

  const AddSkills = () => {
    if (!selected) {
      skills.push(value);
      console.log(skills);
      setSelected(true);
    }
  };
  return (
    <button
      onClick={AddSkills}
      className={`border mr-2 mb-2 border-black border-solid rounded-full px-3 text-sm ${
        selected ? bg : ""
      }`}
    >
      {value}
    </button>
  );
};

export { Skill };
