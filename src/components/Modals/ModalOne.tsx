import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Select from "react-select";
interface ModalProps {
  title: string;
  subTitle: string;
  fields: Array<{
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    icon?: React.ReactNode;
    component?: React.FC<any>;
    options?: Array<{ value: string; label: string }>;
  }>;
  isOpen: boolean;
  onClose: () => void;
  initialData?: Record<string, any>;
  mode: "create" | "edit" | "view";
  modalType: string;
  onSubmit: (data: any) => void; // 添加 onSubmit 回调函数
  validationRules?: Record<string, (value: any) => string | null>; // 添加校验规则
}

const ModalOne: React.FC<ModalProps> = ({
  title,
  subTitle,
  fields,
  isOpen,
  onClose,
  initialData = {},
  mode,
  modalType,
  onSubmit, // 接受 onSubmit 回调函数
  validationRules = {}, // 接受校验规则
}) => {
  const [modalOpen, setModalOpen] = useState(isOpen);
  const [initData, setInitData] = useState<Record<string, any>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    // 将 multiselect 字段值转换为数组
    const processedData = { ...initialData };
    fields.forEach(field => {
      if (field.type === "multiselect" && typeof processedData[field.name] === "string") {
        processedData[field.name] = processedData[field.name].split(",");
      }
    });
    setInitData(processedData);
  }, [initialData, fields]);

  const handleClose = () => {
    setModalOpen(false);
    onClose();
  };

  const handleFormChange = (name: string, value: string | string[] | Date | null) => {
    setInitData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = (data: any) => {
    const errors: any = {};
    Object.keys(validationRules).forEach((field) => {
      const error = validationRules[field](data[field]);
      if (error) {
        errors[field] = error;
      }
    });
    return errors;
  };

  const handleConfirm = () => {
    const formattedData = { ...initData };
    if (formattedData.start_time) {
      formattedData.start_time = format(new Date(formattedData.start_time), "yyyy-MM-dd");
    }
    if (formattedData.end_time) {
      formattedData.end_time = format(new Date(formattedData.end_time), "yyyy-MM-dd");
    }

    const errors = validateForm(formattedData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    fields.forEach(field => {
      if (field.type === "multiselect" && Array.isArray(formattedData[field.name])) {
        formattedData[field.name] = formattedData[field.name].join(",");
      }
    });

    console.log("表单数据:", formattedData);
    onSubmit(formattedData);
    handleClose();
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInitData((prevData) => ({ ...prevData, [name]: value }));
  };

  const renderField = (field: any) => {
    const error = formErrors[field.name];
    switch (field.type) {
      case "text":
        return (
          <>
            <input
              className={`w-full rounded border border-stroke bg-gray py-3 ${field.icon ? 'pl-11.5' : 'pl-4.5'} pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary`}
              type="text"
              name={field.name}
              id={field.name}
              placeholder={field.placeholder}
              value={initData[field.name] || ""}
              onChange={handleChange}
              readOnly={mode === "view"}
            />
            {error && <p className="text-sm" style={{ color: 'red' }}>{error}</p>}
          </>
        );
      case "textarea":
        return (
          <>
            <textarea
              className={`w-full rounded border border-stroke bg-gray py-3 ${field.icon ? 'pl-11.5' : 'pl-4.5'} pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary`}
              name={field.name}
              id={field.name}
              placeholder={field.placeholder}
              value={initData[field.name] || ""}
              onChange={handleChange}
              readOnly={mode === "view"}
            />
            {error && <p className="text-sm" style={{ color: 'red' }}>{error}</p>}
          </>
        );
      case "select":
        return (
          <>
            <select
              className={`w-full rounded border border-stroke bg-gray py-3 ${field.icon ? 'pl-11.5' : 'pl-4.5'} pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary`}
              name={field.name}
              id={field.name}
              value={initData[field.name] || ""}
              onChange={handleChange}
              disabled={mode === "view"}
            >
              <option value="">{field.placeholder}</option>
              {field.options?.map((option: { value: string; label: string }) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {error && <p className="text-sm" style={{ color: 'red' }}>{error}</p>}
          </>
        );
      case "multiselect":
        return (
          <>
            <Select
              placeholder="请选择..."
              isMulti
              name={field.name}
              options={field.options}
              className="basic-multi-select"
              classNamePrefix="select"
              value={field.options.filter((option: { value: string; label: string }) =>
                initData[field.name]?.includes(option.value)
              )}
              onChange={(selectedOptions) => {
                const selectedValues = selectedOptions.map((option: { value: string }) => option.value);
                handleFormChange(field.name, selectedValues);
              }}
              isDisabled={mode === "view"}
            />
            {error && <p className="text-sm" style={{ color: 'red' }}>{error}</p>}
          </>
        );
      case "date":
        return (
          <>
            <DatePicker
              selected={initData[field.name] ? new Date(initData[field.name]) : new Date()} // 默认设置为当前时间
              onChange={(date: Date | null) => handleFormChange(field.name, date)}
              className={`w-full rounded border border-stroke bg-gray py-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary`}
              placeholderText={field.placeholder}
              dateFormat="yyyy/MM/dd"
              disabled={mode === "view"}
            />
            {error && <p className="text-sm" style={{ color: 'red' }}>{error}</p>}
          </>
        );
      default:
        return null;
    }
  };

  const renderDateRangeFields = (startField: any, endField: any) => {
    const startError = formErrors[startField.name];
    const endError = formErrors[endField.name];
    return (
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor={startField.name}>
            {startField.label}
          </label>
          <DatePicker
            selected={initData.start_time ? new Date(initData.start_time) : undefined}
            selectsStart
            startDate={initData.start_time ? new Date(initData.start_time) : undefined}
            endDate={initData.end_time ? new Date(initData.end_time) : undefined}
            onChange={(date: Date | null) => handleFormChange('start_time', date)}
            className={`w-full rounded border border-stroke bg-gray py-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary`}
            placeholderText={startField.placeholder}
            dateFormat="yyyy/MM/dd"
            disabled={mode === "view"}
          />
          {startError && <p className="text-sm" style={{ color: 'red' }}>{startError}</p>}
        </div>
        <div className="flex-1">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor={endField.name}>
            {endField.label}
          </label>
          <DatePicker
            selected={initData.end_time ? new Date(initData.end_time) : undefined}
            selectsEnd
            startDate={initData.start_time ? new Date(initData.start_time) : undefined}
            endDate={initData.end_time ? new Date(initData.end_time) : undefined}
            onChange={(date: Date | null) => handleFormChange('end_time', date)}
            className={`w-full rounded border border-stroke bg-gray py-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary`}
            placeholderText={endField.placeholder}
            dateFormat="yyyy/MM/dd"
            disabled={mode === "view"}
          />
          {endError && <p className="text-sm" style={{ color: 'red' }}>{endError}</p>}
        </div>
      </div>
    );
  };

  return (
    <div className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${modalOpen ? "block" : "hidden"}`}>
      <div className="w-full max-w-[800px] rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
        <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">{title}</h3>
        <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark overflow-y-auto max-h-[80vh]"> {/* Added overflow-y and max-height */}
            {mode !== "view" && (
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">{subTitle}</h3>
              </div>
            )}
            <div className="p-7">
              <form action="#">
                {fields.map((field, index) => (
                  <div key={index} className="mb-3">
                    {field.type === "start_date" && fields[index + 1] && fields[index + 1].type === "end_date" ? (
                      renderDateRangeFields(field, fields[index + 1])
                    ) : field.type === "end_date" ? null : (
                      <>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor={field.name}>
                          {field.label}
                        </label>
                        <div className="relative">
                          {field.icon && <span className="absolute left-4.5 top-4">{field.icon}</span>}
                          {field.component ? (
                            <field.component {...field} />
                          ) : (
                            renderField(field)
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>

        <div className="-mx-3 flex flex-wrap gap-y-4 mt-8">
          <div className="w-full px-3 2xsm:w-1/2">
            <button onClick={handleClose} className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1">
              取消
            </button>
          </div>
          {mode !== "view" && (
            <div className="w-full px-3 2xsm:w-1/2">
              <button onClick={handleConfirm} className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90">
                确定
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

};

export default ModalOne;
