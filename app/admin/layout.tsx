'use client';

import React from 'react';
import { PasscodeGate } from '../../src/components/admin/PasscodeGate';
import { AdminNav } from '../../src/components/admin/AdminNav';
import { AdminPasscodeProvider } from '../../src/components/admin/AdminPasscodeContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <PasscodeGate>
      {(passcode, signOut) => (
        <div className="min-h-screen bg-[#140D08] text-amber-50">
          <AdminNav onSignOut={signOut} />
          <div className="p-6 md:p-10 max-w-5xl mx-auto">
            <AdminPasscodeProvider passcode={passcode}>{children}</AdminPasscodeProvider>
          </div>
        </div>
      )}
    </PasscodeGate>
  );
}
