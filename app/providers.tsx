'use client'

import { PrivyProvider } from '@privy-io/react-auth'

export function Providers({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID
  
  if (!appId) {
    throw new Error('NEXT_PUBLIC_PRIVY_APP_ID is not set. Please add it to your .env.local file.')
  }

  return (
    <PrivyProvider
      appId={appId}
      config={{
        appearance: {
          theme: 'dark',
          accentColor: '#BBF7D0',
          walletList: ['metamask', 'wallet_connect', 'coinbase_wallet', 'rainbow'],
        },
        loginMethods: ['wallet', 'email', 'sms'],
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {children}
    </PrivyProvider>
  )
}

