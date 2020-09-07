import React, {useState, useContext} from 'react'

export const ThemeContext = React.createContext()

export default function ThemeProvider({children}) {

 const [darkTheme, setDarkTheme] = useState(true)
 const toggleTheme = () => {
   setDarkTheme( !darkTheme ) }

 return <ThemeContext.Provider value={{darkTheme, toggleTheme}} >
      {children}
    </ThemeContext.Provider>
}
