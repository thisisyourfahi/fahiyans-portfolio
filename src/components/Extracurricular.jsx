
import React from "react";

const activities = [
    {
        role: "Chief Administrative Officer",
        organization: "Dreams On The Way",
        period: "2022 - 2026",
        description:
            "Conducted various events nationwide and helped youths develop their leadership and communication skills.",
    },
    {
        role: "General Member & Deputy Camp Director",
        organization: "Metropolitan University Social Services Club",
        period: "2025 - Present",
        description:
            "Contributed to organizing and conducting various events both on and off campus.",
    },
    {
        role: "Blood Management Coordinator",
        organization: "Red Blood",
        period: "2022 - 2023",
        description: "Condcuted vairous social awareness event regarding blood donation",
    },
];

const Extracurricular = () => {
    return (
        <section id="extracurricular" className="px-6 py-20">
            <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-3xl font-bold">
                    Extracurricular Activities
                </h2>

                <div className="relative space-y-6 border-l border-gray-700 pl-6">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl border border-gray-700
                         bg-transparent p-6 transition-all duration-300
                         hover:border-blue-700
                         hover:shadow-[0_0_10px_rgba(29,78,216,0.6)]"
                        >
                            {/* Timeline dot */}
                            <span className="absolute -left-[31px] top-7 h-3 w-3
                               rounded-full border border-blue-700
                               bg-black" />

                            <div className="flex flex-col gap-2 sm:flex-row
                              sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {activity.role}
                                    </h3>

                                    <p className="mt-1">
                                        {activity.organization}
                                    </p>
                                </div>

                                {activity.period && (
                                    <span className="text-sm text-gray-400">
                                        {activity.period}
                                    </span>
                                )}
                            </div>

                            {activity.description && (
                                <p className="mt-4 leading-relaxed text-gray-400">
                                    {activity.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Extracurricular;