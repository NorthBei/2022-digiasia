export enum BASIC_PADDING {
  MOBILE = '25px',
  PC = '60px',
}

export enum ICON_SIZE {
  MOBILE = '30px',
  PC = '30px',
}

// Access enum by index https://bobbyhadz.com/blog/typescript-access-enum-by-index
export enum SECTION_ID {
  section0 = 'section0',
  section1 = 'section1',
  section2 = 'section2',
  section3 = 'section3',
  section4 = 'section4',
  section5 = 'section5',
  footer = 'footer',
}

export const SECTION_ID_ARRAY = Object.values(SECTION_ID);

export enum ANIM_DIRECTION {
  TOP_TO_BOTTOM = 1,
  BOTTOM_TO_TOP = -1,
}

export enum PAGE_PATH {
  HOME = '/',
  ABOUT = '/about',
  AGENDA = '/agenda',
  SPEAKERS = '/speakers',
  REGISTRATION = '/registration',
  NFT_BAZAAR = '/nft-bazaar',
  NFT_REDEEM = '/nft-redeem',
}

export const SCROLL_TO_SECTION_ID = 'scrollToSectionId';

export enum EXTERNAL_PAGE_URL {
  DIGIASIA_FACEBOOK = 'https://www.facebook.com/digiasia.tw',
  DIGIASIA_LINE_OA = 'https://page.line.me/digiasia',
  LIVE_CONFERENCE = 'https://digiasia2022.osense.space/?id=i3mWTch5ZuMffOZCbPN3',
  ONLINE_EXHIBITION = 'https://digiasia2022.osense.space/?id=EBxOBtt2X5nskjjFCcBB',
  TIX_PROTOCOL_NFT_MINT_TUTORIAL = 'https://youtu.be/X_zbAa3veBE',
  TIX_PROTOCOL_SIGN_UP = 'https://app.tixprotocol.com/entrance/signup',
  DIGIASIA_ACCUPASS_EN = 'https://www.accupass.com/event/2209220759229585362760',
  DIGIASIA_ACCUPASS_ZH = 'https://www.accupass.com/go/digiasia2022',
  TAAA_OFFICIAL_WEBSITE = 'http://www.taaa.org.tw/',
}
