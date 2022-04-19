import { useState } from 'react'

const orders = [100, 125, 125]

function App() {

  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, current) => total + current)
    console.log(total)
    return total
  })

  const [info, setInfo] = useState({
    name: "baotg",
    age: 26,
    rank: "fresher"
  })

  const handlePlus = () => {
    // setCounter(counter + 1)
    setCounter(prev => prev + 1)
    setCounter(prev => prev + 1)
    setCounter(prev => prev + 1)

    setInfo({
      ...info,
      dev: "react"
    })
    // setInfo((prev) => {

    //   // code logic...

    //   return {
    //     ...prev,
    //     dev: "react"
    //   }
    // })
  }


  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button
        onClick={handlePlus}>Plus!
      </button>
      <br/>
      <h1>{JSON.stringify(info)}</h1>
    </div >
  );

}

export default App;
