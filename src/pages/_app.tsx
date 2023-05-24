import { ClerkProvider } from "@clerk/nextjs";
import { withTRPC } from "@trpc/next";
import type { AppProps } from "next/app";
import { api } from "~/utils/api";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
 
export default api.withTRPC(MyApp);
