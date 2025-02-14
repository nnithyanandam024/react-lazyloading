const ReloadButton = () => {
    const reloadPage = () => {
      window.location.reload(); 
    };
  
    return (
      <button onClick={reloadPage} style={{ padding: "10px 60px", fontSize: "16px", cursor: "pointer",marginLeft: "43%" ,marginTop: "20px"}}>
        Reload Page
      </button>
    );
  };
  
  export default ReloadButton;
  