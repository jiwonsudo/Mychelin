import localFont from 'next/font/local';

const bookkBold = localFont({
  src: '../public/fonts/BookkMyungjo_Bold.woff',
  display: 'swap',
  weight: '700',
  variable: '--font-bookk-bold',
})

const bookkLight = localFont({
  src: '../public/fonts/BookkMyungjo_Light.woff',
  display: 'swap',
  weight: '400',
  variable: '--font-bookk-light',
})

const notoSansKRVar = localFont({
  src: '../public/fonts/NotoSansKR-VariableFont_wght.woff',
  display: 'swap',
  variable: '--font-noto',
})

export const fonts = { bookkBold, bookkLight, notoSansKRVar };