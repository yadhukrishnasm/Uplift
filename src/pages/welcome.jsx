

export default function welcome() {
  return (
    <div className='p-11 flex flex-col py-20 gap-10'>
        <div className='gap-10 flex flex-col'>
            <h1 className='text-3xl'>Welcome to <br /> <b>Uplift</b></h1>
            <p>Together we can make a difference</p>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow border border-blue-900' >sign up</button>
    </div>
  )
}
