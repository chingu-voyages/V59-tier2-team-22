import { useState } from 'react';

function FAQsPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: 'What is this interview practice platform?',
      answer:
        "Our platform is designed to help you master technical interviews through practice. You can select different job roles, answer role-specific interview questions, and get immediate feedback on your performance. It's a low-pressure, anonymous environment to build confidence before real interviews.",
    },
    {
      question: 'How do I get started?',
      answer:
        "Simply create an account by signing up with your email and password. Once logged in, navigate to the Roles page and select a job role that interests you. You'll then be presented with interview questions tailored to that role. Answer the questions and submit your responses to get feedback and see your summary.",
    },
    {
      question: 'What types of interview questions are included?',
      answer:
        "Our platform covers a variety of job roles including Frontend Developer, Backend Developer, Full Stack Developer, Data Scientist, and Product Manager. Each role has curated interview questions that reflect the types of questions you'd encounter in real technical interviews at top companies.",
    },
    {
      question: 'How are the questions structured?',
      answer:
        'Questions are organized by role and cover various aspects of technical knowledge, problem-solving, and communication skills. Each question is designed to simulate real interview scenarios and help you practice articulating your thoughts clearly under time constraints.',
    },
    {
      question: 'Can I retake practice sessions?',
      answer:
        "Yes! You can practice as many times as you'd like. Your performance history is saved to your account, so you can track your progress over time and focus on areas where you need improvement. This helps you identify patterns and growth areas.",
    },
    {
      question: 'Is my data secure and private?',
      answer:
        'Your account information and practice history are securely stored. We take privacy seriously and only use your data to provide you with personalized insights about your interview performance. Your personal information is never shared with third parties.',
    },
    {
      question: "What if I'm completely new to technical interviews?",
      answer:
        'No problem! Our platform is designed for users at all levels, from beginners to experienced professionals. Start with any role, and use each practice session as a learning opportunity. Review the feedback provided and try again to improve your answers.',
    },
    {
      question: 'How long does a typical interview session take?',
      answer:
        'The length varies depending on the role and number of questions, but most sessions take between 30-60 minutes. You can work at your own pace without any time pressure, allowing you to practice thoroughly and thoughtfully.',
    },
    {
      question: 'Can I see my performance summary?',
      answer:
        "Yes! After completing a practice session, you'll be taken to a Summary page that shows your responses, feedback, and performance metrics. This helps you understand your strengths and areas for improvement.",
    },
    {
      question: 'Do I need any special software or tools?',
      answer:
        'No, you just need a web browser and internet connection. Our platform works seamlessly on desktop, tablet, and mobile devices. All you need is access to this website to start practicing.',
    },
    {
      question: 'How often should I practice?',
      answer:
        'We recommend practicing regularly to build confidence and improve your interview skills. Aim for at least 2-3 sessions per week for optimal results. Consistency is more important than marathon sessions.',
    },
    {
      question: 'Is there a cost to use the platform?',
      answer:
        'Currently, our platform is completely free to use. Sign up, create an account, and start practicing immediately at no cost. We believe in democratizing access to quality interview preparation resources.',
    },
  ];

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
          Frequently Asked Questions
        </h1>
        <p className='text-lg text-gray-600'>
          Find answers to common questions about our interview practice platform
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className='space-y-3'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='border border-gray-200 rounded-lg overflow-hidden hover:border-yellow-400 transition-colors duration-200'>
            <button
              onClick={() => toggleAccordion(index)}
              className='w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200 text-left'>
              <h3 className='text-lg font-semibold text-gray-900 pr-4'>
                {faq.question}
              </h3>
              <span
                className={`flex-shrink-0 text-yellow-400 text-2xl transition-transform duration-300 ${
                  expandedIndex === index ? 'transform rotate-180' : ''
                }`}>
                ▼
              </span>
            </button>

            {expandedIndex === index && (
              <div className='px-6 py-5 bg-gray-50 border-t border-gray-200'>
                <p className='text-gray-700 leading-relaxed'>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className='mt-16 text-center'>
        <p className='text-gray-600 mb-4'>
          Didn't find your answer? Feel free to reach out to us.
        </p>
        <a
          href='mailto:support@example.com'
          className='inline-block px-8 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-lg hover:shadow-xl'>
          Contact Support
        </a>
      </div>
    </div>
  );
}

export default FAQsPage;
