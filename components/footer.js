import { Footer } from 'nhsuk-react-components'

export default function Component () {
  return (
    <Footer>
      <Footer.List>
        <Footer.ListItem href='https://www.nhs.uk/nhs-sites/'>NHS sites</Footer.ListItem>
        <Footer.ListItem href='https://www.nhs.uk/about-us/'>About us</Footer.ListItem>
        <Footer.ListItem href='https://www.nhs.uk/contact-us/'>Contact us</Footer.ListItem>
        <Footer.ListItem href='https://www.nhs.uk/about-us/sitemap/'>Sitemap</Footer.ListItem>
        <Footer.ListItem href='https://www.nhs.uk/our-policies/'>Our policies</Footer.ListItem>
      </Footer.List>
      <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
    </Footer>
  )
}
