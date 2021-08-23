import React from 'react'
import { Link } from 'react-router-dom';
import './Courses.css'

function Courses({course}) {

    const c = course;
    console.log("This is the course>>>", c)

    return (
        <div className="courses">
            <div className="courses_content">

                {
                    c.map((course) => (

                        <div className="courses_course" key={course.id}>
                            <Link to={`/Quizes/${course.data.code}`}>
                                <div className="courses_title">
                                    <h1>{course.data.name}</h1>
                                </div>

                                <div className="courses_code">
                                    <h6>{course.data.code}</h6>
                                </div>
                            </Link>
                        </div>

                    ))
                }
                
  
            </div>
        </div>
    )
}

export default Courses
