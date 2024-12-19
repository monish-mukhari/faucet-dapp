import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MainPage() {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`You entered: ${inputValue}`)
    setInputValue("")
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
              <label htmlFor="input" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Enter your request
              </label>
              <Input
                id="input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="What do you need?"
                className="w-full border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
            >
              Submit Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

