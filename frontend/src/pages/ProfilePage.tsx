import { useState, useEffect } from "react";
import { ShoppingBag, Headphones, Heart, MapPin, User, Wallet, LogOut } from "lucide-react";

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState(""); // Empty by default
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r ${
          isSmallScreen ? "fixed inset-0 z-10 w-full" : "w-1/4"
        }`}
      >
        <div className="p-4 flex items-center border-b">
          <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full" />
          <div className="ml-4">
            <div className="font-bold">Tanisha Sahu</div>
            <div className="text-gray-500">6263514338</div>
          </div>
        </div>
        <nav className="mt-4">
          <ul>
            {[
              { name: "Orders", icon: <ShoppingBag size={20} /> },
              { name: "Customer Support", icon: <Headphones size={20} /> },
              { name: "Manage Referrals", icon: <Heart size={20} /> },
              { name: "Addresses", icon: <MapPin size={20} /> },
              { name: "Profile", icon: <User size={20} /> },
              { name: "Wallet", icon: <Wallet size={20} /> },
              { name: "Log Out", icon: <LogOut size={20} /> },
            ].map(({ name, icon }) => (
              <li
                key={name}
                className={`p-4 flex items-center cursor-pointer hover:bg-gray-200 ${
                  activeSection === name ? "bg-gray-200" : ""
                }`}
                onClick={() => setActiveSection(name)} // Update active section
              >
                {icon} <span className="ml-2">{name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 p-4 ${isSmallScreen ? "mt-16" : ""}`}>
        {/* Content based on the active section */}
        {activeSection === "" && !isSmallScreen && (
          <h2 className="text-lg font-bold mb-4">Select an option</h2>
        )}

        {activeSection === "Orders" && <Orders />}
        {activeSection === "Customer Support" && <div>Customer Support Section</div>}
        {activeSection === "Manage Referrals" && <div>Manage Referrals Section</div>}
        {activeSection === "Addresses" && <Addresses />}
        {activeSection === "Profile" && <Profile />}
        {activeSection === "Wallet" && <WalletPage />}
      </main>
    </div>
  );
};

const Orders = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <img src="https://placehold.co/100x100" alt="No orders icon" className="mb-4" />
    <div className="text-lg font-bold mb-2">No orders yet</div>
    <button className="px-4 py-2 border border-purple-500 text-purple-500 rounded">Browse products</button>
  </div>
);

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Tanisha Sahu");
  const [email, setEmail] = useState("tanisha@example.com");
  const [phone, setPhone] = useState("6263514338");

  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-bold mb-4">Profile Information</h2>
      <div className="space-y-2">
        <div>
          <label className="block font-semibold">Name</label>
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full rounded"
            />
          ) : (
            <p>{name}</p>
          )}
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full rounded"
            />
          ) : (
            <p>{email}</p>
          )}
        </div>
        <div>
          <label className="block font-semibold">Phone</label>
          {isEditing ? (
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-2 w-full rounded"
            />
          ) : (
            <p>{phone}</p>
          )}
        </div>
      </div>
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

const Addresses = () => (
  <div className="p-4 bg-white shadow rounded-md">
    <h2 className="text-lg font-bold mb-4">Addresses</h2>
    <button className="px-4 py-2 bg-green-500 text-white rounded mb-4">Add Address</button>
  </div>
);

const WalletPage = () => <div className="p-4 bg-white shadow rounded-md">Wallet Section</div>;

export default ProfilePage;
