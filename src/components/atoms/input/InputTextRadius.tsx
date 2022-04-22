import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  type: string
  text: string
  className?: string
}

export const InputTextRadius: FC<Props> = ((props: Props) => {
  const { type, text, className } = props

  return (
    <Input className={className} type={type} placeholder={text} />
  )
})

InputTextRadius.defaultProps = {
  className: undefined
}

const Input = styled.input`
  width: 76%;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  margin-left: 46px;
  text-align: center;
  margin-bottom: 27px;
  font-family: "Ubuntu", sans-serif;
`