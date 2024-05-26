import { useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuButton = () => {
    setShowMenu(true);
  };
  return (
    <>
      <nav className="flex w-full justify-around items-center bg-[#100e0a] h-12">
        {/* <img
        src="src/assets/logo.jpg"
        alt="Logo"
        className="w-32 h-14 object-fill "
      /> */}
        <h1 className="text-white font-display text-2xl">TrayTrap Foods</h1>
        <span></span>
        <span></span>
        <button
          className="text-white font-menuitem text-sm font-bold"
          onClick={handleMenuButton}
        >
          MealPlan
        </button>
      </nav>
      <Modal showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar;
