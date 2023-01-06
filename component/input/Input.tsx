import { InputProps } from '../../types'

const Input = (props: InputProps) => {
  const { placeHolder, bg, type } = props
  return (
    <div>
      <input
        style={{
          // width:
          //   size === 'lg'
          //     ? '398px'
          //     : size === 'md'
          //     ? '200px'
          //     : size === 'sm'
          //     ? '100px'
          //     : `90%`,
          width: '90%',
          height: '90%',
          backgroundColor: bg,
          // borderRadius: `${radius}px`,
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
