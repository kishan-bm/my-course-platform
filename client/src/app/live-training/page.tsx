"use client";

import { FaVideo, FaUsers, FaClock, FaCalendarAlt, FaMicrophone, FaComments, FaDownload, FaCertificate, FaStar } from 'react-icons/fa';
import { useAuthModal } from '@/hooks/userAuthModal';
import { useUserStore } from '@/hooks/useUserStore';

export default function LiveTrainingPage() {
  const { openModal } = useAuthModal();
  const { isLoggedIn } = useUserStore();
  const upcomingSessions = [
    {
      id: 1,
      title: "React Advanced Patterns & Hooks",
      instructor: "Dr. Sarah Smith",
      date: "2024-01-15",
      time: "10:00 AM - 12:00 PM",
      duration: "2 hours",
      level: "Intermediate",
      seats: 45,
      totalSeats: 50,
      price: "₹999",
      description: "Master advanced React patterns, custom hooks, and performance optimization techniques.",
      topics: ["Custom Hooks", "Context API", "Performance Optimization", "Error Boundaries"]
    },
    {
      id: 2,
      title: "Machine Learning with Python",
      instructor: "Prof. Michael Chen",
      date: "2024-01-18",
      time: "2:00 PM - 4:00 PM",
      duration: "2 hours",
      level: "Beginner",
      seats: 38,
      totalSeats: 50,
      price: "₹1,299",
      description: "Introduction to machine learning concepts and hands-on implementation with Python.",
      topics: ["Data Preprocessing", "Model Training", "Evaluation Metrics", "Deployment"]
    },
    {
      id: 3,
      title: "AWS Cloud Architecture",
      instructor: "Alex Johnson",
      date: "2024-01-20",
      time: "6:00 PM - 8:00 PM",
      duration: "2 hours",
      level: "Advanced",
      seats: 42,
      totalSeats: 50,
      price: "₹1,499",
      description: "Design scalable cloud architectures using AWS services and best practices.",
      topics: ["EC2 & VPC", "Load Balancing", "Auto Scaling", "Security Groups"]
    },
    {
      id: 4,
      title: "Mobile App Development with Flutter",
      instructor: "Emma Wilson",
      date: "2024-01-22",
      time: "11:00 AM - 1:00 PM",
      duration: "2 hours",
      level: "Intermediate",
      seats: 35,
      totalSeats: 50,
      price: "₹1,199",
      description: "Build cross-platform mobile apps using Flutter framework and Dart language.",
      topics: ["Widgets", "State Management", "Navigation", "API Integration"]
    },
    {
      id: 5,
      title: "Cybersecurity Fundamentals",
      instructor: "Captain James Lee",
      date: "2024-01-25",
      time: "3:00 PM - 5:00 PM",
      duration: "2 hours",
      level: "Beginner",
      seats: 48,
      totalSeats: 50,
      price: "₹1,399",
      description: "Learn essential cybersecurity concepts and practical defense strategies.",
      topics: ["Threat Analysis", "Network Security", "Encryption", "Incident Response"]
    },
    {
      id: 6,
      title: "Data Science with R",
      instructor: "Dr. Raj Patel",
      date: "2024-01-28",
      time: "4:00 PM - 6:00 PM",
      duration: "2 hours",
      level: "Intermediate",
      seats: 40,
      totalSeats: 50,
      price: "₹1,199",
      description: "Statistical analysis and data visualization using R programming language.",
      topics: ["Data Manipulation", "Statistical Tests", "Visualization", "Reporting"]
    }
  ];

  const features = [
    {
      icon: <FaVideo />,
      title: "Live Interactive Sessions",
      description: "Real-time learning with industry experts and immediate Q&A support"
    },
    {
      icon: <FaUsers />,
      title: "Small Batch Sizes",
      description: "Maximum 50 students per session for personalized attention and better learning"
    },
    {
      icon: <FaMicrophone />,
      title: "Hands-on Practice",
      description: "Live coding sessions with real-time feedback and collaborative learning"
    },
    {
      icon: <FaComments />,
      title: "Peer Learning",
      description: "Interact with fellow learners, share ideas, and build professional networks"
    },
    {
      icon: <FaDownload />,
      title: "Session Recordings",
      description: "Access recorded sessions for lifetime review and revision"
    },
    {
      icon: <FaCertificate />,
      title: "Completion Certificates",
      description: "Earn industry-recognized certificates upon successful completion"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "React Advanced Patterns",
      rating: 5,
      comment: "The live sessions were incredibly interactive. Being able to ask questions in real-time made all the difference in understanding complex concepts.",
      image: "/images/avatar1.jpg"
    },
    {
      name: "Rajesh Kumar",
      course: "Machine Learning with Python",
      rating: 5,
      comment: "The instructor's live coding approach helped me understand ML algorithms much better than pre-recorded videos. Highly recommended!",
      image: "/images/avatar2.jpg"
    },
    {
      name: "Anita Patel",
      course: "AWS Cloud Architecture",
      rating: 5,
      comment: "The hands-on labs during live sessions were amazing. I could immediately apply what I learned in real AWS environments.",
      image: "/images/avatar3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Live Interactive
              <span className="block text-purple-300">Training Sessions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Learn from industry experts in real-time. Get instant feedback, ask questions, 
              and collaborate with fellow learners in our interactive live training sessions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-600/30 px-4 py-2 rounded-full">✓ Live Sessions</span>
              <span className="bg-blue-600/30 px-4 py-2 rounded-full">✓ Expert Instructors</span>
              <span className="bg-indigo-600/30 px-4 py-2 rounded-full">✓ Small Batches</span>
              <span className="bg-pink-600/30 px-4 py-2 rounded-full">✓ Recorded Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Live Training?</h2>
            <p className="text-xl text-gray-600">Experience the power of interactive learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Live Sessions</h2>
            <p className="text-xl text-gray-600">Book your spot in our next live training sessions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Session Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                  <div className="flex items-center text-purple-200 mb-2">
                    <FaUsers className="mr-2" />
                    <span>{session.instructor}</span>
                  </div>
                  <div className="flex items-center text-purple-200">
                    <FaCalendarAlt className="mr-2" />
                    <span>{new Date(session.date).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Session Details */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{session.description}</p>

                  {/* Time & Duration */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-2 text-blue-600" />
                      <span>{session.time}</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {session.level}
                    </span>
                  </div>

                  {/* Topics */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {session.topics.map((topic, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Seats Available */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Seats Available</span>
                      <span>{session.seats}/{session.totalSeats}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" 
                        style={{ width: `${(session.seats / session.totalSeats) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Price & Enroll */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-gray-800">₹{session.price}</span>
                      <span className="text-sm text-gray-500 ml-2">per session</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => { if (!isLoggedIn) return openModal('login'); alert('Enrollment flow for logged-in users'); }}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Real feedback from live training participants</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">&ldquo;{testimonial.comment}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How Live Training Works</h2>
            <p className="text-xl text-gray-600">Simple steps to join our live sessions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Session</h3>
              <p className="text-gray-600">Browse and select from our upcoming live training sessions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enroll & Pay</h3>
              <p className="text-gray-600">Complete your enrollment and secure your spot in the session</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Join Live Session</h3>
              <p className="text-gray-600">Attend the live session with interactive learning and Q&A</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Certificate</h3>
              <p className="text-gray-600">Receive your completion certificate and access recordings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Learn Live?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our interactive live training sessions and accelerate your learning journey. 
            Limited seats available - book your spot today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => { if (!isLoggedIn) return openModal('login'); alert('View All Sessions for logged-in users'); }} className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              View All Sessions
            </button>
            <button onClick={() => { if (!isLoggedIn) return openModal('login'); alert('Subscribed to notifications'); }} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-300">
              Get Notified
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
