/** @format */
import { CgAdd } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { LuHelpCircle } from "react-icons/lu";
import { AiOutlineBulb } from "react-icons/ai";
import { MdModelTraining } from "react-icons/md";
import {
  BillingIcon,
  FieIcon,
  HelpIcon,
  SettingIcon,
  TrainingIcon,
  KnowledgeIcon,
  MyClient,
  Prospecting,
  Stats,
} from "../../assets/icons/Icons";

export const sidebarItems = [
  { to: "/", icon: CgAdd, label: "NEW CLIENT" },
  { to: "/my-client", icon: MyClient, label: "MY CLIENTS" },
  { to: "/prospecting", icon: Prospecting, label: "PROSPECTING" },
  { to: "/billing", icon: BillingIcon, label: "BILLING" },
  { to: "/setting", icon: SettingIcon, label: "SETTINGS" },
  { to: "/stats", icon: Stats, label: "STATS" },
  { to: "/files", icon: FieIcon, label: "FILES" },
  { to: "/help", icon: HelpIcon, label: "HELP" },
  { to: "/knowledge", icon: KnowledgeIcon, label: "KNOWLEDGE" },
  { to: "/training", icon: TrainingIcon, label: "TRAINING" },
];
