import React from "react"

const GlobalSearch = ({
  onSubmit,
  value,
  onChange,
  placeholder,
  id,
  ariaLabel,
  label,
  spanText,
  idFor,
  className,
  submitValue,
  submitClassName,
  submitStyle,
}) => {
  return (
    <div className="mt-8">
      <label className="px-3" htmlFor={idFor}>
        <span className="mx-1 text-lg text-link">{spanText}</span>
      </label>
      <form
        role="search"
        className="text-yellow-600 px-3"
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
      >
        <input
          id={id}
          label={label}
          aria-label={ariaLabel}
          placeholder={placeholder}
          type="search"
          value={value}
          className="p-0 my-2 mx-0 h-8 w-48 border-none outline-none rounded text-lg bg-input text-aux"
          onChange={onChange}
        />
      </form>
    </div>
  )
}

export default GlobalSearch
