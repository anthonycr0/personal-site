import React from 'react';
import styles from './TextLink.module.scss';

type Props = {
  variant: 'primary' | 'secondary';
} & React.HTMLProps<HTMLAnchorElement>

export const TextLink = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { href, onClick, variant, children } = props;
  return <a className={`${styles[variant]}`} href={href} onClick={onClick} ref={ref}>{children}</a>
})

TextLink.displayName = 'TextLink';
