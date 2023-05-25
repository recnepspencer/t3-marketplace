import { ClerkProvider } from "@clerk/nextjs";
import { withTRPC } from "@trpc/next";
import type { AppProps } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { NavBar } from "~/components/Navbar";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <div className="text-slate-800 bg-slate-300">
              <NavBar/>
      <Component {...pageProps} />
      </div>

    </ClerkProvider>
  );
}
 
export default api.withTRPC(MyApp);
