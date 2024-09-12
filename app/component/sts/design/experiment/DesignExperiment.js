'use client'

import ExperimentalEnvironmentSelector from "app/component/sts/common/experiment/env/ExperimentalEnvironmentSelector"
import ExperimentalFocusSelector from "../../common/experiment/focus/ExperimentalFocusSelector"
import ExperimentalHypothesisSelector from "../../common/experiment/hypothesis/ExperimentalHypothesisSelector"
import ExperimentalActionSelector from "../../common/experiment/action/ExperimentalActionSelector"

import {Experiment} from "app/sts"


export default function DesignExperiment() {



  // const sels = Array.from(document.querySelectorAll('select'))
  // const expOpts = sels.reduce((acc, sel) => {
  //   acc[sel.name] = sel.value
  //   return acc
  // }, {})
  // let exp 
  //   try{
  //     exp = (() => new Experiment(expOpts))()

  //   } catch (e) {
    
  //   }


  const handleSave = () => {
    
  }

  return (
    <div className="space-y-10 divide-y divide-gray-900/10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-white-900">Environment</h2>
          <p className="mt-1 text-sm leading-6 text-white-600">
            Select the environment for the experiment.
          </p>
        </div>
        <ExperimentalEnvironmentSelector />

<div className="px-4 sm:px-0">
  <h2 className="text-base font-semibold leading-7 text-white-900">Focus</h2>
  <p className="mt-1 text-sm leading-6 text-white-600">
    The focus of the experiment is what the sensors will observe.
  </p>
</div>
<ExperimentalFocusSelector />

<div className="px-4 sm:px-0">
  <h2 className="text-base font-semibold leading-7 text-white-900">Action</h2>
  <p className="mt-1 text-sm leading-6 text-white-600">
    What to do with the focus.
  </p>
</div>
<ExperimentalActionSelector />

<div className="px-4 sm:px-0">
  <h2 className="text-base font-semibold leading-7 text-white-900">Hypothesis</h2>
  <p className="mt-1 text-sm leading-6 text-white-600">
    Predict the outcome of the experiment.
  </p>
</div>
<ExperimentalHypothesisSelector />

          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
      </div>

    </div>
  )
}
