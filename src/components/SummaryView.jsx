const SummaryView = ({
  showModal,
  state,
  images,
  selectedFile,
  videos,
  selectedTime,
  pdfFile,
  scriptText,
  closeModal,
  navigate,
  calculatePrice,
  categoryId,
}) => {
  return (
    showModal && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">
            Summary of Your Selections
          </h3>
          <label htmlFor="category" className="text-gray-700 font-medium">
            Category Name: {state?.categoryName}
          </label>
          {/* Images Summary */}
          <div className="mb-4">
            <h4 className="font-semibold">Images:</h4>
            <ul className="list-disc pl-5">
              {images.map((image, index) => (
                <li key={index}>{image.name}</li>
              ))}
            </ul>
          </div>

          {/* Audios Summary */}
          <div className="mb-4">
            <h4 className="font-semibold">Audios:</h4>
            <ul className="list-disc pl-5">
              <li>{selectedFile.name ?? selectedFile.title}</li>

              {/*{selectedFile.map((audio, index) => (
                  <li key={index}>{audio.name}</li>
                ))}*/}
            </ul>
          </div>

          {/* Videos Summary */}
          <div className="mb-4">
            <h4 className="font-semibold">Videos:</h4>
            <ul className="list-disc pl-5">
              {videos.map((video, index) => (
                <li key={index}>{video.name}</li>
              ))}
            </ul>
          </div>

          {/* Time Summary */}
          <div className="mb-4">
            <h4 className="font-semibold">Time: {selectedTime}</h4>
            <p>{calculatePrice()} $</p>
          </div>

          {/* Script Summary */}
          <div className="mb-4">
            <h4 className="font-semibold">Script:</h4>
            {pdfFile ? (
              <p>Uploaded PDF: {pdfFile.name}</p>
            ) : (
              <p>
                {scriptText
                  ? scriptText.slice(0, 100) + "..."
                  : "No script provided"}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Close
            </button>
            <button
              onClick={() => {
                closeModal();
                navigate("/checkout", {
                  state: {
                    price: calculatePrice(),
                    selectedTime,
                    images,
                    videos,
                    audio: selectedFile,
                    scripts: pdfFile ?? scriptText,
                    categoryId,
                  },
                });
                // Add payment function call here
              }}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Confirm and Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    )
  );
};

  export default SummaryView