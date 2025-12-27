'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import arcLogo from '@/assets/arc_logo_1-removebg-preview.png'
import usdcLogo from '@/assets/USDC-fotor-bg-remover-2025111075935.png'
import usdtLogo from '@/assets/usdt_logo-removebg-preview.png'
import ethLogo from '@/assets/Eth_logo_3-removebg-preview.png'
import uniLogo from '@/assets/uniswap-removebg-preview.png'

interface TokenPrice {
  symbol: string
  price: string
  change: string
  logo?: any
  icon?: string
}

const tokens: TokenPrice[] = [
  { 
    symbol: 'ARC', 
    price: '$3.00', 
    change: '+15.9%', 
    logo: arcLogo
  },
  { 
    symbol: 'USDC', 
    price: '$1.00', 
    change: '+0.9%', 
    logo: usdcLogo
  },
  { 
    symbol: 'USDT', 
    price: '$1.00', 
    change: '+0.9%', 
    logo: usdtLogo
  },
  { 
    symbol: 'ETH', 
    price: '$3,200.00', 
    change: '+10.9%', 
    logo: ethLogo
  },
  { 
    symbol: 'UNI', 
    price: '$3.00', 
    change: '+10.9%', 
    logo: uniLogo
  },
]

export default function PriceTicker() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(true)
  const [direction, setDirection] = useState<'left' | 'right'>('left')

  useEffect(() => {
    const scrollContainer = scrollRef.current
    const content = contentRef.current
    if (!scrollContainer || !content) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.8
    let currentDirection = direction

    const scroll = () => {
      if (!isScrolling) {
        animationId = requestAnimationFrame(scroll)
        return
      }

      const maxScroll = content.scrollWidth - scrollContainer.clientWidth

      if (currentDirection === 'left') {
        scrollPosition += scrollSpeed
        if (scrollPosition >= maxScroll) {
          currentDirection = 'right'
          setDirection('right')
        }
      } else {
        scrollPosition -= scrollSpeed
        if (scrollPosition <= 0) {
          scrollPosition = 0
          currentDirection = 'left'
          setDirection('left')
        }
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isScrolling, direction])

  // Duplicate tokens for seamless scrolling
  const duplicatedTokens = [...tokens, ...tokens, ...tokens]

  return (
    <div className="w-full bg-primary-dark border-b border-primary-gray-light/30 overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex items-center gap-2 px-6 py-3 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setIsScrolling(false)}
        onMouseLeave={() => setIsScrolling(true)}
      >
        <div ref={contentRef} className="flex items-center gap-2">
          {duplicatedTokens.map((token, index) => (
            <motion.div
              key={`${token.symbol}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 px-4 py-2 bg-primary-gray border border-primary-gray-light rounded-lg hover:border-primary-green/50 transition-colors whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              {token.logo ? (
                <Image 
                  src={token.logo} 
                  alt={token.symbol} 
                  width={20} 
                  height={20}
                  className="w-5 h-5"
                />
              ) : (
                <span className="text-white font-semibold">{token.icon}</span>
              )}
              <span className="text-white font-semibold">
                ${token.symbol}
              </span>
              <span className="text-white">{token.price}</span>
              <span className="text-primary-green text-sm">{token.change}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
