"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { AppBar } from "@/components/app-bar"
import { MainContent } from "@/components/main-content"
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
        <div className="flex flex-col min-h-screen">
          <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <AppBar />
                  <MainContent />
                </WalletModalProvider>
              </WalletProvider>
            </ConnectionProvider>
        </div>
      </div>
    </ThemeProvider>
  )
}

