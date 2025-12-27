'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import arcLogo from '@/assets/arc_logo_1-removebg-preview.png'
import broomFiLogo from '@/assets/BroomFi logo.png'
import WalletButton from './WalletButton'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full bg-primary-dark border-b border-primary-gray-light/30"
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image 
            src={broomFiLogo}
            alt="BroomFi" 
            width={500} 
            height={300}
            className="h-20 w-auto"
            priority
          />
        </motion.div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Icon 
              icon="mdi:magnify" 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" 
            />
            <input
              type="text"
              placeholder="Search for tokens or positions"
              className="w-full bg-primary-gray border border-primary-gray-light rounded-lg px-10 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-primary-green/50 transition-colors"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <Icon icon="mdi:cog" className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-primary-gray border border-primary-gray-light rounded-lg text-white hover:border-primary-green/50 transition-colors flex items-center gap-2"
          >
            <Image 
              src={arcLogo}
              alt="Arc" 
              width={20} 
              height={20}
              className="w-5 h-5"
            />
            <span>Arc</span>
          </motion.button>

          <WalletButton />
        </div>
      </div>
    </motion.header>
  )
}
