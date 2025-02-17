'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Send, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { useWaitlistCount } from '@/hooks/useWaitlistCount';

interface ExistingUserInfo {
  position: number;
  name: string;
}

export function WaitlistSubscribe() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);
  const [isExisting, setIsExisting] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [isEmailExists, setIsEmailExists] = useState(false);
  const [existingUser, setExistingUser] = useState<ExistingUserInfo | null>(null);
  const totalCount = useWaitlistCount();

  // Debounced email check
  useEffect(() => {
    const checkEmail = async () => {
      if (!email || !email.includes('@')) {
        setIsEmailExists(false);
        setExistingUser(null);
        return;
      }
      
      setIsValidating(true);
      try {
        const response = await fetch(`/api/waitlist/check?email=${encodeURIComponent(email)}`);
        const data = await response.json();
        setIsEmailExists(data.exists);
        if (data.exists) {
          setExistingUser({
            position: data.position,
            name: data.name
          });
        } else {
          setExistingUser(null);
        }
      } catch (error) {
        console.error('Failed to check email', error);
      } finally {
        setIsValidating(false);
      }
    };

    const timeoutId = setTimeout(checkEmail, 500);
    return () => clearTimeout(timeoutId);
  }, [email]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email') as string,
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      countryCode: formData.get('countryCode') as string,
    };

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) throw new Error();

      setWaitlistPosition(result.position);
      setIsExisting(result.isExisting);
      
      toast.success(
        result.isExisting 
          ? `Welcome back, ${existingUser?.name}! You're #${result.position} in our waitlist!` 
          : `Welcome! You're #${result.position} of ${totalCount + 1} in our waitlist!`
      );
      if (!result.isExisting) {
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) { 
      toast.error('Failed to join waitlist. Please try again.');
      console.error('Failed to join waitlist', error);
    } finally {
      setIsLoading(false);
    }
  }

  const resetForm = () => {
    setEmail('');
    setIsEmailExists(false);
    setExistingUser(null);
    setWaitlistPosition(null);
    setIsExisting(false);
    setIsValidating(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    resetForm();
  };

  return (
    <>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-24 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          variant="primary"
          className="relative group overflow-hidden rounded-full shadow-lg hover:shadow-xl 
            transition-all duration-300 px-6 py-3 bg-gradient-to-r from-brown-600 to-brown-700
            dark:from-accent-500 dark:to-accent-600 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brown-500 to-brown-600
            dark:from-accent-400 dark:to-accent-500 translate-y-full group-hover:translate-y-0 
            transition-transform duration-300"
          />
          
          <div className="relative flex items-center gap-3">
            <span className="relative">
              <Coffee className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full 
                  shadow-[0_0_8px_rgba(239,68,68,0.6)]"
              />
            </span>
            <motion.span 
              className="font-medium whitespace-nowrap"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            >
              Join Waitlist
            </motion.span>
          </div>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 text-center">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black"
                onClick={handleClose}
              />

              {/* Modal positioning trick */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="inline-block w-full max-w-md p-6 my-8 text-left align-middle bg-white dark:bg-gray-800 
                  rounded-2xl shadow-xl transform transition-all relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Join Our Coffee Journey
                  </h2>
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 
                      dark:hover:text-gray-200 rounded-full p-1 hover:bg-gray-100 
                      dark:hover:bg-gray-700 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  {`Join ${totalCount} coffee enthusiasts waiting for exclusive offers!`}
                </p>

                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                        bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500
                        dark:placeholder-gray-400 focus:ring-2 focus:ring-brown-600 dark:focus:ring-accent-500
                        focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${
                        isEmailExists ? 'border-amber-500 dark:border-amber-500' : 'border-gray-200 dark:border-gray-700'
                      } bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500
                        dark:placeholder-gray-400 focus:ring-2 focus:ring-brown-600 dark:focus:ring-accent-500
                        focus:border-transparent outline-none transition-all`}
                    />
                  </div>
                  {isEmailExists && existingUser && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 
                        dark:border-amber-800"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-800 flex items-center 
                          justify-center text-amber-600 dark:text-amber-300">
                          #{existingUser.position}
                        </div>
                        <div>
                          <p className="text-amber-800 dark:text-amber-200 font-medium">
                            Welcome back, {existingUser.name}!
                          </p>
                          <p className="text-amber-600 dark:text-amber-400 text-sm">
                            {`You're already on our waitlist`}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div className="flex gap-3">
                    <input
                      type="text"
                      name="countryCode"
                      placeholder="+1"
                      required
                      maxLength={4}
                      className="w-20 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                        bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500
                        dark:placeholder-gray-400 focus:ring-2 focus:ring-brown-600 dark:focus:ring-accent-500
                        focus:border-transparent outline-none transition-all"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      required
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                        bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500
                        dark:placeholder-gray-400 focus:ring-2 focus:ring-brown-600 dark:focus:ring-accent-500
                        focus:border-transparent outline-all transition-all"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-brown-600 to-brown-700
                      dark:from-accent-500 dark:to-accent-600 hover:scale-[1.02] transition-all duration-200
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    disabled={isLoading || isValidating || isEmailExists}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Joining...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Join Waitlist</span>
                        </>
                      )}
                    </div>
                  </Button>
                </form>

                {waitlistPosition && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl text-center"
                  >
                    <p className="text-gray-900 dark:text-white font-medium">
                      {isExisting ? (
                        <>{`You're already on our waitlist!`}</>
                      ) : (
                        <>Welcome to our waitlist!</>
                      )}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      You are number <span className="font-bold text-brown-600 dark:text-accent-400">
                        #{waitlistPosition}
                      </span> in line
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
} 