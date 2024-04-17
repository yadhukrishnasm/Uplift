

export default function EventPreview(props) {
  return (
    <div className="fw-64 h-52 rounded-2xl relative shadow-[-4px_4px_0_0_rgba(56,163,165,1)]">

      <div className="absolute right-0 px-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl border bg-lime-600 ">slots {props.slots}</div>

      <img src= {props.img} alt="image"  className="h-1/2 border rounded-
      tl-2xl rounded-tr-2xl " />

      <div className="p-2 flex-col flex gap-2">
        <h2 className="font-bold">{props.title}</h2>
        <span className="text-sm">{props.desc}</span>
        <p className="font-semibold">{props.time}</p>
      </div>
    </div>
  )
}
