// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Networks
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { env } from "@/env.mjs"
import { Chain, ChainProviderFn, configureChains } from "wagmi"
import {
  arbitrum,
  arbitrumGoerli as arbitrumGoerliNoIcon,
  baseGoerli as baseGoerliNoIcon,
  base as baseNoIcon,
  celoAlfajores as celoAlfajoresNoIcon,
  celo as celoNoIcon,
  goerli as goerliNoIcon,
  mainnet,
  optimism,
  optimismGoerli,
  sepolia as sepoliaNoIcon,
} from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { infuraProvider } from "wagmi/providers/infura"
import { publicProvider } from "wagmi/providers/public"

const goerli = {
  ...goerliNoIcon,
  iconUrl: "/icons/NetworkEthereumTest.svg",
}
const sepolia = {
  ...sepoliaNoIcon,
  iconUrl: "/icons/NetworkEthereumTest.svg",
}
const arbitrumGoerli = {
  ...arbitrumGoerliNoIcon,
  iconUrl: "/icons/NetworkArbitrumTest.svg",
}
const base = {
  ...baseNoIcon,
  iconUrl: "/icons/NetworkBaseTest.svg",
}

const baseGoerli = {
  ...baseGoerliNoIcon,
  iconUrl: "/icons/NetworkBaseTest.svg",
}
const celo = {
  ...celoNoIcon,
  iconUrl: "/icons/NetworkCelo.svg",
}
const celoAlfajores = {
  ...celoAlfajoresNoIcon,
  iconUrl: "/icons/NetworkCeloTest.svg",
}

export const ETH_CHAINS_TEST = [goerli, sepolia, optimismGoerli, arbitrumGoerli, celoAlfajores, baseGoerli]

export const ETH_CHAINS_PROD = [mainnet, optimism, arbitrum, celo, base]
export const ETH_CHAINS_DEV =
  env.NEXT_PUBLIC_PROD_NETWORKS_DEV === "true"
    ? [...ETH_CHAINS_PROD, ...ETH_CHAINS_TEST]
    : [...ETH_CHAINS_TEST]

export const CHAINS: Chain[] =
  process.env.NODE_ENV === "production" ? ETH_CHAINS_PROD : ETH_CHAINS_DEV

const PROVIDERS: ChainProviderFn<Chain>[] = []

if (env.NEXT_PUBLIC_ALCHEMY_API_KEY) {
  if (!env.NEXT_PUBLIC_ALCHEMY_API_KEY)
    throw new Error("NEXT_PUBLIC_ALCHEMY_API_KEY is not defined")
  PROVIDERS.push(
    alchemyProvider({
      apiKey: env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    })
  )
}

if (env.NEXT_PUBLIC_INFURA_API_KEY) {
  if (!env.NEXT_PUBLIC_INFURA_API_KEY)
    throw new Error("NEXT_PUBLIC_INFURA_API_KEY is not defined")
  PROVIDERS.push(
    infuraProvider({
      apiKey: env.NEXT_PUBLIC_INFURA_API_KEY,
    })
  )
}

// Fallback to public provider
// Only include public provider if no other providers are available.
if (PROVIDERS.length === 0 || env.NEXT_PUBLIC_USE_PUBLIC_PROVIDER === "true") {
  PROVIDERS.push(publicProvider())
}

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  CHAINS,
  PROVIDERS
)
