import { useEffect, useState } from "react";
import { postRequest } from "../API/ApiRequests";
import ItemsList from "./ItemsList/ItemList";
import UserDetails from "./userDetails/UserDetails";

const fetchList = async () => {
  try {
    const data = await postRequest("GET", "info", JSON.stringify({}));
    if (data) {
      return data;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};
const Info = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchList()
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <UserDetails />
          </div>
          <hr />
      <div>
        <ItemsList items={items} />
      </div>
    </>
  );
};
export default Info;
