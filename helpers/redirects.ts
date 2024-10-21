import axios from 'axios'

const APP_API = process.env.APP_API

export const redirects = async () => {
  const { data } = await axios.get(`${APP_API}/api/redirects`)
  const transformedRedirects = data.redirects.map((item: any) => ({
    source: item.from,
    destination: item.to,
    permanent: item.type === 'moved_permanently_301',
  }))
  return transformedRedirects
}
