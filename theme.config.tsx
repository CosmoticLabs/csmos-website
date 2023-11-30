import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
  logo: <Image src="/logo.png" alt="csmos logo" width={40} height={40} />,
  project: {
    link: "https://github.com/CosmoticLabs/csmos",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/CosmoticLabs/csmos-website/edit/main",
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  footer: {
    text: "Nextra Docs Template",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – csmos",
    };
  },
  primaryHue: 291,
};

export default config;
