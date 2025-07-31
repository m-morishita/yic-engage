import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Brain,
  Search,
  Lightbulb,
  Target,
  Users,
  BookOpen,
  ArrowRight,
  Settings,
  Clock,
  Calendar,
  Shield,
  UserCheck,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ChatbotsPage() {
  const chatbots = [
    // 現在利用可能
    {
      id: "problem-finder",
      title: "課題発見アシスタント",
      description: "身の回りの問題や疑問を見つけるお手伝いをします",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-700",
      category: "課題発見",
      status: "available", // available, development, coming-soon, planned
      difyUrl: "https://your-dify-url-1.com",
    },
    {
      id: "idea-generator",
      title: "アイデア創出サポーター",
      description: "創造的な解決策を考えるためのヒントやアプローチを提案します",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-100",
      textColor: "text-orange-700",
      category: "アイデア創出",
      status: "development",
      releaseDate: "2025年9月予定",
    },

    // 開発中
    {
      id: "research-planner",
      title: "研究計画立案ボット",
      description: "効果的な研究計画の作成と進捗管理をサポートします",
      icon: Target,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      textColor: "text-purple-700",
      category: "研究計画",
      status: "development",
      releaseDate: "2025年9月予定",
    },
    {
      id: "literature-review",
      title: "文献調査アシスタント",
      description: "効果的な文献検索と情報整理をサポート",
      icon: BookOpen,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      textColor: "text-emerald-700",
      category: "情報収集",
      status: "development",
      releaseDate: "2025年9月予定",
    },

    // 近日公開
    {
      id: "collaboration-helper",
      title: "協働学習ヘルパー",
      description: "チームでの課題解決やディスカッションをサポートします",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      textColor: "text-green-700",
      category: "協働学習",
      status: "coming-soon",
      releaseDate: "2025年9月予定",
    },
    {
      id: "presentation-coach",
      title: "発表コーチ",
      description: "研究成果を効果的に伝えるためのプレゼンテーション指導",
      icon: MessageCircle,
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      textColor: "text-pink-700",
      category: "発表・表現",
      status: "coming-soon",
      releaseDate: "2025年9月予定",
    },

    // 計画中
    {
      id: "data-analysis",
      title: "データ分析サポーター",
      description: "収集したデータの分析と可視化をお手伝いします",
      icon: Brain,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      textColor: "text-indigo-700",
      category: "データ分析",
      status: "planned",
      releaseDate: "2025年9月予定",
    },
    {
      id: "ethics-advisor",
      title: "研究倫理アドバイザー",
      description: "研究における倫理的な配慮や注意点をガイドします",
      icon: Shield,
      color: "from-slate-500 to-slate-600",
      bgColor: "from-slate-50 to-slate-100",
      textColor: "text-slate-700",
      category: "研究倫理",
      status: "planned",
      releaseDate: "2025年9月予定",
    },
    {
      id: "peer-review",
      title: "ピアレビュー支援",
      description: "同級生同士での研究発表や相互評価をサポート",
      icon: UserCheck,
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100",
      textColor: "text-teal-700",
      category: "評価・改善",
      status: "planned",
      releaseDate: "2025年9月予定",
    },
  ]

  const categories = [...new Set(chatbots.map((bot) => bot.category))]

  // ステータスバッジの設定を追加
  const getStatusBadge = (status: string, releaseDate?: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-500 text-white">利用可能</Badge>
      case "development":
        return <Badge className="bg-blue-500 text-white animate-pulse">開発中</Badge>
      case "coming-soon":
        return <Badge className="bg-orange-500 text-white">近日公開</Badge>
      case "planned":
        return <Badge className="bg-gray-500 text-white">計画中</Badge>
      default:
        return null
    }
  }

  const getActionButton = (bot: any) => {
    switch (bot.status) {
      case "available":
        return (
          <Link href={`/chatbots/${bot.id}`}>
            <Button className={`w-full bg-gradient-to-r ${bot.color} hover:opacity-90 transition-opacity`}>
              <MessageCircle className="w-4 h-4 mr-2" />
              チャットを開始
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        )
      case "development":
        return (
          <Button disabled className="w-full bg-blue-400 cursor-not-allowed">
            <Settings className="w-4 h-4 mr-2" />
            開発中...
          </Button>
        )
      case "coming-soon":
        return (
          <Button disabled className="w-full bg-orange-400 cursor-not-allowed">
            <Clock className="w-4 h-4 mr-2" />
            {bot.releaseDate}
          </Button>
        )
      case "planned":
        return (
          <Button disabled className="w-full bg-gray-400 cursor-not-allowed">
            <Calendar className="w-4 h-4 mr-2" />
            {bot.releaseDate}
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
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">AI伴走ツール</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            AIツール一覧
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            探求学習の各段階に応じた専門的なAIアシスタントが、
            <br />
            あなたの学びをサポートします。
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="px-4 py-2 cursor-pointer hover:bg-gray-200">
              すべて
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-blue-50 hover:border-blue-300"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbots Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chatbots.map((bot) => {
              const IconComponent = bot.icon
              const isDisabled = bot.status !== "available"

              return (
                <Card
                  key={bot.id}
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${bot.bgColor} group ${
                    isDisabled ? "opacity-75" : "cursor-pointer"
                  }`}
                >
                  <CardHeader className="relative">
                    <div className="absolute -top-2 -right-2">{getStatusBadge(bot.status, bot.releaseDate)}</div>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${bot.color} rounded-lg flex items-center justify-center mb-4 ${
                        !isDisabled ? "group-hover:scale-110" : ""
                      } transition-transform ${isDisabled ? "grayscale" : ""}`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="w-fit mb-2 text-xs">
                      {bot.category}
                    </Badge>
                    <CardTitle
                      className={`${bot.textColor} ${!isDisabled ? "group-hover:text-opacity-80" : ""} transition-colors`}
                    >
                      {bot.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">{bot.description}</CardDescription>
                    {bot.releaseDate && bot.status !== "available" && (
                      <p className="text-xs text-gray-500 mt-2">📅 {bot.releaseDate}</p>
                    )}
                  </CardHeader>
                  <CardContent>{getActionButton(bot)}</CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">さらなるAIツールを開発中</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            より多様な学習ニーズに対応するため、新しいAIアシスタントを継続的に開発しています。
            ご要望やフィードバックをお聞かせください。
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
