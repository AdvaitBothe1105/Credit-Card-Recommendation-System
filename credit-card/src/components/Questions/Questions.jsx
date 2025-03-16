export const Questions = () => {
  return (
    <div className="ques bg-[#edeae7] w-[90%] rounded-lg flex flex-col items-center py-10 shadow-md mt-14">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Just a few more questions before we recommend you the best card!
      </h2>

      {/* Form Section */}
      <div className="form bg-white w-[80%] rounded-lg shadow-lg p-6 mt-6 flex flex-col gap-6">
        {/* Student Question */}
        <div className="flex flex-col items-center border-b pb-4">
          <label className="text-lg font-medium text-gray-700">
            Are you a Student?
          </label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="student" className="w-5 h-5" />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="student" className="w-5 h-5" />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Self-Employed Question */}
        <div className="flex flex-col items-center border-b pb-4">
          <label className="text-lg font-medium text-gray-700">
            Are you self-employed?
          </label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="selfEmployed" className="w-5 h-5" />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="selfEmployed" className="w-5 h-5" />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Travel Frequency Question */}
        <div className="flex flex-col items-center">
          <label className="text-lg font-medium text-gray-700">
            Do you travel frequently?
          </label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="travel" className="w-5 h-5" required/>
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="travel" className="w-5 h-5" required/>
              <span>No</span>
            </label>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button className="bg-[#C49991] text-white py-2 px-6 rounded-lg hover:bg-gray-500 transition">
          Back
        </button>
        <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition">
          Show my Card
        </button>
      </div>
    </div>
  );
};
