import { useState } from 'react'

import MaterialSourceSelector from './MaterialSourceSelector'
import ResearcherMaterialSelector from './ResearcherMaterialSelector'
import InstituteMaterialSelector from './InstituteMaterialSelector'


export default function ExperimentalMaterialSelector() {
  const [matSrc, setMatSrc] = useState('None')
  const handleMatSrcChange = (e) => {
    const src = e.target.value
    setMatSrc(src)
  }

  return (
    <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div className="px-4 py-6 sm:p-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <MaterialSourceSelector 
            onChange={handleMatSrcChange}
          />
          {
            matSrc === 'Researcher' && <ResearcherMaterialSelector />
          }
          {
            matSrc === 'Institute' && <InstituteMaterialSelector />
          }
        </div>
      </div>
    </form>
  )
}