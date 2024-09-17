import React, { useState } from 'react';

const FileUpload = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    country: 'Australia',
    addressLine1: '',
    addressLine2: '',
    suburb: '',
    state: '',
    postcode: '',
    email: '',
    phone: '',
    livingArrangement: '',
    indigenousStatus: '',
    cALDStatus: '',
    languagesSpoken: '',
    guardianDetails: '',
    ndisNumber: '',
    planStartDate: '',
    planEndDate: '',
    funding: '',
    planManagement: '',
    planManagerEmail: '',
    primaryDiagnosis: '',
    otherServices: '',
    referrerFirstName: '',
    referrerLastName: '',
    referrerPhone: '',
    referrerEmail: '',
    referrerRelationship: '',
    servicesInterested: '',
  });

  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFileChange = (event) => {
    setFile(event.target.files ? event.target.files[0] : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataObj = new FormData();
    formDataObj.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formDataObj,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();
      const { url } = data;

      const formResponse = await fetch('/api/upload-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          imageUrl: url,
        }),
      });

      if (!formResponse.ok) {
        throw new Error(`Form submission error: ${formResponse.statusText}`);
      }

      setMessage('Form submitted successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      setMessage(`Failed to upload file: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="upload"
      className="flex justify-center items-center flex-col text-sm"
      style={{ backgroundColor: '#8ba171', fontFamily: 'Minerva Modern Bold, sans-serif' }}
   
    >
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-3xl md:text-6xl py-6 text-secondary'>REFERRAL FORM </h1>
        <hr className='w-screen max-w-6xl border-secondary'/>
      </div>
      <form onSubmit={handleSubmit} className="w-screen max-w-6xl p-8">
        {/* Personal Details */}
        <h2 className="text-2xl mb-6  text-black">Participant's Details</h2>

        <div className="flex flex-col space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm text-black">
                First Name <span className="text-black">(required)</span>
              </label>
              <input
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black text-sm"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm text-black">
                Last Name <span className="text-black">(required)</span>
              </label>
              <input
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="dob" className="block text-sm text-black">
              Date of Birth <span className="text-black text-sm">(required)</span>
            </label>
            <input
              id="dob"
              placeholder="dd/mm/yyyy"
              value={formData.dob}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black text-sm"
            />
          </div>

          <h3 className="text-xl mt-6 mb-2 font-semibold text-black">Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="country" className="block text-sm text-black">
                Country
              </label>
              <select
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              >
                <option>Australia</option>
              </select>
            </div>

            <div>
              <label htmlFor="addressLine1" className="block text-sm text-black">
                Address Line 1 <span className="text-black">(required)</span>
              </label>
              <input
                id="addressLine1"
                placeholder="Address Line 1"
                value={formData.addressLine1}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>

            <div>
              <label htmlFor="addressLine2" className="block text-sm text-black">
                Address Line 2
              </label>
              <input
                id="addressLine2"
                placeholder="Address Line 2"
                value={formData.addressLine2}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="suburb" className="block text-sm text-black">
                Suburb <span className="text-black">(required)</span>
              </label>
              <input
                id="suburb"
                placeholder="Suburb"
                value={formData.suburb}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm text-black">
                State <span className="text-black">(required)</span>
              </label>
              <input
                id="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
            <div>
              <label htmlFor="postcode" className="block text-sm text-black">
                Postcode <span className="text-black">(required)</span>
              </label>
              <input
                id="postcode"
                placeholder="Postcode"
                value={formData.postcode}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="suburb" className="block text-sm text-black">
                Email <span className="text-black">(required)</span>
              </label>
              <input
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm text-black">
                Phone <span className="text-black">(required)</span>
              </label>
              <input
                id="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
          </div>

          <h3 className="text-xl mt-6 mb-2 font-semibold text-black">Additional Information</h3>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="livingArrangement" className="block text-sm text-black">
                Living Arrangements (required)
              </label>
              <select
                id="livingArrangement"
                value={formData.livingArrangement}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              >
                <option>Select an option</option>
                <option>Lives Alone</option>
                <option>Lives with others</option>
                <option>In Support Accommodation</option>
                <option>Inpatient in Hospital</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-6">
  <label className="block text-sm text-black">
    Do you identify as Aboriginal or Torres Strait Islander? <span className="text-black">(required)</span>
  </label>
  <div className="flex gap-4">
    <label className="text-black">
      <input 
        type="radio" 
        name="indigenousStatus" 
        value="Yes" 
        checked={formData.indigenousStatus === 'Yes'}
        onChange={(e) => setFormData({ ...formData, indigenousStatus: e.target.value })} 
      /> Yes
    </label>
    <label className="text-black">
      <input 
        type="radio" 
        name="indigenousStatus" 
        value="No" 
        checked={formData.indigenousStatus === 'No'}
        onChange={(e) => setFormData({ ...formData, indigenousStatus: e.target.value })} 
      /> No
    </label>
    <label className="text-black">
      <input 
        type="radio" 
        name="indigenousStatus" 
        value="Prefer not to say" 
        checked={formData.indigenousStatus === 'Prefer not to say'}
        onChange={(e) => setFormData({ ...formData, indigenousStatus: e.target.value })} 
      /> Prefer not to say
    </label>
  </div>
</div>

          {/* CALD Identification */}
          <div className="mt-6">
  <label className="block text-sm text-black">
    Do you identify as CALD? <span className="text-black">(required)</span>
  </label>
  <div className="flex gap-4">
    <label className="text-black">
      <input 
        type="radio" 
        name="cALDStatus" 
        value="Yes" 
        checked={formData.cALDStatus === 'Yes'}
        onChange={(e) => setFormData({ ...formData, cALDStatus: e.target.value })} 
      /> Yes
    </label>
    <label className="text-black">
      <input 
        type="radio" 
        name="cALDStatus" 
        value="No" 
        checked={formData.cALDStatus === 'No'}
        onChange={(e) => setFormData({ ...formData, cALDStatus: e.target.value })} 
      /> No
    </label>
    <label className="text-black">
      <input 
        type="radio" 
        name="cALDStatus" 
        value="Prefer Not to Say" 
        checked={formData.cALDStatus === 'Prefer Not to Say'}
        onChange={(e) => setFormData({ ...formData, cALDStatus: e.target.value })} 
      /> Prefer Not to Say
    </label>
  </div>
</div>

          {/* Languages Spoken */}
          <div className="mt-6">
            <label htmlFor="languagesSpoken" className="block text-sm text-black">
              Languages Spoken <span className="text-black">(required)</span>
            </label>
            <input
              id="languagesSpoken"
              placeholder="Languages Spoken"
              value={formData.languagesSpoken}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
            />
          </div>

          {/* Participant's Nominee/Guardian Details */}
          <h3 className="text-xl mt-6 mb-2 font-semibold text-black">Participant's Nominee/Guardian Details</h3>
          <textarea
            id="guardianDetails"
            placeholder="If applicable, provide details for Participant's nominee/representative. Include name, email, phone, and relation."
            value={formData.guardianDetails}
            onChange={handleInputChange}
            className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
          />

          {/* NDIS Details */}
          <h3 className="text-xl mt-6 mb-2 font-semibold text-black">NDIS Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="ndisNumber" className="block text-sm text-black">
                NDIS Number <span className="text-black">(required)</span>
              </label>
              <input
                id="ndisNumber"
                placeholder="NDIS Number"
                value={formData.ndisNumber}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
            <div>
              <label htmlFor="planStartDate" className="block text-sm text-black">
                Plan Start Date <span className="text-black">(required)</span>
              </label>
              <input
                id="planStartDate"
                placeholder="dd/mm/yyyy"
                value={formData.planStartDate}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
            <div>
              <label htmlFor="planEndDate" className="block text-sm text-black">
                Plan End Date <span className="text-black">(required)</span>
              </label>
              <input
                id="planEndDate"
                placeholder="dd/mm/yyyy"
                value={formData.planEndDate}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
          </div>

          {/* Funding Available */}
          <div className="mt-6">
            <label htmlFor="funding" className="block text-sm text-black">
              Funding Available <span className="text-black">(required)</span>
            </label>
            <input
              id="funding"
              placeholder="Please provide the amount you want to allocate to Sage Coordination."
              value={formData.funding}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
            />
          </div>

          {/* Plan-Management Type */}
          <h3 className="text-xl mt-6 mb-2 font-semibold text-black">Plan-Management Type</h3>
          <div>
            <label htmlFor="planManagement" className="block text-sm text-black">
              How is your plan managed? <span className="text-black">(required)</span>
            </label>
            <select
              id="planManagement"
              value={formData.planManagement}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
            >
              <option>Select an option</option>
              <option>NDIA Managed</option>
              <option>Plan Managed</option>
              <option>Self Managed</option>
            </select>
          </div>

          {/* Plan Manager Details (if applicable) */}
          {formData.planManagement === 'Plan Managed' && (
            <div className="mt-4">
              <label htmlFor="planManagerEmail" className="block text-sm text-black">
                Plan Manager Email
              </label>
              <input
                id="planManagerEmail"
                placeholder="Email for Plan Manager"
                value={formData.planManagerEmail}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
          )}

          {/* Services Interested */}
          <h3 className="text-xl mt-6 mb-2 font-semibold text-black">What Services Are You Interested In?</h3>
<div className="flex gap-4">
  <label className="text-black">
    <input 
      type="radio" 
      name="servicesInterested" 
      value="Support Coordination" 
      checked={formData.servicesInterested === 'Support Coordination'}
      onChange={(e) => setFormData({ ...formData, servicesInterested: e.target.value })} 
    /> 
    Support Coordination
  </label>
  <label className="text-black">
    <input 
      type="radio" 
      name="servicesInterested" 
      value="Psychosocial Recovery Coaching" 
      checked={formData.servicesInterested === 'Psychosocial Recovery Coaching'}
      onChange={(e) => setFormData({ ...formData, servicesInterested: e.target.value })} 
    /> 
    Psychosocial Recovery Coaching
  </label>
</div>
Explanat

          {/* Diagnosis Information */}
          <h3 className="text-xl mt-6 mb-2 font-semibold text-black">Diagnosis Information</h3>
          <textarea
            id="primaryDiagnosis"
            placeholder="Please provide your primary and any secondary diagnoses."
            value={formData.primaryDiagnosis}
            onChange={handleInputChange}
            required
            className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
          />

          {/* Other Services */}
          <h3 className="text-xl mt-6 mb-2 font-semibold text-black">Other Services Being Received</h3>
          <textarea
            id="otherServices"
            placeholder="Please include all mainstream services, such as GP, specialists, and other NDIS services."
            value={formData.otherServices}
            onChange={handleInputChange}
            required
            className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
          />

          {/* Referrer's Details */}
          <h3 className="text-xl mt-6 mb-2 font-semibold text-black">Referrer's Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="referrerFirstName" className="block text-sm text-black">
                Referrer First Name <span className="text-black">(required)</span>
              </label>
              <input
                id="referrerFirstName"
                placeholder="Referrer First Name"
                value={formData.referrerFirstName}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
            <div>
              <label htmlFor="referrerLastName" className="block text-sm text-black">
                Referrer Last Name <span className="text-black">(required)</span>
              </label>
              <input
                id="referrerLastName"
                placeholder="Referrer Last Name"
                value={formData.referrerLastName}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label htmlFor="referrerPhone" className="block text-sm text-black">
                Referrer Phone <span className="text-black">(required)</span>
              </label>
              <input
                id="referrerPhone"
                placeholder="Phone"
                value={formData.referrerPhone}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
            />
            </div>
            <div>
              <label htmlFor="referrerEmail" className="block text-sm text-black">
                Referrer Email <span className="text-black">(required)</span>
              </label>
              <input
                id="referrerEmail"
                type="email"
                placeholder="Referrer Email"
                value={formData.referrerEmail}
                onChange={handleInputChange}
                required
                className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="referrerRelationship" className="block text-sm text-black">
              Relationship to Participant <span className="text-black">(required)</span>
            </label>
            <input
              id="referrerRelationship"
              placeholder="Relationship"
              value={formData.referrerRelationship}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
            />
          </div>

          {/* File Upload */}
          <div className="mt-6">
            <label htmlFor="file" className="block text-sm text-black">
              Please upload a copy of NDIS Plan (if available)
            </label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="w-full px-5 py-3 rounded-full border bg-[#e7ecd1] text-black"
            />
          </div>

          {/* Submit Button */}
          <div className='flex justify-center  w-full'>
          <button
            type="submit"
            className={`mt-8 p-4 bg-black text-white rounded-full w-[200px] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 transition-all duration-300'}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          </div>
          

          <div className="mt-5">
            <p className="text-black">{message}</p>
          </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FileUpload;
