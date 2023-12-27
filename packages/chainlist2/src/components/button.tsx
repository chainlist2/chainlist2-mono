// components/button.tsx

import React from 'react';

interface ButtonProps {
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, variant = 'default', onClick, children }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: '#3490dc', color: '#ffffff' };
      case 'secondary':
        return { backgroundColor: '#718096', color: '#ffffff' };
      default:
        return { backgroundColor: '#e53e3e', color: '#ffffff' };
    }
  };

  return (
    <button
      style={{ ...getButtonStyle(), padding: '8px 16px', borderRadius: '999px', border: 'none' }}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
