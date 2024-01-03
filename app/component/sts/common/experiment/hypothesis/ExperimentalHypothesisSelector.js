import { useState } from 'react'

import HypothesisSelector from './HypothesisSelector'


export default function ExperimentalHypothesisSelector() {
  const [hypo, setHypo] = useState('None')
  const handleHypoChange = (e) => {
    const src = e.target.value
    setHypo(src)
  }

  return (
    <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div className="px-4 py-6 sm:p-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <HypothesisSelector 
            onChange={handleHypoChange}
          />
        </div>
      </div>
    </form>
  )
}