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
import { placeOrderApi } from "../utils/Api";


const CheckOutPage = () => {

const {state}=useLocation()

console.log("jksdbvklbsdklvbklsdbvlksbdlkvbsldk",state)


  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        amount={state}
        handlePayment={(e) =>
          placeOrderApi({
            //user_id: 1,
            category_id: state.categoryId,
            "videos[]": state.videos,
            "pictures[]": state.images,
            script: state.scripts,
            amount: state.price,
            payment_id: e,
            music_id: state.audio.id,
            music: state.audio,
            category_video_id: state.videoId,
          })
        }
        // buttonDis={totalPrice}
      />
    </Elements>
  );
};

export default CheckOutPage;



