import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// チャットボットのデータ（実際のアプリケーションではAPIから取得）
const chatbots = {
  "problem-finder": {
    title: "課題発見アシスタント",
    description: "身の回りの問題や疑問を見つけるお手伝いをします",
    category: "課題発見",
    color: "from-blue-500 to-blue-600",
    difyUrl: "https://your-dify-url-1.com",
    features: ["日常生活の問題点を発見", "社会課題の特定支援", "研究テーマの絞り込み", "問題の優先順位付け"],
  },
  "idea-generator": {
    title: "アイデア創出サポーター",
    description: "創造的な解決策を考えるためのヒントやアプローチを提案します",
    category: "アイデア創出",
    color: "from-yellow-500 to-orange-500",
    difyUrl: "https://your-dify-url-2.com",
    features: ["ブレインストーミング支援", "創造的思考法の提案", "アイデアの組み合わせ", "実現可能性の検討"],
  },
  // 他のチャットボットも同様に定義...
}

interface PageProps {
  params: {
    id: string
  }
}

export default function ChatbotPage({ params }: PageProps) {
  const chatbot = chatbots[params.id as keyof typeof chatbots]

  if (!chatbot) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/images/tsunabee-logo.png" alt="つなビー" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <Link href="/chatbots">
              <Button variant="outline" className="border-2 bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                AIツール一覧に戻る
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* サイドバー */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <Badge className="w-fit mb-2">{chatbot.category}</Badge>
                <CardTitle className="text-xl">{chatbot.title}</CardTitle>
                <CardDescription>{chatbot.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3">主な機能</h4>
                <ul className="space-y-2">
                  {chatbot.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* チャットボットエリア */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] border-0 shadow-2xl">
              <CardHeader className={`bg-gradient-to-r ${chatbot.color} text-white rounded-t-lg`}>
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  {chatbot.title}
                </CardTitle>
                <CardDescription className="text-white/80">何でも気軽に質問してください</CardDescription>
              </CardHeader>
              <CardContent className="p-0 h-full">
                {/* Difyチャットボット埋め込みエリア */}
                <div className="h-full bg-gray-50 flex items-center justify-center rounded-b-lg">
                  <div className="text-center p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${chatbot.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-600 mb-4">ここにDifyで作成したチャットボットを埋め込みます</p>
                    <code className="text-sm bg-gray-200 px-3 py-1 rounded block">
                      {`<iframe src="${chatbot.difyUrl}" width="100%" height="100%" frameborder="0"></iframe>`}
                    </code>
                    <p className="text-xs text-gray-500 mt-2">
                      実際の実装では上記のiframeタグを使用してDifyチャットボットを埋め込みます
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
