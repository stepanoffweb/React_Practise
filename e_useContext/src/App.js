import React, {useState} from 'react';
// import ClassContextComponent from './ClassContextComponent'
import FunctonContextComponent from './FunctonContextComponent'
import ThemeProvider from './ThemeContext'

function App() {

  return <>
      <ThemeProvider >
        {/* <ClassContextComponent /> */}
        <FunctonContextComponent />
      </ThemeProvider>
    </>
}

export default App;
