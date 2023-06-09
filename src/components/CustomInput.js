import React from 'react';

const CustomInput = (props) => {
const {type, label, i_id, i_class} = props;

  return (
    <div>
      <div class="form-floating mb-3">
        <input type={type} class={`form-control ${i_class}`} id={`floatingInput ${i_id}`} placeholder={label} />
        <label htmlFor={label}>{label}</label>
      </div>

    </div>
  );
}

export default CustomInput;
