import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "./redux/actions/index";
const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.box.value);
  const updateValue = (p) => dispatch(actions.setValue(p));

  useEffect(() => {
    setTimeout(() => updateValue(Math.floor(Math.random() * 10) + 1), 5000);
  }, [value]);
  return (
    <>
      <h4>
        {value.map((v) => (
          <img src={v} height={200} width={200} />
        ))}
      </h4>
    </>
  );
};

export default Home;
