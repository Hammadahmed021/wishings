import { useLocation, useNavigate } from "react-router-dom"
import SummaryView from "../components/SummaryView"
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CheckoutForm, { stripePromise } from "../components/StripeCheckOut";
import { placeOrderApi } from "../utils/Api";
import { useState } from "react";

const SummaryPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isPaymentModal,setIsPaymentModal] = useState(false);
  const {state}= location
  return (
    <Elements stripe={stripePromise}>
      <SummaryView
        categoryId={state?.categoryId}
        calculatePrice={state?.calculatePrice}
        images={state?.images ?? []}
        navigate={navigate}
        pdfFile={state?.pdfFile}
        scriptText={state?.scriptText}
        selectedFile={state?.selectedFile}
        selectedTime={state?.selectedTime}
        state={state?.state}
        videos={state?.videos ?? []}
        instructions={state?.instructions}
        proportion={state?.proportion}
        titles={state?.titles ?? []}
        tags={state?.tags ?? []}
        allData={state}
        showPaymentModal={() => setIsPaymentModal(true)}
      />
      {isPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-96">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setIsPaymentModal(false)}
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-4">Confirm Payment</h2>
            <CheckoutForm
              amount={{price:state.calculatePrice}}
              handlePayment={async (e) => {
console.log("lsdbvklbdsklvblksdbklvbsdkbvlskd", state);

                const response = await placeOrderApi({
                  category_id: state.categoryId,
                  videos: state.videos,
                  pictures: state.images,
                  script: state.pdfFile, // Ensure this is a File object if it's a file
                  amount: state.calculatePrice,
                  payment_id: e,
                  music_id: state.selectedFile.music_path
                    ? state?.selectedFile?.id
                    : null,
                  music: state?.selectedFile?.music_path
                    ? null
                    : state?.selectedFile,
                  category_video_id: state?.state.id,
                  titles: state.titles,
                  taglines: state.tags,
                  instruction: state.instructions,
                  video_proportion: state.proportion,
                });
                if (response.status == 200) {
                  setIsPaymentModal(false);
                  alert("Order Created successfully");
navigate("/ordes", { replace: true });

                } else alert("error on creating order");
              }}
              // buttonDis={totalPrice}
            />
          </div>
        </div>
      )}
      {/*{isPaymentModal && (
        <CheckoutForm
          amount={state}
          handlePayment={async (e) => {
            const response = await placeOrderApi({
              category_id: state.categoryId,
              videos: state.videos,
              pictures: state.images,
              script: state.pdfFile, // Ensure this is a File object if it's a file
              amount: state.calculatePrice,
              payment_id: e,
              music_id: state.selectedFile.music_path
                ? state?.selectedFile?.id
                : null,
              music: state?.selectedFile?.music_path
                ? null
                : state?.selectedFile,
              category_video_id: state.id,
              titles: state.titles,
              taglines: state.tags,
              instruction: state.instructions,
              video_proportion: state.proportion,
            });
            if (response.status == 200) {
              setIsPaymentModal(false);

              alert("Order Created successfully");
            } else alert("error on creating order");
          }}
          // buttonDis={totalPrice}
        />
      )}*/}
    </Elements>
  );
}

export default SummaryPage