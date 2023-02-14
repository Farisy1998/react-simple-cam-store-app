const Input = ({name, label, type, onChange}) => {
    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input id={name} type={type} className="form-control" onChange={event => onChange(event)}/>
      </div>
    );
}
 
export default Input;