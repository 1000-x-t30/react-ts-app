import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  text: string
  className?: string
}

export const SubmitRadius: FC<Props> = ((props: Props) => {
  const { text, className } = props

  return (
    <Div className={className}>{text}</Div>
  )
})

SubmitRadius.defaultProps = {
  className: undefined
}

const Div = styled.div`
  cursor: pointer;
  border-radius: 5em;
  color: #fff;
  background: linear-gradient(to right, #9c27b0, #e040fb);
  border: 0;
  width: 8em;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  margin: 0 auto 10px;
  font-family: "Ubuntu", sans-serif;
  font-size: 13px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
`