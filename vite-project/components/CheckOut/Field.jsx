
import PropTypes from "prop-types";

const Field = ({ label, name, onChange, type, placeholder }) => {
    return (
        <div className="mb-3" >
            <label  className="form-label" >{label} 
            <input className="form-control" name={name} id="formId" type={type} placeholder={placeholder} onChange={onChange} />
            </label>
        </div>
    );
};
Field.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type:  PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired
    };
export default Field;