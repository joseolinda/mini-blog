import { ButtonProps } from "../../types";

function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`
        ${props.variant === 'primary' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500'}
        flex
        justify-between
        gap-4
        py-2.5
        pr-8
        pl-4
        rounded
        w-full
        ${props.isLoading ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      disabled={props.disabled}
    >
      {props.icon && props.icon }
      {props.children}
    </button>
  );
}

export default Button;