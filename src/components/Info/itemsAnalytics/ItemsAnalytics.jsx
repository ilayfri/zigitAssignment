import { useState } from "react";
import {
  passPercent,
  avargeGrade,
} from "../ItemsList/itemsFunctions/itemsFunctions";
const ItemsAnalytics = (props) => {
  const namesSet = [
    ...new Set(
      props.items.map((listItem) => {
        return listItem.name;
      })
    ),
  ];
  const [avgValue, setAvgValue] = useState();
  function selectHandle(event) {
    console.log(event.target.value);
    setAvgValue(
      avargeGrade(
        props.items.filter((item) => item.name === event.target.value)
      )
    );
    console.log(
      avargeGrade(props.items.filter((item) => item === event.target.value))
    );
  }
  return (
    <>
      {"You have " + props.items.length + " projects"}
      {props.items && props.items.length != 0 ? (
        <div>
          <b>Pass Percent:</b> {passPercent(props.items)}%
        </div>
      ) : null}
      <div>
        <b>Avarage grade for project:</b>{" "}
        <select
          onChange={(e) => {
            selectHandle(e);
          }}
        >
          <option selected={avgValue == null} disabled>
            -- Choose Project name --{" "}
          </option>
          {props.items &&
            namesSet.map((name) => {
              return (
                <option value={name} key={name}>
                  {name}
                </option>
              );
            })}
        </select>
        {avgValue ? " is " + avgValue.toFixed(2) : null}
      </div>
    </>
  );
};
export default ItemsAnalytics;
