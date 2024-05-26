import CancelIcon from "@mui/icons-material/Cancel";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

// eslint-disable-next-line react/prop-types
const Modal = ({ showMenu, setShowMenu }) => {
  const handleModalCloseButton = () => {
    setShowMenu(false);
  };
  return (
    <dialog open={showMenu} className="bg-[#100e0a] z-10 w-full ">
      <div className="flex  justify-end items-center h-12 gap-4 w-11/12">
        <div className="flex justify-center items-center gap-2 text-white">
          <a href="src/assets/tray trap menu.pdf" download>
            Download menu
          </a>
          <a href="src/assets/tray trap menu.pdf" download>
            <ArrowCircleDownIcon className="w-12 h-12 text-white cursor-pointer" />
          </a>
        </div>
        <div className="flex justify-center items-center text-white">
          <CancelIcon
            autoFocus
            onClick={handleModalCloseButton}
            className="text-white"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <img
          src="src/assets/tray trap menu_page-0001.jpg"
          alt="Menu Item"
          className="w-full h-full md:w-[600px] md:h-[600px] "
        />
      </div>
    </dialog>
  );
};

export default Modal;
