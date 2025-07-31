import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, Video, Download, ExternalLink, Clock, CheckCircle, Settings } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ResourcesPage() {
  const resources = [
    // 利用可能
    {
      id: "problem-finding-guide",
      title: "課題発見のコツ",
      description: "身の回りの問題を見つけるための観察方法とアプローチ",
      type: "guide",
      icon: BookOpen,
      status: "preparation",
      category: "課題発見",
      estimatedTime: "15分",
    },
    {
      id: "research-basics",
      title: "探求学習の基礎",
      description: "探求学習の進め方と基本的な考え方を学ぼう",
      type: "guide",
      icon: FileText,
      status: "preparation",
      category: "基礎知識",
      estimatedTime: "20分",
    },

    // 準備中
    {
      id: "research-planning",
      title: "研究計画の立て方",
      description: "効果的な研究計画を作成するためのステップとポイント",
      type: "guide",
      icon: FileText,
      status: "preparation",
      category: "研究計画",
      estimatedTime: "25分",
      releaseDate: "2025年9月予定",
    },
    {
      id: "presentation-video",
      title: "発表テクニック動画講座",
      description: "研究成果を効果的に伝えるためのプレゼンテーション技術",
      type: "video",
      icon: Video,
      status: "preparation",
      category: "発表・表現",
      estimatedTime: "30分",
      releaseDate: "2025年9月予定",
    },

    // 計画中
    {
      id: "data-analysis-workshop",
      title: "データ分析ワークショップ",
      description: "収集したデータを分析し、意味のある結論を導く方法",
      type: "workshop",
      icon: Download,
      status: "planned",
      category: "データ分析",
      estimatedTime: "60分",
      releaseDate: "2025年9月予定",
    },
    {
      id: "ethics-handbook",
      title: "研究倫理ハンドブック",
      description: "高校生が知っておくべき研究倫理の基本",
      type: "handbook",
      icon: BookOpen,
      status: "planned",
      category: "研究倫理",
      estimatedTime: "40分",
      releaseDate: "2025年9月予定",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return (
          <Badge className="bg-green-500 text-white">
            <CheckCircle className="w-3 h-3 mr-1" />
            利用可能
          </Badge>
        )
      case "preparation":
        return (
          <Badge className="bg-blue-500 text-white animate-pulse">
            <Settings className="w-3 h-3 mr-1" />
            準備中
          </Badge>
        )
      case "planned":
        return (
          <Badge className="bg-gray-500 text-white">
            <Clock className="w-3 h-3 mr-1" />
            計画中
          </Badge>
        )
      default:
        return null
    }
  }

  const getActionButton = (resource: any) => {
    switch (resource.status) {
      case "available":
        return (
          <Button className="w-full bg-blue-500 hover:bg-blue-600">
            <BookOpen className="w-4 h-4 mr-2" />
            読む
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        )
      case "preparation":
        return (
          <Button disabled className="w-full bg-blue-400 cursor-not-allowed">
            <Settings className="w-4 h-4 mr-2" />
            準備中...
          </Button>
        )
      case "planned":
        return (
          <Button disabled className="w-full bg-gray-400 cursor-not-allowed">
            <Clock className="w-4 h-4 mr-2" />
            {resource.releaseDate}
          </Button>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">学習リソース</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            学習資料・ガイド
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            探求学習を深めるための参考資料やガイドを
            <br />
            段階的に公開していきます。
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const IconComponent = resource.icon
              const isDisabled = resource.status !== "available"

              return (
                <Card
                  key={resource.id}
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 group ${
                    isDisabled ? "opacity-75" : "cursor-pointer"
                  }`}
                >
                  <CardHeader className="relative">
                    <div className="absolute -top-2 -right-2">{getStatusBadge(resource.status)}</div>
                    <div
                      className={`w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 ${
                        !isDisabled ? "group-hover:scale-110" : ""
                      } transition-transform ${isDisabled ? "grayscale" : ""}`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="w-fit mb-2 text-xs">
                      {resource.category}
                    </Badge>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                      <span>📖 {resource.estimatedTime}</span>
                      {resource.releaseDate && <span>📅 {resource.releaseDate}</span>}
                    </div>
                  </CardHeader>
                  <CardContent>{getActionButton(resource)}</CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">さらなる学習資料を準備中</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            より充実した学習体験を提供するため、動画講座やワークショップ資料を順次公開予定です。
          </p>
          <Button variant="outline" className="border-2 bg-transparent">
            リクエストを送る
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
