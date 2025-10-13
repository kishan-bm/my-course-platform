import { Metadata } from 'next';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Us | Your Platform Name',
  description: 'Get in touch with us for any inquiries or support.',
};

export default function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about our courses, partnerships, or anything else, our team is ready to answer all your questions.
        </p>

        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-md">
          {/* Column 1: Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                {/* FIX: Wrapped icon in a div */}
                <div className="text-blue-600 text-2xl mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-600">123 Tech Avenue, Silicon Valley, IN 94043</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                {/* FIX: Wrapped icon in a div */}
                <div className="text-blue-600 text-2xl mt-1">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">support@yourplatform.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                {/* FIX: Wrapped icon in a div */}
                <div className="text-blue-600 text-2xl mt-1">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 12345 67890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" name="subject" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}