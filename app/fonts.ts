import localFont from 'next/font/local';

const bookkBold = localFont({
  src: '../public/fonts/BookkMyungjo_Bold.woff',
  display: 'swap',
  variable: '--font-bookk-bold',
})

const bookkLight = localFont({
  src: '../public/fonts/BookkMyungjo_Light.woff',
  display: 'swap',
  variable: '--font-bookk-light',
})

const poppinsSemiBold = localFont({
  src: '../public/fonts/Poppins-SemiBold.woff',
  display: 'swap',
  variable: '--font-poppin',
})

export const fonts = { bookkBold, bookkLight, poppinsSemiBold };