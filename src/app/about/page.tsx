import { FaCode, FaLaptop, FaTools } from "react-icons/fa";

const AboutPage = () => {
    return (
        <div className="container max-w-7xl mx-auto py-20">
            <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
            <section>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
              Full Stack Developer specializing in Node.js and React/React Native, with solid experience in developing web and mobile applications. I am passionate about technology and constantly seek to learn and apply the latest trends and best development practices. I’m ready to collaborate on challenging projects and contribute to the team’s success.
                </p>
              </section>

              <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center mt-20"> Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
                <div className="bg-muted p-6 rounded-lg shadow-md">
                    <FaCode className="h-8 w-8 text-primary mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                    <ul className="text-muted-foreground space-y-2">
                        <li>
                            React / Next.js
                        </li>
                        <li>
                            TypeScript
                        </li>
                        <li>
                            Tailwind CSS
                        </li>
                        <li>
                            HTML5 / CSS3
                        </li>
                        <li>
                            Shadcn/ui
                        </li>
                    </ul>
                </div>
                <div className="bg-muted p-6 rounded-lg shadow-md">
                    <FaLaptop className="h-8 w-8 text-primary mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Backend</h3>
                    <ul className="text-muted-foreground space-y-2">
                        <li>
                            Node.js
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            Prisma
                        </li>
                        <li>
                            PostgreSQL
                        </li>
                        <li>
                            Python
                        </li>
                    </ul>
                </div>
                <div className="bg-muted p-6 rounded-lg shadow-md">
                    <FaTools className="h-8 w-8 text-primary mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
                    <ul className="text-muted-foreground space-y-2">
                        <li>
                            Figma
                        </li>
                        <li>
                            IA
                        </li>
                        <li>
                            GIT / GitHub
                        </li>
                        <li>
                            Docker
                        </li>
                        <li>
                            AWS
                        </li>
                    </ul>
                </div>
                </div>
              </section>
              <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center"> Experiences </h2>
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="bg-muted p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">
                            JucouraJeans, Cascavel-PR — Sales and Website Manager
                        </h3>
                        <p className="text-primary/80 mb-2">
                            JucouraJeans, Cascavel-PR   2021 - 2023 
                        </p>
                        <ul className="text-muted-foreground text-sm">
                            <li>
                              ●  Developed and managed the company’s official website.
                            </li>
                            <li>
                              ●  Responsible for customer service and commercial support.
                            </li>
                        </ul>
                    </div>
                </div>
              </section>
        </div>
    )
}

export default AboutPage;