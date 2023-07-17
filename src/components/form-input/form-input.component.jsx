import {FormInputLabel, Input, Group} from './form-input.styles.jsx';

// eslint-disable-next-line react/prop-types
//const FormInput = ({ label, inputOptions })
// eslint-disable-next-line react/prop-types
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group >
      <Input {...otherProps} />
      {label && (
        <FormInputLabel 
          shrink={otherProps.value.length} //returns a boolean. if the length is 0 its falsy 
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;