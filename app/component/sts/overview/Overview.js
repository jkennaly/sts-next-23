import Link from "next/link"

export default function Overview() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/pages/sts/design/experiment">
        <li 
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
          <h3 className="truncate text-sm font-medium text-gray-900">Design an Experiment</h3>
          </div>
        </li>
        </Link>
    </ul>
  )
}
