import { ActionLink, BackLink, BodyText, Breadcrumb, Container, Label, LedeText } from 'nhsuk-react-components'
import Template from '../../components/template'

export default function Page () {
  return (
    <Template>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item>About React</Breadcrumb.Item>
      </Breadcrumb>
      <main className='nhsuk-main-wrapper'>
        <Container>
          <BackLink href='/'>Go Back</BackLink>
          <Label isPageHeading>About React</Label>
          <LedeText>The most popular framework for modern web apps</LedeText>
          <BodyText>React is a declarative, component-based framework that has many benefits over our current setup</BodyText>
          <ul>
            <li>Incredibly well supported</li>
            <li>Increased standardisation</li>
            <li>Less boilerplate</li>
          </ul>
          <BodyText>
            However, React is traditionally used for single-page applications (SPAs).
            These require Javascript and are therefore not appropriate for public-facing applications.
            We avoid those problems by wrapping React in <a href='/next-js'>Next.js</a>
          </BodyText>
          <ActionLink href='https://reactjs.org/'>Read the official React documentation</ActionLink>
        </Container>
      </main>
    </Template>
  )
}
