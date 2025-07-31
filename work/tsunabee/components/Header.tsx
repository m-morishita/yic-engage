"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
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

          {/* モバイルメニュー */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                <SheetClose asChild>
                  <Link href="/#about" className="text-lg text-gray-600 hover:text-blue-600 transition-colors">
                    探究学習とは
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/resources" className="text-lg text-gray-600 hover:text-blue-600 transition-colors">
                    学習資料・ガイド
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/chatbots">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                      AIツールを使う
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}