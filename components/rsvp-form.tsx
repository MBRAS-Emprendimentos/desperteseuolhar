"use client"

import type React from "react"
import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {useMask, Mask} from '@react-input/mask'
import * as fbq from '@/lib/facebook-pixel'

export function RSVPForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "", 
    guests: "", 
    agreeToTerms: false,
  })

  const phoneMaskOptions = {
    mask: '(__) _ ____-____',
    replacement: { _: /\d/ },
  }

  const phoneMask = new Mask(phoneMaskOptions)

  const phoneInputRef = useMask(phoneMaskOptions);

  // Consolidated change handler
  const handleFormChange = (name: string, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create the merged data
    const formData = new FormData();
    formData.append('firstName', formState.firstName);
    formData.append('lastName', formState.lastName);
    formData.append('name', `${formState.firstName} ${formState.lastName}`);
    formData.append('email', formState.email);
    formData.append('phone', phoneMask.unformat(formState.phone));
    // formData.append('eventDate', formState.eventDate);
    // formData.append('guests', formState.guests);
    formData.append('agreeToTerms', String(formState.agreeToTerms));
    formData.append('subject', 'Nova Confirmação de Presença - Save The View');
    
    // Submit to Formspree
    fetch("https://formspree.io/f/xkgnpgpo", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    }).then(() => {
      // Get formatted phone for tracking
      const formattedPhone = phoneMask.unformat(formState.phone);
      
      // Build lead event ID for deduplication
      const leadEventId = `lead_${formState.email}_${Date.now()}`;
      
      // Track lead capture with Facebook Pixel (client + server side)
      fbq.lead(
        {
          content_name: 'RSVP Event Lead',
          content_category: 'Event Registration',
          status: 'new_lead',
          value: 0,
          currency: 'BRL',
          // Additional custom properties
          form_name: 'RSVP Form',
          event_name: 'Luxury Rooftop Event',
          // Current page URL info
          page_url: window.location.href,
          page_title: document.title
        },
        // User data for server-side tracking
        {
          email: formState.email,
          phone: formattedPhone,
          firstName: formState.firstName,
          lastName: formState.lastName,
          // You can add these fields if you collect them in your form
          city: 'São Paulo',  // Default or from form
          state: 'SP',        // Default or from form
          country: 'BR',      // Default to Brazil
          // Generate a unique lead ID
          leadId: leadEventId
        }
      );
      
      // Track registration completion
      fbq.completeRegistration(
        {
          content_name: 'RSVP Submission',
          content_category: 'Event Registration',
          status: 'confirmed',
          // Current page URL info
          page_url: window.location.href,
          page_title: document.title
        },
        // User data for server-side tracking
        {
          email: formState.email,
          phone: formattedPhone,
          firstName: formState.firstName,
          lastName: formState.lastName,
          // You can add these fields if you collect them in your form
          city: 'São Paulo',  // Default or from form
          state: 'SP',        // Default or from form
          country: 'BR',      // Default to Brazil
          // Generate a unique external ID
          externalId: `rsvp_${formState.email}_${Date.now()}`
        }
      );
      
      // Redirect to thank you page
      window.location.href = "/obrigado";
    });
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="space-y-8 w-full max-w-lg mx-auto bg-transparent p-2 sm:p-2 rounded-none shadow-xl"
    >
      <input type="hidden" name="_next" value="/obrigado" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-premium-light/80">Nome</Label>
          <Input 
            id="firstName" 
            name="firstName" 
            placeholder="Seu nome" 
            required 
            value={formState.firstName}
            onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            className="bg-premium-navy/50 border-premium-gold/30 focus:border-premium-gold focus:ring-premium-gold text-white placeholder:text-premium-light/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-premium-light/80">Sobrenome</Label>
          <Input 
            id="lastName" 
            name="lastName" 
            placeholder="Seu sobrenome" 
            required 
            value={formState.lastName}
            onChange={(e) => handleFormChange(e.target.name, e.target.value)}
            className="bg-premium-navy/50 border-premium-gold/30 focus:border-premium-gold focus:ring-premium-gold text-white placeholder:text-premium-light/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-premium-light/80">Email</Label>
        <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="seu@email.com" 
          required 
          value={formState.email}
          onChange={(e) => handleFormChange(e.target.name, e.target.value)}
          className="bg-premium-navy/50 border-premium-gold/30 focus:border-premium-gold focus:ring-premium-gold text-white placeholder:text-premium-light/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-premium-light/80">Telefone</Label>
        <Input
          ref={phoneInputRef}
          id="phone" 
          name="phone" 
          type="tel" 
          placeholder="(XX) XXXXX-XXXX" 
          value={formState.phone}
          onChange={(e) => handleFormChange(e.target.name, e.target.value)}
          className="bg-premium-navy/50 border-premium-gold/30 focus:border-premium-gold focus:ring-premium-gold text-white placeholder:text-premium-light/50"
        />
      </div>
      
     

      <div className="flex items-center space-x-2">
        <div className="relative flex items-center">
          <Checkbox
            id="agreeToTerms"
            name="agreeToTerms" 
            checked={formState.agreeToTerms}
            onCheckedChange={(checked) => handleFormChange('agreeToTerms', checked as boolean)}
            required
            className="border-premium-gold/50 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-premium-gold data-[state=checked]:to-premium-warm data-[state=checked]:text-premium-navy-deep"
          />
          <label
            htmlFor="agreeToTerms"
            className="absolute inset-0 cursor-pointer"
            aria-hidden="true"
          />
        </div>
        <label
          htmlFor="agreeToTerms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-premium-light cursor-pointer"
        >
          Concordo com os <a href="/termos" target="_blank" rel="noopener noreferrer" className="underline hover:text-premium-warm transition-colors">termos e condições</a>
        </label>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-premium-deep via-premium-gold to-premium-warm hover:from-premium-warm hover:via-premium-gold hover:to-premium-deep text-premium-navy-deep rounded-none py-6 transition-all duration-300 shadow-[0_4px_12px_rgba(205,138,79,0.25)] hover:shadow-[0_4px_20px_rgba(205,138,79,0.4)] tracking-wider font-normal"
      >
        CONFIRMAR PRESENÇA
      </Button>
    </form>
  )
}
