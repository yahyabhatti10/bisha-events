import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircleIcon} from 'lucide-react';

const eventCategories = [
  "Walima/Reception",
  "Barat",
  "Nikkah",
  "Mehandi/ Shendi",
  "Dholki / Mayon",
  "Engagement / Baat Pakki",
  "Valentine/Home Event",
  "Birthday",
  "Bridal Shower",
  "Anniversary Dinners",
  "Graduation Party",
  "Qawali/Musical Night",
  "Other",
];

const DreamConsultation = () => {
  const [guestCount, setGuestCount] = useState<number>(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [otherCategory, setOtherCategory] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Create a ref for the form element
  const form = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    if (!form.current) return false;

    const formData = new FormData(form.current);
    const name = formData.get("user_name") as string;
    const email = formData.get("user_email") as string;
    const date = formData.get("event_date") as string;
    const phone = formData.get("contact_number") as string;
    const eventType = formData.get("event_type") as string;
    const eventCategory = formData.get("event_category") as string;
    const venue = formData.get("venue") as string;
    const guestCount = formData.get("guest_count") as string;
    const time = formData.get("event_time") as string;
    // console.log(name);
    // console.log(email);    
    // console.log(phone);
    // console.log(eventType);
    // console.log(eventCategory);
    // console.log(venue);
    // console.log(guestCount);
    // console.log(date);    
    // console.log(time);    

    const today = new Date();
    const selectedDate = new Date(date);
    
    if (!name) {
      setErrorMessage("Name is required.");
      return false;
    }
    if (!phone) {
      setErrorMessage("Contact Number is required.");
      return false;
    }
    if (!date) {
      setErrorMessage("Date is required.");
      return false;
    }
    if (!time) {
      setErrorMessage("Time is required.");
      return false;
    }
    if (!eventCategory) {
      setErrorMessage("Event Category is required.");
      return false;
    }
    if (!eventType) {
      setErrorMessage("Event Type is required.");
      return false;
    }
    if (!guestCount) {
      setErrorMessage("Guest Count is required.");
      return false;
    }
    if (!email) {
      setErrorMessage("Email is required.");
      return false;
    }
    if (!venue) {
      setErrorMessage("Venue is required.");
      return false;
    }
    if (selectedDate <= today) {
      setErrorMessage("Event date must be in the future.");
      return false;
    }
    
    if (!/^03\d{9}$/.test(phone)) {
      setErrorMessage("Phone number must be 11 digits and start with '03'.");
      return false;
    }

    // if (!name || !date || !phone || !venue || !eventType || !eventCategory || !guestCount || !email || !time) {
    //   setErrorMessage("All fields with (*) must be filled with required format.");
    //   return false;
    // }
    setErrorMessage("");
    return true;
  };
  
  // Handler for sending email via EmailJS
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            // console.log('SUCCESS!', result.text);
            // Show the success popup
            setShowSuccess(true);
            // Reset the form fields using the form ref
            form.current?.reset();
            // Reset controlled fields
            setGuestCount(0);
            setCategories([]);
            setOtherCategory("");
            // Hide success popup after 3 seconds
            setTimeout(() => setShowSuccess(false), 3000);
          },
          (error) => {
            console.error('FAILED...', error.text);
          }
        );
    }
  };

  // Handler for checkbox change in Event Category
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategories((prev) => [...prev, value]);
    } else {
      setCategories((prev) => prev.filter((cat) => cat !== value));
    }
  };

  return (
    <div className="pt-20 relative">
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-96 border-4 border-golden"
          >
            <CheckCircleIcon className="text-golden w-16 h-16 mb-3" />
            <p className="text-lg font-semibold font-garamond text-gray-700">
              Thank you for trusting us with your special event! We’ve received your request and will get back to you soon to bring your vision to life.
            </p>
          </motion.div>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h1 className="section-title">Dream Consultation</h1>
        {/* Attach the form ref and onSubmit handler */}
        <form ref={form} onSubmit={sendEmail} className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="user_name"
                placeholder='e.g. Harris Saeed'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              />
            </div>
            {/* Event Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Date *
              </label>
              <input
                type="date"
                name="event_date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              />
            </div>
            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time *
              </label>
              <select
                name="event_time"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              >
                {Array.from({ length: 48 }, (_, i) => {
                  const hour = Math.floor(i / 2);
                  const minute = i % 2 === 0 ? '00' : '30';
                  const ampm = hour < 12 ? 'AM' : 'PM';
                  const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
                  return `${hour12}:${minute} ${ampm}`;
                }).map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            {/* Event Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Type *
              </label>
              <select
                name="event_type"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              >
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="sundowner">Sundowner</option>
                <option value="brunch">Brunch</option>
              </select>
            </div>
            {/* Event Category (Checkboxes) */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Category *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {eventCategories.map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      value={option}
                      id={option}
                      onChange={handleCategoryChange}
                      className="custom-checkbox h-4 w-4 text-golden border-gray-300 rounded"
                      name="event_category"
                    />
                    <label htmlFor={option} className="ml-2 text-sm text-gray-700">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              {categories.includes("Other") && (
                <div className="mt-2">
                  <input
                    type="text"
                    name="other_category"
                    placeholder="Please specify"
                    value={otherCategory}
                    onChange={(e) => setOtherCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
                  />
                </div>
              )}
            </div>
            {/* Venue */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Venue *
              </label>
              <input
                type="text"
                name="venue"
                placeholder='Street, Town, Area, City.'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              />
            </div>
            {/* Number of Guests */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests *
              </label>
              <input
                type="range"
                min="0"
                max="5000"
                step="1"
                name="guest_count"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer custom-range"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>0</span>
                <span>5000</span>
              </div>
              <div className="mt-2 flex">
                <input
                  type="number"
                  min="0"
                  max="5000"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-24 px-2 py-1 border border-gray-300 rounded-md focus:ring-golden focus:border-golden text-center"
                />
              </div>
            </div>
            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number *
              </label>
              <input
                type="tel"
                name="contact_number"
                placeholder='03xxxxxxxxx'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="user_email"
                placeholder='harris@example.com'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              />
            </div>
            {/* Tell us more */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell Us More About Your Event
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder='Please write your message here'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              ></textarea>
            </div>
          </div>
          {/* Error Message */}
          {errorMessage && <p className="mt-4 text-red-500 text-sm ">{errorMessage}</p>}
          <div className="mt-6">
            <button type="submit" className="w-full btn-primary">
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default DreamConsultation;
