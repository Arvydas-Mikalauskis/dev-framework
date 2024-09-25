/* There will be a contact page which will contain a contact form with the following fields. There must be form validation:

Full name (Minimum number of characters is 3, required)
Subject (Minimum number of characters is 3, required)
Email (Must be a valid email address, required)
Body (Minimum number of characters is 3, required) */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ContactPage = () => {
  const [fullName, setFullName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()

    const successMessage = {
      fullName,
      subject,
      email,
      message,
    }

    console.log(successMessage)
    toast.success(
      'Your message has been sent successfully! Redirecting to the home page...'
    )

    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  return (
    <section className="mt-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold mb-2">Contact our team</h1>
        <p className="text-lg">
          Need help with something? Get in touch with our friendly team and
          we'll give you an answer within 24 hours.
        </p>
      </div>
      <div className="formContainer max-w-lg mx-auto mb-6 mt-16">
        <form onSubmit={submitForm} className="flex flex-col gap-4">
          <div className="">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="fullName"
              className="form-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message" className="form-label">
              Body
            </label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="form-input"
              placeholder="Type your questions here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end mr-2">
            <button
              type="submit"
              className="bg-green-300 rounded-sm shadow-md uppercase font-semibold text-sm py-2 px-6 hover:scale-105 transition-transform "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactPage
