import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, TrendingUp, Search, BarChart2, RefreshCcw } from 'lucide-react'

const Features = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 sm:text-6xl sm:tracking-tight lg:text-7xl">
            Powerful Features for Crypto Enthusiasts
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
            Stay ahead of the market with our advanced cryptocurrency tracking and analysis tools.
            Unleash the power of data-driven decisions.
          </p>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-5 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-gray-800 ring-1 ring-gray-700 rounded-3xl">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-700 text-white mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.name}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link
            to='/'
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105"
          >
            Get started
            <ArrowRight className="ml-3 -mr-1 h-6 w-6 animate-pulse" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    name: 'Real-time Data',
    description: 'Get up-to-the-second information on cryptocurrency prices, market caps, and more. Stay informed with lightning-fast updates.',
    icon: Zap,
  },
  {
    name: 'Multi-currency Support',
    description: 'View crypto data in your preferred fiat currency, with support for USD, EUR, GBP, and JPY. Seamlessly switch between currencies.',
    icon: RefreshCcw,
  },
  {
    name: 'Advanced Search',
    description: 'Easily find and track your favorite cryptocurrencies with our powerful search feature. Filter by name, symbol, or market cap.',
    icon: Search,
  },
  {
    name: 'Detailed Analytics',
    description: 'Dive deep into cryptocurrency performance with comprehensive charts and analysis tools. Visualize trends and make informed decisions.',
    icon: BarChart2,
  },
  {
    name: 'Market Trends',
    description: 'Stay informed about the latest market trends and potential investment opportunities. Spot emerging patterns before they become mainstream.',
    icon: TrendingUp,
  },
  {
    name: 'Secure and Reliable',
    description: 'Rest easy knowing your data is protected with state-of-the-art security measures. Your privacy and security are our top priorities.',
    icon: Shield,
  },
]

export default Features;

