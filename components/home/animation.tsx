import lottieJson from "@/public/lottie-animation.json";
import Lottie from "react-lottie-player";

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 500, height: 400 }}
    />
  );
}
