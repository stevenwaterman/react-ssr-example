import { BackLink, Label, Breadcrumb, Container, BodyText } from 'nhsuk-react-components'
import Template from '../../components/template'

export async function getServerSideProps (context) {
  // You would just get these from session in a real app
  return { props: context.query }
}

export default function Page ({ first, middle, last }) {
  return (
    <Template>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/form'>Form Example</Breadcrumb.Item>
        <Breadcrumb.Item>Form Success</Breadcrumb.Item>
      </Breadcrumb>
      <main className='nhsuk-main-wrapper'>
        <Container>
          <BackLink href='/form'>Go Back</BackLink>
          <Label isPageHeading>Form Success</Label>
          <BodyText>Welcome {first} {middle} {last}!</BodyText>
        </Container>
      </main>
    </Template>
  )
}
