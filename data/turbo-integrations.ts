export const integrationCategories = [
  "general",
  "protocols",
  "services",
] as const

interface TurboIntegration {
  name: string
  href: string
  url: string
  description: string
  imgLight: string
  imgDark: string
  category: (typeof integrationCategories)[number]
}

export const turboIntegrations = {
  siwe: {
    name: "SIWE",
    href: "/integration/sign-in-with-ethereum",
    url: "https://login.xyz/",
    description:
      "Sign-In with Ethereum is Web3 authentication using an Ethereum account.",
    category: "general",
    imgLight: "/integrations/siwe.svg",
    imgDark: "/integrations/siwe.svg",
  },
  erc20: {
    name: "ERC20",
    href: "/integration/erc20",
    url: "https://eips.ethereum.org/EIPS/eip-20",
    description: "ERC20 is a standard for fungible tokens on EVM chains",
    category: "protocols",
    imgLight: "/integrations/erc20.png",
    imgDark: "/integrations/erc20.png",
  },
  etherscan: {
    name: "Etherscan",
    href: "/integration/etherscan",
    url: "https://etherscan.io",
    description:
      "Etherscan is the leading block explorer and search, API & analytics platform for Ethereum.",
    category: "general",
    imgLight: "/integrations/etherscan-light.svg",
    imgDark: "/integrations/etherscan-dark.svg",
  },
  disco: {
    name: "Disco",
    href: "/integration/disco",
    url: "https://disco.xyz",
    description:
      "Disco is identity simplified. Giving the tools to consent to how information is shared and with whom.",
    category: "services",
    imgLight: "/integrations/discoLight.png",
    imgDark: "/integrations/discoDark.png",
  },
  openai: {
    name: "OpenAI",
    href: "/integration/openai",
    url: "https://www.openai.com/",
    description:
      "OpenAI offers AI models designed for advanced natural language processing.",
    category: "general",
    imgLight: "/integrations/openai-light.svg",
    imgDark: "/integrations/openai-dark.svg",
  },
  gelato: {
    name: "Gelato",
    href: "/integration/gelato",
    url: "https://docs.gelato.network/",
    description:
      "Enabling developers to create augmented smart contracts that are automated, gasless & off-chain aware",
    category: "protocols",
    imgLight: "/integrations/gelato-light.svg",
    imgDark: "/integrations/gelato-light.svg",
  },
} as const
