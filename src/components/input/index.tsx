import { InputProps } from "types";

const Input = (props: InputProps) => {
  const { placeHolder, type, bg } = props;
  return (
    <div>
      <input
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: bg,
          border: "none",
          outline: "none",
          padding: "12px 0px",
          paddingLeft: "10px",
        }}
        type={type}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
