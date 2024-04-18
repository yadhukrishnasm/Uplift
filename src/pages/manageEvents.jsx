export default function ManageEvents() {
  return (
    <div>
        <p className="p-8 text-xl">Manage Event</p>
        <div className="overflow-x-auto flex-shrink-0" style={{ scrollSnapType: 'x mandatory' }}>
        <Page1 />
        <Page2 />
      </div>
    </div>
  )
}

function Page1() {
    return (
      <div className="w-screen h-screen bg-blue-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Page 1</h1>
      </div>
    );
  }
  
  function Page2() {
    return (
      <div className="w-screen h-screen bg-green-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Page 2</h1>
      </div>
    );
  }