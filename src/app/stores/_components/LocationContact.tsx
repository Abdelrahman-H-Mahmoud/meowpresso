'use client';

import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationContactProps {
  address: string;
  phone: string;
  website: string | null;
  lat?: number;
  lng?: number;
}

export function LocationContact({ address, phone, website, lat, lng }: LocationContactProps) {
  const handleDirections = () => {
    if (lat && lng) {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
    }
  };

  const handleCall = () => {
    window.location.href = `tel:${phone.replace(/[^\d+]/g, '')}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-coffee-dark dark:text-white mb-6">
        Location & Contact
      </h2>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-4"
        >
          <div className="p-3 bg-brown-50 dark:bg-accent-400/10 rounded-lg">
            <MapPin className="w-6 h-6 text-brown-600 dark:text-accent-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-coffee-dark dark:text-white mb-1">Address</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{address}</p>
            <button
              onClick={handleDirections}
              className="text-sm text-brown-600 dark:text-accent-400 hover:underline"
            >
              Get Directions
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-start gap-4"
        >
          <div className="p-3 bg-brown-50 dark:bg-accent-400/10 rounded-lg">
            <Phone className="w-6 h-6 text-brown-600 dark:text-accent-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-coffee-dark dark:text-white mb-1">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{phone}</p>
            <button
              onClick={handleCall}
              className="text-sm text-brown-600 dark:text-accent-400 hover:underline"
            >
              Call Now
            </button>
          </div>
        </motion.div>

        {website && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4"
          >
            <div className="p-3 bg-brown-50 dark:bg-accent-400/10 rounded-lg">
              <ExternalLink className="w-6 h-6 text-brown-600 dark:text-accent-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-coffee-dark dark:text-white mb-1">Website</h3>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown-600 dark:text-accent-400 hover:underline"
              >
                Visit Website
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 