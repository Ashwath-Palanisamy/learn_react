import React, { useState } from "react";

function App() {
  const [isDark, setTheme] = useState(false)

  return (
    < >
      <div style={{ 
  backgroundColor: isDark ? 'black' : 'white', 
  color: isDark ? 'white' : 'black',
  minHeight: '100vh',
  padding: '2rem'
}}>
        
        <button onClick={() => setTheme(!isDark)}>Change theme</button>
      </div>
    </>
  )
}

export default App;