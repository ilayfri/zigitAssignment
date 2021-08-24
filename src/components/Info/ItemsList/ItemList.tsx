import Item from "./Item/Item";
import ListHeader from "./ListHeader/ListHeader";
import ItemsAnalytics from "../itemsAnalytics/ItemsAnalytics";
const ItemsList = (props: any) => {
  return (
    <>
      <div>
        <h1>Your projects table</h1>
          </div>
          <ItemsAnalytics items={props.items}/>
      <ListHeader />
      {props.items.map((item: any) => {
        return (
          <div key={item.id}>
            <Item item={item} />
          </div>
        );
      })}
      {props.items.length == 0 ? (
        <>
          <b>Loading Projects..</b>
        </>
      ) : null}
    </>
  );
};

export default ItemsList;
