import React from "react";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
  // const handleClick = e => {
  //   e.preventDefault();
  //   console.log(e.target);
  // };
  return (
    <BasicLayout>
      <h1>MainPage</h1>
      <ul>
        <li>1번</li>
        <li>2번</li>
        <li>3번</li>
      </ul>
    </BasicLayout>
  );
};

export default MainPage;
