import Header from "../components/Header";

export default function About() {
    return <>
        <Header />
        <div className="background-image  h-screen flex justify-center items-center flex-col ">
            <div className="p-4 shadow-md rounded-md bg-white">
                <h2>Contact Information</h2>
                <p><strong>Name:</strong> TechSynergy</p>
                <p><strong>Email:</strong> email-techsynergy@gmail.com</p>
                <p><strong>Phone:</strong> +123 456 789</p>

            </div>
        </div>
    </>
}