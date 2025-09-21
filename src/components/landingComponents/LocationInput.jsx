import { useState, useEffect } from "react";

export default function LocationInput() {
  const [address, setAddress] = useState("Fetching location...");
  const [manual, setManual] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setAddress("Enter your location");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();

          const { road, city, state } = data.address || {};
          const display = [road, city, state].filter(Boolean).join(", ");
          setAddress(display || "Location found");
        } catch {
          setAddress("Enter your location");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setAddress("Enter your location");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  };

  return (
    <div>
      {manual ? (
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onBlur={() => setManual(false)}
          className="border rounded-full px-3 py-1 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
          autoFocus
        />
      ) : (
        <button
          onClick={() => setManual(true)}
          className="border rounded-full px-3 py-1 text-sm bg-white hover:bg-orange-100 transition w-64 text-left"
        >
          {loading ? "Locating..." : address}
        </button>
      )}
    </div>
  );
}
