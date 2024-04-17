import { Skill } from './skills.jsx'
import ExpCard from '../components/expCard.jsx'

export default function Profile() {
  return (
    <div className="pl-8 pt-8 flex flex-col gap-6">
        <span className="text-xl">Profile</span>
        <div className="mt-4">
            <span className="text-3xl">Name</span>
            <div className="relative  h-20 "> 
                <div className="absolute right-0  h-16 w-16 flex flex-col">
                    <p className="text-2xl text-yellow-300">24K</p>
                    <span>XP</span>
                </div>
                <p className="text-sm my-2">email</p>
                <p className=" font-bold">number</p>
            </div>
        </div>

        <div>
            <p className="font-bold">badges</p>
            <div className="w-full h-20 my-4">

            </div>
        </div>

        <div>
            <p className="font-bold mb-4">skills</p>
            <Skill value= "cleaning"/>
            <Skill value= "sewing "/>
            <Skill value= "sewing "/>
            <Skill value= "sewing "/>
            <Skill value= "sewing "/>
        </div>

        <div className="pr-8 ">
            <p className="font-bold">Experience</p>
            <ExpCard/>
        </div>
    </div>
  )
}

const badge = ()=>{
    <div className="h-16">
        
    </div>
}