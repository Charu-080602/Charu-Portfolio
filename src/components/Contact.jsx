import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            alert(data.message);

            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            alert("Something went wrong!");
            console.error(error);
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-centerbg-gradient-to-br from-[#1a120b] via-[#3b2a1f] to-[#1a120b] px-4">
            <div className="w-full max-w-md bg-gray-800 text-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Contact Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition duration-300"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}