import React from "react";

const Skills = () => {
    const skills = {
        Languages: ["C++", "Python", "JavaScript", "Java"],
        Frontend: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
        Backend: ["Node.js", "Express.js", "MongoDB"],
        Tools: ["Git", "GitHub", "VS Code", "Postman"],
    };

    return (
        <section id="skills" className="py-20 px-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            <div className="max-w-4xl mx-auto">
                <h2 className="mb-10 text-3xl font-bold">Tech Stack</h2>

                <div className="space-y-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="mb-4 text-xl font-semibold">
                                {category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <div
                                        key={skill}
                                        className="rounded-lg border px-4 py-2"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;