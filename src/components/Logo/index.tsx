'use client'
import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  $hideOnMobile?: boolean
  id?: string
}

const Logo = ({
  id = 'logo',
  color = 'white',
  size = 'normal',
  $hideOnMobile: hideOnMobile = false
}: LogoProps) => (
  <S.Wrapper color={color} size={size} $hideOnMobile={hideOnMobile}>
    <svg
      viewBox="0 0 64 64"
      data-name="Layer 1"
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>{`.cls-1{fill:#ffb300;}.cls-2{fill:#0074ff;}`}</style>
        </defs>
        <title>Logo</title>
        <path
          className="cls-1"
          d="M39.25,58.57H24.75a2,2,0,0,1-2-2V40.67a2,2,0,0,1,2-2h14.5a2,2,0,0,1,2,2v15.9A2,2,0,0,1,39.25,58.57Zm-12.5-4h10.5V42.67H26.75Z"
        ></path>
        <path
          className="cls-2"
          d="M48.41,58.57H15.59a2,2,0,0,1-2-2V30.51H5.73A2,2,0,0,1,4.48,27L30.75,5.87a2,2,0,0,1,2.5,0L59.52,27a2,2,0,0,1-1.25,3.56H50.41v9.37a2,2,0,0,1-4,0V28.51a2,2,0,0,1,2-2h4.17L32,10,11.42,26.51h4.17a2,2,0,0,1,2,2V54.57H46.41V50.76a2,2,0,1,1,4,0v5.81A2,2,0,0,1,48.41,58.57Z"
        ></path>
      </g>
    </svg>
  </S.Wrapper>
)

export default Logo
