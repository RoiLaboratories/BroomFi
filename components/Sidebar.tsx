'use client'

import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface NavItem {
  label: string
  icon: string
  active?: boolean
}

const navItems: NavItem[] = [
  { label: 'Trade', icon: 'mdi:arrow-left-right', active: true },
  { label: 'AI agent', icon: 'mdi:robot', active: false },
  { label: 'Buy crypto', icon: 'mdi:credit-card', active: false },
  { label: 'Wallet', icon: 'mdi:wallet', active: false },
]

const bottomItems: NavItem[] = [
  { label: 'Download mobile app', icon: 'mdi:download' },
  { label: 'Contact us', icon: 'mdi:headphones' },
]

const socialIcons = [
  { icon: 'mdi:twitter', label: 'Twitter' },
  { icon: 'mdi:send', label: 'Telegram' },
  { icon: 'mdi:youtube', label: 'YouTube' },
]

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 bg-primary-dark border-r border-primary-gray-light/30 h-screen flex flex-col"
    >
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative ${
                item.active
                  ? 'text-primary-green'
                  : 'text-gray-400 hover:text-primary-green hover:bg-primary-gray'
              }`}
            >
              {item.active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary-green rounded-r-full" />
              )}
              <Icon icon={item.icon} className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Dividing Line */}
        <div className="my-6 border-t border-primary-gray-light/30"></div>

        <div className="space-y-2">
          {bottomItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (index + navItems.length) * 0.1 }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-primary-green hover:bg-primary-gray transition-colors"
            >
              <Icon icon={item.icon} className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">{item.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="mt-4 flex items-center gap-4 px-4">
          {socialIcons.map((social, index) => (
            <motion.button
              key={social.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index + navItems.length + bottomItems.length) * 0.1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-green transition-colors"
              aria-label={social.label}
            >
              <Icon icon={social.icon} className="w-4 h-4" />
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.aside>
  )
}
