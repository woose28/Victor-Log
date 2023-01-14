import { LottieProps } from './Lottie.type';
import { useLottie } from 'components/atoms/Lottie/useLottie';

const Lottie = ({ animationData, customStyle }: LottieProps) => {
  const { element } = useLottie({ animationData });

  return <div css={customStyle} ref={element}></div>;
};

export default Lottie;
