import  { useState } from 'react'
import '../components/firebaseConfig'
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage"
import { getFirestore, addDoc, collection } from 'firebase/firestore'

export default function CreateEvent() {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    skill: "",
    spots: 0,
  })

  const [imageUpload, setImageUpload] = useState()

  const db = getFirestore()
  const storage = getStorage()

  const saveDataToFirestore = async () => {
    if (!imageUpload) return

    const imageRef = ref(storage, `/${imageUpload.name}`)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url)
        SaveData(url)
      })
    })
  }

  const SaveData = async (imglink) => {
    const docRef = await addDoc(collection(db, 'UserData'), {
      title: inputs.title,
      description: inputs.description,
      imagelink: imglink,
      date: inputs.date,
      address: inputs.location,
      resources: inputs.requiredSpot,
      skills: inputs.skill,
      slot: inputs.spots,
    })
  }

  const input = "border-2 border-black bg-[#E5ECD5] rounded-xl font-thin p-2"
  const label = "ml-3 text-sm "

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }

  const handleClicks = () => {
    const newDivHTML = generateDivs(inputs.requiredSpots, inputs.spots)
    document.getElementById('divContainers').insertAdjacentHTML('beforeend', newDivHTML)
  }

  const generateDivs = (requiredSpots, spots) => {
    return (
      `<div class="flex justify-between border items-center rounded-xl shadow-[-4px_4px_0_0_rgba(56,163,165,1)] border-[#38A3A5] my-5 p-2">
                <p>${requiredSpots}</p>
                <p>${spots} slots</p>
            </div>`
    )
  }

  const handleClickr = () => {
    const newDivHTML = generateDivr(inputs.requiredSpotr)
    document.getElementById('divContainerr').insertAdjacentHTML('beforeend', newDivHTML)
  }

  const generateDivr = (requiredSpotr) => {
    return (
      `<div class="flex justify-between border items-center rounded-xl shadow-[-4px_4px_0_0_rgba(56,163,165,1)] border-[#38A3A5] my-5 p-2">
                <p>${requiredSpotr}</p>
            </div>`
    )
  }

  const handleSubmit = () => {
    saveDataToFirestore()
    console.log(inputs)
  }

  return (
    <div>
      <div className="p-9">
        <p className="font-normal text-2xl"> Make a <b>difference.</b> <br /></p>
      </div>
      <div className="flex flex-col px-8">
        <label htmlFor="title" className={label}>title</label>
        <input className={input} type="text" name="title" placeholder="write a title for the event" value={inputs.title} onChange={handleChange} />
        <br />

        <label htmlFor="description" className={label}>description</label>
        <textarea name="description" className={input} cols="20" rows="3" placeholder="write a description providing all details about the event." value={inputs.description} onChange={handleChange}></textarea>
        <br />

        <label htmlFor="location" className={label}>location</label>
        <input type="text" placeholder="the place where it’s happening..." name="location" className={input} value={inputs.location} onChange={handleChange} />
        <br />

        <div className="flex justify-between">
          <input type="date" className="rounded-lg border px-3 py-1 outline-dotted outline-sky-200 " name="date" value={inputs.date} onChange={handleChange} />
          <label htmlFor="fileInput" className="rounded-lg border px-3 py-1 outline-dotted outline-sky-200 ">add image</label>
          <input type="file" id="fileInput" multiple onChange={(event) => { setImageUpload(event.target.files[0]) }} style={{ display: 'none' }} />
        </div>
      </div>

      <div className="px-9 py-6">
        <p className="font-bold mb-5 ">required spots</p>
        <div id="divContainers"></div>
        <div className="flex justify-between border items-center rounded-xl shadow-[-4px_4px_0_0_rgba(56,163,165,1)] border-[#38A3A5] my-5 p-2">
          <select id="requiredSpots" className="border-b-2 outline-none" name="skill" value={inputs.skill} onChange={handleChange}>
            <option value="">Select</option>
            <option value="carpentry">Carpentry</option>
            <option value="plumbing">Plumbing</option>
            <option value="painting">Painting</option>
            <option value="electrical work">Electrical Work</option>
            <option value="landscaping">Landscaping</option>
            <option value="heavy lifting">Heavy Lifting</option>
          </select>
          <input type="number" className="border-2 border-black w-8 px-2 rounded-lg" id="spots" name="spots" value={inputs.spots} onChange={handleChange} />
          <button className="border px-2 rounded-md " onClick={handleClicks}>save</button>
        </div>
      </div>

      <div className="px-9 pb-6">
        <h1 className="font-bold mb-5">required resources</h1>
        <div id="divContainerr"></div>
        <div className="flex justify-between border items-center rounded-xl shadow-[-4px_4px_0_0_rgba(56,163,165,1)] border-[#38A3A5] my-5 p-2">
          <select id="requiredSpotr" className="border-b-2 outline-none" name="requiredSpotr" value={inputs.requiredSpotr} onChange={handleChange}>
            <option value="">Select</option>
            <option value="carpentry">Carpentry</option>
            <option value="plumbing">Plumbing</option>
            <option value="painting">Painting</option>
            <option value="electrical work">Electrical Work</option>
            <option value="landscaping">Landscaping</option>
            <option value="heavy lifting">Heavy Lifting</option>
          </select>
          <button className="border px-2 rounded-md" onClick={handleClickr}>save</button>
        </div>
        <div className="flex justify-center">
          <button className="border py-2 px-4 shadow-[-3px_3px_0_0_rgba(56,163,165,1)] border-[#38A3A5]  my-3 rounded-3xl " onClick={handleSubmit}>Create event</button>
        </div>
      </div>
    </div>
  )
}