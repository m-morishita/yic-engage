import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src="/images/tsunabee-logo.png" alt="つなビー" width={80} height={27} className="h-7 w-auto" />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                利用規約
              </Link>
            </div>
            <div className="text-sm text-gray-400">© 2025 株式会社firm. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}