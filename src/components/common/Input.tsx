import { InputProps } from "../../types";

function Input({ label, value, onChange }: InputProps) {
  const idElement = Math.random().toString(36).substring(7);

  return (
    <fieldset className="block relative">
        <input 
            type="text" 
            id={idElement} 
            aria-describedby="floating_helper_text" 
            className={`
                block 
                rounded-t-lg
                px-2.5
                pb-2.5
                pt-5
                w-full
                text-lg 
                text-gray-900
                bg-gray-50 
                border-0 
                border-b-2 
                border-gray-300 
                appearance-none 
                focus:outline-none 
                focus:ring-0 
                focus:border-blue-600 
                peer
            `}
            placeholder=""
            value={value}
            onChange={onChange}
        />
        <label
            htmlFor={idElement} 
            className={`
                absolute
                text-gray-500 
                duration-300 
                transform 
                -translate-y-4 
                scale-75 
                top-4 
                z-10 
                origin-[0] 
                start-2.5 
                peer-focus:text-blue-600 
                peer-focus:dark:text-blue-500 
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 
                peer-focus:-translate-y-4
            `}
            >
                { label }
            </label>
    </fieldset>
  )
}

export default Input
