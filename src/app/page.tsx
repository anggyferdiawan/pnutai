"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import pnutlogo from "@public/peanut-img-1.png";
import { client } from "./client";
import { createWallet } from "thirdweb/wallets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Header />

        <div className="flex justify-center space-x-4">
          <a
            href="https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0xd81979610ee328aed7c095fe0ef84f16c5c3d365"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gray-900 text-white text-lg font-medium hover:bg-gray-700 transition duration-300"
          >
            Buy Now
          </a>
          <a
            href="https://t.me/PNUTtheSquirrel_bnb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-gray-900 text-white text-lg font-medium hover:bg-gray-700 transition duration-300"
          >
            Join Community
          </a>
        </div>

        <div className="flex justify-center mb-20 mt-4">
          <ConnectButton
            client={client}
            wallets={wallets}
            connectModal={{
              size: "compact",
              title: "Connect Wallet",
              showThirdwebBranding: false,
            }}
            appMetadata={{
              name: "Example App",
              url: "https://example.com",
            }}
          />
        </div>
        <SocialMediaIcons />
      </div>
    </main>
  );
}

const wallets = [
  createWallet("io.metamask"),
  createWallet("me.rainbow"),
  createWallet("com.trustwallet.app"),
];

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={pnutlogo}
        width={1080}
        height={1080}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 mt-6 text-zinc-100">
        $PNUTAI

      </h1>

      <p className="text-zinc-300 text-base">
        PNUT The Squirrel, as a tribute to Peanut the Squirrel and a symbol of
        wildlife conservation efforts. This token will serve as a platform for
        holders to support projects dedicated to the protection of animal life
        and the sustainable preservation of nature
      </p>

      <h2 className="text-1xl md:text-4xl font-semibold md:font-bold tracking-tighter mt-10 mb-6 text-zinc-100">
        Roadmap
      </h2>

      {/* Roadmap Section */}
      <Roadmap />

      <h2 className="text-1xl md:text-4xl font-semibold md:font-bold tracking-tighter mt-10 mb-6 text-zinc-100">
        Tokenomics
      </h2>

      {/* Tokenomics Section */}
      <Tokenomics />
    </header>
  );
}

function Roadmap() {
  const roadmapItems = [
    {
      title: "📍 November 24",
      description:
        "Launch of PnutAI Utility Platform: Introducing a platform designed to deliver immediate benefits to the community with innovative AI-based features.",
    },
    {
      title: "📍 MCap 10K",
      description:
        "Utility Platform Launch: Unveiling the first feature to empower holders and strengthen the PnutAI ecosystem.",
    },
    {
      title: "📍 MCap 20K",
      description:
        "Burn 50% of Liquidity Pool (LP): Reducing token supply to enhance scarcity and add value for holders.",
    },
    {
      title: "📍 MCap 50K",
      description:
        "Burn 100% of Liquidity Pool (LP): Ensuring greater liquidity stability and reinforcing the token's fundamentals.",
    },
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-6">
      {roadmapItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.description}
          </p>
        </a>
      ))}
    </div>
  );
}

function Tokenomics() {
  const roadmapItems = [
    {
      title: "0.5 BNB",
      description:
        "LP (Liquidity Provider)",
    },
    {
      title: "30 Day",
      description:
        "Lock LP.",
    },
    {
      title: "100B $PNUTAI",
      description:
        "Token Supply",
    },
    {
      title: "0/0 Tax",
      description:
        "No Tax Transactions",
    },
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-6">
      {roadmapItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.description}
          </p>
        </a>
      ))}
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <div className="flex justify-center space-x-6 mt-6">
      {/* Twitter Icon */}
      <a
        href="https://x.com/0xPnutAi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-400 transition duration-300"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      {/* Telegram Icon */}
      <a
        href="https://t.me/PNUTtheSquirrel_bnb"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-400 transition duration-300"
      >
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </a>
      
    </div>
  );
}
