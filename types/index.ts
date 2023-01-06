import { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'

export type NavbarProps = {
  paths: { name: string; to: string }[]
  logo?: StaticImageData | string
  icons?: Array<JSX.Element>
  isFooter: boolean | false
  bgColor?: string
  classNameContainer?: string
  classNameContent?: string
  action?: React.MouseEventHandler<HTMLButtonElement>
}

export type MainLayouteType = {
  children: ReactNode
}
// export type HomeProps = {
//   children: ReactNode
// }
export type HeroBannerProps = {
  title: string
  info: string
  img: StaticImageData | string
  bgColor?: string
  input: JSX.Element
  color?: string
  marginTop?: number
  button?: JSX.Element
}

export type InputProps = {
  type: string
  placeHolder?: string
  width?: number
  radius?: number
  bg?: string
  size: string
}
export type buttonProps = {
  label: string
  size: string
  variant?: string
  bgColor?: string
  radius?: number
  color?: string
  action?: React.MouseEventHandler<HTMLButtonElement>
}
