import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/tsunabee-logo.png" alt="つなビー" width={120} height={40} className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              探究学習とは
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-blue-600 transition-colors">
              学習資料・ガイド
            </Link>
            <Link href="/chatbots">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                AIツールを使う
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}