/* eslint-disable @next/next/no-img-element */
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Steps, Table } from 'antd'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootStore } from '../../redux/app'
const columns = [
  {
    title: 'Product',
    dataIndex: 'price',
    key: '0',
    render: (_record: { iamge: string }) => {
      return (
        <div>
          <Image
            src={_record?.iamge}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      )
    },
  },

  {
    title: 'QUANTITY',
    dataIndex: 'quantity',
    key: '1',
    render: (_record: { quantity: number }) => {
      return (
        <div>
          <input type="number" defaultValue={_record?.quantity} />
        </div>
      )
    },
  },
  {
    title: 'PRICE',
    dataIndex: 'price',
    key: '2',
  },
  {
    title: 'TOTAL',
    dataIndex: 'totalAmount',
    key: '3',
  },
]

const Cart = () => {
  const { cartItems } = useSelector((state: RootStore) => state.cart)
  console.log(cartItems)
  return (
    <div>
      <div
        style={{
          width: '70%',
          margin: '0 auto',
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
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
      <Table columns={columns} dataSource={cartItems} bordered />
    </div>
  )
}

export default Cart
