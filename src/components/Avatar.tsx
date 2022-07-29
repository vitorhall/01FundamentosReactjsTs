import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvtatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  
}

export function Avatar({hasBorder = true, ...props}: AvtatarProps) {
  return(
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}