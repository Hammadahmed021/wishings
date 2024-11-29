import { useParams } from "react-router-dom";
import { getOrderDetailApi } from "../utils/Api";
import { useSelector } from "react-redux";
import { useState } from "react";

const OrderDetail =()=>{
    const { id } = useParams();

    const [orderDetail,setOrderDetail]= useState()

    const getOrderDetailFun =async ()=>{
        const { status, data } = await  getOrderDetailApi(id)
        if (status == 200) setOrderDetail(data);
        console.log("kjsabjkbdkjbvskbdlkvbs", status, data);
    }

  
    const userData = useSelector((state) => state.auth.userData);
  
  
    useEffect(() => {
        getOrderDetailFun();
    }, []);
    return(
<div>

</div>
    )
}

export default OrderDetail
