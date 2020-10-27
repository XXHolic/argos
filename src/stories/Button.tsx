import React,{useEffect,useState} from 'react';
// import * as Sentry from "@sentry/react";
import Sentry from "./Sentry";
import * as Argos from '../index';
import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export function Button(props: ButtonProps) {
  const {primary,size,backgroundColor,label,...otherProps} = props;

  useEffect(() => {
    Argos.init({url:'http://localhost:6006/'})
    // Sentry.init({
    //   dsn: "https://1ea46c0309124094908fa0eb69e21afb@o366923.ingest.sentry.io/5169726",
    // });
  },[])

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...otherProps}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  size:'medium'
}
