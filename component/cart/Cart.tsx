import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Steps, Table } from 'antd'
import { useSelector } from 'react-redux'
import { RootStore } from '../../redux/app'
const columns = [
  {
    title: 'Product',
    dataIndex: 'image',
    key: '0',
    render: (
      text: unknown,
      record: { iamge: string | undefined; image: string | undefined }
    ) => {
      return (
        <div>
          <img
            style={{ width: '100px' }}
            src={record.iamge}
            alt={record.image}
          />
        </div>
      )
    },
  },

  {
    title: 'QUANTITY',
    dataIndex: 'address',
    key: '1',
    render: (
      text: never,
      _record: { quantity: string | number | readonly string[] | undefined }
    ) => {
      return (
        <div>
          <input type="number" defaultValue={_record.quantity} />
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
      <Steps
        items={[
          {
            title: 'Login',
            status: 'finish',
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
            status: 'wait',
            icon: <SmileOutlined />,
          },
        ]}
      />
      <Table columns={columns} dataSource={cartItems} bordered />
    </div>
  )
}

export default Cart
