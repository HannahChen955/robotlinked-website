import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Shield, Globe, Network, Focus, Award, Users, TrendingUp, Settings, Cpu, Cog, Bot } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const methodology = [
    {
      icon: Users,
      title: t('about.methodology.people.title'),
      desc: t('about.methodology.people.desc'),
    },
    {
      icon: Zap,
      title: t('about.methodology.solutions.title'),
      desc: t('about.methodology.solutions.desc'),
    },
  ];

  const advantages = [
    {
      icon: Globe,
      title: t('advantages.adv1.title'),
      desc: t('advantages.adv1.desc'),
    },
    {
      icon: Network,
      title: t('advantages.adv2.title'),
      desc: t('advantages.adv2.desc'),
    },
    {
      icon: Target,
      title: t('advantages.adv3.title'),
      desc: t('advantages.adv3.desc'),
    },
    {
      icon: TrendingUp,
      title: t('advantages.adv4.title'),
      desc: t('advantages.adv4.desc'),
    },
    {
      icon: Focus,
      title: t('advantages.adv5.title'),
      desc: t('advantages.adv5.desc'),
    },
    {
      icon: Bot,
      title: t('advantages.adv6.title'),
      desc: t('advantages.adv6.desc'),
    },
  ];

  const capabilities = [
    {
      icon: Users,
      title: t('about.capabilities.cap1.title'),
      desc: t('about.capabilities.cap1.desc'),
    },
    {
      icon: Settings,
      title: t('about.capabilities.cap2.title'),
      desc: t('about.capabilities.cap2.desc'),
    },
    {
      icon: Cog,
      title: t('about.capabilities.cap3.title'),
      desc: t('about.capabilities.cap3.desc'),
    },
    {
      icon: Cpu,
      title: t('about.capabilities.cap4.title'),
      desc: t('about.capabilities.cap4.desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Our Mission - Combined Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Mission Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('about.mission.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t('about.subtitle')}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.mission.desc')}
              </p>
              <p className="text-lg text-gray-700">
                {t('about.description')}
              </p>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <img
                  src="/images/about-hero.svg"
                  alt="AI and Robotics Manufacturing Network"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('about.methodology.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {methodology.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{method.title}</h3>
                  <p className="text-gray-600">{method.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('about.capabilities.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.capabilities.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group border border-gray-100 hover:border-blue-200 text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{capability.title}</h3>
                  <p className="text-gray-600">{capability.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Advantages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('advantages.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('advantages.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all group border border-gray-100 hover:border-blue-200">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team & Compliance */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Our Team */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('about.team.title')}
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  {t('about.team.intro')}
                </p>
                <p className="text-gray-600">
                  {t('about.team.experience')}
                </p>
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-600 text-sm">{t('about.team.years')}</div>
                  </div>
                  <div className="text-center bg-purple-50 p-6 rounded-2xl border border-purple-100">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                    <div className="text-gray-600 text-sm">{t('about.team.projects')}</div>
                  </div>
                  <div className="text-center bg-green-50 p-6 rounded-2xl border border-green-100">
                    <div className="text-3xl font-bold text-green-600 mb-2">AI+</div>
                    <div className="text-gray-600 text-sm">{t('about.team.clients')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Our Compliance */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">{t('about.compliance.title')}</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                    {t('about.compliance.data_security')}
                  </h4>
                  <p className="text-gray-600 text-sm">{t('about.compliance.data_desc')}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Globe className="w-5 h-5 text-purple-600 mr-2" />
                    {t('about.compliance.confidentiality')}
                  </h4>
                  <p className="text-gray-600 text-sm">{t('about.compliance.confidentiality_desc')}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-5 h-5 text-green-600 mr-2" />
                    {t('about.compliance.quality_standards')}
                  </h4>
                  <p className="text-gray-600 text-sm">{t('about.compliance.quality_desc')}</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105 shadow-lg"
                >
                  {t('about.download_brochure')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;