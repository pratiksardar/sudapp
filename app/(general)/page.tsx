import Image from "next/image"
import Link from "next/link"
import { FaDiscord, FaGithub } from "react-icons/fa"
import { LuBook } from "react-icons/lu"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  PageHeader,
  PageHeaderCTA,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { CopyButton } from "@/components/shared/copy-button"
import { ExampleDemos } from "@/components/shared/example-demos"

export default function HomePage() {
  return (
    <div className="container relative mt-20 px-0">
      <PageHeader className="pb-8">
        <Image
          src="/hackathon-partner-finder-logo.png"
          alt="Hackathon Partner Finder Logo"
          width={80}
          height={80}
          className="h-20 w-20 rounded-2xl"
        />
        <PageHeaderHeading>
          Find Your Perfect Hackathon Partner
        </PageHeaderHeading>
        <PageHeaderDescription>
          Connect with like-minded innovators and build something amazing
          together.
        </PageHeaderDescription>
        <PageHeaderCTA>
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ variant: "default" })}
          >
            <LuBook className="mr-2 h-4 w-4" />
            Create Profile
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ variant: "secondary" })}
          >
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
          <Link
            href={siteConfig.links.discord}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              buttonVariants(),
              "bg-[#7289da] text-white hover:bg-[#7289da]/80"
            )}
          >
            <FaDiscord className="mr-2 h-4 w-4" />
            Discord Community
          </Link>
        </PageHeaderCTA>
      </PageHeader>

      {/* Other sections like Wallet and any specific Web3 components remain unchanged */}

      <div className="mt-8">
        <h2 className="text-xl font-bold">How It Works</h2>
        <p className="text-md mt-2">
          Create a profile, highlight your skills, and let our smart matching
          algorithm find the best hackathon partner for you. Collaborate,
          innovate, and win together!
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold">Why Choose Us?</h2>
        <ul className="list-disc list-inside">
          <li>Decentralized and secure platform</li>
          <li>AI-powered matching based on skills and interests</li>
          <li>Collaborative spaces to brainstorm and build</li>
          <li>Earn unique NFT badges for your achievements</li>
        </ul>
      </div>

      {/* Add any additional sections specific to the hackathon partner finder theme here */}
    </div>
  )
}
