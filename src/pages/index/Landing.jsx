import { FaBars, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Header from "./Header";
import director from "/director.png"
import principal from "/principal.png"
import manager from "/manager.png"
import photo_image from "/photo_icon.jpg"
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
export default function Landing() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleMessage = (e) => {
        e.preventDefault(); // prevent page reload / scroll to top

        if (!name || !email || !message) {
            toast.error("All fields are required. Please complete the form before submitting.");
            return;
        }

        console.log({ name, email, message });
        toast.success("Your message has been sent successfully. We will get back to you shortly.");

        // Reset form
        setName("");
        setEmail("");
        setMessage("");
    };


    return (
        <div>
            {/* Headers */}
            <Header />

            {/* Hero section */}
            <section id="hero" className="min-h-screen pt-[10vh] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-10 duration-500" >
                {/* Left Side */}
                <div className="w-full md:w-1/2 space-y-5">
                    <h1 className="text-sm sm:text-base md:text-lg uppercase tracking-wider text-blue-600 font-semibold">Welcome to,</h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-gray-300">
                        <span className="text-gray-200">MID </span>POINT <span className="text-gray-400">SCHOOL</span>
                    </h1>
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 font-medium">Barahiya, Near Hanuman Temple</h1>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600  max-w-xl md:max-w-xl mx-auto md:mx-0 leading-relaxed text-justify">
                        Mid Point School is committed to providing quality education in a safe, supportive, and inspiring learning environment. We focus on academic excellence, moral values, and overall personality development to help students grow into confident, responsible, and successful individuals. With experienced teachers and modern teaching methods, we prepare our students for a bright and meaningful future.
                    </p>
                    <div className="pt-5 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <button className="px-7 py-3 bg-blue-600 text-white shadow-md hover:bg-blue-700 transition cursor-pointer">Register Now</button>
                        <button className="px-7 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition cursor-pointer">Learn More</button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/2 flex justify-center items-center relative">
                    {/* Glow (disabled on mobile) */}
                    <div className="hidden md:block absolute -inset-8 bg-blue-200 rounded-3xl blur-3xl opacity-40"></div>
                    <img src="https://varthana.com/school/wp-content/uploads/2024/04/B869-School.jpg" alt="Mid Point School" className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-xl transition-transform duration-500 hover:scale-105" />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen pt-[12vh] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-12 duration-500">
                {/* Section Heading */}
                <div className="text-center md:text-left space-y-3">
                    <h1 className="text-xl md:text-xl font-bold text-gray-600">ABOUT US</h1>
                    <p className="text-gray-700 w-full mx-auto md:mx-0 text-justify leading-relaxed text-base md:text-lg"> Mid Point School is dedicated to nurturing young minds by providing high-quality education in a safe, inclusive, and inspiring environment. We believe in holistic development, combining academic excellence with moral values, creativity, and extracurricular engagement.</p>
                </div>

                {/* Mission, Vision, Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white shadow-lg p-6 text-center hover:shadow-xl transition duration-300 border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Our Mission</h2>
                        <p className="text-gray-600 text-sm md:text-base text-justify">To provide a nurturing environment that promotes academic excellence, character development, and a lifelong love for learning.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 text-center hover:shadow-xl transition duration-300 border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Our Vision</h2>
                        <p className="text-gray-600 text-sm md:text-base text-justify">To be a leading educational institution recognized for holistic development and empowering students to achieve their full potential.</p>
                    </div>
                    <div className="bg-white shadow-lg p-6 text-center hover:shadow-xl transition duration-300 border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Our Values</h2>
                        <p className="text-gray-600 text-sm md:text-base text-justify">Integrity, Respect, Creativity, Collaboration, and Excellence in all aspects of school life.</p>
                    </div>
                </div>

                {/* Director & Principal Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-6 mb-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

                        <div className="flex flex-col items-center text-center group bg-white p-6 shadow-lg hover:shadow-xl transition border border-gray-300">
                            <img src={director} alt="Director" className="w-44 h-44 rounded-md object-cover shadow-md transition-transform duration-300 group-hover:scale-105 border border-gray-300" />
                            <h2 className="text-xl font-semibold mt-4 text-blue-900">Mr. Sujay Singh</h2>
                            <p className="text-blue-600 font-medium">Director (BCA)</p>
                            <p className="text-gray-600 mt-2 text-sm md:text-base text-justify">Mr. Sujay Singh is the visionary director of Mid Point School, dedicated to fostering academic excellence, discipline, and a student centered learning environment.</p>
                        </div>
                        <div className="flex flex-col items-center text-center group bg-white p-6 shadow-lg hover:shadow-xl transition border border-gray-300">
                            <img src={manager} alt="Manager" className="w-44 h-44 rounded-md object-cover shadow-md transition-transform duration-300 group-hover:scale-105 border border-gray-300" />
                            <h2 className="text-xl font-semibold mt-4 text-blue-900">Mr. Sujay Singh</h2>
                            <p className="text-blue-600 font-medium">Manager (BCA)</p>
                            <p className="text-gray-600 mt-2 text-sm md:text-base text-justify">Mr. Sujay Singh oversees the administrative and operational management of Mid Point School, ensuring smooth functioning and continuous improvement in educational standards.</p>
                        </div>
                        <div className="flex flex-col items-center text-center group bg-white p-6 shadow-lg hover:shadow-xl transition border border-gray-300">
                            <img src={principal} alt="Principal" className="w-44 h-44 rounded-md object-cover shadow-md transition-transform duration-300 group-hover:scale-105 border border-gray-300" />
                            <h2 className="text-xl font-semibold mt-4 text-blue-900">Mr. Bhanu Kumar</h2>
                            <p className="text-blue-600 font-medium">Principal (BCA)</p>
                            <p className="text-gray-600 mt-2 text-sm md:text-base text-justify">Mr. Bhanu Kumar brings years of academic leadership and teaching experience, guiding students and teachers toward excellence and holistic development.</p>
                        </div>

                    </div>

                </div>
            </section>


            {/* Academics Section */}
            <section id="academics" className="min-h-screen pt-[12vh] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-12 duration-500">
                {/* Section Heading */}
                <div className="text-center md:text-left space-y-3 ">
                    <h1 className="text-xl md:text-xl font-bold text-gray-600">ACADEMICS</h1>
                    <p className="text-gray-700 w-full mx-auto md:mx-0 text-justify leading-relaxed text-base md:text-lg"> Mid Point School offers a holistic academic program that combines rigorous learning with creative exploration. Our curriculum emphasizes core subjects, life skills, and co-curricular activities to help students grow into confident, well-rounded individuals.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Science & Technology</h2>
                        <p className="text-gray-600 text-sm md:text-base">Hands-on labs for Physics, Chemistry, Biology, and Computer Science. Students learn practical applications of scientific concepts and modern technology.</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Mathematics</h2>
                        <p className="text-gray-600 text-sm md:text-base">Problem-solving, logical reasoning, and analytical thinking are nurtured through interactive lessons, challenges, and competitions.</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Languages</h2>
                        <p className="text-gray-600 text-sm md:text-base">English, Hindi, and regional languages taught with emphasis on reading, writing, conversation, and literature appreciation.</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Social Studies</h2>
                        <p className="text-gray-600 text-sm md:text-base">Explore History, Geography, Civics, and Cultural Studies to become informed and responsible global citizens.</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Arts & Creativity</h2>
                        <p className="text-gray-600 text-sm md:text-base">
                            Encourage artistic expression through painting, music, drama, craft, and digital art, fostering imagination and creativity.
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Sports & Physical Education</h2>
                        <p className="text-gray-600 text-sm md:text-base">Promote fitness, teamwork, and discipline through structured sports, yoga, and outdoor activities.</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Life Skills & Personality</h2>
                        <p className="text-gray-600 text-sm md:text-base">Programs to develop leadership, communication, emotional intelligence, problem-solving, and decision-making skills.</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Computer & Coding</h2>
                        <p className="text-gray-600 text-sm md:text-base">Learn programming, robotics, and digital literacy to prepare students for future technology challenges.</p>
                    </div>
                    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Library & Research</h2>
                        <p className="text-gray-600 text-sm md:text-base">Access to a well-stocked library, e-resources, and guided research projects to cultivate knowledge-seeking habits.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 text-center mb-4">
                    <div className="bg-blue-600 text-white p-6 shadow-lg">
                        <h3 className="text-3xl font-bold">500+</h3>
                        <p className="mt-2 text-sm md:text-base">Students Enrolled</p>
                    </div>
                    <div className="bg-blue-600 text-white p-6 shadow-lg">
                        <h3 className="text-3xl font-bold">10+</h3>
                        <p className="mt-2 text-sm md:text-base">Experienced Teachers</p>
                    </div>
                    <div className="bg-blue-600 text-white p-6 shadow-lg">
                        <h3 className="text-3xl font-bold">30+</h3>
                        <p className="mt-2 text-sm md:text-base">Academic Awards</p>
                    </div>
                    <div className="bg-blue-600 text-white p-6 shadow-lg">
                        <h3 className="text-3xl font-bold">20+</h3>
                        <p className="mt-2 text-sm md:text-base">Co-Curricular Programs</p>
                    </div>
                </div>
            </section>


            {/* Admissions Section */}
            <section id="admissions" className="min-h-screen pt-[12vh] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-8 duration-500">
                <div className="text-center md:text-left space-y-3">
                    <h1 className="text-xl md:text-xl font-bold text-gray-600">Admissions</h1>
                    <p className="text-gray-700 w-full mx-auto md:mx-0 text-justify leading-relaxed text-base md:text-lg">Mid Point School welcomes students from diverse backgrounds. Our admission process is simple, transparent, and designed to help each child embark on a successful learning journey.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Step 1: Inquiry</h2>
                        <p className="text-gray-600 text-sm md:text-base">Contact the school office or fill out the online inquiry form to get detailed information about programs, facilities, and curriculum.</p>
                    </div>

                    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Step 2: Application</h2>
                        <p className="text-gray-600 text-sm md:text-base">Submit the admission form along with required documents such as previous school records, birth certificate, and passport-sized photos.</p>
                    </div>

                    <div className="bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 text-center border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Step 3: Interview & Enrollment</h2>
                        <p className="text-gray-600 text-sm md:text-base">Attend a short interview with the school management. Upon approval, complete the enrollment process and welcome your child to Mid Point School.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                    <div className="bg-white p-6 shadow-lg border border-gray-300 hover:shadow-2xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">Eligibility & Age Criteria</h3>
                        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
                            <li>Nursery : 3 to 4 years</li>
                            <li>KG & Prep : 4 to 6 years</li>
                            <li>Grades 1 to 5 : 6 to 11 years</li>
                            <li>Grades 6 to 8 : 11 to 14 years</li>
                            <li>Grades 9 to 12 : 14 to 18 years</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 shadow-lg border border-gray-300 hover:shadow-2xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">Documents Required</h3>
                        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
                            <li>Birth Certificate</li>
                            <li>Previous school report cards</li>
                            <li>Passport-size photographs (3 copies)</li>
                            <li>Transfer certificate (if applicable)</li>
                            <li>Medical records / vaccination details</li>
                        </ul>
                    </div>

                    {/* Important Dates */}
                    <div className="bg-white p-6 shadow-lg border border-gray-300 hover:shadow-2xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">Important Dates</h3>
                        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
                            <li>Admission Opens: April 1</li>
                            <li>Application Deadline: June 30</li>
                            <li>Interviews & Assessments: July 5 to July 20</li>
                            <li>Final Enrollment: August 1</li>
                            <li>Academic Year Begins: August 15</li>
                        </ul>
                    </div>

                    {/* Fee Structure */}
                    <div className="bg-blue-100 p-6 shadow-lg text-center border border-gray-300 hover:shadow-2xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">Fee Structure Highlights</h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            We offer competitive and transparent fee plans. Fees vary according to grade levels and include tuition, co-curricular activities, and library usage. Scholarships are available for meritorious and deserving students.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-4">
                    {/* Call to Action */}
                    <div className="mt-10 flex flex-col justify-center md:justify-start gap-4">
                        <a href="/register" className="px-8 py-3 bg-blue-600 text-white  shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 text-center">Apply Now</a>
                        <a href="#contact" className="px-8 py-3 border-2 border-blue-600 text-blue-600  hover:bg-blue-600 hover:text-white transition duration-300 text-center text-nowrap">Contact Admissions</a>
                    </div>

                    {/* Extra-Curricular Info */}
                    <div className="mt-12 bg-white p-6 shadow-lg text-center w-full mx-auto border border-gray-300 hover:shadow-2xl transition duration-300">
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">Opportunities for New Students</h3>
                        <p className="text-gray-700 text-sm md:text-base text-justify">New students are welcomed with orientation programs, mentorship sessions, and activities to help them settle in. They have access to clubs, sports, arts, and science projects from day one, ensuring a smooth transition and active engagement.</p>
                    </div>
                </div>
            </section>


            {/* Faculty & Staff */}
            <section id="faculty_staff" className="min-h-screen pt-[12vh] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-6 duration-500">
                {/* Section Heading */}
                <div className="text-center md:text-left space-y-3">
                    <h1 className="text-xl md:text-xl font-bold text-gray-600">Faculty & Staff</h1>
                    <p className="text-gray-700 w-full mx-auto md:mx-0 text-justify leading-relaxed text-base md:text-lg">Our dedicated team of teaching and non-teaching staff ensures that students receive a well-rounded education in a safe and nurturing environment. Meet the professionals who make Mid Point School a place of excellence.</p>
                </div>

                {/* Teaching Staff */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-blue-900 mb-4">Teaching Staff</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[...Array(15)].map((_, index) => (
                            <div key={index} className="bg-white p-6 shadow-lg hover:shadow-2xl transition duration-300 text-center border border-gray-300">
                                <img
                                    src={photo_image} // Add actual image paths
                                    alt={`Teaching Staff ${index + 1}`}
                                    className="w-32 h-32 mx-auto object-cover shadow-lg mb-4 transition-transform duration-300 hover:scale-105 border border-gray-300"
                                />
                                <h3 className="text-xl font-semibold text-blue-900">Teacher {index + 1}</h3>
                                <p className="text-gray-600 mt-1 font-medium">Subject</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Non-Teaching Staff */}
                <div className="mt-12 pb-4">
                    <h2 className="text-xl font-semibold text-blue-900 mb-4">Non-Teaching Staff</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="bg-white p-6 shadow-lg hover:shadow-2xl transition duration-300 text-center border border-gray-300">
                                <img
                                    src={photo_image} // Add actual image paths
                                    alt={`Non-Teaching Staff ${index + 1}`}
                                    className="w-32 h-32 mx-auto object-cover shadow-lg mb-4 transition-transform duration-300 hover:scale-105 border border-gray-300"
                                />
                                <h3 className="text-xl font-semibold text-blue-900">Staff {index + 1}</h3>
                                <p className="text-gray-600 mt-1 font-medium">Position</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Facilities */}
            <section id="facilities" className="min-h-screen pt-[12vh] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-6 duration-500">
                {/* Section Heading */}
                <div className="text-center md:text-left space-y-3">
                    <h1 className="text-xl md:text-xl font-bold text-gray-600">Facilities</h1>
                    <p className="text-gray-700 w-full mx-auto md:mx-0 text-justify leading-relaxed text-base md:text-lg">Mid Point School provides state-of-the-art facilities to enhance learning, creativity, and physical development. From modern classrooms to sports arenas, we ensure a safe and inspiring environment for every student.</p>
                </div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">

                    {/* Library */}
                    <div className="relative h-64 overflow-hidden shadow-lg group cursor-pointer border border-gray-300">
                        <img src="https://th.bing.com/th/id/R.bee899b463c78309fe0081a826d90dbb?rik=JIe6zxll7htLhQ&pid=ImgRaw&r=0" alt="Library" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/30 opacity-60"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-xl font-semibold">Library</h2>
                            <p className="text-sm md:text-base mt-1">A well-stocked library with books, journals, and digital resources to support learning and research.</p>
                        </div>
                    </div>

                    {/* Science Lab */}
                    <div className="relative h-64 overflow-hidden shadow-lg group cursor-pointer border border-gray-300">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.smhQRkdL_hXlBJXVVC5cnwHaE8?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=203&h=135&c=7&o=7&rm=3" alt="Science Lab" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/30 opacity-60"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-xl font-semibold">Science Lab</h2>
                            <p className="text-sm md:text-base mt-1">Fully equipped laboratories for physics, chemistry, and biology experiments.</p>
                        </div>
                    </div>

                    {/* Sports Facilities */}
                    <div className="relative h-64 overflow-hidden shadow-lg group cursor-pointer border border-gray-300">
                        <img src="https://th.bing.com/th/id/OIP.Q4jo5qqsTfyjEac8_W9z5wHaE7?w=292&h=193&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Sports" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/30 opacity-60"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-xl font-semibold">Sports Facilities</h2>
                            <p className="text-sm md:text-base mt-1">Playgrounds and indoor facilities for football, cricket, basketball, badminton, and more.</p>
                        </div>
                    </div>

                    {/* Computer Lab */}
                    <div className="relative h-64 overflow-hidden shadow-lg group cursor-pointer border border-gray-300">
                        <img src="https://th.bing.com/th/id/R.bd7e42f494d4031998c3c35bc4b1c4c1?rik=oZ4dfxlfdh%2fvxQ&pid=ImgRaw&r=0" alt="Computer Lab" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/30 opacity-60"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-xl font-semibold">Computer Lab</h2>
                            <p className="text-sm md:text-base mt-1">Modern computer lab with high-speed internet, smart boards, and latest software for digital learning.</p>
                        </div>
                    </div>

                    {/* Auditorium */}
                    <div className="relative h-64 overflow-hidden shadow-lg group cursor-pointer border border-gray-300">
                        <img src="https://sprottewatson.com/wp-content/uploads/2023/02/S1A3561-1024x682.jpg" alt="Auditorium" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/30 opacity-60"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-xl font-semibold">Auditorium</h2>
                            <p className="text-sm md:text-base mt-1">A spacious auditorium for cultural events, seminars, and annual day functions.</p>
                        </div>
                    </div>

                    {/* Cafeteria */}
                    <div className="relative h-64 overflow-hidden shadow-lg group cursor-pointer border border-gray-300">
                        <img src="https://www.thinkaos.com/wp-content/uploads/2021/05/Catholic-High-Cafeteria-1.jpg" alt="Cafeteria" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/30 opacity-60"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-xl font-semibold">Cafeteria</h2>
                            <p className="text-sm md:text-base mt-1">Healthy meals and snacks served daily in a hygienic and comfortable environment.</p>
                        </div>
                    </div>

                    {/* Playground */}
                    <div className="relative h-64 overflow-hidden shadow-lg group cursor-pointer border border-gray-300">
                        <img src="https://th.bing.com/th/id/R.ea973fa73dc522028130c71050a1aaa2?rik=EAMd2j80HbalsA&pid=ImgRaw&r=0" alt="Playground" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/30 opacity-60"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-xl font-semibold">Playground</h2>
                            <p className="text-sm md:text-base mt-1">Safe and expansive outdoor spaces for physical activities, games, and sports practice.</p>
                        </div>
                    </div>

                    {/* Art & Music Room */}
                    <div className="relative h-64 overflow-hidden shadow-lg group cursor-pointer border border-gray-300">
                        <img src="https://img.freepik.com/premium-photo/music-classroom-with-instruments-1-generated-by-ai_930337-75.jpg" alt="Art & Music Room" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/30 opacity-60"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-xl font-semibold">Art & Music Room</h2>
                            <p className="text-sm md:text-base mt-1">Special rooms equipped for art, music, dance, and creative learning activities.</p>
                        </div>
                    </div>

                </div>

            </section>


            {/* Gallery Section */}
            <section id="gallery" className="min-h-screen pt-[12vh] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-6 duration-500">

                <div className="text-center md:text-left space-y-3">
                    <h1 className="text-xl md:text-xl font-bold text-gray-600">Gallery</h1>
                    <p className="text-gray-600 mt-2 w-full mx-auto text-sm md:text-base">Explore moments from Mid Point School – events, activities, and student life captured in pictures.</p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Image 1 */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer border border-gray-300 ">
                        <img src="https://thewisdomworldschool.in/wp-content/uploads/2016/12/IMG_6985.jpg" alt="Annual Sports Day" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center px-2">
                            <p className="text-sm md:text-base">Annual Sports Day 2024</p>
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer border border-gray-300 ">
                        <img src="https://th.bing.com/th/id/OIP.TJEdWsOiOVIRAovNxD4pDwHaEK?w=297&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Science Exhibition" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center px-2">
                            <p className="text-sm md:text-base">Science Exhibition 2024</p>
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer border border-gray-300 ">
                        <img src="https://th.bing.com/th/id/OIP.AUoLKbHFi02tCrEeaunLaAHaE8?w=240&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Art & Culture Fest" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center px-2">
                            <p className="text-sm md:text-base">Art & Culture Fest</p>
                        </div>
                    </div>

                    {/* Image 4 */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer border border-gray-300 ">
                        <img src="https://th.bing.com/th/id/OIP.XSho988tPMuU65CL_oRanwHaEH?w=312&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Student Workshop" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center px-2">
                            <p className="text-sm md:text-base">Student Workshop</p>
                        </div>
                    </div>

                    {/* Image 5 */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer border border-gray-300 ">
                        <img src="https://th.bing.com/th/id/OIP.wmmp5_Afu754l4hr9LS7GAHaE8?w=238&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="School Annual Day" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center px-2">
                            <p className="text-sm md:text-base">School Annual Day 2024</p>
                        </div>
                    </div>

                    {/* Image 6 */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer border border-gray-300">
                        <img src="https://th.bing.com/th/id/OIP.4N9e288JUXBnfdhBxEqd8AHaEK?w=312&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Sports Training" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center px-2">
                            <p className="text-sm md:text-base">Sports Training Session</p>
                        </div>
                    </div>

                    {/* Image 7 */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer border border-gray-300">
                        <img src="https://th.bing.com/th/id/OIP.Hp2DLdqOhWvL0--w4Fi5EAHaFj?w=196&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Music & Dance Class" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center px-2">
                            <p className="text-sm md:text-base">Music & Dance Class</p>
                        </div>
                    </div>

                    {/* Image 8 */}
                    <div className="relative overflow-hidden shadow-lg group cursor-pointer border border-gray-300">
                        <img src="https://th.bing.com/th/id/OIP.jgq6NXshwg5RI7JY3sCdDgHaE8?w=217&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Library Session" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center px-2">
                            <p className="text-sm md:text-base">Library Reading Session</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Notice / News Section */}
            <section id="notice_news" className="min-h-screen pt-[12vh] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-6 duration-500">
                {/* Section Heading */}
                <div className="text-center md:text-left space-y-3">
                    <h1 className="text-xl md:text-xl font-bold text-gray-600">Notice / News</h1>
                    <p className="text-gray-600 mt-2 w-full mx-auto text-sm md:text-base">Stay updated with the latest announcements, events, and news from Mid Point School.</p>
                </div>

                {/* Notices Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Notice Card */}
                    <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-300">
                        <p className="text-gray-500 text-sm mb-2">Dec 01, 2025</p>
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Admission Open for 2026</h2>
                        <p className="text-gray-700 text-sm md:text-base">Mid Point School invites applications for the academic year 2026. Submit your forms before June 30.</p>
                    </div>

                    <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-300">
                        <p className="text-gray-500 text-sm mb-2">Nov 25, 2025</p>
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Annual Sports Day Highlights</h2>
                        <p className="text-gray-700 text-sm md:text-base">Our Annual Sports Day was a grand success with enthusiastic participation from all students. Check out the photos and results.</p>
                    </div>

                    <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-300">
                        <p className="text-gray-500 text-sm mb-2">Nov 10, 2025</p>
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Science Exhibition 2025</h2>
                        <p className="text-gray-700 text-sm md:text-base">The Science Exhibition showcased innovative projects by students across all grades. Congratulations to all participants!</p>
                    </div>

                    <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-300">
                        <p className="text-gray-500 text-sm mb-2">Oct 28, 2025</p>
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Parent-Teacher Meeting</h2>
                        <p className="text-gray-700 text-sm md:text-base">The PTM for grades 6-12 will be held on November 5. Parents are requested to attend and discuss student progress.</p>
                    </div>

                    <div className="bg-white p-6 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-300">
                        <p className="text-gray-500 text-sm mb-2">Oct 15, 2025</p>
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">New Library Resources</h2>
                        <p className="text-gray-700 text-sm md:text-base">We have added 500+ new books and digital resources to our library. Students can now access a wider range of learning materials.</p>
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" className="min-h-screen pt-[12vh] px-4 sm:px-6 md:px-12 lg:px-20 duration-500 mb-4">
                {/* Section Heading */}
                <div className="text-center md:text-left space-y-3 mb-6">
                    <h1 className="text-xl md:text-xl font-bold text-gray-600">Contact Us</h1>
                    <p className="text-gray-600 mt-2 w-full mx-auto text-sm md:text-base">Reach out to Mid Point School for inquiries, feedback, or any assistance.</p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-6 shadow-lg text-center hover:shadow-2xl transition duration-300 border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Address</h2>
                        <p className="text-gray-700 text-sm md:text-base">Barahiya, Near Hanuman Temple, Bihar, India</p>
                    </div>

                    <div className="bg-white p-6 shadow-lg text-center hover:shadow-2xl transition duration-300 border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Contact</h2>
                        <p className="text-gray-700 text-sm md:text-base">Phone: +91 9876543210</p>
                        <p className="text-gray-700 text-sm md:text-base">Email: info@midpointschool.com</p>
                    </div>

                    <div className="bg-white p-6 shadow-lg text-center hover:shadow-2xl transition duration-300 border border-gray-300">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">Social Media</h2>
                        <p className="text-gray-700 text-sm md:text-base">Facebook | Instagram | LinkedIn | Twitter</p>
                    </div>
                </div>

                {/* Map and Form */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Google Map */}
                    <div className="lg:w-1/2 overflow-hidden shadow-lg h-80 border border-gray-300">
                        <iframe title="Mid Point School Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.123456789!2d85.5501234!3d25.3861234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1abcd1234567%3A0x1234567890abcdef!2sMid%20Point%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" className="border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleMessage} className="lg:w-1/2 bg-white p-6 shadow-lg flex flex-col gap-4 border border-gray-300">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Send Us a Message</h2>
                        <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <textarea placeholder="Your Message" onChange={(e) => setMessage(e.target.value)} className="border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" rows={5}></textarea>
                        <button type="submit" onClick={handleMessage} className="px-6 py-3 bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 cursor-pointer">Send Message</button>
                        <Toaster position="top-center" reverseOrder={false} />
                    </form>
                </div>
            </section>


            {/* Footer section */}
            <section className="bg-slate-100 py-8 px-4 sm:px-6 md:px-12 lg:px-20 duration-500">
                <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h1 className="text-xl font-bold text-blue-900">Mid Point School</h1>
                        <p className="text-gray-600 mt-1 text-sm md:text-base">Barahiya, Near Hanuman Temple, Bihar</p>
                        <p className="text-gray-600 mt-1 text-sm md:text-base">&copy; {new Date().getFullYear()} Mid Point School. All rights reserved.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 text-center md:text-right">
                        <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About Us</a>
                        <a href="#academics" className="text-gray-700 hover:text-blue-600 transition duration-300">Academics</a>
                        <a href="#admissions" className="text-gray-700 hover:text-blue-600 transition duration-300">Admissions</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
                    </div>
                    <div className="flex gap-4 mt-4 md:mt-0 justify-center md:justify-end">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-sm hover:bg-blue-700 transition duration-300"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white p-2 rounded-sm hover:bg-blue-500 transition duration-300"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-2 rounded-sm hover:bg-pink-600 transition duration-300"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/sujay-singh-344151386" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white p-2 rounded-sm hover:bg-blue-800 transition duration-300"><FaLinkedinIn /></a>
                        <a href="https://github.com/sujaysingh-dev" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-2 rounded-sm hover:bg-gray-900 transition duration-300"><FaGithub /></a>

                    </div>
                </div>
            </section>
        </div>
    )
}