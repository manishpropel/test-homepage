import twitter from "../public/twitter.svg";
import telegram from "../public/telegram.svg";
import discord from "../public/discord.svg";
import medium from "../public/medium.svg";
import youtube from "../public/youtube.svg";
import ethereum from "../public/ethereum.svg";
import bnb from "../public/bnb.svg";
import avalanche from "../public/avalanche.svg";
import optimism from "../public/optimism.svg";
import solana from "../public/solana.svg";
import polygon from "../public/polygon.svg";

export const NAVIGATION_ITEMS = [
  {
    name: "Docs",
    path: "https://docs.dzap.io/",
  },
  {
    name: "Audit reports",
    path: "https://docs.dzap.io/protocol/audit-reports",
  },
  {
    name: "Feature request",
    path: "https://features.dzap.io/feature-request",
  },
  {
    name: "Blog",
    path: "https://mirror.xyz/0x3a28f13bA51235c895c1B080b108cDc45C9eA472",
  },
];
export const API = "https://api.dzap.io/batch-swap/get/stats";
export const FAST_SWAPS = "Fast swaps";
export const SUPPORTED_CHAINS_TITLE = "Every asset, every chain";
export const SUPPORTED_CHAINS_LIST = [
  {
    name: "ethereum",
    img: ethereum,
  },
  {
    name: "bnb",
    img: bnb,
  },
  {
    name: "avalanche",
    img: avalanche,
  },
  {
    name: "optimism",
    img: optimism,
  },
  {
    name: "solana",
    img: solana,
  },
  {
    name: "polygon",
    img: polygon,
  },
];
export const SOCIAL_ITEMS = [
  {
    socialImage: twitter,
    profileLink: "https://twitter.com/dzap_io",
  },
  {
    socialImage: telegram,
    profileLink: "https://t.me/dzap_io",
  },
  {
    socialImage: discord,
    profileLink: "https://discord.gg/aRHESJB9md",
  },
  {
    socialImage: medium,
    profileLink:
      "https://mirror.xyz/0x3a28f13bA51235c895c1B080b108cDc45C9eA472",
  },
  {
    socialImage: youtube,
    profileLink: "https://www.youtube.com/channel/UChwCZ6hcampuJwY-DltN99A",
  },
];
export const LINK_ITEMS = [
  {
    title: "Help",
    link: "help@dzap.io",
  },
  {
    title: "Blog",
    link: "https://mirror.xyz/0x3a28f13bA51235c895c1B080b108cDc45C9eA472",
  },
  {
    title: "Terms",
    link: "https://docs.dzap.io/protocol/terms",
  },
  {
    title: "Privacy",
    link: "https://docs.dzap.io/protocol/privacy",
  },
];
export const DZAP = "https://www.dzap.io/";
export const DZAP_HASHTAG = "#DoWithDZap";
export const MAIN_APP_TITLE =
  "Swap multiple tokens in a single transaction. Save upto 42% on gas fees.";
export const MAIN_APP_DESCRIPTION =
  "Unifying multi step processes in DeFi into ONE. Swap, Trade, Send or Invest efficiently with DZap.";
export const GET_STARTED_STEPS = "Get started in 2 easy steps: Add tokens Swap";
export const LAUNCH_APP = "Launch app";
export const DEMO_APP = "view demo";
export const OPACITY_RANGE: [number, number, any?] = [0, 1.6];
export const OPACITY_RANGE_REVERSE: [number, number, any?] = [1, 0.4];
export const MULTI_TO_MULTI = {
  title: "Multi-Multi Swap",
  description:
    "An interactive experience for you to Batch swap tokens. In a single transaction, either swap:",
  points: [
    "One token to multiple other tokens #one2many.",
    "Multiple tokens to a single one #many2one.",
    "Multiple tokens to other multiple tokens #many2many.",
  ],
};
export const AUDITED_BY = "Audited By";
export const WORKING_MODAL = {
  title: "What we do",
  textWhite: "Multiple tokens,",
  textGradient: "single transaction & lowest fees",
};
export const VIEW_DEMO_LINK =
  "https://www.youtube.com/channel/UChwCZ6hcampuJwY-DltN99A";
