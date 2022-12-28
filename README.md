# DigiAsia 2022 數位亞洲大會

## Project Intro
![](https://bnextmedia.s3.hicloud.net.tw/image/album/2022-11/img-1667355680-54548@600.jpg)
DigiAsia由由亞洲16個地區組成《Asian Federation of Advertising Associations（簡稱AFAA）亞洲廣告聯盟》授權台北市廣告代理商業同業公會（TAAA）所主辦，自2014年以來每兩年舉辦一次的「DigiAsia數位亞洲大會」，今年邁進第五屆，是亞洲地區最具指標性的數位與創意國際盛會。

《數位亞洲大會（DigiAsia）》的宗旨是－創造一個全球最大的數位創意創新平台，做為亞洲與全球數位相關產業與產業之間的互動橋樑。並整合人文與科技，融合創意與創新，透過分享與學習，體驗與交流，以激勵亞洲數位精英，持續不斷地為人類更好的生活創新、創造及創業。
![](https://bnextmedia.s3.hicloud.net.tw/image/album/2022-11/img-1669685793-27596.jpeg)
2022 DigiAsia的議題聚焦在「Media & Creative」、「Social & Experience」、「Economy & Application」，探討數位生活體驗、媒體行銷的解決方案以及科技技術創新與應用。隨著Web3的環境及發展日益蓬勃，虛擬實境、動態捕捉技術演進，引發大眾好奇。而諸如AR、VR、XR、Metaverse、Crypto Economy、NFT、Immersive Entertainment、Gaming 等應用，影響著廣告、媒體與行銷相關產業的未來，更可能加速創造各種新商業與消費模式。

3天的活動中，來自臺、日、德、美、加、韓等，逾20場精采講座的國內外優異講師一字排開，Yahoo、Meta、Google、LINE四大媒體平台霸主引人矚目，加上全球智慧行動裝置與科技創新先驅HTC VIVE、全球最大廣告公司dentsu電通、日本跨國際性廣告公司HAKUHODO博報堂、臺灣首屈一指媒體經銷商cacaFly…等等各擅勝場的重量級陣容，是關注Web3行銷領域的朋友不可錯過的活動之一。

● 活動日期：2022年11月17日(四)-11月19日(六)，09:30~17:50
● 活動地點：花博公園流行館 (地址：台北市中山區玉門街1號)
● 活動官網：http://digiasia.org.tw

### Person In charge
- Planner by Loti Chang from [cacafly](https://www.cacafly.com/)
- Website & NFT Design by Sophia Lee
- Website & NFT Dev by NorthBei from [Metartemis](https://metartemis.co/)

### Relative Link
- Official website: [DigiAsia 2022](http://digiasia.org.tw/2022)
- Figma: [DigiAsia web design](https://www.figma.com/file/kz546FPaZzz2gEBcWk6hy2/DigiAsia_web_design)
- Demo: [DigiAsia 2022](https://2022-digiasia.netlify.app)
- News: 
  - [DigiAsia現場直擊！從線上展覽大廳到線下實體策展，看在地新創團隊如何發揮技術力，展現Web3 Rhapsody狂想曲的魔力](https://www.bnext.com.tw/article/72920/dnft)
  - [DigiAsia 2022大會在台北 重磅數位行銷大師共譜「Web3 Rhapsody狂想曲」](https://www.chinatimes.com/campus/20221117003586-262301?chdtv)
  - [掌握最新國際趨勢與數位行銷觀點 讓您洞察先機贏得商機](https://www.bnext.com.tw/article/72442/-digiasias-2022)
  - [DigiAsia 2022 邀請您一同探索「Web3 Rhapsody 狂想曲」](https://www.bnext.com.tw/article/72392/-digiasia-2022)


## Getting Started

This project build a static website dev by Next.js

First, install all package and run the development server:
```bash
# Run server
yarn install

# Run server
yarn dev

# Run build
yarn export
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.
BTW, the gsap's spacing calculation of ScrollTrigger animation will be rendered in different between `Development mode` (run with hot reload) and `Production mode` (after built) and the Production mode's animation is correct, so we should check the built website's animation after finished development.

## Dev Env

- Node: `v16.16.0`
- yarn: `1.22.19`

## npm scripts
```bash
# Run the development server
yarn dev

# Build dynamic website support by Next.js (didn't use in this project)
yarn build

# Build static website
yarn export

# Run dynamic website support by Next.js (didn't use in this project)
yarn start

# Lint by next
yarn lint

# Lint all js/jsx/ts/tsx/json file by eslint and fix
yarn lint:fix

# Run server and host the static website build by next
yarn serve

# Build static website and delpoy to FTP Server
yarn deploy
```

## Reference

- gsap
  - [Get Started](https://greensock.com/get-started/)
  - [Getting Started with GSAP + React.](https://greensock.com/react/#state)
  - [GSAP + React, Advanced Animation Techniques](https://greensock.com/react-advanced/)
  - [Most Common ScrollTrigger Mistakes](https://greensock.com/st-mistakes/)
  - [ScrollTrigger event callback example on codepen](https://codepen.io/GreenSock/pen/qBdeVJY)
  - [Endless ScrollTrigger](https://greensock.com/forums/topic/24410-scroll-trigger-no-end-to-trigger/)
  - [ScrollTrigger multiple section animation](https://greensock.com/forums/topic/30744-how-use-scrolltrigger-to-move-between-sections/)
  - [Setting start and end progress for a scrollTrigger scrub animation](https://greensock.com/forums/topic/28771-setting-start-and-end-progress-for-a-scrolltrigger-scrub-animation/)
  - [Play or reverse timeline to a specific label or time](https://greensock.com/forums/topic/24307-play-or-reverse-timeline-to-a-specific-label-or-time/)
  - [How to use autoAphla in gsap](https://segmentfault.com/a/1190000005366176)
  - [ScrollTrigger multiple section with indicator example on codepen](https://codepen.io/GreenSock/pen/bGVjLwG)
  - [ScrollTrigger multiple section with indicator example](https://greensock.com/forums/topic/25193-scrolltrigger-scroll-to-label-in-timeline/)
  - [ScrollTrigger srub in center of page example on codepen](https://codepen.io/b1mind/pen/yLeoQOG)
  - [ScrollTrigger virtual scroll end distance example on codepen](https://codepen.io/bekahmcdonald/pen/mdPpJKR)
  - [Add some delay between two ScrollTrigger animation](https://greensock.com/forums/topic/30744-how-use-scrolltrigger-to-move-between-sections/)
  - [ScrollTrigger animation will overlapped when page is refreshed with scroll](https://greensock.com/forums/topic/25763-how-to-control-animation-when-page-is-refreshed-mid-scroll/)
- Next.js
  - [Image optimization for static NextJS sites](https://whereisthemouse.com/image-optimization-for-static-nextjs-sites)

  
