import React from "react";

const Thankyou = () => {
    return (
        <div className="flex items-center justify-center  ">
          <div className="py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">🎉 Thank You! 🎉</h1>
            <p className="text-lg text-gray-600 mb-6">
              Your order has been placed successfully. We appreciate your business!
            </p>
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-800 transition"
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </button>
          </div>
        </div>
      );
};

export default Thankyou;
