import { createContext, useState } from 'react'

// tạo Context vs tên ThemeContext
const ThemeContext = createContext()

function ThemeProvider({ children }) {
   const [theme, setTheme] = useState('dark')

   const handleToogle = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
   }

   // data truyền vào ThemeContext (ở đây là obj vì muốn truyền cả handleToogle)
   const value = {
      theme,
      handleToogle
   }

   return (
      <ThemeContext.Provider value={value}>
         {children}
      </ThemeContext.Provider>
   )
}

export {ThemeContext, ThemeProvider} 