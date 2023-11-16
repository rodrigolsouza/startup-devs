"use client"

import {CardAboutUs} from "./components/sectionAboutUs/CardAboutUs";


export default function Home() {

  const listPeople=[
    {
        id: crypto.randomUUID(),
        image:"https://avatars.githubusercontent.com/u/61033232?v=4",
        name:"Rodrigo Souza",
        jobTitle: "Developer",
    },
    {   
        id: crypto.randomUUID(),
        image:"https://images-ext-1.discordapp.net/external/78utGeiONFJmT5_6UTlS2Cfw8BJO5Idm6rFo_r6LsRw/%3Fe%3D1705536000%26v%3Dbeta%26t%3Dl8j7JsbbAtAtkpjo1hBDqwNCyUbIOdf03AK0Wg6rtJM/https/media.licdn.com/dms/image/D4D03AQGRXabDApjhQQ/profile-displayphoto-shrink_800_800/0/1697927837701?width=418&height=418",
        name:"Emesson",
        jobTitle: "Programming",
    },
    {
        id: crypto.randomUUID(),
        image:"https://avatars.githubusercontent.com/u/134212408?v=4",
        name:"Rinaldo Vilela",
        jobTitle: "Developer",
    },
    {
        id: crypto.randomUUID(),
        image:"https://avatars.githubusercontent.com/u/114183514?v=4",
        name:"Nemésio",
        jobTitle: "Programming",
    }
  ]

  return (
    <main>


      <CardAboutUs people= {listPeople}/>


    </main>
  )
}
