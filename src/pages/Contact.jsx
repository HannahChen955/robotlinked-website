import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Send, CheckCircle, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const schema = z.object({
    company: z.string().min(1, 'Company name is required'),
    contact: z.string().min(1, 'Contact name is required'),
    position: z.string().min(1, 'Position is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email address'),
    location: z.string().min(1, 'Location is required'),
    stage: z.string().optional(),
    services: z.string().optional(),
    timeline: z.string().optional(),
    budget: z.string().optional(),
    team_size: z.string().optional(),
    challenges: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // EmailJS configuration
      const serviceId = 'service_vvq2t3j';
      const templateId = 'template_z4dzwwh';
      const publicKey = 'n51he590v9qnMhzCj';

      // 准备发送的数据
      const templateParams = {
        from_company: data.company,
        from_name: data.contact,
        from_position: data.position,
        from_email: data.email,
        from_location: data.location,
        stage: data.stage || 'Not specified',
        services: data.services || 'Not specified',
        timeline: data.timeline || 'Not specified',
        budget: data.budget || 'Not specified',
        team_size: data.team_size || 'Not specified',
        message: data.challenges || 'No additional information provided',
        to_email: 'service@robotlinked.com'
      };

      // 发送邮件
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // 成功后显示成功页面
      setIsSubmitted(true);

      // 可选：保存到本地存储作为备份
      localStorage.setItem('contactForm', JSON.stringify(data));

    } catch (error) {
      console.error('邮件发送失败:', error);
      alert('提交失败，请稍后重试或直接联系我们的邮箱');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {t('contact.success.title')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('contact.success.message')}
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-gray-900 font-medium hover:underline"
          >
            {t('contact.success.new_inquiry')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('contact.subtitle')}
            </p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>

          </div>
        </div>
      </section>

      {/* Contact Form & Direct Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company')}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      placeholder={t('contact.form.company_placeholder')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                    )}
                  </div>

                  {/* Contact Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.contact')}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      {...register('contact')}
                      type="text"
                      placeholder={t('contact.form.contact_placeholder')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                    {errors.contact && (
                      <p className="mt-1 text-sm text-red-600">{errors.contact.message}</p>
                    )}
                  </div>

                  {/* Position */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.position')}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      {...register('position')}
                      type="text"
                      placeholder={t('contact.form.position_placeholder')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                    {errors.position && (
                      <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder={t('contact.form.email_placeholder')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Stage */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.stage')}
                    </label>
                    <select
                      {...register('stage')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">{t('contact.form.stage_placeholder')}</option>
                      <option value="idea">{t('contact.form.stage_idea')}</option>
                      <option value="prototype">{t('contact.form.stage_prototype')}</option>
                      <option value="testing">{t('contact.form.stage_testing')}</option>
                      <option value="scaling">{t('contact.form.stage_scaling')}</option>
                      <option value="mass">{t('contact.form.stage_mass')}</option>
                      <option value="discuss">{t('contact.form.stage_discuss')}</option>
                    </select>
                    {errors.stage && (
                      <p className="mt-1 text-sm text-red-600">{errors.stage.message}</p>
                    )}
                  </div>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.services')}
                    </label>
                    <select
                      {...register('services')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">{t('contact.form.services_placeholder')}</option>
                      <option value="talent">{t('contact.form.services_talent')}</option>
                      <option value="solutions">{t('contact.form.services_solutions')}</option>
                      <option value="both">{t('contact.form.services_both')}</option>
                      <option value="discuss">{t('contact.form.services_discuss')}</option>
                    </select>
                    {errors.services && (
                      <p className="mt-1 text-sm text-red-600">{errors.services.message}</p>
                    )}
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.timeline')}
                    </label>
                    <select
                      {...register('timeline')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">{t('contact.form.timeline_placeholder')}</option>
                      <option value="urgent">{t('contact.form.timeline_urgent')}</option>
                      <option value="1-3months">{t('contact.form.timeline_1_3')}</option>
                      <option value="3-6months">{t('contact.form.timeline_3_6')}</option>
                      <option value="6+months">{t('contact.form.timeline_6_plus')}</option>
                      <option value="discuss">{t('contact.form.timeline_discuss')}</option>
                    </select>
                    {errors.timeline && (
                      <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
                    )}
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.budget')}
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">{t('contact.form.budget_placeholder')}</option>
                      <option value="<10k">{t('contact.form.budget_10k')}</option>
                      <option value="10k-50k">{t('contact.form.budget_10_50k')}</option>
                      <option value="50k-100k">{t('contact.form.budget_50_100k')}</option>
                      <option value="100k+">{t('contact.form.budget_100k_plus')}</option>
                      <option value="discuss">{t('contact.form.budget_discuss')}</option>
                    </select>
                  </div>

                  {/* Team Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.team_size')}
                    </label>
                    <select
                      {...register('team_size')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    >
                      <option value="">{t('contact.form.team_size_placeholder')}</option>
                      <option value="1-10">{t('contact.form.team_size_1_10')}</option>
                      <option value="11-50">{t('contact.form.team_size_11_50')}</option>
                      <option value="51-200">{t('contact.form.team_size_51_200')}</option>
                      <option value="200+">{t('contact.form.team_size_200_plus')}</option>
                      <option value="discuss">{t('contact.form.team_size_discuss')}</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.location')}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      {...register('location')}
                      type="text"
                      placeholder={t('contact.form.location_placeholder')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.challenges')}
                  </label>
                  <textarea
                    {...register('challenges')}
                    rows={5}
                    placeholder={t('contact.form.challenges_placeholder')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  {errors.challenges && (
                    <p className="mt-1 text-sm text-red-600">{errors.challenges.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    t('contact.form.submitting')
                  ) : (
                    <>
                      {t('contact.form.submit')}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Direct Contact */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {t('contact.direct.title')}
                </h3>

                <div className="space-y-3">
                  <a
                    href="mailto:service@robotlinked.com"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 p-3 bg-white rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <div>
                      <div className="text-sm font-medium">{t('contact.direct.service_email')}</div>
                      <div className="text-xs text-gray-500">{t('contact.direct.general')}</div>
                    </div>
                  </a>
                  <a
                    href="mailto:jason.zheng@robotlinked.com"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 p-3 bg-white rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <div>
                      <div className="text-sm font-medium">{t('contact.direct.jason_email')}</div>
                      <div className="text-xs text-gray-500">{t('contact.direct.founder')}</div>
                    </div>
                  </a>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-900">{t('contact.direct.response_time')}</span>
                  </div>
                  <p className="text-sm text-green-700">
                    {t('contact.direct.response_promise')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;