import { useContext } from "react";
import { NextComponentType } from "next";
import { FeedbackContext } from "../context/feedbackContext";
import { Props } from "../types/generic";
// import { Logo } from "@/assets/icons/logo";

const Loader: NextComponentType = (props: Props): JSX.Element => {
  const { isOpenLoader, setIsOpenLoader } = useContext(FeedbackContext);

  return isOpenLoader ? (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      {/* <Logo className="animate-loader" size={300} fill="#ffff" /> */}
      <button onClick={() => setIsOpenLoader(false)}>Cancel</button>
    </div>
  ) : (
    <></>
  );
};

export default Loader;
