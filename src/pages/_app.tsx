import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.scss";

import { ThemeProvider } from "@/components/ThemeProvider";
import styles from "@/styles/Home.module.scss";
import ThemeToggle from "@/components/Theme";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="newyork" enableSystem>
        <Component {...pageProps} />
        <div className={styles.themeToggler}>
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
