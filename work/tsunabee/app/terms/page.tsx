import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Users, BookOpen, Lock, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/images/tsunabee-logo.png" alt="つなビー" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-2 bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                ホームに戻る
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-700">法的文書</Badge>
          <h1 className="text-3xl font-bold mb-4">つなビー利用規約</h1>
          <p className="text-gray-600">高校生向け探究学習支援AIサービス「つなビー」の利用条件</p>
          <p className="text-sm text-gray-500 mt-2">制定日: 2025年7月30日</p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-500" />
                はじめに
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                「つなビー利用規約」（以下「本規約」）は、株式会社firm（以下「運営主体」）が提供する高校生向け探究学習支援AIサービス「つなビー」（以下「本サービス」）の利用条件を定めるものです。
              </p>
              <p className="text-gray-700">
                本サービスは、文部科学省が定めた「教育情報セキュリティポリシーに関するガイドライン（令和7年3月）」および「初等中等教育段階における生成AIの利活用に関するガイドライン（Ver.2.0）」に準拠し、安全かつ効果的な生成AI活用を支援することを目的として設計・提供されています。
              </p>
              <p className="text-gray-700">
                利用者は、本サービスを利用するにあたり、本利用規約に同意するものとします。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-green-500" />
                第1条（定義）
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">本規約における用語の定義は以下のとおりです。</p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      <strong>「本サービス」</strong>：運営主体が提供する高校生向け探究学習支援AIサービス「つなビー」
                    </li>
                    <li>
                      <strong>「参加校」</strong>：つなガク！Yamaguchiに参加し、かつ本サービスの利用を承認した高等学校
                    </li>
                    <li>
                      <strong>「利用者」</strong>：参加校に在籍し、本サービスを利用する生徒および教職員
                    </li>
                    <li>
                      <strong>「生徒」</strong>：参加校に在籍し、探究学習のために本サービスを利用する高校生
                    </li>
                    <li>
                      <strong>「教職員」</strong>
                      ：参加校に所属し、生徒の探究学習を指導・支援するために本サービスを利用する教員等
                    </li>
                    <li>
                      <strong>「生成AI」</strong>
                      ：AI技術により、文章や画像などの新たな情報を自動的に作り出す機能。本サービスではClaude（Anthropic社）を使用
                    </li>
                    <li>
                      <strong>「探究学習」</strong>
                      ：生徒が自ら課題を設定し、情報収集・整理・分析を行い、まとめ・表現する学習活動
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-500" />
                第2条（本サービスの内容）
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                本サービスは、高校生の探究学習を支援するための生成AIサービスであり、以下の特徴を有します。
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>探究学習の各段階（課題設定、情報収集、整理・分析、まとめ・表現）における対話的な支援</li>
                <li>批判的思考力や創造的思考力の育成を促す問いかけ機能</li>
                <li>安全性に配慮した教育向けフィルタリング機能</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">重要な特徴</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• 認証不要：個人情報の登録やログインは不要</li>
                  <li>• 毎回同意：利用開始時に利用規約への同意が必要</li>
                  <li>• データ非保存：入力内容や会話履歴は保存されず、セッション終了時に消去される</li>
                  <li>• 期間限定：2025年度末（2026年3月31日）までの無料サービス</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>第3条（利用条件）</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">本サービスは、参加校の生徒および教職員に対して、無料で提供されます。</p>
              <p className="text-gray-700">
                利用者は、本サービスの利用開始時に表示される本利用規約を確認し、「同意する」ボタンをクリックすることで、本規約に同意したものとみなされます。
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">利用条件</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>参加校の生徒または教職員であること</li>
                  <li>探究学習を目的とした教育活動での利用であること</li>
                  <li>本利用規約に同意すること</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-orange-500" />
                第4条（保護者の同意）
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                生徒による本サービスの利用は、保護者の同意のもと、学校の教育活動の一環として行われるものとします。
              </p>
              <p className="text-gray-700">
                本サービスは、高校生（15歳以上18歳未満）を対象として提供されます。18歳未満の生徒の利用には、保護者の同意が必要です。また、18歳であっても高校３年生を卒業していない場合は保護者の同意が必要です。
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">オプトアウト方式による同意取得</h4>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li>• 学校から保護者へ、文書またはメールにより本サービスの利用について事前に通知</li>
                  <li>• 通知には、サービスの内容、安全性への配慮、個人情報の取り扱い等を明記</li>
                  <li>• 一定期間（2週間程度）内に保護者から拒否の申し出がない場合、同意したものとみなす</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                第8条（禁止事項）
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">利用者は、本サービスの利用に際して、以下の行為を行ってはなりません。</p>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">1. 個人情報の入力</h4>
                <p className="text-red-700 text-sm mb-2">以下のような個人を特定できる情報を入力すること：</p>
                <ul className="list-disc list-inside space-y-1 text-red-700 text-sm ml-4">
                  <li>自分や他人の氏名（本名、ニックネーム）</li>
                  <li>住所（自宅、学校の詳細な所在地）</li>
                  <li>電話番号、メールアドレス</li>
                  <li>学校名、クラス名、出席番号</li>
                  <li>生年月日、学籍番号</li>
                  <li>家族の情報</li>
                  <li>SNSアカウント名</li>
                  <li>その他個人を特定できる情報</li>
                </ul>
                <p className="text-red-700 text-sm mt-2">
                  ※探究学習では一般的な課題を扱うため、個人情報は必要ありません
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="font-semibold text-gray-800 text-sm">2. 知的財産権の侵害</h5>
                  <p className="text-gray-700 text-sm">運営主体、他の利用者、第三者の著作権、商標権等を侵害する行為</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="font-semibold text-gray-800 text-sm">3. システムへの妨害</h5>
                  <p className="text-gray-700 text-sm">本サービスのシステムに対する過度なアクセスまたは妨害行為</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="font-semibold text-gray-800 text-sm">4. プロンプトインジェクション</h5>
                  <p className="text-gray-700 text-sm">AIの内部設定を改変・無効化しようとする入力を行う行為</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 mr-2 text-green-500" />
                第10条（セキュリティとプライバシー）
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                運営主体は、利用者のプライバシー保護を最優先に考え、本サービスを設計・運用しています。
              </p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">データ非保存の原則</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>
                    • <strong>入力内容と回答の自動削除</strong>：利用終了時（ブラウザを閉じた時）に自動的に削除
                  </li>
                  <li>
                    • <strong>利用履歴を残さない</strong>：誰がいつ何を質問したかといった利用履歴は一切記録しません
                  </li>
                  <li>
                    • <strong>個人情報を収集しない</strong>：氏名やメールアドレスなどの個人情報の登録は不要
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">AIの学習に使用されない</h4>
                <p className="text-blue-700 text-sm">
                  本サービスで使用するClaude（生成AI）は、利用者の入力内容を学習データとして使用しない設定になっています。これにより、入力した内容が他の利用者への回答に使われることはありません。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>第11条（サービスの変更・終了）</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">運営主体は、必要に応じて本サービスの内容を変更することがあります。</p>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="text-yellow-800 font-semibold">重要：サービス終了予定</p>
                <p className="text-yellow-700 text-sm">
                  本サービスは、2025年度末（2026年3月31日）をもって終了する予定です。やむを得ない事情により、予定より早く終了する場合は、可能な限り事前に通知します。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>第14条（準拠法・管轄）</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                本規約は日本法に準拠し、本サービスに関する紛争は、山口地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle>運営主体</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>株式会社firm</strong>
                <br />
                代表取締役　森下真嗣
                <br />
                制定日: 2025年7月30日
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              ホームに戻る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
