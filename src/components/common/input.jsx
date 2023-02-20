const Input = ({name, label, value, error, type, onChange}) => {
    return (
      <div className="form-group mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          className="form-control"
        />
        {error && (
          <div className="alert alert-danger">{error}</div>
        )}
      </div>
    );
}
 
export default Input;