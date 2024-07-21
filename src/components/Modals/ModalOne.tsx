'use client'
import React, { useState, useEffect, useRef } from "react";
interface ModalProps {
  title: string;
  subTitle:string;
  fields: Array<{
    label: string;
    name: string;
    type: string;
    placeholder: string;
    icon?: React.ReactNode; // icon 设置为可选
  }>;
}

const ModalOne: React.FC<ModalProps> = ({ title,subTitle, fields }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef<any>(null);
  const modal = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!modal.current) return;
      if (!modalOpen || modal.current.contains(target) || trigger.current.contains(target)) return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div>
      <button ref={trigger} onClick={() => setModalOpen(!modalOpen)} className="rounded-md bg-primary px-9 py-3 font-medium text-white">
        {title}
      </button>
      <div className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${modalOpen ? "block" : "hidden"}`}>
        <div ref={modal} className="w-full max-w-[800px] rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
          <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">{title}</h3>
          <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">{subTitle}</h3>
              </div>
              <div className="p-7">
                <form action="#">
                  {fields.map((field, index) => (
                    <div key={index} className="mb-5.5">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor={field.name}>
                        {field.label}
                      </label>
                      <div className="relative">
                        {field.icon && <span className="absolute left-4.5 top-4">{field.icon}</span>}
                        <input
                          className={`w-full rounded border border-stroke bg-gray py-3 ${field.icon ? 'pl-11.5' : 'pl-4.5'} pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary`}
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          placeholder={field.placeholder}
                          defaultValue=""
                        />
                      </div>
                    </div>
                  ))}
                </form>
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap gap-y-4 mt-8">
            <div className="w-full px-3 2xsm:w-1/2">
              <button onClick={() => setModalOpen(false)} className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1">
                取消
              </button>
            </div>
            <div className="w-full px-3 2xsm:w-1/2">
              <button onClick={() => setModalOpen(false)} className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90">
                确定
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOne;
