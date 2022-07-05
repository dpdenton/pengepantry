import React, {forwardRef, useEffect, useRef} from 'react';
import classNames from 'classnames';
import {AppAnimation, AppImageProps} from './AppImage.types';

const AppImageBase = forwardRef<AppAnimation, AppImageProps>((props, ref) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const {url} = props;

  useEffect(() => {
    if (ref && typeof ref !== 'function' && imageRef.current) {
      ref.current = new AppImageApi(imageRef.current);
    }
  }, []);

  return (
    <img
      ref={imageRef}
      alt="Image"
      src={url}
      className={classNames('transition-all ease-in-out transform-gpu')}
    />
  );
});

class AppImageApi implements AppAnimation {
  image: HTMLImageElement;
  constructor(image: HTMLImageElement) {
    this.image = image;
  }

  public scale = (value: number) => {
    if (value === 0) {
      this.image.classList.add('scale-0');
      this.image.classList.remove('scale-100');
    } else {
      this.image.classList.remove('scale-0');
      this.image.classList.add('scale-100');
    }
  };
}

export const AppImage = React.memo(AppImageBase);
