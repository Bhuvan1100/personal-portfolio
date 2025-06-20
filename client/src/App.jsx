import React from "react";

function App() {
  return React.createElement(
    "div",
    { 
      style: { 
        minHeight: "100vh", 
        backgroundColor: "#1f2937", 
        color: "white", 
        padding: "2rem",
        fontFamily: "Arial, sans-serif"
      } 
    },
    React.createElement("h1", { 
      style: { 
        fontSize: "3rem", 
        fontWeight: "bold", 
        textAlign: "center",
        marginBottom: "1rem"
      } 
    }, "Portfolio Test"),
    React.createElement("p", { 
      style: { 
        textAlign: "center", 
        fontSize: "1.2rem"
      } 
    }, "Testing if React is working...")
  );
}

export default App;