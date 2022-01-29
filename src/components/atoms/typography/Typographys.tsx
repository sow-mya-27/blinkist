import React from 'react';
import './typography.css';
type TypographysProps = {
  variant: string;
  content: string;
  styles?: React.CSSProperties;
};
export default function Typographys({
  variant,
  content,
  styles,
}: TypographysProps) {
  return (
    <div className={variant} style={styles}>
      {content}
    </div>
  );
}
