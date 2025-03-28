"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RSVPForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    guests: "1",
    dietaryRestrictions: "",
    agreeToTerms: false,
    submitted: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would submit the form data to a server here
    setFormState((prev) => ({ ...prev, submitted: true }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  if (formState.submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-premium-gold to-premium-warm mx-auto flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(205,138,79,0.3)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-premium-navy-deep"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-light mb-4">Obrigado!</h3>
        <p className="opacity-80 mb-6">
          Sua confirmação foi recebida. MBRAS, Ferrari e Benx agradecem e esperam vê-lo no evento.
        </p>
        <p className="text-sm opacity-70">Um e-mail de confirmação foi enviado para <span className="text-premium-light">{formState.email}</span></p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-premium-light">Nome</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
            required
            className="bg-premium-navy-deep/50 border-premium-gold/30 focus:border-premium-warm rounded-none focus:ring-premium-light/20 transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-premium-light">Sobrenome</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
            required
            className="bg-premium-navy-deep/50 border-premium-gold/30 focus:border-premium-warm rounded-none focus:ring-premium-light/20 transition-all duration-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-premium-light">E-mail</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
          className="bg-premium-navy-deep/50 border-premium-gold/30 focus:border-premium-warm rounded-none focus:ring-premium-light/20 transition-all duration-300"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-premium-light">Telefone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formState.phone}
          onChange={handleChange}
          required
          className="bg-premium-navy-deep/50 border-premium-gold/30 focus:border-premium-warm rounded-none focus:ring-premium-light/20 transition-all duration-300"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests" className="text-premium-light">Número de Convidados</Label>
        <Select defaultValue="1" onValueChange={(value) => setFormState((prev) => ({ ...prev, guests: value }))}>
          <SelectTrigger className="bg-premium-navy-deep/50 border-premium-gold/30 focus:border-premium-warm rounded-none text-white">
            <SelectValue placeholder="Selecione o número de convidados" />
          </SelectTrigger>
          <SelectContent className="bg-premium-navy-light border-premium-gold/30">
            <SelectItem value="1" className="focus:bg-premium-gold/20 focus:text-premium-light">1 Convidado</SelectItem>
            <SelectItem value="2" className="focus:bg-premium-gold/20 focus:text-premium-light">2 Convidados</SelectItem>
            <SelectItem value="3" className="focus:bg-premium-gold/20 focus:text-premium-light">3 Convidados</SelectItem>
            <SelectItem value="4" className="focus:bg-premium-gold/20 focus:text-premium-light">4 Convidados</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dietaryRestrictions" className="text-premium-light">Restrições Alimentares (Opcional)</Label>
        <Input
          id="dietaryRestrictions"
          name="dietaryRestrictions"
          value={formState.dietaryRestrictions}
          onChange={handleChange}
          className="bg-premium-navy-deep/50 border-premium-gold/30 focus:border-premium-warm rounded-none focus:ring-premium-light/20 transition-all duration-300"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="agreeToTerms"
          checked={formState.agreeToTerms}
          onCheckedChange={(checked) => setFormState((prev) => ({ ...prev, agreeToTerms: checked as boolean }))}
          required
          className="border-premium-gold/50 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-premium-gold data-[state=checked]:to-premium-warm data-[state=checked]:text-premium-navy-deep"
        />
        <label
          htmlFor="agreeToTerms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-premium-light"
        >
          Concordo com os termos e condições
        </label>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-premium-deep via-premium-gold to-premium-warm hover:from-premium-warm hover:via-premium-gold hover:to-premium-deep text-premium-navy-deep rounded-none py-6 transition-all duration-300 shadow-[0_4px_12px_rgba(205,138,79,0.25)] hover:shadow-[0_4px_20px_rgba(205,138,79,0.4)]"
      >
        CONFIRMAR PRESENÇA
      </Button>
    </form>
  )
}
