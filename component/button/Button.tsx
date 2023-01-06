import { buttonProps } from '../../types'

const Button = (props: buttonProps) => {
  const { label, bgColor, color, action } = props
  return (
    <div>
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
    </div>
  )
}

export default Button
