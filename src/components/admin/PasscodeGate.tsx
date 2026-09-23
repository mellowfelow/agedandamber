'use client';

import React, { useEffect, useState } from 'react';
import { Lock } from 'lucide-react';

const STORAGE_KEY = 'aa-admin-passcode';

/** Reads the stored passcode from localStorage without triggering a network call. */
export function useAdminPasscode(): [string | null, (p: string) => void, () => void] {
  const [passcode, setPasscodeState] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setPasscodeState(stored);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const setPasscode = (p: string) => {
    setPasscodeState(p);
    try {
      localStorage.setItem(STORAGE_KEY, p);
    } catch {
      /* ignore */
    }
  };

  const clearPasscode = () => {
    setPasscodeState(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  return [passcode, setPasscode, clearPasscode];
}

export const PasscodeGate: React.FC<{
  children: (passcode: string, signOut: () => void) => React.ReactNode;
}> = ({ children }) => {
  const [passcode, setPasscode, clearPasscode] = useAdminPasscode();
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(false);
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    if (!passcode) return;
    setChecking(true);
    setServerError('');
    fetch('/api/admin/orders/', { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => {
        setUnlocked(r.ok);
        if (r.status === 503) setServerError('ADMIN_PASSCODE is not set on the server yet.');
      })
      .catch(() => setUnlocked(false))
      .finally(() => setChecking(false));
  }, [passcode]);

  if (passcode && checking) {
    return <div className="min-h-screen bg-[#140D08] flex items-center justify-center text-amber-200/60 text-sm">Checking passcode…</div>;
  }

  if (passcode && unlocked) {
    return <>{children(passcode, clearPasscode)}</>;
  }

  return (
    <div className="min-h-screen bg-[#140D08] flex items-center justify-center p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPasscode(input);
        }}
        className="w-full max-w-sm bg-stone-950/90 border border-stone-800 rounded-2xl p-8 space-y-4"
      >
        <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center mx-auto">
          <Lock className="w-5 h-5 text-[#D4AF37]" />
        </div>
        <h1 className="text-center text-amber-100 font-serif text-xl font-bold">Admin Passcode</h1>
        <input
          type="password"
          required
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter passcode"
          aria-label="Admin passcode"
          className="w-full p-3 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 text-sm text-center focus:outline-none focus:border-[#D4AF37]"
        />
        {passcode && !unlocked && !checking && (
          <p className="text-red-400 text-xs text-center">{serverError || 'Incorrect passcode.'}</p>
        )}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all"
        >
          Unlock
        </button>
      </form>
    </div>
  );
};
