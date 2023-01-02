import React from 'react';
import { useFloatingScrollButton } from 'components/@shared/FloatingScrollButton/useFloatingScrollButton';
import { FloatingScrollButtonProps } from 'components/@shared/FloatingScrollButton/FloatingScrollButton.type';
import {
  getFloatingScrollButtonStyle,
  customStyleLottie,
} from 'components/@shared/FloatingScrollButton/FloatingScrollButton.style';
import { FloatingButton, Lottie } from 'components';
import ScrollDownArrowsLottie from 'assets/images/scroll-down-arrows.json';

const FloatingScrollButton = ({
  isShowDownButton = true,
  heightOffset = 0,
}: FloatingScrollButtonProps) => {
  const { theme, isReachedBottom, handleClickFloatingButton } = useFloatingScrollButton({
    heightOffset,
  });

  return (
    <>
      {isShowDownButton || isReachedBottom ? (
        <FloatingButton
          customStyle={getFloatingScrollButtonStyle(theme, isReachedBottom)}
          onClick={handleClickFloatingButton}
        >
          <Lottie animationData={ScrollDownArrowsLottie} customStyle={customStyleLottie} />
        </FloatingButton>
      ) : null}
    </>
  );
};

export default FloatingScrollButton;
