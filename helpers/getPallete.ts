export const getPallete = (background: string) => {
  let convert = '#4545ff'
  let color: string = '#ffffff'

  if (background === 'green') {
    convert = '#9f9'
    color = '#202020'
  } else if (background === 'yellow') {
    convert = '#fff899'
    color = '#202020'
  } else if (background === 'purple') {
    convert = '#a50d5a'
  } else if (background === 'bluePurpleG') {
    convert = 'linear-gradient(125deg, #a50d5a, #4545ff)'
  } else if (background === 'greenYellowG') {
    convert = 'linear-gradient(to bottom, #fff899, #9f9);'
    color = '#202020'
  }

  return {
    color,
    convert,
  }
}
