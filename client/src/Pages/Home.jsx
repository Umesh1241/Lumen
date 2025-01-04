import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <div className="background-image flex justify-center items-center h-screen flex-col">
        <h1 className="text-4xl">Home Page</h1>
        <div className="bg-white p-4 shadow-md rounded-md mt-4">

        <p className="text-lg">
          The Telecom Inventory Management System (TIMS) is a comprehensive solution designed to streamline the management of telecom products and services inventory. It features user authentication with role-based access control, enabling admins, managers, and staff to manage products, suppliers, and stock transactions effectively. TIMS includes functionalities such as product and supplier management, real-time stock alerts, and notifications for low stock levels or order delays. The system supports responsive design for multi-device usability, secure RESTful APIs, and a robust database for storing normalized data. Advanced features like demand forecasting, data import/export, and an interactive reporting dashboard enhance operational efficiency and decision-making for telecom businesses.
        </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;