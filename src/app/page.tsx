export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          I'm a software developer passionate about creating amazing web experiences
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300">
        Senior Software Engineer with 7+ years of expertise in building high-performance web applications at scale. Proven track record of leading complex platform rebuilds and driving significant performance improvements, including consistently achieving 90+ Lighthouse scores. Specialized in React ecosystem, micro-frontend architecture, and developing accessible component libraries. Demonstrated success in architecting solutions for international markets and managing high-traffic e-commerce platforms serving 100,000+ daily users. Passionate about modern web technologies and maintaining engineering excellence through performance optimization and robust monitoring solutions.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 dark:text-white">Skills</h3>
          <div className="dark:text-gray-300">
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

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 dark:text-white">Experience</h3>
          <div className="space-y-6 dark:text-gray-300">
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

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 dark:text-white">Education</h3>
          <div className="space-y-6 dark:text-gray-300">
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
                <p>St. Austin's Sr. Sec. School - Jodhpur, Rajasthan</p>
                <p>Board: RBSE</p>
                <p>Graduated: 01/2011</p>
                <p>GPA: 85%</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg">10th Pass</h4>
              <div className="text-gray-600 dark:text-gray-400">
                <p>St. Austin's Sr. Sec. School - Jodhpur, Rajasthan</p>
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