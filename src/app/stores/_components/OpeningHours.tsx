'use client';

import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const daysOfWeek = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
] as const;

type DayOfWeek = typeof daysOfWeek[number];

interface OpeningHoursProps {
  hours: string;
}

export function OpeningHours({ hours }: OpeningHoursProps) {
  const getHours = (hours: string, day: DayOfWeek): string => {
    try {
      const parsedHours = JSON.parse(hours);
      return parsedHours[day] || 'Closed';
    } catch (error) {
      console.error('Error parsing hours:', error);
      return 'Closed';
    }
  };

  const today = daysOfWeek[new Date().getDay() - 1];
  
  const isOpenNow = () => {
    try {
      const currentHours = getHours(hours, today);
      if (currentHours === 'Closed') return false;

      const [openTime, closeTime] = currentHours.split(' - ');
      const now = new Date();
      
      // Convert current time to minutes since midnight
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      
      // Convert opening hours to minutes since midnight
      const convertTimeToMinutes = (timeStr: string) => {
        const [time, period] = timeStr.split(' ');
        const [hours, minutes] = time.split(':');
        let hrs = parseInt(hours);
        if (period === 'PM' && hrs !== 12) hrs += 12;
        if (period === 'AM' && hrs === 12) hrs = 0;
        return hrs * 60 + parseInt(minutes || '0');
      };

      const openMinutes = convertTimeToMinutes(openTime);
      const closeMinutes = convertTimeToMinutes(closeTime);

      return currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
    } catch (error) {
      console.error('Error checking open status:', error);
      return false;
    }
  };

  const isOpen = isOpenNow();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-brown-600 dark:text-accent-400" />
        <h2 className="text-xl font-bold text-coffee-dark dark:text-white">
          Opening Hours
        </h2>
      </div>

      <div className="space-y-3">
        {daysOfWeek.map((day) => (
          <motion.div
            key={day}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: daysOfWeek.indexOf(day) * 0.1 }}
            className={`flex justify-between p-2 rounded-lg ${
              day === today
                ? 'bg-brown-50 dark:bg-accent-400/10 font-medium'
                : 'text-gray-600 dark:text-gray-300'
            }`}
          >
            <span className="capitalize">{day}</span>
            <span>{getHours(hours, day)}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
          <span>{isOpen ? 'Open now' : 'Closed now'}</span>
        </div>
      </div>
    </div>
  );
} 