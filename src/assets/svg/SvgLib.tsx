import { ReactComponent as Momo } from './momo_ebbd8eb9b0.svg';
import { ReactComponent as Amex } from './amex_2610a984a5.svg';
import { ReactComponent as Jcb } from './jcb_7655e615ce.svg';
import { ReactComponent as Mtc } from './mtc_1ed684ff7c.svg';
import { ReactComponent as Visa } from './visa_fdc3324c35.svg';
import { ReactComponent as Vnpay } from './vnpay_1f73f546c4.svg';
import { ReactComponent as Zalopay } from './zalopay_884e503cf9.svg';
import { ReactComponent as Zalo } from './icons8-zalo.svg';
import React from 'react';

const SvgComponents = (SvgElement: JSX.Element) => {
  const WrappedComponent = ({
    size,
    border = false,
    color = 'black',
  }: {
    size: number;
    border?: boolean;
    color?: string;
  }) =>
    border ? (
      <div
        style={{
          width: 'fit-content',
          maxHeight: 'fit-content',
          margin: '2px',
          border: '1px solid gray',
          borderRadius: '5px',
          padding: '2px',
          color: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {React.cloneElement(SvgElement, { height: size, fill: 'currentColor' })}
      </div>
    ) : (
      <div
        style={{
          width: 'fit-content',
          maxHeight: 'fit-content',
          margin: '2px',
          color: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {React.cloneElement(SvgElement, { height: size, fill: 'currentColor' })}
      </div>
    );

  WrappedComponent.displayName = `Svg${SvgElement.type.name}`;
  return WrappedComponent;
};

export const SvgMomo = SvgComponents(<Momo />);
export const SvgAmex = SvgComponents(<Amex />);
export const SvgJcb = SvgComponents(<Jcb />);
export const SvgMtc = SvgComponents(<Mtc />);
export const SvgVisa = SvgComponents(<Visa />);
export const SvgVNPay = SvgComponents(<Vnpay />);
export const SvgZaloPay = SvgComponents(<Zalopay />);
export const SvgZalo = SvgComponents(<Zalo />);
