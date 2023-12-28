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
        return { backgroundColor: '#3490dc', color: '#ffffff', fontSize: '20px' };
      case 'secondary':
        return { backgroundColor: '#718096', color: '#ffffff', fontSize: '20px' };
      default:
        return { backgroundColor: '#e53e3e', color: '#ffffff', fontSize: '20px' };
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
