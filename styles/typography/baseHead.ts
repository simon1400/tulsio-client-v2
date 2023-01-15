export const baseHead = (theme: any) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 600,
  color: '#fff',
  lineHeight: 1.25,
  "&::selection": {
    backgroundColor: theme.palette.primary.main,
  },
})