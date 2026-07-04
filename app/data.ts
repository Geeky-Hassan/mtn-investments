import {
  Banknote,
  CircleDollarSign,
  DatabaseZap,
  FileCheck2,
  Globe2,
  Landmark,
  LockKeyhole,
  Network,
  RadioTower,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Ecosystem", href: "/#ecosystem" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Portfolio Companies", href: "/#company" },
  { label: "Contact", href: "/contact" },
];

export const metrics = [
  { value: "3", label: "Integrated Platforms", detail: "FuzionOS / FuzionPay / Fuzion Capital" },
  { value: "RWA", label: "Tokenization Focus", detail: "Real-world asset issuance" },
  { value: "EVM", label: "Network Layer", detail: "Smart-contract infrastructure" },
  { value: "Global", label: "Market Orientation", detail: "Cross-border operating model" },
];

export const stackLayers: Array<{
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}> = [
  {
    eyebrow: "Blockchain & EVM Infrastructure",
    title: "FuzionOS",
    icon: Network,
    items: ["Proprietary EVM", "Permissioned networks", "Smart contract layer", "Token registry"],
  },
  {
    eyebrow: "Wallet, Custody & Settlement",
    title: "FuzionPay",
    icon: WalletCards,
    items: ["MPC wallets", "Escrow infrastructure", "Merchant settlement", "Fiat / token settlement"],
  },
  {
    eyebrow: "Tokenization, Exchange & Marketplace",
    title: "Fuzion Capital",
    icon: Landmark,
    items: ["RWA tokenization", "Commodity issuance", "Exchange operations", "Secondary marketplace"],
  },
];

export const capabilities: Array<{
  title: string;
  icon: LucideIcon;
  copy: string;
}> = [
  {
    title: "RWA tokenization",
    icon: CircleDollarSign,
    copy: "Real estate, commodities, funds and private assets prepared for digital issuance.",
  },
  {
    title: "Custody and settlement",
    icon: LockKeyhole,
    copy: "Wallet infrastructure, escrow flows and institutional asset movement.",
  },
  {
    title: "Payment rails",
    icon: Banknote,
    copy: "Fiat, stablecoin and token settlement pathways for operating platforms.",
  },
  {
    title: "Exchange operations",
    icon: TrendingUp,
    copy: "Primary issuance, secondary trading and market operations.",
  },
  {
    title: "Sovereign networks",
    icon: RadioTower,
    copy: "Private EVM networks for governments, financial zones and enterprises.",
  },
  {
    title: "Compliance architecture",
    icon: FileCheck2,
    copy: "KYC, monitoring, permissions and reporting for regulated markets.",
  },
];

export const regulatedActors = [
  "Financial institutions",
  "Government-backed programs",
  "Asset managers",
  "Commodity owners",
  "Exchange operators",
];

export const trustControls = [
  { title: "Compliance", icon: ShieldCheck, copy: "KYC, AML and permissioned access." },
  { title: "Token registry", icon: DatabaseZap, copy: "Issuance records and asset rules." },
  { title: "Market access", icon: Globe2, copy: "Cross-border deployment model." },
];

export const marketRails = [
  { title: "FuzionPay", detail: "Wallets / settlement / escrow" },
  { title: "FuzionOS", detail: "EVM rails / private networks" },
  { title: "Fuzion Capital", detail: "Tokenization / exchange / funds" },
  { title: "Partners", detail: "Banks / brokers / asset owners" },
];

export const projects = [
  {
    title: "FuzionPay",
    tag: "Settlement",
    stage: "Operating layer",
    focus: "Wallets, custody, escrow and merchant payment infrastructure.",
  },
  {
    title: "Fuzion Capital",
    tag: "Markets",
    stage: "Capital layer",
    focus: "Tokenized issuance, exchange operations and structured products.",
  },
  {
    title: "PropStake.ai",
    tag: "Real estate",
    stage: "RWA platform",
    focus: "Digital investment workflows for real estate-backed opportunities.",
  },
  {
    title: "E-Banking",
    tag: "Financial rails",
    stage: "Banking interface",
    focus: "Account, compliance and money movement layers for digital finance.",
  },
  {
    title: "Gold Mining Trading Solution",
    tag: "Commodities",
    stage: "Commodity market",
    focus: "Sourcing, verification and marketplace flows for metals programs.",
  },
  {
    title: "Inventory Tracking Solution",
    tag: "Operations",
    stage: "Traceability",
    focus: "Multi-location inventory controls with reconciliation and visibility.",
  },
];

export const companies = [
  "MTN Asset Management",
  "Metal Mining Pvt Ltd",
  "Unicore Supplies Pvt Ltd",
  "PropStake.ai LLP",
  "Technofuzion Technologies",
];

export const contactTracks = [
  "Tokenize an asset",
  "Launch wallet rails",
  "Deploy exchange infrastructure",
  "Build a private EVM network",
];
