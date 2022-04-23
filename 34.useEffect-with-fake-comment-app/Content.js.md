import React, { useState, useEffect } from 'react'

const lessons = [
   {
      id: 1,
      name: 'ReactJS là gì ? Tại sao nên học ReactJS ?'
   },
   {
      id: 2,
      name: 'SPA/MPA là gì ?'
   },
   {
      id: 3,
      name: 'Arrow function là gì ?'
   }
]


function Content() {
   const [lessonId, setLessonId] = useState(1)

   useEffect(() => {
      // function handle emitted comment event
      const handleComment = ({ detail }) => {
         console.log(detail)
      }

      // add thằng lắng nghe sự kiện phát ra từ emitComment bên index.js
      window.addEventListener(`lesson-${lessonId}`, handleComment)

      // Cleanup func
      return () => {
         window.removeEventListener(`lesson-${lessonId}`, handleComment)
      }
   }, [lessonId])

   return (
      <div>
         <ul>
            {lessons.map(lesson => (
               <li
                  key={lesson.id}
                  onClick={() => setLessonId(lesson.id)}
                  style={{
                     color: lesson.id === lessonId ?
                        'red' : 'black'
                  }}
               >
                  {lesson.name}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Content;