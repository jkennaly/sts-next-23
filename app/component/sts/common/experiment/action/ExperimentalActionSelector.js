import { useState } from 'react'

import ActorSelector from './ActorSelector'
import ResearcherActionSelector from './ResearcherActionSelector'
import { selectResearcher } from '@/lib/selecters'
import { useSelector } from 'react-redux'


export default function ExperimentalActionSelector() {
  const [actor, setActor] = useState('None')
  const [action, setAction] = useState('None')

  const researcher = useSelector(selectResearcher)

  const handleActorChange = (e) => {
    const src = e.target.value
    setActor(src)
  }
  const handleActionChange = (e) => {
    const src = e.target.value
    setAction(src)
  }

  return (
    <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div className="px-4 py-6 sm:p-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <ActorSelector 
            onChange={handleActorChange}
          />
          { 
            !!researcher && actor === 'Researcher' && <ResearcherActionSelector
              onChange={handleActionChange}
              researcher={researcher}
            />
          }
        </div>
      </div>
    </form>
  )
}