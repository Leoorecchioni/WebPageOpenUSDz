import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        interactive?: boolean;
      }, HTMLElement>;
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        'ios-src'?: string;
        poster?: string;
        'camera-controls'?: boolean | string;
        ar?: boolean | string;
        'auto-rotate'?: boolean | string;
        'shadow-intensity'?: string;
        autoplay?: boolean | string;
      }, HTMLElement>;
    }
  }
}
