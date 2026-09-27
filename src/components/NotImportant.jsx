
import React from "react";

const things = [
    {
        number: "01",
        title: "Tuition",
        description:
            "Currently maintaing three tuitions, to be precise. On average, I earn $1 per hour. Not exactly getting rich, am I?",
    },
    {
        number: "02",
        title: "Thirst for Knowledge",
        description:
            "I constantly crave knowledge. I always have to be learning something new, whether it's a skill, a book, or something completely random.",
    },
    {
        number: "03",
        title: "Discipline",
        description:
            "I'm a man of rules. Punctuality, discipline, and responsibility keep me going. At least, that's the plan.",
    },
    {
        number: "04",
        title: "Daily Journaling",
        description:
            "I love putting my thoughts and daily experiences into words. It's my way of making sense of the chaos in my head.",
    },
];

const NotImportant = () => {
    return (
        <section
            className="mx-auto max-w-4xl py-20"
            id="not-important"
        >
            {/* Section heading */}
            <div className="mb-6">
                <h2 className="mb-2 text-3xl font-bold">
                    Not Important
                </h2>
                <p className="text-gray-500">
                    A collection of things that have absolutely
                    nothing to do with my CV.
                </p>
            </div>

            {/* List of things */}
            <div>
                <div className="divide-y divide-gray-700">
                    {things.map((thing) => (
                        <div
                            key={thing.number}
                            className="group grid grid-cols-[48px_1fr] py-8
                         transition-all duration-300
                         hover:pl-2"
                        >
                            {/* Number */}
                            <span
                                className="text-2xl font-bold text-gray-600
                           transition-colors duration-300
                           group-hover:text-blue-700"
                            >
                                {thing.number}
                            </span>

                            {/* Content */}
                            <div>
                                <h3
                                    className="mb-2 text-xl font-semibold
                             transition-colors duration-300
                             group-hover:text-blue-700"
                                >
                                    {thing.title}
                                </h3>

                                <p className="max-w-2xl leading-relaxed text-gray-400">
                                    {thing.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NotImportant;