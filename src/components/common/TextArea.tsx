import { TextAreaProps } from "../../types"

function TextArea(props: TextAreaProps) {
  const idElement = Math.random().toString(36).substring(7)

  return (
    <fieldset className="block relative">
        <textarea
            id={idElement}
            {...props}
            className={`
                block 
                rounded-t-lg
                px-2.5
                py-6
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
                { props.label }
            </label>
            { props.maxLength && (
              <span
                className={`
                  absolute
                  text-gray-500 
                  text-sm 
                  bottom-2 
                  right-2
                  ${props.value.length > props.maxLength - 1 ? 'text-red-500' : 'text-gray-500'}
                  `
                }
              >
                { props.value.length }/{ props.maxLength }
              </span>
            )}
    </fieldset>
  )
}

export default TextArea
