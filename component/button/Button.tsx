import { buttonProps } from '../../types'

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
    action,
  } = props
  return (
    <div>
      {isGroup ? (
        <div>
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
                        backgroundColor: 'inherit',
                        color: 'black',
                        border: '1px solid #F3BA00',
                        cursor: 'pointer',
                        padding: '13px 40px',
                        borderTopRightRadius: '5px',
                        borderBottomRightRadius: '5px',
                      }
                    : {
                        border: border,
                        cursor: 'pointer',
                        color: color,
                        padding: '13px 40px',
                      }
                }
              >
                {data}
              </button>
            )
          })}
        </div>
      ) : (
        <button
          onClick={action}
          style={{
            backgroundColor: bgColor,
            color: color,
            cursor: 'pointer',
            border: 'none',
            height: '100%',
          }}
        >
          {label}
        </button>
      )}
    </div>
  )
}

export default Button