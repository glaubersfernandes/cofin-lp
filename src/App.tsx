import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Users2,
  Sparkles,
  CreditCard,
  Target,
  FileSpreadsheet,
  XCircle,
  Check,
  Crown,
  ChevronDown,
  Smartphone,
  Play,
  X,
} from "lucide-react";

const FAQS = [
  {
    q: "Precisamos pagar duas assinaturas para usar em casal?",
    a: "Não! Uma única assinatura do plano Casal & Família (R$ 29,90/mês ou R$ 24,16/mês no plano anual) libera o Workspace compartilhado para até 5 membros. Você convida seu parceiro(a) por e-mail e cada um acessa com seu próprio login e senha.",
  },
  {
    q: "Como funciona a visão 'Meu, Seu e Nosso'?",
    a: "Dentro do mesmo espaço compartilhado, cada lançamento registra automaticamente quem criou (ex: Glauber ou Parceira). Com 1 clique no topo da tela de Transações, vocês filtram o que é gasto conjunto ('Nosso') ou individual de cada um.",
  },
  {
    q: "É seguro? Vocês pedem a senha do meu banco?",
    a: "Totalmente seguro. Nós NUNCA pedimos sua senha bancária. Você pode lançar suas despesas em segundos pelo celular ou importar o extrato OFX do seu banco com 1 clique e deduplicação inteligente.",
  },
  {
    q: "Posso usar no celular como aplicativo?",
    a: "Sim! O FinTogether possui tecnologia PWA de última geração: basta abrir no Safari (iPhone) ou Chrome (Android) e tocar em 'Adicionar à Tela de Início' para ter o app completo instalado sem ocupar memória.",
  },
  {
    q: "Tem fidelidade ou multa de cancelamento?",
    a: "Nenhuma. Você pode começar grátis no plano Starter ou testar os planos Pro e Casal & Família com garantia incondicional de 7 dias e cancelar quando quiser com 1 clique.",
  },
];

export default function LandingPage() {
  const [billingCycle, setBillingCycle] = useState<"MONTHLY" | "YEARLY">(
    "YEARLY"
  );
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const APP_DOMAIN =
    import.meta.env.VITE_APP_URL || "https://app.fintogether.com.br";
  const APP_LOGIN_URL = `${APP_DOMAIN}/login`;
  const APP_REGISTER_URL = `${APP_DOMAIN}/register`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* --- HEADER --- */}
      <header className="fixed top-0 inset-x-0 h-16 bg-white/80 backdrop-blur-lg border-b border-slate-200/70 z-50">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-extrabold text-xl tracking-tight text-slate-900">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 h-9 w-9 rounded-xl text-white flex items-center justify-center text-sm font-extrabold shadow-sm">
              FT
            </div>
            <span>FinTogether</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="#comparativo"
              className="hover:text-indigo-600 transition-colors"
            >
              Por que FinTogether
            </a>
            <a
              href="#features"
              className="hover:text-indigo-600 transition-colors"
            >
              Recursos
            </a>
            <a
              href="#pricing"
              className="hover:text-indigo-600 transition-colors"
            >
              Planos & Preços
            </a>
            <a href="#faq" className="hover:text-indigo-600 transition-colors">
              Dúvidas
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="font-semibold text-slate-700"
              onClick={() => (window.location.href = APP_LOGIN_URL)}
            >
              Entrar
            </Button>
            <Button
              size="sm"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-sm"
              onClick={() => (window.location.href = APP_REGISTER_URL)}
            >
              Criar Conta Grátis
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-4">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-3xl opacity-25 w-[850px] h-[520px] bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full" />
          </div>

          <div className="container mx-auto grid lg:grid-cols-12 gap-12 items-center">
            {/* Coluna Esquerda: Copywriting & CTAs */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold shadow-xs">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span>Gestão financeira inteligente para casais</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
                Finanças a dois,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  sem brigas por planilhas.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Divisão justa para as despesas da casa e privacidade para o dinheiro de cada um. Tudo sincronizado no celular em tempo real.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-bold rounded-xl shadow-lg shadow-indigo-600/25 transition-all"
                  onClick={() => (window.location.href = APP_REGISTER_URL)}
                >
                  Começar Grátis Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-7 text-base font-semibold rounded-xl border-slate-300 bg-white hover:bg-slate-100 text-slate-700 shadow-sm flex items-center justify-center gap-2"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <Play className="h-4 w-4 fill-indigo-600 text-indigo-600" />
                  Assistir Vídeo (18s)
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 pt-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Plano Starter Grátis
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Não pede senha bancária
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  1 plano = até 5 membros
                </span>
              </div>
            </div>

            {/* Coluna Direita: Mockup Realista e Focado do Produto */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-2xl rounded-3xl" />

              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xl text-white space-y-4">
                {/* Barra de Topo do Workspace */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs shadow-inner">
                      FT
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold flex items-center gap-1.5">
                        Família Fernandes
                        <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-2 py-0.5 rounded font-semibold border border-indigo-500/30">
                          CASAL
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        2 membros • Sincronizado agora
                      </div>
                    </div>
                  </div>

                  {/* Seletor Nosso / Meus / Parceiro - O verdadeiro diferencial */}
                  <div className="bg-slate-800/90 rounded-lg p-1 flex gap-1 text-xs font-semibold border border-slate-700/60">
                    <span className="bg-indigo-600 text-white px-2.5 py-1 rounded shadow-xs">
                      Nosso
                    </span>
                    <span className="text-slate-400 px-2.5 py-1">Meus</span>
                    <span className="text-slate-400 px-2.5 py-1">Parceira</span>
                  </div>
                </div>

                {/* Meta Compartilhada do Casal */}
                <div className="bg-gradient-to-r from-indigo-900/50 to-blue-900/30 border border-indigo-500/30 rounded-xl p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold flex items-center gap-2">
                      <Target className="h-4 w-4 text-indigo-400" />
                      Meta do Casal: Viagem Europa 2027 ✈️
                    </span>
                    <span className="font-bold text-indigo-300 text-xs">76%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-800/80 rounded-full overflow-hidden">
                    <div className="h-full w-[76%] bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-300">
                    <span>Acumulado: <strong>R$ 22.800,00</strong></span>
                    <span>Alvo: <strong>R$ 30.000,00</strong></span>
                  </div>
                </div>

                {/* Divisão com Autoria: Quem gastou o quê */}
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Gastos Compartilhados da Casa</span>
                    <span className="text-[10px] text-indigo-400 font-normal">Tempo Real</span>
                  </div>

                  <div className="bg-slate-800/70 border border-slate-700/50 rounded-xl p-3 flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-[11px]">
                        G
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          Supermercado São Luiz
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Alimentação • Lançado por <span className="text-indigo-300 font-medium">Glauber</span>
                        </div>
                      </div>
                    </div>
                    <span className="font-bold text-rose-400 text-sm">
                      - R$ 420,00
                    </span>
                  </div>

                  <div className="bg-slate-800/70 border border-slate-700/50 rounded-xl p-3 flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center font-bold text-[11px]">
                        P
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          Jantar a Dois
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Lazer • Lançado por <span className="text-pink-300 font-medium">Parceira</span>
                        </div>
                      </div>
                    </div>
                    <span className="font-bold text-rose-400 text-sm">
                      - R$ 180,00
                    </span>
                  </div>
                </div>

                {/* Footer do Card com benefício direto e trigger do vídeo */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 hover:text-white border border-indigo-500/40 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <Play className="h-3 w-3 fill-current" />
                    Assistir Demonstração (18s)
                  </button>
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Divisão justa & automática
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- COMPARATIVO: O JEITO ANTIGO VS FINTOGETHER --- */}
        <section id="comparativo" className="py-20 bg-white border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Por que planilhas falham na vida a dois?
              </h2>
              <p className="text-slate-600">
                Veja a diferença entre tentar anotar gastos no WhatsApp/Excel e
                ter um sistema pensado para a rotina real do casal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Jeito Antigo */}
              <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-rose-700 font-bold text-sm bg-rose-100 px-3 py-1 rounded-full">
                  <XCircle className="h-4 w-4" /> O Jeito Antigo (Planilhas &
                  Notas)
                </div>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>
                      Planilhas impossíveis de preencher pelo celular na fila do
                      mercado.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>
                      Apenas uma pessoa alimenta os dados e acaba ficando
                      sobrecarregada.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>
                      Susto todo mês quando a fatura do cartão de crédito fecha
                      acima do esperado.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>
                      Mistura confusa entre gastos individuais e despesas da
                      casa.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Com FinTogether */}
              <div className="rounded-2xl border-2 border-indigo-600 bg-indigo-50/30 p-7 space-y-4 shadow-md">
                <div className="inline-flex items-center gap-2 text-indigo-700 font-bold text-sm bg-indigo-100 px-3 py-1 rounded-full">
                  <CheckCircle2 className="h-4 w-4" /> Com o FinTogether
                </div>
                <ul className="space-y-3 text-sm text-slate-800">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Logins independentes:</strong> cada um lança pelo
                      próprio celular em 5 segundos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Visão &ldquo;Meu, Seu e Nosso&rdquo;:</strong>{" "}
                      saiba exatamente o que é de cada um e o que é do casal.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Faturas e Parcelamentos sob controle:</strong>{" "}
                      veja o impacto das parcelas nos próximos meses antes de
                      comprar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Investimentos + OFX:</strong> importe extratos
                      bancários e acompanhe Ações, FIIs e Cripto automaticamente.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURES BENTO GRID --- */}
        <section id="features" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Tudo o que vocês precisam para crescer juntos
              </h2>
              <p className="text-lg text-slate-600">
                Do controle do cafézinho até a carteira de ações e metas de
                longo prazo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-3">
                <div className="h-11 w-11 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Users2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">
                  Workspaces Compartilhados
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tenha um espaço pessoal só seu e outro compartilhado com seu
                  parceiro(a) ou família, com controle de permissões (Admin,
                  Editor ou Visualizador).
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-3">
                <div className="h-11 w-11 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">
                  Gestão Real de Cartões e Parcelas
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Fechamento automático por dia de corte, controle de limite
                  comprometido, acompanhamento de parcelas (`3/10 pagas`) e
                  pagamento de fatura em 1 clique.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-3">
                <div className="h-11 w-11 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">
                  Investimentos B3, FIIs & Cripto
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Cálculo automático de preço médio e atualização de cotações da
                  B3, Criptomoedas e Câmbio integradas ao seu patrimônio.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-3">
                <div className="h-11 w-11 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <FileSpreadsheet className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">
                  Conciliação OFX + Exportação PDF/Excel
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Importe o arquivo OFX do seu banco sem lançamentos duplicados
                  e exporte relatórios completos em PDF ou Excel quando quiser.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-3">
                <div className="h-11 w-11 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">
                  Orçamentos Mensais & Metas
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Defina tetos de gastos por categoria (ex: iFood, Lazer) e
                  acompanhe reservas para viagem, casamento ou imóvel próprio.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-3">
                <div className="h-11 w-11 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">
                  App PWA + Alertas por E-mail
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Instale na tela inicial do seu celular e receba lembretes
                  automáticos no dia do vencimento das suas contas pendentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRICING SECTION --- */}
        <section id="pricing" className="py-24 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Planos transparentes que cabem no bolso
              </h2>
              <p className="text-slate-600 text-lg">
                Menos de R$ 0,50 por dia para cada pessoa do casal ter clareza
                financeira total.
              </p>

              {/* Toggle Mensal / Anual */}
              <div className="pt-2 flex justify-center">
                <div className="bg-slate-100 p-1.5 rounded-full inline-flex items-center gap-1 border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setBillingCycle("MONTHLY")}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                      billingCycle === "MONTHLY"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Mensal
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle("YEARLY")}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                      billingCycle === "YEARLY"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Anual
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      2 MESES GRÁTIS
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-8">
              {/* STARTER */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Starter</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Para começar a organizar suas contas pessoais hoje.
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-slate-900">
                      R$ 0
                    </span>
                    <span className="text-sm text-slate-500">/mês</span>
                    <p className="text-xs text-slate-400 mt-1">
                      Grátis para sempre • Sem cartão
                    </p>
                  </div>

                  <ul className="space-y-3 mt-8 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Até 2 contas bancárias/carteira</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Até 1 cartão de crédito</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Até 3 assinaturas/recorrências</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Até 1 meta financeira ativa</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>1 usuário (uso individual)</span>
                    </li>
                  </ul>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-8 h-12 rounded-xl font-semibold"
                  onClick={() => (window.location.href = APP_REGISTER_URL)}
                >
                  Criar Conta Grátis
                </Button>
              </div>

              {/* PRO INDIVIDUAL */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Crown className="h-5 w-5 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900">
                      Pro Individual
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Para investidores e controle individual sem limites.
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-slate-900">
                      {billingCycle === "YEARLY" ? "R$ 15,83" : "R$ 19,90"}
                    </span>
                    <span className="text-sm text-slate-500">/mês</span>
                    <p className="text-xs text-slate-400 mt-1">
                      {billingCycle === "YEARLY"
                        ? "R$ 190,00 cobrados anualmente"
                        : "Cobrado mensalmente"}
                    </p>
                  </div>

                  <ul className="space-y-3 mt-8 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>
                        <strong>Contas e Cartões ilimitados</strong>
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>
                        <strong>Importação OFX ilimitada</strong>
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>
                        <strong>Carteira de Investimentos</strong> (B3, FIIs,
                        Cripto)
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>Metas e Assinaturas ilimitadas</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>Até 3 Workspaces individuais</span>
                    </li>
                  </ul>
                </div>

                <Button
                  className="w-full mt-8 h-12 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold"
                  onClick={() => (window.location.href = APP_REGISTER_URL)}
                >
                  Testar 7 Dias Grátis
                </Button>
              </div>

              {/* CASAL & FAMÍLIA */}
              <div className="rounded-3xl border-2 border-indigo-600 bg-gradient-to-b from-indigo-50/60 to-white p-8 flex flex-col justify-between relative shadow-xl">
                <div className="absolute -top-3.5 right-6">
                  <span className="bg-indigo-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Mais Escolhido por Casais
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <Users2 className="h-5 w-5 text-indigo-600" />
                    <h3 className="text-xl font-bold text-slate-900">
                      Casal & Família
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    1 assinatura para o casal inteiro organizar a vida a dois.
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-indigo-600">
                      {billingCycle === "YEARLY" ? "R$ 24,16" : "R$ 29,90"}
                    </span>
                    <span className="text-sm text-slate-500">/mês</span>
                    <p className="text-xs text-slate-500 mt-1">
                      {billingCycle === "YEARLY"
                        ? "R$ 290,00 cobrados anualmente"
                        : "Cobrado mensalmente"}
                    </p>
                  </div>

                  <ul className="space-y-3 mt-8 text-sm text-slate-800">
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-indigo-600 shrink-0" />
                      <span>
                        <strong>Tudo do plano Pro Individual incluso</strong>
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-indigo-600 shrink-0" />
                      <span>
                        <strong>Até 5 membros no Workspace</strong> com logins
                        próprios
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-indigo-600 shrink-0" />
                      <span>
                        <strong>Visão &ldquo;Meu, Seu e Nosso&rdquo;</strong> em
                        tempo real
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-indigo-600 shrink-0" />
                      <span>Convites por e-mail e controle de permissões</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-indigo-600 shrink-0" />
                      <span>Workspaces compartilhados e pessoais ilimitados</span>
                    </li>
                  </ul>
                </div>

                <Button
                  className="w-full mt-8 h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md shadow-indigo-600/20"
                  onClick={() => (window.location.href = APP_REGISTER_URL)}
                >
                  Começar no Modo Casal
                </Button>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> Pagamento
                seguro via Stripe
              </span>
              <span>•</span>
              <span>Garantia incondicional de reembolso em 7 dias</span>
              <span>•</span>
              <span>Cancele online com 1 clique</span>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Perguntas Frequentes
              </h2>
              <p className="text-slate-600">
                Tire suas dúvidas antes de criar sua conta gratuita.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- FINAL CTA SECTION --- */}
        <section className="py-24 px-4 bg-slate-900 text-center">
          <div className="container mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              Prontos para alinhar o futuro financeiro de vocês?
            </h2>
            <p className="text-slate-300 text-lg">
              Crie sua conta gratuita em menos de 1 minuto e convide quem
              constrói o futuro ao seu lado.
            </p>
            <Button
              onClick={() => (window.location.href = APP_REGISTER_URL)}
              size="lg"
              className="h-14 px-10 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold rounded-full shadow-lg"
            >
              Criar Minha Conta Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 py-12 text-slate-400 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-white">
            <div className="bg-indigo-600 h-6 w-6 rounded-md text-white flex items-center justify-center text-xs font-extrabold">
              FT
            </div>
            <span>FinTogether</span>
          </div>

          <div className="flex gap-6">
            <a
              href={`${APP_DOMAIN}/terms`}
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Termos de Uso
            </a>
            <a
              href={`${APP_DOMAIN}/privacy`}
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidade
            </a>
          </div>

          <p>
            © {new Date().getFullYear()} FinTogether (G3S Tecnologia). Todos os
            direitos reservados.
          </p>
        </div>
      </footer>

      {/* --- MODAL DE VÍDEO DEMONSTRAÇÃO --- */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="bg-indigo-600 text-white font-extrabold h-7 w-7 rounded-lg flex items-center justify-center text-xs">
                  FT
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    FinTogether em Ação (18s)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Veja como é simples e sem atrito gerenciar finanças a dois
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="h-8 w-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-inner">
              <video
                src="/brag.mp4"
                poster="/brag.jpg"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-xs text-slate-400">
                Pronto para eliminar as planilhas da sua vida a dois?
              </span>
              <Button
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl"
                onClick={() => (window.location.href = APP_REGISTER_URL)}
              >
                Criar Conta Grátis Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
