import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, MessageCircle, Lightbulb, Target, Search, ArrowRight, Settings, Clock } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">高校生向け探究学習支援AIサービス</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            探究学習を
            <br />
            AIと一緒に
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            課題設定から情報収集、整理・分析、まとめ・表現まで、
            <br />
            AIがあなたの探究学習をサポートします。
          </p>
          <p className="text-sm text-gray-500 mb-8">
            山口県委託事業 | つなガク！Yamaguchi参加校限定 | 2026年3月31日まで無料提供
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chatbots">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                AIツールを使う
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="border-2 bg-transparent">
                <BookOpen className="w-5 h-5 mr-2" />
                学習資料・ガイドを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-700">探究学習について</Badge>
            <h2 className="text-3xl font-bold mb-6">探究学習とは？</h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>探究学習とは、生徒が自ら課題を設定し、情報収集・整理・分析を行い、まとめ・表現する学習活動です。</p>
              <p>
                この学習プロセスを通じて、批判的思考力、創造的思考力、協働性などの21世紀型スキルを身につけることができます。
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-lg font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">課題設定</h4>
                <p className="text-gray-600 text-sm">興味関心から探究すべき課題を見つける</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-lg font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">情報収集</h4>
                <p className="text-gray-600 text-sm">課題について様々な角度から情報を集める</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-lg font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">整理・分析</h4>
                <p className="text-gray-600 text-sm">収集した情報を整理し、批判的に分析する</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white text-lg font-bold">4</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">まとめ・表現</h4>
                <p className="text-gray-600 text-sm">研究成果をまとめ、効果的に発表する</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">探究学習をサポートする機能</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              探究学習の各段階（課題設定、情報収集、整理・分析、まとめ・表現）を
              <br />
              対話的にサポートします
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-blue-700 text-lg">課題設定</CardTitle>
                <CardDescription className="text-sm">
                  興味関心から研究テーマを見つけ、探究すべき課題を明確にします
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-green-700 text-lg">情報収集</CardTitle>
                <CardDescription className="text-sm">
                  効果的な情報収集の方法や信頼できる情報源の見つけ方をサポート
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-purple-700 text-lg">整理・分析</CardTitle>
                <CardDescription className="text-sm">
                  収集した情報を整理し、批判的思考で分析する方法を提案
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-pink-50 to-pink-100">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-pink-700 text-lg">まとめ・表現</CardTitle>
                <CardDescription className="text-sm">
                  研究成果を効果的にまとめ、発表する方法をアドバイス
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>


      {/* Safety Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700">安全性への配慮</Badge>
            <h2 className="text-3xl font-bold mb-4">教育利用に特化した安全設計</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              文部科学省のガイドラインに準拠し、高校生が安心して利用できる環境を提供
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">🔒 プライバシー保護</CardTitle>
                <CardDescription>個人情報の登録不要で、安全にご利用いただけます</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 個人情報の登録不要</li>
                  <li>• 入力内容は保存されません</li>
                  <li>• 利用履歴も記録しません</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">🛡️ 教育向けフィルタリング</CardTitle>
                <CardDescription>教育目的に最適化された安全な学習環境</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 不適切な内容をブロック</li>
                  <li>• 教育目的に最適化</li>
                  <li>• 安全な学習環境を提供</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">📚 学習データ非使用</CardTitle>
                <CardDescription>入力内容は他の用途に使用されません</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 入力内容はAI学習に使用されません</li>
                  <li>• 他の利用者への影響なし</li>
                  <li>• 完全に独立した利用環境</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">今すぐ探究学習を始めよう</h2>
          <p className="text-xl mb-4 text-blue-100">AIと一緒に、あなたの好奇心を形にしませんか？</p>
          <p className="text-sm mb-8 text-blue-200">
            つなガク！Yamaguchi参加校の生徒・教職員限定 | 2026年3月31日まで無料
          </p>
          <Link href="/chatbots">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <MessageCircle className="w-5 h-5 mr-2" />
              AIツールを使う
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
