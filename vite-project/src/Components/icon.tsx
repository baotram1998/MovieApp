import React from "react";

type TIcon = {
 
  icon?: React.ReactNode;
  
};

const Icon = ({ icon}: TIcon) => {

  console.log("Icon");

  return (
    <>
     {icon} 
    </>
   
  );
};

export default Icon;