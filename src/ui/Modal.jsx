import ReactDOM from "react-dom";
import SidebarLinks from "./SidebarLinks";
import logo from "/imgs/logoBlack.svg";
export function SidebarModal({ isOpen, onCancel }) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className=" fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-50  ">
      <div className="bg-white  rounded-md absolute top-0 left-0 h-full w-full sm:w-1/2 text-stone-600 ">
        <div className="relative p-2 ">
          <button
            className="text-4xl absolute top-1 right-2"
            onClick={onCancel}
          >
            &times;
          </button>
          <div className="mt-4 ">
            <img src={logo} alt="Maskn Logo" className="w-36 mb-4" />

            <SidebarLinks onClick={onCancel} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
