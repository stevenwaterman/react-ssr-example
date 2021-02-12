import { ActionLink, BackLink, BodyText, Breadcrumb, Container, Label, LedeText } from 'nhsuk-react-components'
import Template from '../../components/template'

export default function Page () {
  return (
    <Template>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item>About Next.js</Breadcrumb.Item>
      </Breadcrumb>
      <main className='nhsuk-main-wrapper'>
        <Container>
          <BackLink href='/'>Go Back</BackLink>
          <Label isPageHeading>About Next.js</Label>
          <LedeText>A batteries-included framework serving React pages with optimisations like server-side rendering</LedeText>
          <BodyText>
            React is mostly used for single-page applications, but Next.js allows us to use React in a server-side rendered site.
            It also provides a low-configuration way to create web front-ends in Javascript, with built in support for:
          </BodyText>
          <ul>
            <li>Hybrid server-side rendered and compile-time static generated pages</li>
            <li>Internationalisation</li>
            <li>Image optimisation</li>
            <li>Hot reloading</li>
            <li>TypeScript</li>
            <li>Code-splitting and bundling</li>
            <li>CSS + SASS</li>
            <li>Routing</li>
          </ul>
          <ActionLink href='https://nextjs.org/'>Read the official Next.js documentation</ActionLink>
        </Container>
      </main>
    </Template>
  )
}
