'use client';

import React, { createContext, useContext } from 'react';

const AdminPasscodeContext = createContext<string | null>(null);

export const AdminPasscodeProvider: React.FC<{ passcode: string; children: React.ReactNode }> = ({
  passcode,
  children,
}) => <AdminPasscodeContext.Provider value={passcode}>{children}</AdminPasscodeContext.Provider>;

/** The verified admin passcode — only ever rendered inside app/admin/layout.tsx's unlocked branch. */
export function useAdminContextPasscode(): string {
  const passcode = useContext(AdminPasscodeContext);
  if (!passcode) throw new Error('useAdminContextPasscode() used outside AdminPasscodeProvider');
  return passcode;
}
