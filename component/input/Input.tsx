import { InputProps } from '../../types'

const Input = (props: InputProps) => {
  const { placeHolder, width, button, bg, radius, type } = props
  return (
    <div>
      <input
        style={{ width: width, backgroundColor: bg, borderRadius: radius }}
        type={type}
        placeholder={placeHolder}
      />
      {button}
    </div>
  )
}

export default Input
