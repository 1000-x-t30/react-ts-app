import { FC, useState, createContext, useMemo } from 'react'
import styled from 'styled-components'
import Switch from 'react-switch'
import { DarkModeForm } from '../organisms/DarkModeForm'

type Props = {
  mode: string
  toggle: () => void
}

export const ThemeContext = createContext<Props>({mode: '', toggle: () => ({})})

export const DarkMode: FC = () => {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  const modeProvider = useMemo(() => ({ mode: theme, toggle: toggleTheme }), [theme])

  return (
    <ThemeContext.Provider value={modeProvider}>
      <Div className={theme}>
        <DarkModeForm />
        <div className='switch'>
          <div className="label">{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</div>
          <Switch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </Div>
    </ThemeContext.Provider>
  )
}

const Div = styled.div`
  font-family: "Ubuntu", sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.light
  {
    background-color: #F3EBF6;
  }
  &.dark
  {
    background-color: #46045E;
  }
  &.light > article
  {
    background-color: #fff;
  }
  &.dark > article
  {
    background-color: #38004c;
  }
  &.light h2
  {
    color: #8c55aa;
  }
  &.dark h2
  {
    color: #ffffff;
  }

  &.light .username,
  &.light .password {
    color: rgb(38, 50, 56);
    background: rgba(136, 126, 126, 0.04);
  }

  &.dark .username,
  &.dark .password {
    color: rgb(254, 255, 255);
    background: rgba(255, 247, 247, 0.299);
  }

  &.light .switch .label
  {
    color: #000;
  }
  &.dark .switch .label
  {
    color: #fff;
  }

  .switch
  {
    display: flex;
    width: 100vw;
    height: 100px;
    justify-content: center;
    align-items: center;
  }
`