import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

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
