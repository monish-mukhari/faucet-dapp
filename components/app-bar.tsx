"use client"

import React from "react"
import { FingerprintIcon as Faucet, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import '../custom/custom-wallet-styles.css';

export const AppBar: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Faucet className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-semibold text-gray-800 dark:text-white">Faucet</span>
          </div>
          <div className="flex justify-between">

            <WalletMultiButton></WalletMultiButton>

            <div className="flex flex-col justify-center pl-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  )
}

