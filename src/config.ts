import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://brunociccarino.github.io",
  author: "Bruno Ciccarino",
  profile: "https://github.com/BrunoCiccarino",
  desc: "A minimal, small place where I post my articles.",
  title: "CiccaBruno.dev",
  ogImage: "ciccabruno.dev.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  editPost: {
    url: "https://github.com/BrunoCiccarino/BrunoCiccarino.github.io/tree/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/BrunoCiccarino/",
    linkTitle: `Follow ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/ciccabrunow",
    linkTitle: `Follow ${SITE.title} on X`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bruno-ciccarino-576947348/",
    linkTitle: `Follow ${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "brunociccarinoo@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "TikTok",
    href: "https://github.com/BrunoCiccarino",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/BrunoCiccarino",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/ciccab/",
    linkTitle: `${SITE.title} on Reddit`,
    active: true,
  },
  {
    name: "Steam",
    href: "https://github.com/BrunoCiccarino/",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/ciccabruno",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
