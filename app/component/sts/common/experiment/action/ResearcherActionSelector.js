


export default function ResearcherActionSelector({onChange, researcher}) {
    return (
  
      <div className="sm:col-span-4">
        <label htmlFor="experimental-action" className="block text-sm font-medium leading-6 text-gray-900">
          Researcher Action
        </label>
        <div className="mt-2">
          <select
            onChange={onChange}
            id="experimental-action"
            name="experimental-action"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>None</option>
            {
                researcher.actions.map((action) => {
                    return (
                    <option key={action.id} value={action.name}>{action.value}</option>
                    )
                })
            }
          </select>
        </div>
      </div>
    )
  }