import React from 'react'

const Input = ({handleChange, value, title, name, color}) => {
  return (
    <div className="flex items-center gap-3">
      <input type="radio" id="all" value={value} onChange={handleChange} name={name} />
      <label htmlFor="all">{title}</label>
    </div>
  );
}

export default Input