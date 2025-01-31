// import { useState } from "react";

const Checkout = () => {
//     const [deliveryMode, setDeliveryMode] = useState<"home" | "store" | null>(null);
//     const [address, setAddress] = useState<string>("");
//     const [timeSlot, setTimeSlot] = useState<string>("");

//     const handleConfirmDeliveryMode = () => {
//         if (!deliveryMode) {
//             alert("Please select a delivery mode.");
//             return;
//         }
//         console.log("Delivery Mode Selected:", deliveryMode);
    // };

    return (
        <div className="p-4">
                    <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
                    <p className="text-gray-500 mb-6">Select Checkout Type</p>

                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full mr-2">1</div>
                            <h2 className="text-lg font-semibold">Delivery Mode</h2>
                        </div>
                        <div className="flex justify-between mb-4">
                            <div className="flex-1 border-2 border-green-500 p-4 rounded-lg mr-2">
                                <img src="https://placehold.co/100x100" alt="Home Delivery Icon" className="mx-auto mb-2" />
                                <h3 className="text-center font-semibold">Home Delivery</h3>
                                <p className="text-center text-gray-500">Get Order Delivered to your home</p>
                            </div>
                            <div className="flex-1 border-2 border-gray-300 p-4 rounded-lg">
                                <img src="https://placehold.co/100x100" alt="Store Pickup Icon" className="mx-auto mb-2" />
                                <h3 className="text-center font-semibold">Store Pickup</h3>
                                <p className="text-center text-gray-500">Collect Order from a pickup point</p>
                            </div>
                        </div>
                        <button className="w-full bg-green-500 text-white py-2 rounded-lg">Confirm</button>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full mr-2">2</div>
                            <h2 className="text-lg font-semibold">Select a Address</h2>
                        </div>
                        <div className="border-2 border-gray-300 p-4 rounded-lg mb-4">
                            <div className="flex items-center mb-4">
                                <img src="https://placehold.co/100x100" alt="Home Delivery Icon" className="mr-4" />
                                <div>
                                    <h3 className="font-semibold">Home Delivery</h3>
                                    <p className="text-gray-500">Get Order Delivered to your home</p>
                                </div>
                            </div>
                            <div className="border-2 border-gray-300 p-4 rounded-lg mb-4">
                                <h3 className="font-semibold">Tanisha Sahu</h3>
                                <p className="text-gray-500">#2, Area, Bengaluru, 560030, IN</p>
                                <a href="#" className="text-green-500">Change Address</a>
                            </div>
                            <button className="w-full bg-green-500 text-white py-2 rounded-lg">Confirm</button>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full mr-2">3</div>
                            <h2 className="text-lg font-semibold">Home Delivery Time Slot</h2>
                        </div>
                        <div className="border-2 border-gray-300 p-4 rounded-lg mb-4">
                            <h3 className="font-semibold mb-2">Tanisha Sahu</h3>
                            <p className="text-gray-500 mb-4">#2, Area, Bengaluru, 560030, IN</p>
                            <div className="mb-4">
                                <h4 className="font-semibold mb-2">Select Date</h4>
                                <div className="flex justify-between">
                                    <button className="flex-1 border-2 border-green-500 p-2 rounded-lg mr-2">Today<br />31 Jan, 25</button>
                                    <button className="flex-1 border-2 border-gray-300 p-2 rounded-lg mr-2">Tomorrow<br />01 Feb, 25</button>
                                    <button className="flex-1 border-2 border-gray-300 p-2 rounded-lg">Later<br />02 Feb, 25</button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h4 className="font-semibold mb-2">Select Time Slot</h4>
                                <div className="flex justify-between">
                                    <button className="flex-1 border-2 border-green-500 p-2 rounded-lg mr-2">10:00 AM - 12:00 PM</button>
                                    <button className="flex-1 border-2 border-gray-300 p-2 rounded-lg mr-2">12:00 PM - 02:00 PM</button>
                                    <button className="flex-1 border-2 border-gray-300 p-2 rounded-lg mr-2">02:00 PM - 04:00 PM</button>
                                    <button className="flex-1 border-2 border-gray-300 p-2 rounded-lg">04:00 PM - 06:00 PM</button>
                                    <button className="flex-1 border-2 border-gray-300 p-2 rounded-lg">06:00 PM - 08:00 PM</button>
                                </div>
                            </div>
                            <button className="w-full bg-green-500 text-white py-2 rounded-lg">Confirm</button>
                        </div>
                    </div>
                </div>
    );
};

export default Checkout;
