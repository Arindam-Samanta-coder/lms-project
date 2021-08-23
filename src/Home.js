import React, {useState,useEffect} from 'react'
import './Home.css'
import Courses from './Courses'
import { db } from './firebase';



function Home() {

    const [courses, setCourses] = useState([]);
    

    useEffect(() => {
        db
          .collection("courses")
          .onSnapshot(snapshot => {
              setCourses(snapshot.docs.map(doc => ({
                  id: doc.id,
                  data: doc.data()
              })))
          })
    },[])

    console.log(courses)

 

    return (
        <div className="home"> 

                <div className="viewers" >
                   
                    <div className="viewers_buttons">
                        <label>Course name</label>
                        <input type="text"   name="c_name" id="c_name" />        
                    </div>

                    <div className="viewers_buttons">
                        <label>Course Code</label>
                        <input type="text"   name="c_code" id="c_code"/>
                    </div>

                    <div className="viewers_buttons"> 
                        <button  > Add </button>   
                    </div>

                    <div className="viewers_buttons">
                        <button> Delete </button>
                    </div>
                    
                </div>


            <Courses course={courses} />
        </div>
    )
}

export default Home
