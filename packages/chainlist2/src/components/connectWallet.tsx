// src/components/ui/connectWallet.tsx

import React from 'react';

interface ConnectWalletProps {
  className?: string;
  onClick?: () => void;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ className, onClick }) => {
  const getButtonStyle = () => ({
    backgroundColor: '#ef4444',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '999px',
    border: 'none',
  });

  return (
    <button style={getButtonStyle()} className={className} onClick={onClick}>
      Connect Wallet
    </button>
  );
};

export default ConnectWallet;
