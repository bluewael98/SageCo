"use-client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    enquiryType: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Form submission logic (this will be updated with your actual API or processing method)
      setMessage('Form submitted successfully!');
    } catch (error) {
      setMessage('There was an error submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-start w-screen max-w-6xl p-8 bg-primary" style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>
      {/* Left Section with Static Text */}
      <div className="w-full md:w-1/2 p-4 text-black md:mr-4">
        <h2 className="text-3xl font-bold mb-4 " style={{ fontFamily: 'Minerva Modern Italic, sans-serif' }}>ENQUIRIES</h2>
        <p className='text-justify'>
        For enquiries, feedback and complaint, please feel free to reach out here. If you are interested in receiving Support Coordination or Psychosocial Recovery Coach Supports, you can access our referral form using the Referral button above.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="w-full md:w-2/3 flex flex-col space-y-2">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm text-black">
              First Name <span className="(required)">(required)</span>
            </label>
            <input
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1]"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm text-black">
              Last Name <span className="(required)">(required)</span>
            </label>
            <input
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1]"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm text-black">
            Email <span className="(required)">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1]"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm text-black">
            Subject <span className="(required)">(required)</span>
          </label>
          <input
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1]"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm text-black">
            Message <span className="(required)">(required)</span>
          </label>
          <textarea
            id="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full px-5 py-3 rounded-lg border bg-[#e7ecd1]"
            rows="4"
          />
        </div>

      
        <div>
          <label htmlFor="enquiryType" className="block text-sm text-black">
            Enquiry Type <span className="text-black">(required)</span>
          </label>
          <select
            id="enquiryType"
            value={formData.enquiryType}
            onChange={handleInputChange}
            required
            className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1]"
          >
            <option value="">Select Enquiry Type</option>
            <option value="services-support">Services and Support</option>
            <option value="feedback-complaints">Feedback and Complaints</option>
            <option value="general-enquiries">General Enquiries</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`mt-4 p-4 bg-black text-white rounded-full w-[150px] self-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 transition-transform duration-300'}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {/* Message */}
        {message && <p className="text-black text-center mt-4">{message}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
