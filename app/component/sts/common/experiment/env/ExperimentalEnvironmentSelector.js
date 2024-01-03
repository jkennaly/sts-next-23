
import ContextSelector from './ContextSelector'
import ContainmentSelector from './ContainmentSelector'
import SensorSelector from './SensorSelector'

export default function ExperimentalEnvironmentSelector() {
    return (
        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <ContextSelector />
              <ContainmentSelector />
              <SensorSelector />
            </div>
          </div>
        </form>

    )}