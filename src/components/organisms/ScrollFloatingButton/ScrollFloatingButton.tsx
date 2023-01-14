import React from 'react';
import { useScrollFloatingButton } from './useScrollFloatingButton';
import { ScrollFloatingButtonProps } from './ScrollFloatingButton.type';
import {
  getButtonCustomStyle,
  wrapperCustomStyle,
  customStyleLottie,
} from './ScrollFloatingButton.style';
import { FloatingButton, Lottie } from 'components';
import ScrollDownArrowsLottie from 'assets/images/scroll-down-arrows.json';
import { LAYER } from 'styles/css';

const ScrollFloatingButton = ({
  isShowDownButton = true,
  heightOffset = 0,
}: ScrollFloatingButtonProps) => {
  const { theme, isReachedBottom, handleClickFloatingButton } = useScrollFloatingButton({
    heightOffset,
  });

  return (
    <>
      {isShowDownButton || isReachedBottom ? (
        <FloatingButton
          layer={LAYER.SCROLL_FLOATING_BUTTON}
          wrapperCustomStyle={wrapperCustomStyle}
          buttonCustomStyle={getButtonCustomStyle(theme, isReachedBottom)}
          onClick={handleClickFloatingButton}
        >
          <Lottie animationData={ScrollDownArrowsLottie} customStyle={customStyleLottie} />
        </FloatingButton>
      ) : null}
    </>
  );
};

export default ScrollFloatingButton;
