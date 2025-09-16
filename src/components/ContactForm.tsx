"use client";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form as any).name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch("https://formspree.io/f/xzzrqedd", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      setError("Oops! Something went wrong.");
    }
  };

  return (
    <section id="contact" className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

        {submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded text-center">
            Thank you! Your message has been submitted.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-orange-400 focus:border-orange-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-orange-400 focus:border-orange-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-orange-400 focus:border-orange-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`btn-glass-orange rounded-xl text-black font-semibold px-6 py-2 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          </form>
        )}

        {/* Quick contact buttons inside the contact section */}
        <p className="mt-8 mb-3 text-sm text-gray-500">
          Other ways to contact me:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://www.linkedin.com/in/manas-ayyalaraju/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 btn-glass-orange"
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:manas.ayyalaraju@gmail.com"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 btn-glass-orange"
          >
            <MdEmail className="text-lg" />
            <span>Gmail</span>
          </a>
        </div>
      </div>
    </section>
  );
}
