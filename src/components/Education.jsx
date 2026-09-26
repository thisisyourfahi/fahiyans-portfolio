
import React from "react";

const Education = () => {
    return (
        <section id="education" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-10">Education</h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Undergraduate */}
                    <div className="border rounded-xl p-6">
                        <span className="text-sm text-gray-500">
                            2024 - 2027
                        </span>

                        <h3 className="text-xl font-semibold mt-2">
                            B.Sc. in Computer Science & Engineering (CSE)
                        </h3>

                        <p className="mt-2 text-gray-600">
                            Metropolitan University, Sylhet
                        </p>

                        <div className="mt-5 border-t pt-4">
                            <p className="text-sm text-gray-500">
                                Current CGPA
                            </p>
                            <p className="text-lg font-semibold">
                                3.91
                            </p>
                        </div>
                    </div>

                    {/* HSC */}
                    <div className="border rounded-xl p-6">
                        <span className="text-sm text-gray-500">
                            2022
                        </span>

                        <h3 className="text-xl font-semibold mt-2">
                            Higher Secondary <br /> Certificate (HSC)
                        </h3>

                        <p className="mt-2 text-gray-600">
                            Sylhet Govt. College, Sylhet
                        </p>

                        {/* <div className="mt-5 border-t pt-4 space-y-2">
                            <p>
                                <span className="text-gray-500">Department: </span>
                                Science
                            </p>
                            <p>
                                <span className="text-gray-500">GPA</span>
                                <p className="text-lg font-semibold">
                                    5.00 &apos;(Science)
                                </p>
                            </p>
                        </div> */}

                        <div className="mt-5 border-t pt-4">
                            <p className="text-sm text-gray-500">
                                GPA
                            </p>
                            <p className="text-lg font-semibold">
                                5.00(Science)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;