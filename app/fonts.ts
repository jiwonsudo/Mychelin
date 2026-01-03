import localFont from 'next/font/local';

const pretendardVariable = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

const hsBombaram = localFont({
  src: '../public/fonts/HSBombaram.woff',
  display: 'swap',
  variable: '--font-bombaram',
})

export const fonts = { pretendardVariable, hsBombaram };