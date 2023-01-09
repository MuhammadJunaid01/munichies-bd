/* eslint-disable @next/next/no-img-element */
/* eslint no-use-before-define: 0 */ // --> OFF
import {
  LoadingOutlined,
  MinusOutlined,
  PlusOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Divider, Steps, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useEffect, useState } from 'react'

// import Image, { StaticImageData } from 'next/image'
import { useSelector } from 'react-redux'
import { RootStore } from '../../redux/app'
interface DataTypes {
  image: string
  quantity: number
  price: number
  totalAmount: number
  key: string
}

const columns: ColumnsType<DataTypes> = [
  {
    title: 'Product',
    dataIndex: 'iamge',
    render: (iamge: string) => (
      <img
        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
        src={iamge}
        alt="product image"
      />
    ),
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    render(value, record, index) {
      return (
        <div style={style.quantity} key={index}>
          <p>
            <PlusOutlined />
          </p>
          <p style={{ cursor: 'pointer' }}>{value}</p>
          <p style={{ cursor: 'pointer' }}>
            <MinusOutlined />
          </p>
        </div>
      )
    },
  },
  {
    title: 'Total',
    dataIndex: 'totalAmount',
  },
]

const Cart = () => {
  const { cartItems } = useSelector((state: RootStore) => state.cart)
  const [data, setData] = useState<DataTypes[]>()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useEffect(() => {
    const copyData: DataTypes[] = []
    cartItems.map((item, index) => {
      const shaloCopy = Object.assign({}, item)
      shaloCopy.key = index.toString()
      const { image, quantity, price, totalAmount, key } = shaloCopy
      copyData.push({ image, quantity, price, totalAmount, key })
    })
    setData(copyData)
  }, [cartItems])

  return (
    <div>
      <div style={style.step}>
        <Steps
          items={[
            {
              title: 'Login',
              status: 'error',
              icon: <UserOutlined />,
            },
            {
              title: 'Verification',
              status: 'finish',
              icon: <SolutionOutlined />,
            },
            {
              title: 'Pay',
              status: 'process',
              icon: <LoadingOutlined />,
            },
            {
              title: 'Done',
              status: 'process',
              icon: <SmileOutlined />,
            },
          ]}
        />
      </div>
      <div>
        <Divider />

        <Table rowSelection={{}} columns={columns} dataSource={data} />
      </div>
    </div>
  )
}
const style = {
  step: {
    width: '70%',
    margin: '0 auto',
    marginTop: '30px',
    marginBottom: '30px',
  },
  quantity: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100px',
  },
}
export default Cart
