"use client"

import Image from "next/image"
import Link from "next/link"
import { turboIntegrations } from "@/data/turbo-integrations"
import { motion, MotionProps } from "framer-motion"
import ReactMarkdown from "react-markdown"
import Balancer from "react-wrap-balancer"

import { DEPLOY_URL } from "@/config/site"
import { cn } from "@/lib/utils"
import { fadeUpVariant } from "@/lib/utils/motion"
import { buttonVariants } from "@/components/ui/button"
import { WalletAddress } from "@/components/blockchain/wallet-address"
import { WalletConnect } from "@/components/blockchain/wallet-connect"
import { PageSectionGrid } from "@/components/layout/page-section"
import { IsDarkTheme } from "@/components/shared/is-dark-theme"
import { IsLightTheme } from "@/components/shared/is-light-theme"
import { IsWalletConnected } from "@/components/shared/is-wallet-connected"
import { IsWalletDisconnected } from "@/components/shared/is-wallet-disconnected"
import { LightDarkImage } from "@/components/shared/light-dark-image"
import {
  ERC20Decimals,
  ERC20Name,
  ERC20Symbol,
} from "@/integrations/erc20/components/erc20-read"
import { ButtonSIWELogin } from "@/integrations/siwe/components/button-siwe-login"
import { ButtonSIWELogout } from "@/integrations/siwe/components/button-siwe-logout"
import { IsSignedIn } from "@/integrations/siwe/components/is-signed-in"
import { IsSignedOut } from "@/integrations/siwe/components/is-signed-out"

const demos = [
  {
    title: "Web3 Components for the power developer",
    description: "Pre-built Web3 components, powered by WAGMI",
    large: true,
    demo: (
      <div className="mx-auto  justify-between">
        <IsWalletConnected>
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-5 lg:pt-10">
            <div className=" block text-center">
              <WalletAddress isLink truncate />
              <span className="mt-4 block font-mono text-xs font-semibold">
                &lt;WalletAddress isLink truncate /&gt;
              </span>
            </div>
          </div>
        </IsWalletConnected>
        <IsWalletDisconnected>
          <WalletConnect className="mx-auto inline-block" />
        </IsWalletDisconnected>
      </div>
    ),
  },
  {
    title: "One-click Deploy",
    description:
      "Start your next Web3 project in ⚡ Turbo Mode with a deploy to [Vercel](https://vercel.com/) in one click.",
    demo: (
      <a href={DEPLOY_URL} rel="noreferrer" target={"_blank"}>
        <img
          alt="Deploy with Vercel"
          src="https://vercel.com/button"
          width={120}
        />
      </a>
    ),
  },
  {
    title: turboIntegrations.disco.name,
    description: turboIntegrations.disco.description,
    href: turboIntegrations.disco.href,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image
          alt="Disco logo"
          className="rounded-full"
          height={100}
          src="/integrations/discoDark.png"
          width={100}
        />
      </div>
    ),
  },
  {
    title: "Sign-In With Ethereum",
    description: turboIntegrations.siwe.description,
    href: turboIntegrations.siwe.href,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image
          alt="Prisma logo"
          height={80}
          src="/integrations/siwe.svg"
          width={80}
        />
      </div>
    ),
  },
  {
    title: "Rainbowkit",
    description:
      "The best way to connect a wallet. Designed for everyone. Built for developers.",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image
          alt="Rainbow logo"
          height={100}
          src="/integrations/rainbowkit.svg"
          width={100}
        />
      </div>
    ),
  },
  {
    title: turboIntegrations.etherscan.name,
    description: turboIntegrations.etherscan.description,
    href: turboIntegrations.etherscan.href,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <IsLightTheme>
          <Image
            alt="Etherscan logo"
            height={100}
            src="/integrations/etherscan-dark.svg"
            width={100}
          />
        </IsLightTheme>
        <IsDarkTheme>
          <Image
            alt="Etherscan logo"
            height={100}
            src="/integrations/etherscan-light.svg"
            width={100}
          />
        </IsDarkTheme>
      </div>
    ),
  },
  {
    title: "Web3 Login",
    description: "Authenticate using an Ethereum Account",
    demo: (
      <div className="text-center">
        <IsWalletConnected>
          <IsSignedIn>
            <ButtonSIWELogout />
          </IsSignedIn>
          <IsSignedOut>
            <ButtonSIWELogin label="Sign-In With Ethereum" />
          </IsSignedOut>
        </IsWalletConnected>
        <IsWalletDisconnected>
          <WalletConnect />
        </IsWalletDisconnected>
      </div>
    ),
  },
  {
    title: "ERC20 WAGMI",
    description:
      "Read and Write to ERC20 smart contracts using minimal UI components.",
    demo: (
      <div className="min-w-[220px] text-center">
        <img
          alt={`Token USDC icon`}
          className="mx-auto h-12 w-12 rounded-full border-2 border-white shadow-md"
          src={`https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png`}
        />
        <h3 className="mt-4 text-2xl font-normal">
          <ERC20Name
            address={
              "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" as "0x${string}"
            }
            chainId={1}
          />{" "}
          (
          <ERC20Symbol
            address={
              "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" as "0x${string}"
            }
            chainId={1}
          />
          )
        </h3>
        <p>
          Decimals{" "}
          <ERC20Decimals
            address={
              "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" as "0x${string}"
            }
            chainId={1}
          />
        </p>
        <Link href="/integration/erc20" className={cn(buttonVariants())}>
          View Token Page
        </Link>
      </div>
    ),
  },
  {
    title: turboIntegrations.openai.name,
    description: turboIntegrations.openai.description,
    href: turboIntegrations.openai.href,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <IsLightTheme>
          <Image
            alt="OpenAI logo"
            height={100}
            src={turboIntegrations.openai.imgDark}
            width={100}
          />
        </IsLightTheme>
        <IsDarkTheme>
          <Image
            alt="OpenAI logo"
            height={100}
            src={turboIntegrations.openai.imgLight}
            width={100}
          />
        </IsDarkTheme>
      </div>
    ),
  },
  {
    title: turboIntegrations.gelato.name,
    description: turboIntegrations.gelato.description,
    href: turboIntegrations.gelato.href,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <IsLightTheme>
          <Image
            alt={`${turboIntegrations.gelato.name} logo`}
            height={100}
            src={turboIntegrations.gelato.imgDark}
            width={100}
          />
        </IsLightTheme>
        <IsDarkTheme>
          <Image
            alt={`${turboIntegrations.gelato.name} logo`}
            height={100}
            src={turboIntegrations.gelato.imgLight}
            width={100}
          />
        </IsDarkTheme>
      </div>
    ),
  },
]

interface ExampleDemosProps extends MotionProps {
  className?: string
}

export function ExampleDemos({ className, ...props }: ExampleDemosProps) {
  return (
    <PageSectionGrid className={className} {...props}>
      {demos.map(({ title, description, href, demo, large }) => (
        <DemoCard
          key={title}
          title={title}
          description={description}
          href={href}
          demo={demo}
          large={large}
        />
      ))}
    </PageSectionGrid>
  )
}

interface DemoCardProps extends MotionProps {
  demo: React.ReactNode
  title: string
  description: string
  large?: boolean
  href?: string
}

function DemoCard({ title, description, href, demo, large }: DemoCardProps) {
  return (
    <motion.div
      variants={fadeUpVariant()}
      className={`relative col-span-1 overflow-hidden rounded-xl border bg-card px-4 shadow-sm transition-shadow hover:shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex h-60 items-center justify-center">{demo}</div>
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mb-3 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-xl font-bold text-transparent dark:from-stone-100 dark:to-emerald-200 md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="prose-sm md:prose -mt-2 leading-normal text-muted-foreground">
          <Balancer>
            <ReactMarkdown
              components={{
                a: ({ ...props }) => (
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    {...props}
                    className="font-medium text-foreground underline transition-colors dark:text-blue-200"
                  />
                ),

                code: ({ ...props }) => (
                  <code
                    {...props}
                    className="rounded-sm px-1 py-0.5 font-mono font-medium text-foreground"
                  />
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </Balancer>
        </div>
        {!href ? null : (
          <Link href={href} className={cn(buttonVariants(), "my-4")}>
            Demo
          </Link>
        )}
      </div>
    </motion.div>
  )
}
