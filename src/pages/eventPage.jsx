export default function EventPage() {
    let Status = "open";
  return (
    <div className="mb-4">
        <img src="" alt="" className="h-36 w-full border-b-4 border-b-teal-500"/>
        <button className="absolute top-24 right-4 px-4 py-1 rounded-full bg-teal-500">Volunteer!</button>
        <div className="flex justify-between ">
            <span className="bg-teal-500 text-lg ml-8 px-5 text-white p-1">{Status}</span>
            <p className="mr-5 mt-2 font-semibold">Date</p>
        </div>

        <div className="px-8">
            <span className="font-thin">place</span>
            <h1 className="text-3xl">title</h1>
        </div>

        <div className="pl-8 pr-9">
            description
        </div>

        <div className="pl-8 pr-9">
            <h1 className="font-bold mt-8 mb-5">required spots</h1>
            <OptIn/>
        </div>

        <div className="pl-8 pr-9">
            <h1 className="font-bold mt-8 mb-5">required resources</h1>
            <OptIn/>
        </div>
    </div>

  )
}


const OptIn = (props)=>{
    return(
        <div className="flex justify-between border items-center rounded-xl shadow-[-4px_4px_0_0_rgba(56,163,165,1)] border-[#38A3A5] border mb-3 p-2">
            <span className="font-thin text-sm">{props.item}</span>
            <span className="font-semibold text-sm">{props.spots} Spots</span>
            <button className=" px-2 py-2 rounded-xl text-sm bg-lime-500 font-semibold"> opt-in</button>
        </div>
    );
}
