import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ContactPage = () => {
  const [fullName, setFullName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const validateForm = () => {
    let formErrors = {}

    if (fullName.trim().length < 3) {
      formErrors.fullName = 'Full name must be at least 3 characters long'
    }

    if (subject.trim().length < 3) {
      formErrors.subject = 'Subject must be at least 3 characters long'
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!emailPattern.test(email)) {
      formErrors.email = 'Please enter a valid email address'
    }

    if (message.trim().length < 3) {
      formErrors.message = 'Message must be at least 3 characters long'
    }
    return formErrors
  }

  const submitForm = (e) => {
    e.preventDefault()

    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

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
    <section className="my-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold mb-2 font-poppins">
          Contact our team
        </h1>
        <p className="text-lg font-roboto">
          Need help with something? Get in touch with our friendly team and
          we'll give you an answer within 24 hours.
        </p>
      </div>
      <div className="formContainer max-w-lg mx-auto mb-6 mt-16">
        <form onSubmit={submitForm} className="flex flex-col gap-4 font-roboto">
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
            {errors.fullName && (
              <span className="contactForm-err">{errors.fullName}</span>
            )}
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
            {errors.subject && (
              <span className="contactForm-err">{errors.subject}</span>
            )}
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
            {errors.email && (
              <span className="contactForm-err">{errors.email}</span>
            )}
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
            {errors.message && (
              <span className="contactForm-err">{errors.message}</span>
            )}
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
