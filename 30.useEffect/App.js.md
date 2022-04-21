# Hook useEffect
   systax: useEffect(callback, [dependencies])

- Khi nào thì sử dụng ? : Khi chúng ta muốn thực hiện các side effect ( là thuật ngữ chỉ tới 1 chương trình phần mềm khi có 1 tác động xảy ra dẫn tới việc dữ liệu của chương trình bị thay đổi )

- VD các trường hợp thường được dùng:
   1. Update DOM
      - F8 blog title
   2. Call API
   3. Listen DOM events
      - Scroll
      - Resize
      - ...
   4. Cleanup
      - Remove listener / Unsubcribe
      - Clear timer

- Cần nắm chắc các kiến thức:
   - Events: Add/remove event listener
   - Observer parttern: Subscribe/Unsubscribe
   - Closure
   - Timers: setInterval, setTimeout, clearInterval, clearTimeout
   - ustState
   - Mounted/Unmounted
   - ===
   - Call API
 
- Có 3 tình huống sử dụng:
   // 1. useEffect(callback)
      - Gọi callback sau khi component re-render
      - Gọi callback sau khi component thêm DOM element vào DOM (vì ưu tiên UI, callback chỉ là side effects)
   // 2. useEffect(callback, [])
      - Chỉ gọi callback 1 lấn sau khi component mounted
   // 3. useEffect(callback, [deps])
      - Callback sẽ được gọi lại mỗi khi deps thay đổi

   -------------(Luôn đúng trong 3 trường hợp):
   - Callback luôn được gọi sau khi Component chứa nó được mounted
   - Cleanup function luôn được gọi trước khi component bị unmounted



import React, { useState, useEffect } from 'react'


function Content() {
   const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

   const [title, setTitle] = useState('')
   // const [albums, setAlbums] = useState([])
   const [type, setType] = useState('posts')
   const [list, setList] = useState([])
   const [showGoToTop, setShowGoToTop] = useState(false)
   const [width, setWidth] = useState(window.innerWidth)


   // 1. useEffect(callback)
   // useEffect(() => {
   //    console.log('<Content/> is mounted')
   //    // update DOM
   //    document.title = title
   // })
   document.title = title


   // 2. useEffect(callback, [])
   // useEffect(() => {
   //    fetch('https://jsonplaceholder.typicode.com/albums')
   //       .then(response => response.json())
   //       .then(albums => {
   //          setAlbums(albums);
   //       })
   // }, [])


   // 3. useEffect(callback, [deps])

   // side effect: call API
   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
         .then(response => response.json())
         .then(arr => {
            setList(arr);
         })
   }, [type])

   
   // side effect: DOM event-scroll
   useEffect(() => {

      const handleScroll = () => {
         setShowGoToTop(window.scrollY >= 200);
      }

      window.addEventListener('scroll', handleScroll)

      // Cleanup function (avoid memory leak)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])


   // side effect: DOM event-resize screen
   useEffect(() => {

      const handleResize = () => {
         setWidth(window.innerWidth)
      }

      window.addEventListener('resize', handleResize)

      // Cleanup function (avoid memory leak)
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   })


   return (
      <React.Fragment>
         <h1>Learn Hook useEffect</h1>
         <h2>Width of Screen: {width}</h2>

         <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='enter tab title...'
         />

         {tabs.map((tab, index) => (
            <button
               key={tab}
               onClick={() => setType(tab)}
               style={tab === type ? {
                  color: '#fff',
                  backgroundColor: '#333'
               } : {}}
            >{tab}
            </button>
         ))}

         <ul>
            {list.map(item => (
               <li key={item.id}>{item.title || item.name}</li>
            ))}
         </ul>

         {showGoToTop && (
            <button
               style={{
                  bottom: '20px',
                  right: '20px',
                  position: 'fixed'
               }}
            >
               Go to Top
            </button>
         )}

      </React.Fragment>
   )
}

export default Content;