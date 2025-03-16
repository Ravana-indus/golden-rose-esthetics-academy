
import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '@/components/forms/ContactForm';

const Balance = () => {
  return (
    <>
      <Helmet>
        <title>Balance Services | Canadian Masters Academy</title>
        <meta name="description" content="Discover our holistic balance services designed to promote wellness and harmony." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2220&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl opacity-100 transition-opacity duration-1000 ease-out">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-wide">
                Mind • Body • Spirit
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
              Find Your Perfect <span className="bg-clip-text text-transparent bg-gold-gradient">Balance</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Our holistic approach to wellness focuses on creating harmony between mind, body, and spirit for a balanced life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-rosegold/10 text-rosegold-dark mb-4">
              <span className="text-sm font-medium">Our Offerings</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Balance <span className="text-gold">Services</span>
            </h2>
            <p className="text-gray-600">
              Discover our range of services designed to promote wellness, harmony, and balance in your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mental Wellness",
                description: "Our mental wellness programs include meditation, mindfulness practices, and cognitive techniques to promote mental clarity.",
                icon: "💭"
              },
              {
                title: "Physical Harmony",
                description: "From yoga and pilates to personalized fitness plans, our physical programs help you achieve optimal health.",
                icon: "🧘‍♀️"
              },
              {
                title: "Spiritual Growth",
                description: "Explore spiritual wellness through guided meditation, energy healing, and mindfulness practices.",
                icon: "✨"
              },
              {
                title: "Nutrition Guidance",
                description: "Learn about balanced nutrition and how it contributes to overall wellness with our expert-led programs.",
                icon: "🥗"
              },
              {
                title: "Stress Management",
                description: "Develop effective coping mechanisms and strategies to manage stress in your daily life.",
                icon: "🌿"
              },
              {
                title: "Holistic Therapies",
                description: "Experience a range of holistic therapies designed to promote balance and wellness in all aspects of life.",
                icon: "🔄"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 border border-gray-100 hover:border-rosegold/20"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-playfair font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 md:px-6 bg-royal-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                <span className="text-sm font-medium">Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                The Balance <span className="text-rosegold">Philosophy</span>
              </h2>
              <p className="text-gray-600 mb-6">
                At Canadian Masters Academy, we believe true wellness comes from harmony between mind, body, and spirit. Our balance philosophy is rooted in ancient wisdom combined with modern techniques.
              </p>
              <div className="space-y-4">
                {[
                  "Personalized approach for individual needs",
                  "Integration of traditional and contemporary practices",
                  "Focus on sustainable lifestyle changes",
                  "Emphasis on preventative wellness",
                  "Community support and shared growth"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-rosegold/20 flex items-center justify-center text-rosegold shrink-0 mr-3 mt-0.5">
                      ✓
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Balance philosophy" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-28 w-28 bg-rosegold rounded-lg flex items-center justify-center text-white font-playfair text-xl p-4 shadow-elegant">
                Holistic Wellness
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-elegant p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-rosegold/10 text-rosegold-dark mb-4">
                <span className="text-sm font-medium">Get in Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Start Your <span className="text-gold">Balance Journey</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our balance services? Contact us to learn more or schedule a consultation with one of our experts.
              </p>
            </div>

            <ContactForm className="max-w-xl mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Balance;
