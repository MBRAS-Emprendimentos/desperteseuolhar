"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea" 
import { useRouter } from 'next/navigation' 

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

  // Consolidated change handler
  const handleFormChange = (name: string, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form 
      action="https://formspree.io/f/xkgnpgpo" 
      method="POST"
      className="space-y-8 w-full max-w-lg mx-auto bg-premium-navy-deep/60 p-2 sm:p-2 rounded-none shadow-xl"
    >
      <input type="hidden" name="_next" value="/obrigado" />
      <input type="hidden" name="_subject" value="Nova Confirmação de Presença - Desperte Seu Olhar" />


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
          id="phone" 
          name="phone" 
          type="tel" 
          placeholder="(XX) XXXXX-XXXX" 
          value={formState.phone}
          onChange={(e) => handleFormChange(e.target.name, e.target.value)}
          className="bg-premium-navy/50 border-premium-gold/30 focus:border-premium-gold focus:ring-premium-gold text-white placeholder:text-premium-light/50"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="eventDate" className="text-premium-light/80">Prefere qual data?</Label>
          <Select 
            name="eventDate" 
            required
            value={formState.eventDate}
            onValueChange={(value) => handleFormChange('eventDate', value)}
          >
            <SelectTrigger className="w-full bg-premium-navy/50 border-premium-gold/30 focus:border-premium-gold focus:ring-premium-gold text-white">
              <SelectValue placeholder="Selecione a data" />
            </SelectTrigger>
            <SelectContent className="bg-premium-navy border-premium-gold/50 text-premium-light">
              <SelectItem value="Quarta-16/04" className="hover:bg-premium-gold/30 data-[highlighted]:bg-premium-gold/40 focus:bg-premium-gold/40 data-[state=checked]:bg-premium-gold/60 transition-colors">Quarta-feira, 16/04 (16h)</SelectItem>
              <SelectItem value="Sabado-19/04" className="hover:bg-premium-gold/30 data-[highlighted]:bg-premium-gold/40 focus:bg-premium-gold/40 data-[state=checked]:bg-premium-gold/60 transition-colors">Sábado, 19/04 (17:30)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
            <Label htmlFor="guests" className="text-premium-light/80">Levará acompanhante?</Label>
            <Select 
              name="guests" 
              value={formState.guests} 
              onValueChange={(value) => handleFormChange('guests', value)}
              required
            >
              <SelectTrigger className="w-full bg-premium-navy/50 border-premium-gold/30 focus:border-premium-gold focus:ring-premium-gold text-white">
                <SelectValue placeholder="Número de acompanhantes" />
              </SelectTrigger>
              <SelectContent className="bg-premium-navy border-premium-gold/50 text-premium-light">
                <SelectItem value="Não" className="hover:bg-premium-gold/30 data-[highlighted]:bg-premium-gold/40 focus:bg-premium-gold/40 data-[state=checked]:bg-premium-gold/60 transition-colors">Não</SelectItem>
                <SelectItem value="Sim (+1)" className="hover:bg-premium-gold/30 data-[highlighted]:bg-premium-gold/40 focus:bg-premium-gold/40 data-[state=checked]:bg-premium-gold/60 transition-colors">Sim (+1)</SelectItem>
              </SelectContent>
            </Select>
        </div>
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
