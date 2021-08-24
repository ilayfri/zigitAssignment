import "./Item.css";
const Item = (props: any) => {
  let colorStyle = "";
  if (props.item.score < 70) {
    colorStyle = "#ffbebe";
  } else if (props.item.score > 90) {
    colorStyle = "#9ae7a7";
  }
  return (
    <>
      <div className="item-div">
        {Object.keys(props.item).map((att: any) => {
          if (att != "id") {
            return (
                <span
                    key={props.item.id+att}
                className="item-span"
                style={colorStyle.length > 0 ? { background: colorStyle } : {}}
              >
                {props.item[att].toString()}
              </span>
            );
          }
        })}
      </div>
    </>
  );
};

export default Item;
