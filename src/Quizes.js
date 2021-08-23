import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import './Quizes.css'
import { db } from "./firebase";

function Quizes() {
    
    const { code } = useParams();
    

    const [quiz, setQuiz] = useState();

    useEffect (() => {
        db
          .collection("quizes")
          .doc(code)
          .get()
          .then((doc) => {
              if(doc.exists){
                  setQuiz(doc.data())
              } else {
                  console.log("No such document")
              }
          })
    },[])

    console.log("the code is >>>>>>",quiz)

    return (
        
        <div className="quizes">

                <div className="viewers">
                    <div className="viewers_buttons">
                        <label>Quiz name</label>
                        <input type="text"   name="c_name" id="c_name" />        
                    </div>

                    <div className="viewers_buttons"> 
                        <button > Add </button>   
                    </div>

                    <div className="viewers_buttons">
                        <button> Edit </button>
                    </div>

                    <div className="viewers_buttons">
                        <button> Delete </button>
                    </div>
                </div>

            <div className="quizes_content">
                <div className="quizes_quiz">
                    <Link to = {`/Quiz`}>
                    {quiz && (
                        <>
                             <div className="quizes_title">
                                <h2>{quiz.name}</h2>
                            </div>
                            <div className="quizes_code">
                                <h6>{code}</h6>
                            </div>

                        </>
                    )}
                    </Link>
                   
                </div>
            </div>
        </div>
    )
}

export default Quizes
