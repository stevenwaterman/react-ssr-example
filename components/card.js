export default function Component ({ href, title, description }) {
  return (
    <li class='nhsuk-grid-column-one-third nhsuk-card-group__item'>
      <div class='nhsuk-card nhsuk-card--clickable' onClick={() => { window.location.href = href }}>
        <div class='nhsuk-card__content'>
          <h2 class='nhsuk-card__heading nhsuk-heading-m'><a href={href}>{title}</a></h2>
          <p class='nhsuk-card__description'>{description}</p>
        </div>
      </div>
    </li>
  )
}
