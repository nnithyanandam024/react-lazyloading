import React from "react";

const ReloadButton = () => {
  const handleReload = () => {
    window.location.reload(); // Reloads the page
  };

  return (
    <button 
      onClick={handleReload} 
      style={
        { 
          padding: "10px 30px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "10px 30px",
        }
      }
    >
      Reload Page
    </button>
  );
};

export default ReloadButton;
