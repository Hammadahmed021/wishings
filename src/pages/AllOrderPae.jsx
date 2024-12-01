import { useEffect, useState } from "react";
import { getAllOrdersApi } from "../utils/Api";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoaderComp from "../components/LoaderCompe";

const AllOrderPage = () => {
 
 const [allOrders,setAllOrders]=useState(null)

  const getAllOrders = async () => {
    const { status, data } = await getAllOrdersApi();
    if (status == 200) setAllOrders(data?.orders ?? []);
    else setAllOrders([])
    console.log("kjsabjkbdkjbvskbdlkvbs", status, data);
  };


  const userData = useSelector((state) => state.auth.userData);


  useEffect(() => {
    getAllOrders();
  }, []);
  return (
    <div>
      {allOrders == null ? (
        <LoaderComp />
      ) : allOrders?.length == 0 ? (
        <h1>No Order found</h1>
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            {userData?.name} Orders
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allOrders?.map((order) => (
              <li
                key={order?.id}
                className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {order?.instruction}
                  </h3>
                  <span className="text-sm text-gray-500">
                    Total:{" "}
                    <span className="font-bold text-blue-600">
                      ${order?.amount?.toFixed(2)}
                    </span>
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Email:</span>{" "}
                  {order?.user?.email}
                </p>
                <Link
                  to={`/order/${order?.id}`}
                  className="block text-center mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                  View Order
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* <h4>mu all ordera</h4>
      {allOrders.map(res => {
        return (
          <DataDisplay data={res} />
        );
      })} */}
    </div>
  );
}

export default AllOrderPage
