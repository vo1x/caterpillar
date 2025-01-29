import { X } from "lucide-react";


const Modal = ({ setModalVisible, children }) => {
  return (
    <div className="absolute inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col gap-4 rounded-lg bg-[#1c1c1e] p-4">
        <button className="self-end text-2xl" onClick={() => setModalVisible(false)}>
          <X></X>
        </button>
        
        {children}
      </div>
    </div>
  );
};

export default Modal;
