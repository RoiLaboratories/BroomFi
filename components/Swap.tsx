'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { usePrivy } from '@privy-io/react-auth'
import arcLogo from '@/assets/arc_logo_1-removebg-preview.png'
import usdcLogo from '@/assets/USDC-fotor-bg-remover-2025111075935.png'
import WalletButton from './WalletButton'

interface Token {
  symbol: string
  logo: any
  balance: string
}

export default function Swap() {
  const { authenticated, login } = usePrivy()
  const [fromToken, setFromToken] = useState<Token>({
    symbol: 'ARC',
    logo: arcLogo,
    balance: '0',
  })
  const [toToken, setToToken] = useState<Token>({
    symbol: 'USDC',
    logo: usdcLogo,
    balance: '0',
  })
  const [fromAmount, setFromAmount] = useState('0.00')
  const [toAmount, setToAmount] = useState('0.00')

  const handleSwap = () => {
    // Swap logic will go here
    console.log('Swapping', fromAmount, fromToken.symbol, 'to', toAmount, toToken.symbol)
  }

  const isSwapDisabled = !authenticated || !fromAmount || parseFloat(fromAmount) <= 0 || fromAmount === '0.00'

  const handleTokenSwap = () => {
    const temp = fromToken
    setFromToken(toToken)
    setToToken(temp)
    const tempAmount = fromAmount
    setFromAmount(toAmount)
    setToAmount(tempAmount)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Main Swap Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary-gray border border-primary-gray-light rounded-2xl p-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Swap</h2>
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Icon icon="mdi:cog" className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Icon icon="mdi:refresh" className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* From Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-gray-400 text-sm">From</label>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>{fromToken.balance} {fromToken.symbol}</span>
              <button className="text-primary-green hover:text-primary-green/80">
                50%
              </button>
              <button className="text-primary-green hover:text-primary-green/80">
                Max
              </button>
            </div>
          </div>
          <div className="bg-primary-dark border border-primary-gray-light rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-primary-gray border border-primary-gray-light rounded-lg hover:border-primary-green/50 transition-colors"
              >
              <Image 
                src={fromToken.logo}
                alt={fromToken.symbol} 
                width={20} 
                height={20}
                className="w-5 h-5"
              />
                <span className="text-white font-semibold">
                  {fromToken.symbol}
                </span>
                <Icon icon="mdi:chevron-down" className="w-4 h-4 text-gray-400" />
              </motion.button>
            </div>
            <div>
              <input
                type="text"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="w-full bg-transparent text-3xl font-bold text-white focus:outline-none mb-1"
                placeholder="0.00"
              />
              <p className="text-gray-400 text-sm">$0</p>
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-2 relative z-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleTokenSwap}
            className="p-3 bg-primary-dark border-2 border-primary-gray-light rounded-full hover:border-primary-green transition-colors"
          >
            <Icon icon="mdi:arrow-down" className="w-5 h-5 text-primary-green" />
          </motion.button>
        </div>

        {/* To Section */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-gray-400 text-sm">To</label>
            <span className="text-sm text-gray-400">
              {toToken.balance} {toToken.symbol}
            </span>
          </div>
          <div className="bg-primary-dark border border-primary-gray-light rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-primary-gray border border-primary-gray-light rounded-lg hover:border-primary-green/50 transition-colors"
              >
              <Image 
                src={toToken.logo}
                alt={toToken.symbol} 
                width={20} 
                height={20}
                className="w-5 h-5"
              />
                <span className="text-white font-semibold">
                  {toToken.symbol}
                </span>
                <Icon icon="mdi:chevron-down" className="w-4 h-4 text-gray-400" />
              </motion.button>
            </div>
            <div>
              <input
                type="text"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="w-full bg-transparent text-3xl font-bold text-white focus:outline-none mb-1"
                placeholder="0.00"
              />
              <p className="text-gray-400 text-sm">$0</p>
            </div>
          </div>
        </div>

        {/* Connect Wallet / Swap Button */}
        <div className="mt-6">
          {authenticated ? (
            <motion.button
              whileHover={!isSwapDisabled ? { scale: 1.02 } : {}}
              whileTap={!isSwapDisabled ? { scale: 0.98 } : {}}
              onClick={handleSwap}
              disabled={isSwapDisabled}
              className={`w-full py-4 bg-transparent border-2 border-primary-green text-primary-green font-semibold rounded-xl transition-colors ${
                isSwapDisabled
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-primary-green/10'
              }`}
            >
              Swap
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={login}
              className="w-full py-4 bg-transparent border-2 border-primary-green text-primary-green font-semibold rounded-xl hover:bg-primary-green/10 transition-colors"
            >
              Connect wallet
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Token Price Cards */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-primary-gray border border-primary-gray-light rounded-xl p-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-dark border border-primary-gray-light rounded-lg flex items-center justify-center overflow-hidden">
              <Image 
                src={arcLogo}
                alt="ARC" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
            </div>
            <div>
              <p className="text-white font-semibold">ARC</p>
              <p className="text-primary-green text-sm">$3.00</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-primary-gray border border-primary-gray-light rounded-xl p-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-dark border border-primary-gray-light rounded-lg flex items-center justify-center overflow-hidden">
              <Image 
                src={usdcLogo}
                alt="USDC" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
            </div>
            <div>
              <p className="text-white font-semibold">USDC</p>
              <p className="text-primary-green text-sm">$1.00</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
