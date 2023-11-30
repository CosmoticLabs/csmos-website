import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
  logo: <Image src="/logo.png" alt="csmos logo" width={40} height={40} />,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
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
