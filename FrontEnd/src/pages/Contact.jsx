import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="text-center py-8">
                <h1 className="text-4xl font-bold">Contact Us</h1>
            </header>
            <main className="py-8">
                <div className="max-w-xl mx-auto">
                    <p className="text-center">
                        For inquiries, please call us at <strong>(556) 345-5595</strong> or email us at <strong>info@autorepairshop.com</strong>.
                    </p>
                    <p className="text-center mt-4">
                        Visit us at 123 Auto Repair Street, NY, USA.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

// This line ensures that Contact is the default export of this module
export default Contact;
