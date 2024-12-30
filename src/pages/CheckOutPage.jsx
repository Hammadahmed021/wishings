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
  const { state } = useLocation();

  console.log("jksdbvklbsdklvbklsdbvlksbdlkvbsldk", state);

  return (
    <div className="container mx-auto max-w-md text-center my-16">
      <Elements stripe={stripePromise}>
        <CheckoutForm
          amount={state}
          handlePayment={async (e) => {
            const response = await placeOrderApi({
              category_id: state.categoryId,
              videos: state.videos,
              pictures: state.images,
              script: state.scripts, // Ensure this is a File object if it's a file
              amount: state.price,
              payment_id: e,
              music_ids: state.audio.music_path ? state.audio.id : null,
              music: state.audio.music_path ? null : state.audio,
              category_video_id: state.videoId,
              titles: state.titles,
              taglines: state.tags,
              instruction: state.instructions,
              video_proportion: state.proportion,
            });
            if (response.status == 200) alert("Order Created successfully");
            else alert("error on creating order");
          }}
          // buttonDis={totalPrice}
        />
      </Elements>
    </div>
  );
};

export default CheckOutPage;
