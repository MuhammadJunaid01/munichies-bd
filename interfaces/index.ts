import { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'

export interface NavbarProps {
  paths: { name: string; to: string }[]
  logo?: StaticImageData | string
  icons?: Array<JSX.Element>
  isFooter: boolean | false
  bgColor?: string
  classNameContainer?: string
  classNameContent?: string
  action?: React.MouseEventHandler<HTMLButtonElement>
}

export interface MainLayouteType {
  children: ReactNode
}
// export type HomeProps = {
//   children: ReactNode
// }
export interface HeroBannerProps {
  title: string
  info: string
  img: StaticImageData | string
  bgColor?: string
  input: JSX.Element
  color?: string
  marginTop?: number
  button?: JSX.Element
}

export interface InputProps {
  type: string
  placeHolder?: string
  width?: number
  radius?: number
  bg?: string
  size: string
}
export interface buttonProps {
  label: string
  size: string
  variant?: string
  bgColor?: string
  radius?: number
  color?: string
  border?: string
  isGroup?: boolean | false
  groupData?: Array<string>
  selectBtn?: number
  selectBtnStyle?: { backgroundColor: string; color: string }
  action?: React.MouseEventHandler<HTMLButtonElement>
}
export interface HomeKitchenProps {
  title: string
  button: ReactNode

  products: ReactNode
}
export interface ProductsProps {
  filterOption: ReactNode
}
export interface ProductsType {
  id: number
  name: string
  price: string
  quantity_available: string
  image: string
  vat: number
  addons: { name: string; is_default?: boolean; price: number }[]
}
export interface ProductProps {
  data: Array<ProductsType>
}
export interface Toggle {
  mode: string
}
export interface Product {
  data: ProductsType[]
  error: null
  isLoading: boolean
}
export interface CardProps {
  id: number
  name: string
  price: string
  quantity_available: string
  image: string
  vat: number
  addons: { name: string; is_default?: boolean; price: number }[]
}
