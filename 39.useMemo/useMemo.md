# useMemo() hook: để tránh thực hiện lại một logic nào đó không cần thiết

import { useState, useMemo, useRef } from 'react'

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const inpNameRef = useRef()

  // dùng useMemo để tránh sự lặp lại logic tính toán của biến total khi không cần thiết
  const total = useMemo(() => {
    return products.reduce((result, current) => result + current.price, 0)
  }, [products])

  const handleSubmit = () => {
    // add new product
    setProducts([...products, {
      name,
      price: +price
    }])

    // reset input
    setName('')
    setPrice('')
    
    // focus input Name
    inpNameRef.current.focus()
  }

  return (
    <div style={{ padding: '20px' }}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name..."
        ref={inpNameRef}
      />
      <br />
      <input
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Enter price..."
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      Total: <span>{total}</span>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App