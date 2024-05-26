import { useState } from "react";

const UserDataGoogleForm = () => {
  const [userName, setUserName] = useState("");
  const [userPhoneNo, setUserPhoneNo] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userFoodChoice, setUserFoodChoice] = useState("");
  const [userMealPlan, setUserMealPlan] = useState("");
  const [validPhoneNo, setValidPhoneNo] = useState(true);
  const [formSubmitionSuccesfull, setFormSubmitionSuccesfull] = useState(false);

  const handleUserFormData = () => {
    if (validPhoneNo) {
      console.log(
        userName,
        userPhoneNo,
        userAddress,
        userFoodChoice,
        userMealPlan
      );
      setTimeout(() => {
        setUserName("");
        setUserPhoneNo("");
        setUserAddress("");
        setUserFoodChoice("");
        setUserMealPlan("");
        setFormSubmitionSuccesfull(true);
      }, 1000);
    }
  };
  return (
    <section className="flex w-full justify-center items-center bg-[#100e0a] pt-4 ">
      <div className="bg-[#FF8911] w-full rounded-tl-3xl rounded-tr-3xl flex flex-col md:flex-row justify-around items-center p-4">
        <h1 className="text-white text-2xl font-formhead font-bold w-11/12 mb-4 md:text-center">
          From our kitchen to yours, <br />
          <span className="text-black">with love</span>
        </h1>
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdHjjtFsqS3zEyKHHTwr7JFYasWifJ4Z13_iETeFenlcK6j8Q/formResponse"
          method="post"
          target="_blank"
          className="w-11/12 flex flex-col gap-4 justify-center items-center"
          onSubmit={handleUserFormData}
        >
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Your name"
              className="bg-[#ffb159] focus:border-none border-none h-12 font-medium text-black rounded-3xl placeholder-white px-4"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="entry.2005620554"
            />
          </div>
          <div className="flex flex-col w-full">
            {validPhoneNo ? (
              ""
            ) : (
              <p className="text-red-600 font-semibold text-center mb-2">
                Please Enter Valid Phone Number
              </p>
            )}
            <input
              type="number"
              placeholder="Your Phone No"
              className="bg-[#ffb159] h-12 font-medium focus:border-2 focus:border-red-700 rounded-3xl placeholder-white px-4 "
              required
              value={userPhoneNo}
              name="entry.1065046570"
              onChange={(e) => {
                setUserPhoneNo(e.target.value);
              }}
              onKeyUp={() => {
                if (userPhoneNo.length == 10) {
                  setValidPhoneNo(true);
                } else {
                  setValidPhoneNo(false);
                }
              }}
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Your Address"
              className="bg-[#ffb159] h-12 font-medium text-black rounded-3xl placeholder-white px-4"
              required
              name="entry.1166974658"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </div>
          <div className="flex h-12 w-full font-medium bg-[#ffb159] rounded-3xl justify-between items-center px-4 text-white">
            <div>
              <label htmlFor="veg">Food Choice</label>
            </div>
            <div>
              <input
                type="radio"
                id="Veg"
                name="entry.839337160"
                value="Veg"
                checked={"Veg" === userFoodChoice}
                required
                onChange={(e) => setUserFoodChoice(e.target.value)}
              />
              <label htmlFor="Veg">Veg</label>
            </div>
            <div>
              <input
                type="radio"
                id="Non Veg"
                name="entry.839337160"
                value="Non Veg"
                checked={"Non Veg" === userFoodChoice}
                required
                onChange={(e) => setUserFoodChoice(e.target.value)}
              />
              <label htmlFor="Non Veg">Non Veg</label>
            </div>
          </div>
          <div className="flex h-12 w-full font-medium bg-[#ffb159] rounded-3xl justify-between items-center px-4 text-white">
            <div>
              <label htmlFor="Both">Meal Plan</label>
            </div>
            <div className="flex flex-col">
              <input
                type="radio"
                id="Both"
                name="entry.1311169687"
                value="Both"
                checked={"Both" === userMealPlan}
                required
                onChange={(e) => setUserMealPlan(e.target.value)}
              />
              <label htmlFor="Both">Both</label>
            </div>
            <div className="flex flex-col">
              <input
                type="radio"
                id="Lunch"
                name="entry.1311169687"
                value="Lunch"
                checked={"Lunch" === userMealPlan}
                required
                onChange={(e) => setUserMealPlan(e.target.value)}
              />
              <label htmlFor="Lunch">Lunch</label>
            </div>
            <div className="flex flex-col">
              <input
                type="radio"
                id="Dinner"
                name="entry.1311169687"
                value="Dinner"
                checked={"Dinner" === userMealPlan}
                required
                onChange={(e) => setUserMealPlan(e.target.value)}
              />
              <label htmlFor="Dinner">Dinner</label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="h-10 w-full text-white px-4 bg-[#ffb159] rounded-3xl  disabled:cursor-not-allowed"
              disabled={!validPhoneNo}
            >
              Get a callback
            </button>
          </div>
          <p className="text-white font-bold text-2xl">
            {formSubmitionSuccesfull ? "Thank you For submitting Form" : null}
          </p>
        </form>
      </div>
    </section>
  );
};

export default UserDataGoogleForm;
