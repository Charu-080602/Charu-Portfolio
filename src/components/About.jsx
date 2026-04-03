import React from "react";

export default function About() {
    return (
        <section className=" py-20 px-6 text-white">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white relative inline-block">
                        About
                        <span className="block w-16 h-1 bg-cyan-500 mt-2"></span>
                    </h2>
                    <p className="mt-6 max-w-4xl">
                        I am a Data Scientist by profession and a Dietitian by passion.
                        I specialize in transforming complex data into meaningful insights that drive informed decision-making.
                    </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Left Image */}
                    <div>
                        <img
                            src="/pic2.png"
                            alt="Profile"
                            className="rounded-lg shadow-lg w-full object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Data Scientist
                        </h3>
                        <p className="italic mb-6">
                            Alongside my analytical career, I have a deep interest in nutrition and healthy living, where I apply scientific thinking to promote balanced lifestyles.
                            I believe in combining data-driven strategies with wellness principles to create impactful and sustainable solutions.
                        </p>

                        {/* Info Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">

                            <ul className="space-y-3">
                                <li><strong>Birthday:</strong> 8 June 2002</li>
                                {/* <li><strong>Website:</strong> www.example.com</li> */}
                                <li><strong>Phone:</strong> 9994154838</li>
                                <li><strong>City:</strong> Coimbatore, Tamilnadu, IND</li>
                            </ul>

                            <ul className="space-y-3">
                                <li><strong>Age:</strong> 24</li>
                                <li><strong>Degree:</strong> Master</li>
                                <li><strong>Email:</strong> mjcharu2020@gmail.com</li>
                                <li><strong>Freelance:</strong> Available</li>
                            </ul>

                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}