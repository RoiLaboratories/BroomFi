'use client'

import { usePrivy } from '@privy-io/react-auth'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface WalletButtonProps {
  className?: string
  fullWidth?: boolean
}

export default function WalletButton({ className = '', fullWidth = false }: WalletButtonProps) {
  const { ready, authenticated, login, logout, user } = usePrivy()

  const handleClick = () => {
    if (authenticated) {
      logout()
    } else {
      login()
    }
  }

  if (!ready) {
    return (
      <motion.button
        disabled
        className={`${fullWidth ? 'w-full' : ''} px-6 py-2.5 bg-transparent border-2 border-primary-green text-primary-green font-semibold rounded-lg opacity-50 cursor-not-allowed ${className}`}
      >
        Loading...
      </motion.button>
    )
  }

  const address = user?.wallet?.address
  const displayAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : 'Connect wallet'

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`${fullWidth ? 'w-full' : ''} px-6 py-2.5 bg-transparent border-2 border-primary-green text-primary-green font-semibold rounded-lg hover:bg-primary-green/10 transition-colors flex items-center justify-center gap-2 ${className}`}
    >
      {authenticated ? (
        <>
          <Icon icon="mdi:wallet" className="w-5 h-5" />
          <span>{displayAddress}</span>
        </>
      ) : (
        <span>Connect wallet</span>
      )}
    </motion.button>
  )
}

