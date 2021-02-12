import { Header } from 'nhsuk-react-components'

export default function Component () {
  return (
    <Header>
      <Header.Container>
        <Header.Logo href='/' />
        <Header.ServiceName href='/'>React SSR Test App</Header.ServiceName>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem href='/' mobileOnly> Home </Header.NavItem>
        <Header.NavItem href='/react'>About React</Header.NavItem>
        <Header.NavItem href='/next-js'>About Next.js</Header.NavItem>
        <Header.NavItem href='/components'>About NHS UK Components</Header.NavItem>
      </Header.Nav>
    </Header>
  )
}
