import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import useTaskProvider from '../hooks/useTaskProvider'

const ModalPanel = ({ setIsOpen, isOpen }) => {
  const { name, setName, description, setDescription, priority, setPriority, createTask } = useTaskProvider()

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Add Task
                      </Dialog.Title>
                      <form className="mt-2 flex flex-col gap-5">
                        <div className="flex flex-col">
                            <label htmlFor="name" className=''>Name of the task</label>
                            <input 
                              type="text" 
                              id='name' 
                              className='bg-gray-300 rounded-md outline-none px-2 py-1' 
                              value={name}
                              onChange={e => setName(e.target.value)}
                              placeholder=""
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="description" className=''>Description of the task</label>
                            <textarea 
                              type="text" 
                              id='description' 
                              className='bg-gray-300 rounded-md outline-none px-2 py-1' 
                              value={description}
                              onChange={e => setDescription(e.target.value)}
                              placeholder="Description"
                            ></textarea>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="priority" className=''>Priority</label>
                            <select name="select" id="priority" value={priority} onChange={e => setPriority(e.target.value)}>
                              <option value="">-- Seleccione</option>
                              <option value="High" onChange={e => setPriority(e.target.value)}>High</option>
                              <option value="Medium" onChange={e => setPriority(e.target.value)}>Medium</option>
                              <option value="Low" onChange={e => setPriority(e.target.value)}>Low</option>
                            </select>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-default text-base font-medium text-white hover:bg--600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => { 
                      setIsOpen(false) 
                      createTask() 
                    }}
                  >
                    Add Task
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ModalPanel