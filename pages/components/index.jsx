import { ActionLink, BackLink, BodyText, Breadcrumb, Container, Label, LedeText } from 'nhsuk-react-components'
import Template from '../../components/template'

export default function Page () {
  return (
    <Template>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item>About NHS.UK React Components</Breadcrumb.Item>
      </Breadcrumb>
      <main className='nhsuk-main-wrapper'>
        <Container>
          <BackLink href='/'>Go Back</BackLink>
          <Label isPageHeading>About NHS.UK React Components</Label>
          <LedeText>the NHSD port of the NHS-UK frontend library to React</LedeText>
          <BodyText>
            It is fairly well made, and covers most of the NHS-UK components.
            While it's far from perfect, it would be very easy to improve it to a production quality.
            After using it to create this site, I only ran into two issues:
          </BodyText>
          <ul>
            <li>The Card component is not supported yet, but there's an open GitHub issue regarding that</li>
            <li>There was no way to add a border to the hero element on the home page</li>
          </ul>
          <ActionLink href='https://github.com/NHSDigital/nhsuk-react-components/'>Read the official NHS.UK React Components documentation</ActionLink>
        </Container>
      </main>
    </Template>
  )
}
