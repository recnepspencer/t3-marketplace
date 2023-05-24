import { ClerkProvider } from "@clerk/nextjs";
import { withTRPC } from "@trpc/next";
import type { AppProps } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { NavBar } from "~/components/Navbar";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <NavBar/>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
 
export default api.withTRPC(MyApp);
