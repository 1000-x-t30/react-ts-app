import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { InputTextRadius } from '../atoms/input/InputTextRadius'
import { SubmitRadius } from '../atoms/button/SubmitRadius'

export const DarkModeForm: FC = () => (
  <SArticle>
    <Title>Sign in</Title>
    <SForm>
      <InputTextRadius className="usename" type="text" text="Username" />
      <InputTextRadius className="password" type="password" text="Password" />
      <SDiv>
        <Link to='/'>
          <SubmitRadius text="Sign in" />
        </Link>
        <a href="/">Forgot Password?</a>
      </SDiv>
    </SForm>
  </SArticle>
)

const SArticle = styled.article`
  width: 400px;
  height: 400px;
  border-radius: 1.5em;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
`

const Title = styled.h2`
  padding-top: 40px;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  font-size: 23px;
  text-align: center;
`

const SForm = styled.form`
  padding-top: 40px;
`

const SDiv = styled.div`
  text-align: center;

  > a
  {
    text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
    color: #e1bee7;
    padding-top: 15px;
  }
`