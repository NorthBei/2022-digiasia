import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const GA_ID = process.env.NODE_ENV === 'production' ? 'G-Z4GYCZEMK8' : '';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <!-- remote font --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap"
          rel="stylesheet"
        />
        {/* <!-- favicon --> */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/apple-icon-57x57.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/apple-icon-60x60.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/apple-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/apple-icon-76x76.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/apple-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/apple-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/apple-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/apple-icon-152x152.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/apple-icon-180x180.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/android-icon-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/android-icon-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/manifest.json`}
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon/ms-icon-144x144.png.json`}
        />
        {/* <!-- Facebook og tag --> */}
        <meta
          property="og:title"
          content="Welcome to DigiAsia 2022 in Taipei"
        />
        <meta property="og:site_name" content="DigiAsia 2022 數位亞洲大會" />
        <meta
          property="og:url"
          content="https://digiasia.org.tw/2022/index.html"
        />
        <meta
          property="og:description"
          content="DigiAsia以Web3 Rhapsody狂想曲為題，邀請全亞洲探索多元宇宙，打造知識、趣味、故事與浪漫的酷炫體驗"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/facebook-og-image.png`}
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${GA_ID}');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
