import { InputComponent, InputDiv, InputLabel } from "./style";

export const Input = ({ id, label, type, onChange }) => {
  return (
    <InputDiv>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent type={type} name={id} id={id} onChange={onChange} />
    </InputDiv>
  );
};
