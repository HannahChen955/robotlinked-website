import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Clock, Award, Globe, Shield, Settings, Cog, Target, ExternalLink } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with better layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium">
                  <Globe className="w-4 h-4" />
                  {t('home.hero.badge')}
                </div>

                {/* AI/Robotics Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full border border-purple-200">
                    {t('home.hero.tag1')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                    {t('home.hero.tag2')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full border border-green-200">
                    {t('home.hero.tag3')}
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {t('home.hero.title')}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('home.hero.subtitle')}
                  </p>
                </div>

                {/* Two Core Services - Restructured */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('home.hero.services_intro')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">{t('home.hero.service_talent')}</span>：{t('home.hero.service_talent_desc')}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">{t('home.hero.service_solutions')}</span>：{t('home.hero.service_solutions_desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{t('home.hero.benefit1')}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{t('home.hero.benefit2')}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                  <Award className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{t('home.hero.benefit3')}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
                  <Shield className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{t('home.hero.benefit4')}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 shadow-lg"
                >
                  {t('home.hero.cta_primary')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="aspect-[16/9] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <img
                  src="/images/hero-humanoid.svg"
                  alt="Abstract humanoid robot with data flows"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Image Tags Overlay */}
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-purple-700 border border-purple-200">
                  AI-first
                </span>
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-blue-700 border border-blue-200">
                  Robotics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Core Services - Enhanced Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Talent Service Card */}
            <Link
              to="/services"
              className="group relative overflow-hidden rounded-2xl border border-blue-200 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="/images/talent-team.png"
                  alt="人才服务团队"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-indigo-100/90"></div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                <div className="absolute top-6 right-6">
                  <div className="p-3 bg-blue-600 rounded-xl group-hover:bg-blue-700 transition-colors">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {t('home.services.talent_title')}
                    </h3>
                    <p className="text-lg text-gray-700 font-medium">
                      {t('home.services.talent_desc')}
                    </p>
                  </div>

                  {/* Service Advantages & Deliverables */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-blue-600">{t('home.services.talent_advantage1')}</div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">{t('home.services.talent_deliverable1')}</span>
                          <span className="text-gray-600 ml-1">（{t('home.services.talent_detail1')}）</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-blue-600">{t('home.services.talent_advantage2')}</div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">{t('home.services.talent_deliverable2')}</span>
                          <span className="text-gray-600 ml-1">（{t('home.services.talent_detail2')}）</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-blue-600">{t('home.services.talent_advantage3')}</div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">{t('home.services.talent_deliverable3')}</span>
                          <span className="text-gray-600 ml-1">（{t('home.services.talent_detail3')}）</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    {t('common.learn_more')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Solutions Service Card */}
            <Link
              to="/services"
              className="group relative overflow-hidden rounded-2xl border border-purple-200 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="/images/supply-chain-solution.png"
                  alt="供应链解决方案"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/90 to-pink-100/90"></div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                <div className="absolute top-6 right-6">
                  <div className="p-3 bg-purple-600 rounded-xl group-hover:bg-purple-700 transition-colors">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {t('home.services.solutions_title')}
                    </h3>
                    <p className="text-lg text-gray-700 font-medium">
                      {t('home.services.solutions_desc')}
                    </p>
                  </div>

                  {/* Service Advantages & Deliverables */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-purple-600">{t('home.services.solutions_advantage1')}</div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">{t('home.services.solutions_deliverable1')}</span>
                          <span className="text-gray-600 ml-1">（{t('home.services.solutions_detail1')}）</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-purple-600">{t('home.services.solutions_advantage2')}</div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">{t('home.services.solutions_deliverable2')}</span>
                          <span className="text-gray-600 ml-1">（{t('home.services.solutions_detail2')}）</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-purple-600">{t('home.services.solutions_advantage3')}</div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-900">{t('home.services.solutions_deliverable3')}</span>
                          <span className="text-gray-600 ml-1">（{t('home.services.solutions_detail3')}）</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                    {t('common.learn_more')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Five Key Challenges We Solve */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('home.clients.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('home.clients.subtitle')}
            </p>
            <div className="mt-6">
              <Link
                to="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                {t('common.view_services')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Challenge 1 - From AI to Hardware */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 flex-1">
                  {t('home.clients.challenge1.title')}
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-2">{t('home.clients.problem_label')}</p>
                  <p className="text-sm text-gray-600">{t('home.clients.challenge1.problem')}</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600 font-medium mb-2">{t('home.clients.solution_label')}</p>
                  <p className="text-sm text-gray-700">{t('home.clients.challenge1.solution')}</p>
                </div>
                <div className="pt-2">
                  <Link
                    to="/solutions#bom-sourcing"
                    className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 font-medium group"
                  >
                    {t('home.clients.challenge1.link')}
                    <ExternalLink className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Challenge 2 - Team Building */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 flex-1">
                  {t('home.clients.challenge2.title')}
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-2">{t('home.clients.problem_label')}</p>
                  <p className="text-sm text-gray-600">{t('home.clients.challenge2.problem')}</p>
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-medium mb-2">{t('home.clients.solution_label')}</p>
                  <p className="text-sm text-gray-700">{t('home.clients.challenge2.solution')}</p>
                </div>
                <div className="pt-2">
                  <Link
                    to="/talent#process"
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    {t('home.clients.challenge2.link')}
                    <ExternalLink className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Challenge 3 - Key Components */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Settings className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 flex-1">
                  {t('home.clients.challenge3.title')}
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-2">{t('home.clients.problem_label')}</p>
                  <p className="text-sm text-gray-600">{t('home.clients.challenge3.problem')}</p>
                </div>
                <div>
                  <p className="text-sm text-orange-600 font-medium mb-2">{t('home.clients.solution_label')}</p>
                  <p className="text-sm text-gray-700">{t('home.clients.challenge3.solution')}</p>
                </div>
                <div className="pt-2">
                  <Link
                    to="/solutions#key-components"
                    className="inline-flex items-center text-sm text-orange-600 hover:text-orange-700 font-medium group"
                  >
                    {t('home.clients.challenge3.link')}
                    <ExternalLink className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Challenge 4 - Production Ramp */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Cog className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 flex-1">
                  {t('home.clients.challenge4.title')}
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-2">{t('home.clients.problem_label')}</p>
                  <p className="text-sm text-gray-600">{t('home.clients.challenge4.problem')}</p>
                </div>
                <div>
                  <p className="text-sm text-green-600 font-medium mb-2">{t('home.clients.solution_label')}</p>
                  <p className="text-sm text-gray-700">{t('home.clients.challenge4.solution')}</p>
                </div>
                <div className="pt-2">
                  <Link
                    to="/solutions#golden-line"
                    className="inline-flex items-center text-sm text-green-600 hover:text-green-700 font-medium group"
                  >
                    {t('home.clients.challenge4.link')}
                    <ExternalLink className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Challenge 5 - Cost & Delivery */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 flex-1">
                  {t('home.clients.challenge5.title')}
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-2">{t('home.clients.problem_label')}</p>
                  <p className="text-sm text-gray-600">{t('home.clients.challenge5.problem')}</p>
                </div>
                <div>
                  <p className="text-sm text-red-600 font-medium mb-2">{t('home.clients.solution_label')}</p>
                  <p className="text-sm text-gray-700">{t('home.clients.challenge5.solution')}</p>
                </div>
                <div className="pt-2">
                  <Link
                    to="/solutions#cost-control"
                    className="inline-flex items-center text-sm text-red-600 hover:text-red-700 font-medium group"
                  >
                    {t('home.clients.challenge5.link')}
                    <ExternalLink className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Challenge 6 - Cross-Regional Coordination */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 flex-1">
                  {t('home.clients.challenge6.title')}
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-2">{t('home.clients.problem_label')}</p>
                  <p className="text-sm text-gray-600">{t('home.clients.challenge6.problem')}</p>
                </div>
                <div>
                  <p className="text-sm text-indigo-600 font-medium mb-2">{t('home.clients.solution_label')}</p>
                  <p className="text-sm text-gray-700">{t('home.clients.challenge6.solution')}</p>
                </div>
                <div className="pt-2">
                  <Link
                    to="/about#bilingual-coordination"
                    className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 font-medium group"
                  >
                    {t('home.clients.challenge6.link')}
                    <ExternalLink className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('home.outcomes.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.outcomes.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">48h</div>
              <div className="text-gray-900 font-semibold mb-3 text-lg">{t('home.outcomes.metric1')}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{t('home.outcomes.metric1_desc')}</div>
              <div className="mt-4 w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <div className="text-4xl font-bold text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300">8-12 {t('home.outcomes.weeks')}</div>
              <div className="text-gray-900 font-semibold mb-3 text-lg">{t('home.outcomes.metric2')}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{t('home.outcomes.metric2_desc')}</div>
              <div className="mt-4 w-12 h-1 bg-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <div className="text-4xl font-bold text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300">10 {t('home.outcomes.days')}</div>
              <div className="text-gray-900 font-semibold mb-3 text-lg">{t('home.outcomes.metric3')}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{t('home.outcomes.metric3_desc')}</div>
              <div className="mt-4 w-12 h-1 bg-green-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;