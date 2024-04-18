import { useState } from 'react';

export default function CreateEvent() {
    const [inputs, setInputs] = useState({
        requiredSpot: 0,
        noSpots: 0
    });

    const input = "border-2 border-black bg-[#E5ECD5] rounded-xl font-thin p-2";
    const label = "ml-3 text-sm ";

    
    const handleClickr = () => {
        const requiredSpotr = document.getElementById('requiredSpotr').value;
        const noSpotr = document.getElementById('noSpotr').value;
        // Generate the HTML for the new div
        const newDivHTML = generateDivr(requiredSpotr, noSpotr);

        // Insert the new div HTML code into the container
        document.getElementById('divContainer').insertAdjacentHTML('beforeend', newDivHTML);
    };

    const generateDivr = (requiredSpotr, noSpotr) => {
        return (
            `<div  class="flex justify-between border items-center rounded-xl shadow-[-4px_4px_0_0_rgba(56,163,165,1)] border-[#38A3A5] my-5 p-2">
                <p>${requiredSpotr}</p>
                <p>${noSpotr} slots</p>
            </div>`
        );
    };

    return (
        <div>
            <div className="p-9">
                <p className="font-normal text-2xl"> Make a <b>difference.</b> <br />
                    Start your event here.</p>
            </div>
            <div className="flex flex-col px-8">
                <label htmlFor="title" className={label}>title</label>
                <input className={input}
                       type="text" name="title" placeholder="write a title for the event"/>
                <br/>

                <label htmlFor="desc" className={label}>description</label>
                <textarea name="desc" id="" className={input} cols="20" rows="3"
                          placeholder="write a description providing all details about the event."></textarea>
                <br/>

                <label htmlFor="location" className={label}>location</label>
                <input type="text" placeholder="the place where it’s happening..." name="location"
                       className={input}/>
                <br/>

                <div className="flex justify-between">
                    <input type="date" className="rounded-lg border px-3 py-1 outline-dotted outline-sky-200 "
                           name="time"/>

                    <label htmlFor="fileInput"
                           className="rounded-lg border px-3 py-1 outline-dotted outline-sky-200 ">add image</label>
                    <input
                        type="file"
                        id="fileInput"
                        multiple
                        style={{display: 'none'}}
                    />

                </div>
            </div>


            <div className="px-9 py-6">
                <p className="font-bold mb-5 ">required spots</p>
                <div id="divContainer"></div>
                <div className="flex justify-between border items-center rounded-xl shadow-[-4px_4px_0_0_rgba(56,163,165,1)] border-[#38A3A5] my-5 p-2">

                    <select id="requiredSpot" className="border-b-2 outline-none">
                        <option value="">Select</option>
                        <option value="carpentary">carpentary</option>
                        <option value="plumbing">plumbing</option>
                        <option value="painting">painting</option>
                        <option value="electrical work">electrical work</option>
                        <option value="landscaping">landscaping</option>
                        <option value="heavy lifting">heavy lifting</option>
                    </select>

                    <input type="number" className="border-2 border-black w-8 px-2 rounded-lg" id="noSpots"/>
                    <button className="border px-2 rounded-md " onClick={handleClickr}>save</button>

                </div>
                
            </div>

            <div className="px-9 pb-6">
                <h1 className="font-bold mb-5">required resources</h1>
                <div className="flex justify-between border items-center rounded-xl shadow-[-4px_4px_0_0_rgba(56,163,165,1)] border-[#38A3A5] my-5 p-2">

                    <select id="requiredSpotr" className="border-b-2 outline-none">
                        <option value="">Select</option>
                        <option value="carpentary">carpentary</option>
                        <option value="plumbing">plumbing</option>
                        <option value="painting">painting</option>
                        <option value="electrical work">electrical work</option>
                        <option value="landscaping">landscaping</option>
                        <option value="heavy lifting">heavy lifting</option>
                    </select>

                    <input type="number" className="border-2 border-black w-8 px-2 rounded-lg" id="noSpotr"/>
                    <button className="border px-2 rounded-md" onClick={handleClickr}>save</button>

                </div>
               
                <div className="flex justify-center">
                    <button className="border py-2 px-4 shadow-[-3px_3px_0_0_rgba(56,163,165,1)] my-3 rounded-3xl ">Create event</button>
                </div>
            </div>
        </div>
    );
}
