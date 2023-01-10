/* eslint-disable @next/next/no-img-element */

import {
  LoadingOutlined,
  MinusOutlined,
  PlusOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Col, Divider, Row, Steps, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { RootStore } from '../../redux/app'
import { useCreateOrderMutation } from '../../redux/slices/productsSlie'
import { DataTypes } from '../../types'

const columns: ColumnsType<DataTypes> = [
  {
    title: 'Product',
    dataIndex: 'iamge',
    render: (iamge) => (
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
          <p style={{ cursor: 'pointer' }}>
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
  const [createOrder] = useCreateOrderMutation()
  const { cartItems, totalAmount: cartToatl } = useSelector(
    (state: RootStore) => state.cart
  )
  const [data, setData] = useState<DataTypes[]>()
  const [totalvat, setTotalVat] = useState(0)
  const orderDetails = {
    customer: {
      name: 'muhammad junaid',
      address: 'chittagong',
      phone: '01634900664',
    },
    calculation: {
      price: cartToatl,
      vat: totalvat,
      total: cartToatl + totalvat,
    },
    items: cartItems,
  }
  useEffect(() => {
    let countVat = 0
    const copyData: DataTypes[] = []
    cartItems.map((item, index) => {
      const shaloCopy = Object.assign({}, item)
      shaloCopy.key = index.toString()
      const { iamge, quantity, price, totalAmount, key } = shaloCopy
      copyData.push({ iamge, quantity, price, totalAmount, key })
      countVat += item.vat
    })
    setTotalVat(countVat)
    setData(copyData)
  }, [cartItems])

  const handleOrder = async () => {
    await createOrder(orderDetails)
      .unwrap()
      .then((response) => {
        console.log('response', response)
      })
  }

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
              status: 'error',
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
      </div>
      <div>
        <Divider />
        <Row gutter={[16, 16]}>
          <Col sm={24} md={8} lg={15}>
            <Table rowSelection={{}} columns={columns} dataSource={data} />
          </Col>
          <Col sm={24} md={3} lg={2}></Col>
          <Col sm={24} md={8} lg={7}>
            <div>
              <div>
                <h2 style={{ textAlign: 'center', margin: '10px 0px' }}>
                  CART TOTAL
                </h2>
                <div
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <h2>Total </h2>
                  <h2>${cartToatl} </h2>
                </div>
              </div>
              <div
                style={{
                  width: '90%',
                  backgroundColor: '#1AC073',
                  margin: '0 auto',
                  padding: '8px 0px',
                  marginTop: '40px',
                  borderRadius: '5px',
                }}
              >
                <button
                  onClick={handleOrder}
                  style={{
                    width: '100%',
                    border: 'none',
                    backgroundColor: 'inherit',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </Col>
        </Row>
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
