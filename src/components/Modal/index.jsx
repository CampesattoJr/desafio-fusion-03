import { IoClose } from "react-icons/io5";

export const Modal = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null

    return (
        <div className="z-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white max-w-80 min-h-40 p-4 mx-2 rounded relative ">
                <div className="text-center mt-2">
                    <h2 className="text-2xl font-bold">
                        Aviso
                    </h2>
                    <p className="mt-4 text-start text-lg font-medium">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 px-1 rounded-tr-sm text-3xl text-white bg-red-500 hover:bg-red-700 duration-200">
                    <IoClose />
                </button>
            </div>
        </div>
    )
}