'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';
import * as gtm from '@/lib/gtm';

// Define the context shape
interface GTMContextType {
  pushEvent: (data: gtm.GTMEvent) => void;
  trackLead: (formName: string, userData?: Record<string, any>) => void;
  trackFormSubmit: (formName: string, formData?: Record<string, any>) => void;
}

// Create context with default values
const GTMContext = createContext<GTMContextType>({
  pushEvent: gtm.pushEvent,
  trackLead: gtm.trackLead,
  trackFormSubmit: gtm.trackFormSubmit,
});

// Provider component
export function GTMProvider({ children }: { children: ReactNode }) {
  // In the future, you could add state here to track/queue events
  // or add additional functionality
  
  const contextValue: GTMContextType = {
    pushEvent: gtm.pushEvent,
    trackLead: gtm.trackLead,
    trackFormSubmit: gtm.trackFormSubmit,
  };

  return (
    <GTMContext.Provider value={contextValue}>
      {children}
    </GTMContext.Provider>
  );
}

// Custom hook for easier usage in components
export function useGTM() {
  const context = useContext(GTMContext);
  if (context === undefined) {
    throw new Error('useGTM must be used within a GTMProvider');
  }
  return context;
}