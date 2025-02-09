export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 dark:text-white">Welcome to My Portfolio</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          I&apos;m a software developer passionate about creating amazing web experiences
        </p>
      </section>

      <section className="mb-8 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 dark:text-white">About Me</h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          Senior Software Engineer with 7+ years of expertise...
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 dark:text-white">Skills</h3>
          <div className="dark:text-gray-300 text-sm sm:text-base">
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Front-end Development & Architecture</h4>
              <ul className="list-disc list-inside">
                <li>React.js, Next.js, and React Native</li>
                <li>HTML5, CSS3, Tailwind CSS</li>
                <li>State Management: Redux</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>Web Performance Optimisation</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Build and Testing Tools</h4>
              <ul className="list-disc list-inside">
                <li>Bundlers: Webpack, Vite</li>
                <li>Testing: Jest, Testing Library</li>
                <li>Basic Docker Containerisation</li>
                <li>Fundamental CI/CD pipeline set-up</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Monitoring and Analytics</h4>
              <ul className="list-disc list-inside">
                <li>Application Monitoring and Logging (New Relic, ELK Stack)</li>
                <li>Web Analytics and A/B Testing</li>
                <li>Performance Metrics and Optimisation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Technical Leadership</h4>
              <ul className="list-disc list-inside">
                <li>Micro-frontend Architecture</li>
                <li>Component Library Development</li>
                <li>Cross-functional Team Leadership</li>
                <li>International Market Solutions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 dark:text-white">Experience</h3>
          <div className="space-y-4 sm:space-y-6 dark:text-gray-300">
            <div>
              <h4 className="font-semibold text-lg">SDE 2</h4>
              <div className="text-gray-600 dark:text-gray-400">
                <p>Dp World - Bengaluru, Karnataka, India</p>
                <p>05/2022 - Current</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Engineer II</h4>
              <div className="text-gray-600 dark:text-gray-400">
                <p>Ajio - Bengaluru, Karnataka, India</p>
                <p>10/2019 - 05/2022</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Associate Software Engineer</h4>
              <div className="text-gray-600 dark:text-gray-400">
                <p>Tekion - Bengaluru, Karnataka, India</p>
                <p>03/2018 - 10/2019</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Web Developer</h4>
              <div className="text-gray-600 dark:text-gray-400">
                <p>World Trade Bureau - Bengaluru, Karnataka, India</p>
                <p>10/2017 - 03/2018</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 dark:text-white">Education</h3>
          <div className="space-y-4 sm:space-y-6 dark:text-gray-300">
            <div>
              <h4 className="font-semibold text-lg">B.Tech/B.E. : Computer Science</h4>
              <div className="text-gray-600 dark:text-gray-400">
                <p>Rajasthan Technical University - Bikaner, Rajasthan</p>
                <p>Graduated: 01/2016</p>
                <p>GPA: 72.6</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg">12th Pass</h4>
              <div className="text-gray-600 dark:text-gray-400">
                <p>St. Austin&apos;s Sr. Sec. School - Jodhpur, Rajasthan</p>
                <p>Board: RBSE</p>
                <p>Graduated: 01/2011</p>
                <p>GPA: 85%</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg">10th Pass</h4>
              <div className="text-gray-600 dark:text-gray-400">
                <p>St. Austin&apos;s Sr. Sec. School - Jodhpur, Rajasthan</p>
                <p>Board: RBSE</p>
                <p>Graduated: 01/2009</p>
                <p>GPA: 80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}