

import {CardAboutUs} from "./components/sectionAboutUs/CardAboutUs";


export default function Home() {

  const listPeople=[
    {
        id: crypto.randomUUID(),
        image:"https://www.vidadeturista.com/wp-content/uploads/2009/03/recife-pe-530x398.jpg",
        name:"Rodrigo Souza",
        jobTitle: "Developer",
    },
    {   
        id: crypto.randomUUID(),
        image:"https://www.vidadeturista.com/wp-content/uploads/2009/03/recife-pe-530x398.jpg",
        name:"Emesson",
        jobTitle: "Developer",
    },
    {
        id: crypto.randomUUID(),
        image:"https://www.vidadeturista.com/wp-content/uploads/2009/03/recife-pe-530x398.jpg",
        name:"Rinaldo Vilela",
        jobTitle: "Developer",
    },
    {
        id: crypto.randomUUID(),
        image:"https://www.vidadeturista.com/wp-content/uploads/2009/03/recife-pe-530x398.jpg",
        name:"Nemésio",
        jobTitle: "Developer",
    }
  ]

  return (
    <main>


      <CardAboutUs people= {listPeople}/>


    </main>
  )
}
