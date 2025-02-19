function About() {
  const technologies = [
    { name: "React", img: "path/to/react.png" },
    { name: "Next.js", img: "path/to/nextjs.png" },
    { name: "JavaScript", img: "path/to/javascript.png" },
    { name: "TypeScript", img: "path/to/typescript.png" },
    { name: "Node.js", img: "path/to/nodejs.png" },
    { name: "Express.js", img: "path/to/expressjs.png" },
    { name: "Git", img: "path/to/git.png" },
    { name: "GitHub", img: "path/to/github.png" },
    { name: "Figma", img: "path/to/figma.png" },
    { name: "Blender", img: "path/to/blender.png" },
    { name: "DaVinci Resolve", img: "path/to/davinciresolve.png" },
  ];

  return (
    <div className="h-auto w-full bg-zinc-900 text-white mx-auto px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="mt-4 text-lg">
          I&apos;m a passionate developer with experience in building web
          applications using modern technologies. As a self-taught developer, I
          love learning new things.
        </p>
        <br />
        <h2 className="text-2xl font-semibold mb-4">Technologies I am using</h2>
        <ul className="list-disc list-inside">
          {technologies.map((tech) => (
            <li key={tech.name} className="flex items-center mb-2">
              <img src={tech.img} alt={tech.name} className="w-6 h-6 mr-2" />
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
