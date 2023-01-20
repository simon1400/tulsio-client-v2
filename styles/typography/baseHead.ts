export const baseHead = (theme: any) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 700,
  color: '#fff',
  lineHeight: 1.25,
  "&::selection": {
    backgroundColor: theme.palette.primary.main,
  },
})