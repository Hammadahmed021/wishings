import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CheckoutForm, { stripePromise } from "../components/StripeCheckOut";


const CheckOutPage = () => {

const {state}=useLocation()

console.log("jksdbvklbsdklvbklsdbvlksbdlkvbsldk",state)


  return (
    <Elements stripe={stripePromise}>
    <CheckoutForm
      amount={state}
      handlePayment={e=>console.log("After payment ",e)}
      // buttonDis={totalPrice}
    />
  </Elements>
  );
};

export default CheckOutPage;



