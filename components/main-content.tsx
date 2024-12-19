import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";


export const MainContent: React.FC = () => {
  const [amount, setAmount] = useState("");

  const wallet = useWallet();
  const { connection } = useConnection();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!wallet.publicKey) {
      alert("Oops, select a wallet!");
      return;
    }
    await connection.requestAirdrop(wallet.publicKey as PublicKey, parseInt(amount) * 1000000000);
    alert("airdropped sol")
    setAmount("")
  }

  return (
    <main className="flex-grow flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800 dark:text-white">Welcome to Faucet</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="amount" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Amount
              </label>
              <Input
                id="amount"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
            >
              Send Airdrop
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

