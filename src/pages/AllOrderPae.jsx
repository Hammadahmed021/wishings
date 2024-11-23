import { useEffect, useState } from "react";
import { getAllOrdersApi } from "../utils/Api";

const AllOrderPage = () => {
 
 const [allOrders,setAllOrders]=useState([])

  const getAllOrders = async () => {
    const { status, data } = await getAllOrdersApi();
    if (status == 200) setAllOrders(data?.orders ?? []);
    console.log("kjsabjkbdkjbvskbdlkvbs", status, data);
  };

  useEffect(() => {
    getAllOrders();
  }, []);
  return (
    <div>
      <h4>mu all ordera</h4>
      {allOrders.map(res => {
        return (
          <div>
            <h4>{res?.payment_intent_id}</h4>
          </div>
        );
      })}
  </div>
)
}

export default AllOrderPage