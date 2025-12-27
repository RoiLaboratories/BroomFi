import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import PriceTicker from '@/components/PriceTicker'
import Swap from '@/components/Swap'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col h-screen">
        <Header />
        <PriceTicker />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-8">
            <div className="max-w-2xl mx-auto">
              <Swap />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

