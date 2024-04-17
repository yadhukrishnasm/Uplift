export default function CreateEvent() {
    const input = "border-2 border-black bg-[#E5ECD5] rounded-xl font-thin p-2";
    const label ="ml-3 text-sm "
  return (
    <div>
        <div className="p-9">
            <p className="font-normal text-2xl"> Make a <b>difference.</b> <br />
            Start your event here.</p>
        </div>
        <div className="flex flex-col px-8">
            <label htmlFor="title" className={label} >title</label>
            <input className={input}
            type="text" name="title" placeholder="write a title for the event"/>
            <br />

            <label htmlFor="desc" className={label}>description</label>
            <textarea name="desc" id="" className={input} cols="20" rows="3" placeholder="write a description providing all details about the event.." ></textarea>
            <br />

            <label htmlFor="location" className={label}>location</label>
            <input type="text" placeholder="the place where it’s happening..." name="location" className={input}/>
            <br />
            
            <div className="flex justify-between">
           
            <input type="date" className="rounded-lg border px-3 py-1 outline-dotted outline-sky-200 " name="time"/>
            
            <label htmlFor="fileInput" className="rounded-lg border px-3 py-1 outline-dotted outline-sky-200 ">add image</label>
            <input
            type="file"
            id="fileInput"
            multiple
            style={{ display: 'none' }}
            />

            </div>
        </div>

        <div className="px-9 py-6">
            <p className="font-bold mb-5 ">required spots</p>
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

                <input type="number" className="border-2 border-black w-8 px-2 rounded-lg" />
                <button className="border px-2 rounded-md">save</button>

            </div>
                <button className="text-center w-full p-2 outline-dashed outline-sky-200 rounded-lg">Add another spot</button>
        </div>

        <div className="px-9 pb-6">
            <h1 className="font-bold mb-5">required resources</h1>
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

                <input type="number" className="border-2 border-black w-8 px-2 rounded-lg" />
                <button className="border px-2 rounded-md">save</button>

            </div>
                <button className="text-center w-full p-2 outline-dashed outline-sky-200 rounded-lg">Add another spot</button>
        </div>
    </div>
  )
}
