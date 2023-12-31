import { useLottie, useLottieInteractivity } from "lottie-react";
import logo from '../../lottie/navbarAnimation.json'

const options = {
  animationData: logo,
};

const HeaderAnimation = () => {
  const lottieObj = useLottie(options);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "seek",
        frames: [0,10],
      },
      {
        visibility: [0.2, 0.7],
        type: "seek",
        frames: [11, 30],
      },
      {
        visibility: [0.7, 1.0],
        type: "seek",
        frames: [31, 49],
      },
    ],
  });

  return Animation;
};

export default HeaderAnimation;