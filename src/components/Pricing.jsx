import { Check } from 'lucide-react'

const Pricing = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-300">
            Choose the plan that's right for you and start tracking cryptocurrencies like a pro.
          </p>
        </div>

        <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 flex space-x-10">
          {plans.map((plan) => (
            <div key={plan.name} className="relative p-8 bg-white bg-opacity-10 border border-gray-800 rounded-2xl shadow-lg flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-100">{plan.name}</h3>
                {plan.mostPopular ? (
                  <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                    Most popular
                  </p>
                ) : null}
                <p className="mt-4 flex items-baseline text-black">
                  <span className="text-5xl font-extrabold tracking-tight">${plan.priceMonthly}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-gray-400">{plan.description}</p>

                <ul role="list" className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-6 h-6 text-indigo-200" aria-hidden="true" />
                      <span className="ml-3 text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                  plan.mostPopular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const plans = [
  {
    name: 'Hobby',
    priceMonthly: 0,
    description: 'All the basics for starting your crypto journey',
    features: [
      'Real-time data for top 10 cryptocurrencies',
      'Basic search functionality',
      'Price alerts for 3 coins',
      'Daily market summary',
    ],
    cta: 'Start for free',
    mostPopular: false,
  },
  {
    name: 'Growth',
    priceMonthly: 29,
    description: 'Everything you need for serious crypto tracking',
    features: [
      'Real-time data for top 100 cryptocurrencies',
      'Advanced search and filtering',
      'Price alerts for 20 coins',
      'Hourly market updates',
      'Portfolio tracking for up to 5 wallets',
      'Email notifications',
    ],
    cta: 'Start free trial',
    mostPopular: true,
  },
  {
    name: 'Scale',
    priceMonthly: 99,
    description: 'Advanced features for professional traders',
    features: [
      'Real-time data for all cryptocurrencies',
      'Advanced search with custom parameters',
      'Unlimited price alerts',
      'Real-time market updates',
      'Unlimited portfolio tracking',
      'API access',
      'Dedicated support',
    ],
    cta: 'Contact sales',
    mostPopular: false,
  },
]

export default Pricing