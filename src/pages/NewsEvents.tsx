import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, MapPin, User, Tag, Search, Briefcase, Home } from 'lucide-react';

const NewsEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredEvent = {
    title: 'Annual Beauty Industry Showcase',
    date: 'June 25-26, 2024',
    time: '10:00 AM - 6:00 PM',
    location: 'Main Campus Exhibition Hall',
    description: 'Join us for our biggest event of the year! Connect with industry professionals, discover the latest beauty trends, and watch demonstrations from our talented students and faculty. This two-day event features guest speakers, hands-on workshops, and networking opportunities.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  };

  const upcomingEvents = [
    {
      title: 'Guest Speaker: Skincare Innovation',
      date: 'May 15, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Lecture Hall A',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Summer Open House',
      date: 'June 10, 2024',
      time: '11:00 AM - 3:00 PM',
      location: 'Main Campus',
      category: 'Open House',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Advanced Makeup Techniques',
      date: 'July 8, 2024',
      time: '1:00 PM - 5:00 PM',
      location: 'Studio B',
      category: 'Workshop',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80'
    },
    {
      title: 'Career Fair: Beauty Industry',
      date: 'July 20, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Exhibition Hall',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const newsArticles = [
    {
      title: 'Canadian Masters Academy Launches New Advanced Esthetics Program',
      date: 'April 10, 2024',
      author: 'Admin',
      excerpt: 'We are excited to announce our new Advanced Esthetics Program, designed to provide specialized training in the latest techniques and technologies in the beauty industry.',
      category: 'Announcements',
      image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Student Success Story: Meet Sarah, Now Working at Top Spa',
      date: 'March 25, 2024',
      author: 'Career Services',
      excerpt: 'Read about Sarah\'s journey from student to professional esthetician at one of Toronto\'s most prestigious spas, and how her education at Canadian Masters Academy prepared her for success.',
      category: 'Student Success',
      image: 'https://images.unsplash.com/photo-1595247602433-c3329c5c9641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
    },
    {
      title: 'Industry Trends: The Rise of Clean Beauty Products',
      date: 'March 15, 2024',
      author: 'Faculty',
      excerpt: 'Our faculty explores the growing trend of clean beauty products and what it means for estheticians and the beauty industry as a whole.',
      category: 'Industry Insights',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80'
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              News & <span className="text-gold">Events</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
              Stay updated with the latest happenings at Canadian Masters Academy and in the beauty industry.
            </p>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-20 px-4 md:px-6 -mt-12 relative z-10">
          <div className="container mx-auto">
            <div className="bg-white rounded-xl shadow-elegant overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={featuredEvent.image} 
                    alt={featuredEvent.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                    <span className="text-sm font-medium">Featured Event</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                    {featuredEvent.title}
                  </h2>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 text-gold mr-2" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 text-gold mr-2" />
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 text-gold mr-2" />
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {featuredEvent.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-gold text-gold hover:bg-gold/5">
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                  <span className="text-sm font-medium">Mark Your Calendar</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                  Upcoming <span className="text-gold">Events</span>
                </h2>
              </div>
              <div className="mt-4 md:mt-0 relative">
                <input
                  type="text"
                  placeholder="Search events..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className="h-48 relative">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gold px-3 py-1 rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-bold mb-3">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 text-gold mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="h-4 w-4 text-gold mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 text-gold mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/5">
                      Event Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/5">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-20 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-rosegold/20 text-rosegold-dark mb-4">
                <span className="text-sm font-medium">Stay Informed</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Latest <span className="text-gold">News</span>
              </h2>
              <p className="text-gray-600">
                Updates from our academy and insights from the beauty industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className="h-48 relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gold px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-bold mb-3">{article.title}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 text-gold mr-2" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <User className="h-4 w-4 text-gold mr-2" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link 
                      to={`/news/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-gold font-medium hover:underline"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/5">
                View All News <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-gold/10 to-rosegold/10 p-10 md:p-16 rounded-2xl shadow-elegant max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                  Stay <span className="text-gold">Updated</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Subscribe to our newsletter to receive the latest news, event announcements, and beauty industry insights.
                </p>
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  By subscribing, you agree to receive our newsletter and marketing emails. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-20 px-4 md:px-6 bg-royal-light">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold mb-4">
                <span className="text-sm font-medium">Browse by Category</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Event <span className="text-gold">Categories</span>
              </h2>
              <p className="text-gray-600">
                Find events and workshops that match your interests and career goals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link to="/events/workshops" className="group">
                <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all text-center hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Tag className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-2">Workshops</h3>
                  <p className="text-gray-600 text-sm">Hands-on learning experiences</p>
                </div>
              </Link>
              
              <Link to="/events/guest-speakers" className="group">
                <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all text-center hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <User className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-2">Guest Speakers</h3>
                  <p className="text-gray-600 text-sm">Industry experts and professionals</p>
                </div>
              </Link>
              
              <Link to="/events/career" className="group">
                <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all text-center hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Briefcase className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-2">Career Events</h3>
                  <p className="text-gray-600 text-sm">Job fairs and networking</p>
                </div>
              </Link>
              
              <Link to="/events/open-house" className="group">
                <div className="bg-white p-6 rounded-xl shadow-soft hover:shadow-elegant transition-all text-center hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Home className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-2">Open House</h3>
                  <p className="text-gray-600 text-sm">Campus tours and information sessions</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NewsEvents; 