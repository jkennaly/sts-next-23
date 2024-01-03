


export default function SensorSelector() {
    return (

<div className="sm:col-span-4">
<label htmlFor="sensor" className="block text-sm font-medium leading-6 text-gray-900">
  Sensor
</label>
<div className="mt-2">
  <select
    id="sensor"
    name="sensor"
    autoComplete="country-name"
    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
  >
    <option>Eye</option>
    <option>Ear</option>
    <option>Nose</option>
    <option>Toungue</option>
    <option>Finger</option>
  </select>
</div>
</div>
    )}