import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    /**
     * The default locale to use when the locale is not available.
     */
    defaultLocale: "pt-BR",
    /**
     * Available locales.
     */
    locales: ["en-US", "pt-BR"],
  },
};

export default nextConfig;
