import Template from '../components/template'
import Card from '../components/card'
import { Container, Label } from 'nhsuk-react-components'

export default function Page () {
  return (
    <Template>
      <section className='nhsuk-hero'>
        <div className='nhsuk-width-container nhsuk-hero--border'>
          <div className='nhsuk-hero__wrapper app-hero__wrapper'>
            <h1 className='nhsuk-u-margin-bottom-4'>This page is just React</h1>
            <p className='nhsuk-body-l nhsuk-u-margin-bottom-1'>But it's server-side rendered. Try visiting without JavaScript.</p>
          </div>
        </div>
      </section>
      <main className='nhsuk-main-wrapper'>
        <Container>
          <Label size='l'>Learn More:</Label>
          <ul className='nhsuk-grid-row nhsuk-card-group'>
            <Card title='About React' description='React is a modern front-end web framework that is typically used in single-page applications.' href='/react' />
            <Card title='About Next.js' description='Next.js is a static web framework that uses React but removes is reliance on client-side JavaScript.' href='/next-js' />
            <Card title='Try a form' description='It`s not just simple pages like this - we can do forms too. Try one here.' href='/form' />
          </ul>
        </Container>
      </main>
    </Template>
  )
}
