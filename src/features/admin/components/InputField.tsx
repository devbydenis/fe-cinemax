import type { InputFieldAdminProps } from "../types/admin.types";

function InputField({ label, id, type, register, customStyle }: InputFieldAdminProps) {
  
  return (
    <div className="flex flex-col gap-2">
      <label className="text-title-info-first font-normal text-base" htmlFor={id}>{label}</label>
      <input
        className={` ${customStyle} focus:outline-orange border-1 border-gray-300 h-14 rounded px-3`}
        type={type}
        {...register}
        id={id}
      />
    </div>
  )
}

export default InputField;