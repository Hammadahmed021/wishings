import { useParams } from "react-router-dom";
import { getOrderDetailApi } from "../utils/Api";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import LoaderComp from "../components/LoaderCompe";

const OrderDetail = () => {
  const { id } = useParams();

  const [orderDetail, setOrderDetail] = useState();

  const getOrderDetailFun = async () => {
    const { status, data } = await getOrderDetailApi(id);
    if (status == 200) setOrderDetail(data?.order);
    console.log("kjsabjkbdkjbvskbdlkvbs", status, data);
  };

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    getOrderDetailFun();
  }, []);
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {orderDetail?.amount ? (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Order Details</h2>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Amount:</span> $
            {orderDetail?.amount}
          </p>

          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Category:</span>{" "}
            {orderDetail?.category?.name}
          </p>

          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Instruction:</span>{" "}
            {orderDetail?.instruction || "N/A"}
          </p>

          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Music:</span>{" "}
            {[...orderDetail?.music_uploaded,...orderDetail?.music]?.map((res) => (
              <li key={res.id}>{res?.title ?? res?.file}</li>
            )) || "N/A"}
          </p>

          <div className="text-gray-600 mb-4">
            <span className="font-semibold">Titles:</span>
            <ul className="list-disc list-inside">
              {orderDetail?.order_titles?.map((title) => (
                <li key={title.id}>{title.title}</li>
              ))}
            </ul>
          </div>

          <div className="text-gray-600 mb-4">
            <span className="font-semibold">Taglines:</span>
            <ul className="list-disc list-inside">
              {orderDetail?.order_taglines?.map((tagline) => (
                <li key={tagline.id}>{tagline.tagline}</li>
              ))}
            </ul>
          </div>

          <div className="text-gray-600 mb-4">
            <span className="font-semibold">Files:</span>
            <ul className="list-disc list-inside">
              {orderDetail?.order_files?.map((file) => (
                <li key={file.id}>
                  {file.type.toUpperCase()}: {file.file}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Video Proportion:</span>{" "}
            {orderDetail?.video_proportion}
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">User Email:</span>{" "}
            {orderDetail?.user?.firebase_user?.email}
          </p>
        </div>
      ) : (
        <LoaderComp />
      )}
    </div>
  );
};

export default OrderDetail;
