import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Network, Target, Zap, Focus } from 'lucide-react';

const Advantages = () => {
  const { t } = useTranslation();

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
      icon: Zap,
      title: t('advantages.adv4.title'),
      desc: t('advantages.adv4.desc'),
    },
    {
      icon: Focus,
      title: t('advantages.adv5.title'),
      desc: t('advantages.adv5.desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t('advantages.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('advantages.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
                    <Icon className="w-7 h-7 text-gray-700 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              为什么选择 RobotLinked？
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              我们不仅是服务提供商，更是您在中国制造旅程中的战略合作伙伴。通过深度的行业积累、专业的服务能力和高效的执行力，我们确保您的项目成功落地。
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">年行业经验</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">成功案例</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">48h</div>
                <div className="text-gray-600">响应时间</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('home.cta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            {t('common.book_call')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Advantages;