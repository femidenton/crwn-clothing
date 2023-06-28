import './form-input.styles.scss';

// eslint-disable-next-line react/prop-types
//const FormInput = ({ label, inputOptions })
// eslint-disable-next-line react/prop-types
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;