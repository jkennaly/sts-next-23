


export default function InstituteMaterialSelector() {
  return (

    <div className="sm:col-span-4">
      <label htmlFor="researcher-material" className="block text-sm font-medium leading-6 text-gray-900">
        Institute Material
      </label>
      <div className="mt-2">
        <select
          id="researcher-material"
          name="researcher-material"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option>Grass</option>
          <option>Tree</option>
          <option>Dirt</option>
          <option>Air</option>
          <option>Sky</option>
          <option>Rock</option>
        </select>
      </div>
    </div>
  )
}