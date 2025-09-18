import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, MessageCircle, Users, Zap, Globe, Clock, Shield } from 'lucide-react';

const FAQ = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqCategories = [
    {
      icon: Users,
      title: t('faq.talent.title'),
      color: 'blue',
      questions: [
        {
          question: t('faq.talent.q1'),
          answer: t('faq.talent.a1')
        },
        {
          question: t('faq.talent.q2'),
          answer: t('faq.talent.a2')
        },
        {
          question: t('faq.talent.q3'),
          answer: t('faq.talent.a3')
        },
        {
          question: t('faq.talent.q4'),
          answer: t('faq.talent.a4')
        }
      ]
    },
    {
      icon: Zap,
      title: t('faq.solutions.title'),
      color: 'purple',
      questions: [
        {
          question: t('faq.solutions.q1'),
          answer: t('faq.solutions.a1')
        },
        {
          question: t('faq.solutions.q2'),
          answer: t('faq.solutions.a2')
        },
        {
          question: t('faq.solutions.q3'),
          answer: t('faq.solutions.a3')
        }
      ]
    },
    {
      icon: Globe,
      title: t('faq.general.title'),
      color: 'green',
      questions: [
        {
          question: t('faq.general.q1'),
          answer: t('faq.general.a1')
        },
        {
          question: t('faq.general.q2'),
          answer: t('faq.general.a2')
        },
        {
          question: t('faq.general.q3'),
          answer: t('faq.general.a3')
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      green: 'bg-green-50 text-green-600 border-green-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-2xl">
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('faq.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('faq.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-xl border ${getColorClasses(category.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const itemKey = `${categoryIndex}-${index}`;
                    const isOpen = openItems[itemKey];

                    return (
                      <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm">
                        <button
                          onClick={() => toggleItem(itemKey)}
                          className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {item.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-5">
                            <div className="pt-4 border-t border-gray-100">
                              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('faq.contact.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('faq.contact.description')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105 shadow-lg"
          >
            {t('faq.contact.cta')}
          </Link>
        </div>
      </section>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap((category, categoryIndex) =>
              category.questions.map((item, index) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            )
          })
        }}
      />
    </div>
  );
};

export default FAQ;