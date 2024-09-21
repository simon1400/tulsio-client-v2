const { default: axios } = require("axios");

const redirects = async () => {
  const {data} = await axios.get('http://localhost:1337/api/redirects')
  const transformedRedirects = []
  data.redirects.map(item => {
    transformedRedirects.push({
      source: item.from,
      destination: item.to,
      permanent: item.type === 'moved_permanently_301',
    })
  })
  return transformedRedirects
};

module.exports = redirects;