import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Dummy data — replace with backend data later
const dummyOrders = [
  {
    id: 1,
    title: "Jollof Rice with Chicken",
    details: "2 portions • ₦5,000",
    status: "Pending",
    img: "https://via.placeholder.com/60",
  },
  {
    id: 2,
    title: "Grilled Fish Deluxe",
    details: "1 portion • Extra spicy",
    status: "Cooking",
    img: "https://via.placeholder.com/60",
  },
  {
    id: 3,
    title: "Beef Suya",
    details: "3 sticks • ₦2,400",
    status: "Ready",
    img: "https://via.placeholder.com/60",
  },
  {
    id: 4,
    title: "Egusi Soup & Pounded Yam",
    details: "1 bowl • ₦3,500",
    status: "Cooking",
    img: "https://via.placeholder.com/60",
  },
  {
    id: 5,
    title: "Fried Plantain & Eggs",
    details: "2 plates • ₦2,000",
    status: "Pending",
    img: "https://via.placeholder.com/60",
  },
];

export default function RunningOrders({ open, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal / Bottom Sheet */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100) onClose();
            }}
          >
            <div className="bg-white rounded-2xl w-full max-w-md shadow-lg overflow-hidden">
              {/* Drag handle */}
              <div className="flex justify-center py-2">
                <div className="w-12 h-1.5 rounded-full bg-gray-300" />
              </div>

              {/* Header */}
              <div className="px-4 py-2 border-b">
                <h2 className="text-lg font-bold">
                  {dummyOrders.length > 0
                    ? `${dummyOrders.length} Running Orders`
                    : "No Running Orders"}
                </h2>
              </div>

              {/* Orders or Empty state */}
              {dummyOrders.length > 0 ? (
                <div className="max-h-[70vh] overflow-y-auto divide-y">
                  {dummyOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center gap-3 px-4 py-3"
                    >
                      {/* Thumbnail */}
                      <img
                        src={order.img}
                        alt={order.title}
                        className="w-14 h-14 rounded-md object-cover bg-gray-200"
                      />

                      {/* Order info */}
                      <div className="flex-1">
                        <p className="font-semibold">{order.title}</p>
                        <p className="text-sm text-gray-500">{order.details}</p>
                        <p className="text-xs text-gray-400 italic">
                          {order.status}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-1">
                        <Button
                          variant="outline"
                          className="border-orange-500 text-orange-500 h-7 text-xs"
                        >
                          Done
                        </Button>
                        <Button
                          variant="ghost"
                          className="text-gray-500 h-7 text-xs"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
                  {/* Placeholder illustration */}
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <p className="font-medium">No running orders right now</p>
                  <p className="text-sm">New orders will appear here.</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
