import { useState } from 'react'

import FocusSourceSelector from './FocusSourceSelector'
import ResearcherFocusSelector from './ResearcherFocusSelector'
import InstituteFocusSelector from './InstituteFocusSelector'


export default function ExperimentalFocusSelector() {
  const [matSrc, setMatSrc] = useState('None')
  const handleMatSrcChange = (e) => {
    const src = e.target.value
    setMatSrc(src)
  }

  return (
    <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div className="px-4 py-6 sm:p-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <FocusSourceSelector 
            onChange={handleMatSrcChange}
          />
          {
            matSrc === 'Researcher' && <ResearcherFocusSelector />
          }
          {
            matSrc === 'Institute' && <InstituteFocusSelector descriptor="Primary" />
          }
        </div>
      </div>
    </form>
  )
}