export default function handler (req, res) {
  const { firstName, middleName, lastName } = req.body
  let query = ''
  if (!firstName) query += '&firstError=true'
  if (!middleName) query += '&middleError=true'
  if (!lastName) query += '&lastError=true'

  if (query) {
    query = query.slice(1)
    res.redirect(`/form?${query}&first=${firstName}&middle=${middleName}&last=${lastName}`)
  } else {
    res.redirect(`/form/success?first=${firstName}&middle=${middleName}&last=${lastName}`)
  }
}
