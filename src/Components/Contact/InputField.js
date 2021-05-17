export default function InputField({
  id,
  label,
  name,
  onBlur,
  onChange,
  reference,
  type,
  value
})
  {
  return (
    <>
    <div>
      <label className="form-label" htmlFor={id}> {label} </label>
      <input
        className="form-control"
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={reference}
        type={type}
        value={value} 
      ></input>
    </div>
    </>
  );
}