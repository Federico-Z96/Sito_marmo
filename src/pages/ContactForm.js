import { useState } from "react";

const ContactForm = ({ id }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        // Simula l'invio della mail. Sostituisci con il tuo metodo backend.
        setTimeout(() => {
            setIsSubmitting(false);
            setSuccessMessage("Richiesta inviata con successo!");
            setErrorMessage(""); // Reset eventuali errori
            setFormData({ name: "", email: "", message: "" });
        }, 2000);
    };

    return (
        <section id={id} className="w-100 bg-black py-12 lg:py-24">
            <div className="mx-auto max-w-screen-lg relative">
                <h2 className="text-8xl font-bold text-white pb-4 text-center uppercase">Richiedi Preventivo</h2>
                <form onSubmit={handleSubmit} className="space-y-6 py-6 lg:py-12 px-6 lg:px-8">
                    <div className="relative pb-4">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder=" "
                            className="peer w-full p-2 text-base text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none"
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-0 top-0 text-gray-500 text-2xl transition-all transform origin-left peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-500"
                        >
                            Nome
                        </label>
                    </div>
                    <div className="relative pb-4">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder=" "
                            className="peer w-full p-2 text-base text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-0 top-0 text-gray-500 text-2xl transition-all transform origin-left peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-500"
                        >
                            Email
                        </label>
                    </div>
                    <div className="relative pb-4">
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder=" "
                            rows="4"
                            className="peer w-full p-2 text-base text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none"
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-0 top-0 text-gray-500 text-2xl transition-all transform origin-left peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-500"
                        >
                            Messaggio
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-6 text-white font-bold rounded-md transition-all ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {isSubmitting ? "Inviando..." : "Invia Richiesta"}
                    </button>
                </form>
                {successMessage && (
                    <p className="mt-4 text-green-600 text-center">{successMessage}</p>
                )}
                {errorMessage && (
                    <p className="mt-4 text-red-600 text-center">{errorMessage}</p>
                )}
            </div>
        </section>
    );
};

export default ContactForm;
