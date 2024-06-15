import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.CLIENT_ID}
      activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 7171, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://connect.bit-rock.io"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Bitrock",
          symbol: "BROCK",
        },
        shortName: "Brock", // Display value shown in the wallet UI
        slug: "Bitrock", // Display value shown in the wallet UI
        testnet: false, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "Bitrock", // Name of the network
        name: "Bitrock Mainnet", // Name of the network
      }}
    >
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
