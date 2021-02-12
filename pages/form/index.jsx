import { Input, Form, BackLink, Hint, Breadcrumb, Container, Button, Label } from 'nhsuk-react-components'
import Template from '../../components/template'

export async function getServerSideProps (context) {
  // You would just get these from session in a real app
  return { props: context.query }
}

export default function Page ({ firstError, middleError, lastError, first, middle, last }) {
  return (
    <Template>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Form Example</Breadcrumb.Item>
      </Breadcrumb>
      <main className='nhsuk-main-wrapper'>
        <Container>
          <BackLink href='/'>Go Back</BackLink>
          <Label isPageHeading>What is your full name?</Label>
          <Hint>Just guess the order</Hint>
          <Form action='/api/form/submit' method='POST'>
            <Input id='firstName' className='nhsuk-u-margin-bottom-3' label='First name' type='text' aria-label='First name input' width='10' error={firstError && 'You must enter a first name'} defaultValue={first} />
            <Input id='middleName' className='nhsuk-u-margin-bottom-3' label='Middle name' type='text' aria-label='Middle name input' width='10' error={middleError && 'You must enter a middle name'} defaultValue={middle} />
            <Input id='lastName' className='nhsuk-u-margin-bottom-3' label='Last name' type='text' aria-label='Last name input' width='10' error={lastError && 'You must enter a last name'} defaultValue={last} />
            <Button style={{ display: 'block' }} type='submit'>Submit</Button>
          </Form>
        </Container>
      </main>
    </Template>
  )
}
