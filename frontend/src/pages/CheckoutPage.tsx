import { useState } from "react";

const Checkout = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [deliveryMode, setDeliveryMode] = useState<"home" | "store" | null>(null);
    const [addresses, setAddresses] = useState<string[]>(["#2, Area, Bengaluru, 560030, IN"]);
    const [selectedAddress, setSelectedAddress] = useState<string>("#2, Area, Bengaluru, 560030, IN");
    const [timeSlot, setTimeSlot] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [showAddressForm, setShowAddressForm] = useState<boolean>(false);
    const [confirmedSteps, setConfirmedSteps] = useState<number[]>([]);

    const confirmStep = (step: number) => {
        setConfirmedSteps([...confirmedSteps, step]);
        setCurrentStep(step + 1);
    };

    const addNewAddress = (newAddress: string) => {
        setAddresses([...addresses, newAddress]);
        setShowAddressForm(false);
    };

    const handlePayment = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000); // Simulate a payment process
    };

    const NewAddressForm = ({ onAdd }: { onAdd: (address: string) => void }) => {
        const [newAddress, setNewAddress] = useState<string>("");

        const handleSubmit = () => {
            if (newAddress.trim() !== "") {
                onAdd(newAddress);
                setNewAddress("");
            }
        };

        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h3 className="font-semibold text-lg mb-4">Add New Address</h3>
                    <input
                        type="text"
                        placeholder="Enter your new address"
                        className="w-full border-2 border-gray-300 p-2 rounded mb-4"
                        value={newAddress}
                        onChange={(e) => setNewAddress(e.target.value)}
                    />
                    <div className="flex justify-end">
                        <button 
                            className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
                            onClick={() => setShowAddressForm(false)}
                        >
                            Cancel
                        </button>
                        <button 
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={handleSubmit}
                        >
                            Add Address
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const progressBarWidth = (currentStep: number) => {
        // This will return the width as a percentage based on the current step.
        return (currentStep - 1) * 33.33;
    };

    return (
        <div className="p-4 relative">
            <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
            <p className="text-gray-500 mb-6">Select Checkout Type</p>

            {/* Dynamic Progress Line */}
            <div className="relative w-full h-1 bg-gray-300 mb-6">
                <div
                    className="bg-green-500 h-full transition-all duration-500"
                    style={{ width: `${progressBarWidth(currentStep)}%` }}
                ></div>
            </div>

            {/* Step 1: Delivery Mode */}
            <div className="mb-8 pl-12 relative">
                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full absolute left-0">1</div>
                    <h2 className="text-lg font-semibold">Delivery Mode</h2>
                </div>
                {currentStep === 1 && !confirmedSteps.includes(1) ? (
                    <>
                        <div className="flex justify-between mb-4">
                            <div className={`flex-1 border-2 ${deliveryMode === "home" ? "border-green-500" : "border-gray-300"} p-4 rounded-lg mr-2 cursor-pointer`} onClick={() => setDeliveryMode("home")}>
                                <h3 className="text-center font-semibold">Home Delivery</h3>
                            </div>
                            <div className={`flex-1 border-2 ${deliveryMode === "store" ? "border-green-500" : "border-gray-300"} p-4 rounded-lg cursor-pointer`} onClick={() => setDeliveryMode("store")}>
                                <h3 className="text-center font-semibold">Store Pickup</h3>
                            </div>
                        </div>
                        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => confirmStep(1)}>Confirm</button>
                    </>
                ) : confirmedSteps.includes(1) && <p className="text-gray-500">Confirmed: {deliveryMode === "home" ? "Home Delivery" : "Store Pickup"}</p>}
            </div>

            {/* Step 2: Select Address */}
            {confirmedSteps.includes(1) && currentStep >= 2 && (
                <div className="mb-8 pl-12 relative">
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full absolute left-0">2</div>
                        <h2 className="text-lg font-semibold">Select Address</h2>
                    </div>
                    {!confirmedSteps.includes(2) ? (
                        <>
                            {addresses.map((addr, index) => (
                                <div 
                                    key={index} 
                                    className={`border-2 p-4 rounded-lg mb-4 cursor-pointer ${selectedAddress === addr ? "border-green-500" : "border-gray-300"}`} 
                                    onClick={() => setSelectedAddress(addr)}
                                >
                                    <p className="font-semibold">{addr}</p>
                                </div>
                            ))}
                            <button 
                                className="text-blue-500 underline mb-4" 
                                onClick={() => setShowAddressForm(true)}
                            >
                                + Add New Address
                            </button>
                            {selectedAddress && (
                                <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => confirmStep(2)}>Confirm</button>
                            )}
                        </>
                    ) : <p className="text-gray-500">Confirmed: {selectedAddress}</p>}
                </div>
            )}

            {/* Step 3: Home Delivery Time Slot */}
            {confirmedSteps.includes(2) && currentStep >= 3 && (
                <div className="mb-8 pl-12 relative">
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full absolute left-0">3</div>
                        <h2 className="text-lg font-semibold">Home Delivery Time Slot</h2>
                    </div>
                    {!confirmedSteps.includes(3) ? (
                        <>
                            <div className="border-2 border-gray-300 p-4 rounded-lg mb-4">
                                <h4 className="font-semibold mb-2">Select Date</h4>
                                <div className="flex justify-between">
                                    {["Today", "Tomorrow", "Later"].map((label, index) => (
                                        <button 
                                            key={index} 
                                            className={`flex-1 border-2 p-2 rounded-lg mr-2 ${selectedDate === label ? "border-green-500" : "border-gray-300"}`} 
                                            onClick={() => setSelectedDate(label)}>{label}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="border-2 border-gray-300 p-4 rounded-lg mb-4">
                                <h4 className="font-semibold mb-2">Select Time Slot</h4>
                                <div className="flex justify-between">
                                    {["10:00 AM - 12:00 PM", "12:00 PM - 02:00 PM", "02:00 PM - 04:00 PM", "04:00 PM - 06:00 PM"].map((slot, index) => (
                                        <button 
                                            key={index} 
                                            className={`flex-1 border-2 p-2 rounded-lg mr-2 ${timeSlot === slot ? "border-green-500" : "border-gray-300"}`} 
                                            onClick={() => setTimeSlot(slot)}>{slot}</button>
                                    ))}
                                </div>
                            </div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => confirmStep(3)}>Confirm</button>
                        </>
                    ) : <p className="text-gray-500">Confirmed: {selectedDate}, {timeSlot}</p>}
                </div>
            )}

            {/* Final Step: Go to Payment */}
            {confirmedSteps.length === 3 && (
                <div className="text-center mt-6">
                    <button 
                        className={`bg-green-600 text-white px-6 py-3 rounded text-lg w-full ${loading ? "opacity-50 cursor-not-allowed" : ""}`} 
                        onClick={handlePayment} 
                        disabled={loading}>
                        {loading ? "Processing..." : "Go to Payment"}
                    </button>
                </div>
            )}

            {/* Address Form Popup */}
            {showAddressForm && <NewAddressForm onAdd={addNewAddress} />}
        </div>
    );
};

export default Checkout;