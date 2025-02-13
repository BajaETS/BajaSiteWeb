import React, { useState } from 'react';
import { TTooltipProps } from './interface';



const Tooltip = (props: TTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const {text, children} = props

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && text && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-[10rem] px-3 py-2 text-sm text-white bg-neutral-700 rounded-md shadow-md opacity-100 transition-opacity duration-300 animate-fadeIn">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
