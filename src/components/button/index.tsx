import { buttonProps } from "types";

/* A React component that is written in TypeScript. */
const Button = (props: buttonProps) => {
  const {
    label,
    bgColor,
    color,
    isGroup,
    groupData,
    border,
    selectBtn,
    selectBtnStyle,
    className,
    action,
  } = props;

  return (
    <div style={className ? { textAlign: "center" } : {}}>
      {isGroup ? (
        <div style={{ padding: "20px 100px" }}>
          {groupData?.map((data, key, { length }) => {
            return (
              <button
                onClick={action}
                key={key}
                style={
                  key === selectBtn
                    ? selectBtnStyle
                    : length === key + 1
                    ? {
                        backgroundColor: "inherit",
                        color: "black",
                        border: "1px solid #F3BA00",
                        cursor: "pointer",
                        padding: "13px 40px",
                        borderTopRightRadius: "5px",
                        borderBottomRightRadius: "5px",
                      }
                    : {
                        border: border,
                        cursor: "pointer",
                        color: color,
                        padding: "13px 40px",
                      }
                }
              >
                {data}
              </button>
            );
          })}
        </div>
      ) : (
        <button
          className={className}
          onClick={action}
          style={
            className
              ? {}
              : {
                  backgroundColor: bgColor,
                  color: color,
                  cursor: "pointer",
                  border: "none",
                  height: "100%",
                }
          }
        >
          {label}
        </button>
      )}
    </div>
  );
};

export default Button;
