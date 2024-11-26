const ScriptView = ({handlePdfUpload,pdfFile,removePdfFile,MAX_WORDS,scriptText,handleScriptChange,wordCount,clearScriptText}) => {
    return (
      <div className="py-16">
        <h2 className="text-5xl sm:text-2xl font-medium font-poppins text-black mb-8">

          Upload or Write Your Script
        </h2>

        <div className="mb-6">
          <input
            type="file"
            accept="application/pdf"
            onChange={handlePdfUpload}
            className="border p-2"
          />
          {pdfFile && (
            <div className="mt-2 flex items-center space-x-2">
              <p className="text-sm">{pdfFile.name}</p>
              <button
                onClick={removePdfFile}
                className="bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        <p className="text-base text-muted mb-4">
          Or, you can type your script (max {MAX_WORDS} words):
        </p>

        <textarea
          value={scriptText}
          onChange={handleScriptChange}
          placeholder="Type your script here..."
          rows="10"
          className="border w-full p-2 font-roboto"
          disabled={pdfFile !== null} // Disable textarea if PDF is uploaded
        ></textarea>

        <p className="text-sm text-gray-500 mt-2">
          Word Count: {wordCount}/{MAX_WORDS}
        </p>

        {scriptText && (
          <button
            onClick={clearScriptText}
            className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Clear Script
          </button>
        )}
      </div>
    );
  };


  export default ScriptView