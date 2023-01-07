import { InputProps } from '../../types'

const Input = (props: InputProps) => {
  const { placeHolder, type, bg } = props
  return (
    <div>
      <input
        style={{
          // width: '100%',
          height: '90%',
          backgroundColor: bg,
          border: 'none',
          outline: 'none',
          paddingLeft: '10px',
          flexBasis: '100%',
        }}
        type={type}
        placeholder={placeHolder}
      />
    </div>
  )
}

export default Input
