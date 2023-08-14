import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const NotFound = () => {
  const navigation = useNavigate();

  useEffect(()=>{
    navigation(-1)
  })

  return (
    <div>
      에러페이지입니다. 5초 후 이전 페이지로 이동합니다..
    </div>
  );
};

export default NotFound;