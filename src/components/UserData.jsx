import axios from "axios";
import { useState } from "react";

const UserData = () => {
  const [userName, setUserName] = useState("");
  const [userPhoneNo, setUserPhoneNo] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userFoodChoice, setUserFoodChoice] = useState("");
  const [userMealPlan, setUserMealPlan] = useState("");
  const [validPhoneNo, setValidPhoneNo] = useState(true);
  const [formSubmitionSuccesfull, setFormSubmitionSuccesfull] = useState(false);
  const [content, setContent] = useState("");

  const checkResponse = async (payload) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/user/register",
        payload
      );
      return res;
    } catch (error) {
      console.log(error);
      setFormSubmitionSuccesfull(false);
      console.log(formSubmitionSuccesfull);
      setContent("Server Not responding Kindly Fill This Google Form");
    }
  };
  const handleUserFormData = async (e) => {
    e.preventDefault();
    if (validPhoneNo) {
      const payload = {
        userName,
        userPhoneNo,
        userAddress,
        userFoodChoice,
        userMealPlan,
      };
      console.log(userFoodChoice, userMealPlan);
      const res = await checkResponse(payload);

      console.log(res);
      if (res?.status === 201) {
        setFormSubmitionSuccesfull(true);
        setContent("Thank you , We will reach you");
        setUserName("");
        setUserPhoneNo("");
        setUserAddress("");
        setUserFoodChoice("");
        setUserMealPlan("");
      }
      if (res === undefined) {
        setFormSubmitionSuccesfull(false);
        console.log(formSubmitionSuccesfull);
        setContent("Server Not responding Kindly Fill This Google Form");
      }
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
          action=""
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
                id="veg"
                name="food"
                value="veg"
                checked={"veg" === userFoodChoice}
                required
                onChange={(e) => setUserFoodChoice(e.target.value)}
              />
              <label htmlFor="veg">Veg</label>
            </div>
            <div>
              <input
                type="radio"
                id="nonveg"
                name="food"
                value="nonveg"
                checked={"nonveg" === userFoodChoice}
                required
                onChange={(e) => setUserFoodChoice(e.target.value)}
              />
              <label htmlFor="nonveg">Non Veg</label>
            </div>
          </div>
          <div className="flex h-12 w-full font-medium bg-[#ffb159] rounded-3xl justify-between items-center px-4 text-white">
            <div>
              <label htmlFor="both">Meal Plan</label>
            </div>
            <div className="flex flex-col">
              <input
                type="radio"
                id="both"
                name="mealplan"
                value="both"
                checked={"both" === userMealPlan}
                required
                onChange={(e) => setUserMealPlan(e.target.value)}
              />
              <label htmlFor="both">Both</label>
            </div>
            <div className="flex flex-col">
              <input
                type="radio"
                id="lunch"
                name="mealplan"
                value="lunch"
                checked={"lunch" === userMealPlan}
                required
                onChange={(e) => setUserMealPlan(e.target.value)}
              />
              <label htmlFor="lunch">Lunch</label>
            </div>
            <div className="flex flex-col">
              <input
                type="radio"
                id="dinner"
                name="mealplan"
                value="dinner"
                checked={"dinner" === userMealPlan}
                required
                onChange={(e) => setUserMealPlan(e.target.value)}
              />
              <label htmlFor="dinner">Dinner</label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="h-10 w-full text-white px-4  bg-[#ffb159] rounded-3xl"
            >
              Get a callback
            </button>
            <p className="text-white text-xl font-formhead font-bold">
              {formSubmitionSuccesfull ? content : ""}
            </p>
            <p className="text-white text-xl font-formhead font-bold">
              {!formSubmitionSuccesfull ? content : ""}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserData;
