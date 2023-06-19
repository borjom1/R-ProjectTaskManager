import Alert from "../components/Alert";
import React from "react";

export const createAlert = (type, text) => {
  return <Alert className='absolute z-10 top-20 w-[35%]' type={type} text={text}/>;
};