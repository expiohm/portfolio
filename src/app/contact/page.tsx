export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">Get in Touch</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2 dark:text-white">Email</h2>
            <a href="mailto:dheeraj@expiohm.com" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
              dheeraj@expiohm.com
            </a>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2 dark:text-white">Social Media</h2>
            <div className="space-x-4">
              <a href="https://www.linkedin.com/in/dheeraj-tarachandani-b6980688/" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                LinkedIn
              </a>
              <a href="https://github.com/expiohm" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}