import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Wallet,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Users2,
  Sparkles,
  Lock,
  Loader2,
} from "lucide-react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mwveraqd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        alert("Ocorreu um erro ao entrar na lista. Tente novamente.");
      }
    } catch (error) {
      alert("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* --- HEADER (Glassmorphism) --- */}
      <header className="fixed top-0 inset-x-0 h-16 bg-white/70 backdrop-blur-lg border-b border-slate-200/50 z-50">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-slate-900">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <Wallet className="h-5 w-5" />
            </div>
            <span>CoFin</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500 hidden md:block">
              Já tem conta?
            </span>
            <Button variant="ghost" size="sm" className="font-medium">
              Login
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-4">
          {/* Background Decorativo */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-3xl opacity-20 w-[800px] h-[500px] bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />
          </div>

          <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto e Formulário */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge de Novidade */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span className="tracking-wide">
                  A evolução da gestão patrimonial
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-slate-900">
                Domine seu patrimônio. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 leading-tight">
                  Sozinho ou a dois.
                </span>
              </h1>

              <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                A primeira plataforma que unifica Ações, Cripto e Renda Fixa com
                uma visão compartilhada inteligente para casais. Aposente suas
                planilhas hoje.
              </p>

              {/* Formulário de Captura Sofisticado */}
              <div className="max-w-md mx-auto lg:mx-0">
                {!submitted ? (
                  <form
                    onSubmit={handleJoinWaitlist}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex gap-2 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        className="border-0 shadow-none focus-visible:ring-0 h-12 text-base flex-grow bg-transparent"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isLoading}
                        className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-base font-medium transition-all"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          "Entrar na Fila"
                        )}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-xl border border-green-100 animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <p className="font-medium">
                      Você está na lista! Fique de olho no seu e-mail.
                    </p>
                  </div>
                )}
                <p className="text-sm text-slate-500 mt-4 flex items-center justify-center lg:justify-start gap-2">
                  <Users2 className="h-4 w-4" /> +320 investidores aguardando
                  acesso.
                </p>
              </div>
            </div>

            {/* Mockup do Produto (O Hero Shot) */}
            <div className="relative lg:ml-auto perspective-1000 my-20">
              {" "}
              {/* Adicionei my-20 para dar espaco vertical para o scale funcionar sem cortar */}
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-3xl rounded-[3rem] transform rotate-6 scale-95" />
              {/* AQUI: Voltei o scale para 125% em note e 150% em desktop grande */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-[2.5rem] p-3 shadow-2xl transform transition-all duration-500 ease-out rotate-2 scale-110 md:scale-125 lg:scale-150 hover:rotate-0 hover:scale-[1.55]">
                {/* Barra superior */}
                <div className="flex items-center gap-2 px-4 py-3 mb-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-xs text-slate-500 font-medium ml-4 bg-slate-800 px-3 py-1 rounded-md w-full text-center">
                    app.cofin.finance
                  </div>
                </div>

                {/* AQUI ESTÁ A CORREÇÃO DE SOBREPOSIÇÃO: */}
                {/* 1. min-h-[350px]: Garante altura mínima para os cards não colidirem */}
                {/* 2. aspect-[16/10]: Mantém o formato wide */}
                <div className="aspect-[16/10] min-h-[350px] md:min-h-[400px] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden relative group">
                  {/* Conteúdo Central (Placeholder) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                    <TrendingUp className="h-16 w-16 mb-4 text-blue-500/50" />
                    <span className="text-sm font-medium opacity-50">
                      Dashboard Preview
                    </span>
                  </div>

                  {/* --- CARD 1 (Rentabilidade) --- */}
                  {/* Usei top-6 ao invés de top-10 para ganhar espaço no meio */}
                  <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
                    <div className="text-xs text-blue-400 mb-1">
                      Rentabilidade Mês
                    </div>
                    <div className="text-xl font-bold text-white">+ 3.45%</div>
                  </div>

                  {/* --- CARD 2 (Modo Casal) --- */}
                  {/* Usei bottom-6 ao invés de bottom-10 */}
                  <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg flex items-center gap-3">
                    <div className="bg-green-500/20 p-2 rounded-lg">
                      <Lock className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-300 mb-1">
                        Modo Casal
                      </div>
                      <div className="text-sm font-bold text-white">
                        Ativado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SOCIAL PROOF STRIP --- */}
        <div className="border-y border-slate-200 bg-white/50">
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500 text-sm font-medium">
            <p>A tecnologia escolhida por investidores modernos:</p>
            <div className="flex items-center gap-8 grayscale opacity-60">
              {/* Placeholders de logos. Se tiver parceiros, coloque aqui. Senão, use tecnologias. */}
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" /> Bank-Level Security
              </div>
              <span>•</span>
              <div>Real-Time Data</div>
              <span>•</span>
              <div>Cloud Native</div>
            </div>
          </div>
        </div>

        {/* --- FEATURES (BENTO GRID STYLE) --- */}
        <section id="features" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">
                Muito mais que uma planilha bonita.
              </h2>
              <p className="text-lg text-slate-600">
                Uma suíte completa de ferramentas para quem leva o patrimônio a
                sério, construída sobre uma infraestrutura robusta.
              </p>
            </div>

            {/* O Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(180px,auto)]">
              {/* Card Principal (Grande) - Centralização */}
              <div className="md:col-span-2 md:row-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-200 overflow-hidden relative group hover:border-blue-300 transition-all">
                <div className="relative z-10">
                  <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Wallet className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Centralização Total
                  </h3>
                  <p className="text-slate-600 max-w-md leading-relaxed">
                    Conecte todas as pontas. Ações da B3, fundos imobiliários,
                    suas criptomoedas na cold wallet e a renda fixa do bancão.
                    Tudo consolidado em um único cálculo de patrimônio.
                  </p>
                </div>
                {/* Elemento gráfico decorativo */}
                <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-100 to-transparent opacity-50 rounded-tl-[4rem] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              </div>

              {/* Card Diferencial (Médio) - Modo Casal */}
              <div className="bg-indigo-600 rounded-3xl p-8 border border-indigo-500 text-white relative overflow-hidden md:col-start-3 md:row-start-1 group hover:shadow-lg transition-all">
                <div className="relative z-10">
                  <div className="h-12 w-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Users2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Gestão a Dois (Inédito)
                  </h3>
                  <p className="text-indigo-100 text-sm leading-relaxed mb-4">
                    Visualize o patrimônio de forma segregada: "Meu", "Seu" e
                    "Nosso". Transparência financeira sem perder a
                    individualidade.
                  </p>
                </div>
                {/* Ícone de fundo */}
                <Users2 className="absolute -bottom-4 -right-4 h-32 w-32 text-indigo-700/30 group-hover:scale-110 transition-transform rotate-12" />
              </div>

              {/* Card Menor - Cotações */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 md:col-start-3 md:row-start-2 hover:border-blue-300 transition-all">
                <div className="h-10 w-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">Tempo Real</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Integrações diretas com o mercado para cotações de Dólar,
                  Euro, BTC e B3 sempre atualizadas.
                </p>
              </div>

              {/* Card Menor - Segurança */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 md:col-span-3 hover:border-blue-300 transition-all flex flex-col md:flex-row items-center gap-6">
                <div className="h-14 w-14 bg-slate-200 text-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    Privacidade em Primeiro Lugar
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                    Nós não vendemos seus dados. Sua informação financeira é
                    criptografada e visível apenas para você. Modelo de negócio
                    baseado em assinatura, não em publicidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA SECTION --- */}
        <section className="py-24 px-4 bg-slate-900 text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para organizar sua vida financeira?
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              O acesso ao CoFin está sendo liberado em lotes para garantir a
              melhor performance. Garanta sua posição na fila agora.
            </p>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              size="lg"
              className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-lg rounded-full"
            >
              Quero meu acesso antecipado{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 py-12 text-slate-400 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-white">
            <Wallet className="h-5 w-5 text-blue-500" />
            <span>CoFin</span>
          </div>
          <p>
            © 2025 CoFin Tecnologia. Feito por investidores, para investidores.
          </p>
        </div>
      </footer>
    </div>
  );
}
