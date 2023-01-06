import { InputProps } from '../../types'

const Input = (props: InputProps) => {
  const { placeHolder, bg, type } = props

  // let hello
  return (
    <div>
      <input
        style={{
          width: '90%',
          height: '90%',
          backgroundColor: bg,
          border: 'none',
          outline: 'none',
          paddingLeft: '10px',
        }}
        type={type}
        placeholder={placeHolder}
      />
    </div>
  )
}

export default Input
