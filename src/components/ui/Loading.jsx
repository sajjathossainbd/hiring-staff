import Lottie from "lottie-react";
import loading from "../../../public/loading2.json"

function Loading() {
  return <div className="flex lg:h-[400px] justify-center items-center lg:mt-20 mx-auto">
    <Lottie animationData={loading} ></Lottie>
  </div>;
}

export default Loading;
