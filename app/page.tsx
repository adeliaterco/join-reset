"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Clock, CheckCircle, Shield, AlertTriangle, Award, Heart, TrendingUp, Activity } from "lucide-react"
import Image from "next/image"

// ============================================
// 🖼️ CONFIGURAÇÃO DE IMAGENS - JOINT RESET
// ============================================
const IMAGES = {
  // HERO - Imagem principal do artigo
  sandraMillerGrandCanyon: "https://i.ibb.co/x8H0047y/5c4fa786e4bf6b95eae2720de5a6f7-1764217967139.png",

  // Seção: Ex-especialista de Harvard
  harvardOrtopedista: "https://i.ibb.co/PGvKFDM3/7028b3efd3bc7cae736f2bead2d857-1764218051919.jpg",

  // Seção: O peixe-zebra
  peixeZebraRegeneracao: "https://i.ibb.co/v2PrSm9/1cfb8ad7a3e4dae6f664e94f2e533d-1764218053701.jpg",

  // Seção: Citocinas destroem cartilagem
  citocinasAtaqueCartilagem: "https://i.ibb.co/MkQZ8Z1R/94ee6615abe3b5144ee00558e3764e-1764218058684.png",

  // Seção: Estudo Duke University
  dukeUniversityEstudo: "https://i.ibb.co/v4DhG8Jr/75ec9d11fde58bba5436049d0b807a-1764218063334.jpg",

  // Seção: Articulação saudável
  articulacaoSaudavel: "https://i.ibb.co/CpswnrYz/unnamed.png",

  // Seção: Método Joint Reset
  metodoJointReset: "https://i.ibb.co/Jwm1FtHw/unnamed-1.png",

  // Autoridade médica/Harvard
  especialistaHarvard: "https://i.ibb.co/k2XRy3S3/Generatedimage-1764255762791.png",

  // NOVAS IMAGENS
  mobilidadeRecuperada: "https://i.ibb.co/x8H0047y/5c4fa786e4bf6b95eae2720de5a6f7-1764217967139.png",
  consequenciasCitocinas: "https://i.ibb.co/v2PrSm9/1cfb8ad7a3e4dae6f664e94f2e533d-1764218053701.jpg",
  garantiaSatisfacao: "https://i.ibb.co/k2XRy3S3/Generatedimage-1764255762791.png",
  ativarRegeneracao: "https://i.ibb.co/CpswnrYz/unnamed.png",
}

const CHECKOUT_URL = "https://[INSIRA-SEU-LINK-DE-CHECKOUT-AQUI]"

export default function JointReset() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleCTA = () => {
    window.location.href = CHECKOUT_URL
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        
        <div className="mb-4 sm:mb-6">
          <Badge className="bg-blue-600 text-white px-3 sm:px-4 py-1 text-xs font-bold uppercase">
            Saúde • Regeneração Articular
          </Badge>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 break-words" style={{ fontFamily: 'Georgia, serif' }}>
          A Descoberta do Joint Reset: Como Reativar a Capacidade Natural de Regeneração das Articulações aos 50+
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8 break-words" style={{ fontFamily: 'Georgia, serif' }}>
          Um ex-especialista ortopédico de Harvard revela como desativar as citocinas que destroem suas articulações — e reativar o mesmo mecanismo que os peixes-zebra usam para regenerar tecidos
        </p>

        <figure className="mb-6 sm:mb-10 w-full">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-200">
            <Image 
              src={IMAGES.sandraMillerGrandCanyon}
              alt="Sandra Miller no topo do Grand Canyon"
              fill
              className="object-contain sm:object-cover"
              priority
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
          </div>
          <figcaption className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 italic px-2 sm:px-0">
            Sandra Miller, 72 anos, escalando o North Rim do Grand Canyon — um ano após os médicos dizerem que precisaria de cirurgia no joelho.
          </figcaption>
        </figure>

        <div className="text-base sm:text-lg leading-relaxed text-gray-800 mb-6 sm:mb-8 break-words" style={{ fontFamily: 'Georgia, serif' }}>
          <p className="mb-4 sm:mb-6">
            <span className="font-bold text-xl sm:text-2xl float-left mr-2 leading-none">H</span>á não muito tempo, uma mulher de 72 anos chamada Sandra Miller alcançou o topo da North Rim no Grand Canyon e surpreendeu toda a sua família.
          </p>
        </div>

        <div className="article-body text-base sm:text-lg leading-relaxed text-gray-800 space-y-4 sm:space-y-6 break-words" style={{ fontFamily: 'Georgia, serif' }}>
          
          <div className="bg-gray-50 border-l-4 border-blue-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4">
              Lá em cima, ela disse: "Meus joelhos e meus quadris sentem-se hoje mais fortes do que aos trinta."
            </p>
            <p className="mb-3 sm:mb-4">
              A maioria das pessoas simplesmente sorriria, diria "Deus a abençoe" e seguiria adiante.
            </p>
            <p className="font-bold">
              Mas como ex-especialista ortopédico de Harvard e consultor assistente do time Boston Celtics, levei as palavras de Sandra muito a sério — e você também deveria.
            </p>
          </div>

          <p>
            Porque Sandra nem sempre foi ativa.
          </p>

          <p>
            <strong>Um ano antes dessa caminhada, os médicos disseram a ela que provavelmente precisaria de uma cirurgia no joelho.</strong>
          </p>

          <p>
            Até mesmo caminhar pela casa doía. Subir escadas parecia impossível.
          </p>

          <p className="font-bold text-lg sm:text-xl">
            Mas hoje Sandra escala montanhas, caminha diariamente com amigas e brinca sem dor com seus netos.
          </p>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center py-6 sm:py-8 my-6 sm:my-8 border-y-2 border-gray-300 px-4 break-words">
            "Como ela passou de dores articulares para alpinismo sem esforço? E aos 72 anos — como isso é possível?"
          </blockquote>

          <p>
            A resposta é algo que seu corpo já é capaz de fazer, mas que a maioria dos médicos não compreende.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Você já ouviu falar do peixe-zebra?
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.peixeZebraRegeneracao}
                alt="Peixe-zebra regenerando tecidos"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
            <figcaption className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 italic px-2 sm:px-0">
              O peixe-zebra consegue regenerar articulações, cartilagem e até partes da coluna vertebral em poucos dias.
            </figcaption>
          </figure>

          <p>
            Há décadas, cientistas estudam esse animal porque consegue regenerar articulações, cartilagem, tecidos e até partes da coluna vertebral em poucos dias.
          </p>

          <p>
            A maioria das pessoas acredita que os humanos perderam essa capacidade.
          </p>

          <p className="font-bold text-lg sm:text-xl">
            Mas um grande estudo da Duke University de 2019 prova o contrário.
          </p>

          <p>
            <strong>Esse estudo mostrou que os humanos possuem um sistema adormecido de regeneração articular,</strong> muito semelhante ao do peixe-zebra e das salamandras.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="font-bold mb-3 sm:mb-4">
              Seus joelhos podem regenerar cartilagem.
            </p>
            <p className="mb-3 sm:mb-4">
              Sua coluna pode se recuperar.
            </p>
            <p className="font-bold text-blue-700">
              Suas articulações podem ser suportadas novamente.
            </p>
            <p className="text-sm sm:text-base mt-3">
              Mas isso só acontece se algo muito específico ocorrer primeiro.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            O Interruptor que Bloqueia a Regeneração
          </h2>

          <p>
            <strong>Você precisa parar as moléculas microscópicas de inflamação que destroem sua cartilagem.</strong>
          </p>

          <p>
            Essas moléculas são chamadas <strong className="text-red-600">citocinas.</strong>
          </p>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.citocinasAtaqueCartilagem}
                alt="Citocinas atacando cartilagem"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
            <figcaption className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 italic px-2 sm:px-0">
              Citocinas inflamatórias e seu impacto na cartilagem articular.
            </figcaption>
          </figure>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4 font-bold">
              Quando as citocinas permanecem ativas, seu corpo não consegue regenerar nada.
            </p>
            <p>
              Elas bloqueiam a cicatrização, destroem cartilagem, deixam as articulações rígidas, ressecam o líquido sinovial e pressionam os nervos.
            </p>
          </div>

          <p>
            É por isso que:
          </p>

          <ul className="list-none space-y-2 sm:space-y-3 my-4 sm:my-6">
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">Bolsas térmicas ajudam apenas por alguns minutos</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">Analgésicos prejudicam o estômago mas não resolvem o problema</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">Injeções mascaram a dor enquanto o dano continua</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">Cirurgias frequentemente levam à síndrome pós-operatória</span>
            </li>
          </ul>

          <p className="font-bold text-lg sm:text-xl text-red-700">
            Seu corpo não está simplesmente envelhecendo — está sendo atacado de dentro.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            A Descoberta que Mudou Tudo
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.dukeUniversityEstudo}
                alt="Estudo Duke University"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
            <figcaption className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 italic px-2 sm:px-0">
              Duke University 2019: Estudo sobre regeneração articular em humanos.
            </figcaption>
          </figure>

          <p>
            Quando trabalhei com o Boston Celtics, tinha acesso às tecnologias de regeneração mais avançadas do mundo.
          </p>

          <p>
            E ainda assim, notei algo estranho: alguns jogadores cicatrizavam em semanas, enquanto outros levavam meses.
          </p>

          <p className="font-bold text-lg sm:text-xl">
            Os "super-curadores" tinham uma coisa em comum.
          </p>

          <p>
            Nenhum suplemento, nenhum medicamento, nenhuma genética especial — mas valores <strong>extremamente altos</strong> de uma substância natural de lubrificação articular que o corpo produz por si só.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4">
              <strong>Essa substância hidrata as articulações,</strong> aumenta o espaço da cartilagem, reduz a pressão nos nervos, permite movimento suave e ativa a regeneração.
            </p>
            <p className="font-bold mb-3 sm:mb-4">
              Chamo de <span className="text-green-700">"ponto de reset articular".</span>
            </p>
            <p className="text-sm sm:text-base">
              Quando as citocinas estão altas, esse sistema desliga. Quando as citocinas caem, ele aumenta significativamente.
            </p>
          </div>

          <p className="font-bold text-lg sm:text-xl">
            Esse era o pedaço do quebra-cabeça que faltava — <span className="text-blue-700">o interruptor biológico da regeneração.</span>
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Apresentando o Método Joint Reset
          </h2>

          <p>
            Desenvolvi uma <strong>técnica simples, segura e cientificamente comprovada</strong> que reativa esse ponto de reset articular e liga novamente o interruptor natural de regeneração do corpo.
          </p>

          <p>
            Queria algo que qualquer pessoa pudesse fazer em casa, sem pílulas, sem cirurgias, sem injeções, sem medicamentos perigosos, sem fisioterapia cara e sem equipamentos.
          </p>

          <p className="font-bold text-lg sm:text-xl">
            O resultado é o <span className="text-blue-700">Método Joint Reset</span> — um protocolo de regeneração articular cientificamente validado que você pode executar completamente em casa.
          </p>

          <p>
            Tudo explicado em um simples eBook.
          </p>

          <figure className="my-8 sm:my-10 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <Image 
                src={IMAGES.metodoJointReset}
                alt="Método Joint Reset eBook"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            O Que Você Recebe
          </h2>

          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 my-6 sm:my-8">
            <p className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 break-words">
              No eBook Joint Reset você encontra:
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white rounded-lg p-3 sm:p-4 flex items-start">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base break-words">Uma rotina de <strong>7 minutos</strong> que desativa citocinas</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 sm:p-4 flex items-start">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base break-words">Uma sequência de mobilidade precisa que relubrifica as articulações</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 sm:p-4 flex items-start">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base break-words">Uma técnica neurossomática que relaxa os nervos</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 sm:p-4 flex items-start">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base break-words">Um plano alimentar <strong>anti-citocina</strong> cientificamente comprovado</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 sm:p-4 flex items-start">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base break-words">Um ritual diário para ativar regeneração</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 sm:p-4 flex items-start">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base break-words">Uma técnica de reidratação de cartilagem</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 sm:p-4 flex items-start">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base break-words">Uma sequência de deslizamento vertebral</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 sm:p-4 flex items-start">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base break-words">O mapa completo de reset articular</p>
              </div>
            </div>
          </div>

          <p className="font-bold text-lg sm:text-xl">
            Esse método ativa o mesmo caminho biológico de regeneração descoberto no estudo de Duke — o mesmo caminho que os peixes-zebra usam para regenerar tecidos.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Imagine Acordar Amanhã...
          </h2>

          <div className="bg-green-50 rounded-lg p-6 sm:p-8 my-6 sm:my-8">
            <p className="text-lg sm:text-xl mb-4 sm:mb-6 break-words">
              ...com joelhos macios e hidratados, uma coluna vertebral flexível, ombros sem rigidez, mãos fortes e sem dor, sem pressão nos nervos, sem rigidez matinal.
            </p>
            <p className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">
              Imagine poder:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base break-words">Caminhar novamente sem dor</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base break-words">Jogar golfe ou praticar seus esportes favoritos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base break-words">Fazer jardinagem e viajar</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base break-words">Simplesmente caminhar sem dor</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            O Que Pessoas Reais Estão Dizendo
          </h2>

          <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Brad do Colorado</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "Após algumas semanas, meus joelhos se movem melhor do que nos últimos 20 anos."
            </p>
            <p className="text-gray-700 text-sm sm:text-base break-words italic">
              Tentei de tudo: cálcio, glucosamina, cremes. Mas nada funcionou até que comecei o Joint Reset. A diferença é noturna.
            </p>
          </div>

          <div className="border-l-4 border-green-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Sandy do Michigan</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "Minhas dores nas costas controlavam minha vida. A rotina de hidratação mudou tudo."
            </p>
            <p className="text-gray-700 text-sm sm:text-base break-words italic">
              Não aguento mais os analgésicos. O Joint Reset é a primeira coisa que realmente funcionou.
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Duane da Flórida</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "Minhas dores no pescoço desapareceram após a sequência de relaxamento."
            </p>
            <p className="text-gray-700 text-sm sm:text-base break-words italic">
              Parecia impossível que algo tão simples pudesse funcionar. Mas funciona.
            </p>
          </div>

          <div className="border-l-4 border-pink-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Mary de Utah</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "Meus dedos estavam rígidos. Agora consigo tocar piano novamente."
            </p>
            <p className="text-gray-700 text-sm sm:text-base break-words italic">
              Pensei que tinha perdido essa parte de mim. É incrível recuperar.
            </p>
          </div>

          <div className="border-l-4 border-orange-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Olivia do Oregon</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "Minhas articulações do quadril pareciam osso com osso. Hoje corro novamente."
            </p>
            <p className="text-gray-700 text-sm sm:text-base break-words italic">
              Os médicos disseram que nunca mais correria. A medicina dos médicos não é tudo.
            </p>
          </div>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.mobilidadeRecuperada}
                alt="Mobilidade recuperada"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
            <figcaption className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 italic px-2 sm:px-0">
              Pessoas recuperando mobilidade e qualidade de vida com o Joint Reset.
            </figcaption>
          </figure>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            O Que a Comunidade Médica Tem a Dizer
          </h2>

          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden relative">
                <Image 
                  src={IMAGES.especialistaHarvard}
                  alt="Especialista Harvard"
                  fill
                  className="object-contain sm:object-cover"
                  unoptimized
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4 italic break-words">
                  "Analisei inúmeros protocolos para regeneração articular e o <strong>Joint Reset é único.</strong> Se você sofre de dor articular ou mobilidade reduzida, recomendo este método."
                </p>
                <p className="font-bold text-blue-900 flex items-center justify-center sm:justify-start text-sm sm:text-base">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Dr. Jonathan Pierce, MD, PhD<br className="sm:hidden" />
                  <span className="hidden sm:inline"> - Especialista Ortopédico</span>
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            O Que Acontece Se Você Não Fizer Nada?
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.consequenciasCitocinas}
                alt="Consequências das citocinas"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
            <figcaption className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 italic px-2 sm:px-0">
              Progressão da deterioração articular sem tratamento.
            </figcaption>
          </figure>

          <p className="text-lg sm:text-xl mb-4 sm:mb-6 break-words">
            O que hoje parece <strong>"apenas uma pequena dor"...</strong> pode se transformar em uma <strong className="text-red-700">deterioração que mudará sua vida para sempre.</strong>
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              As citocinas continuam atacando silenciosamente. Seus ossos ficam mais finos. Suas articulações ficam mais frágeis.
            </p>
            <p className="font-bold text-lg sm:text-xl">
              Até que um dia, uma queda simples muda tudo.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center break-words">
            Mas Não Precisa Ser Assim
          </h2>

          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-center break-words">
            O preço original do Joint Reset é <span className="line-through text-red-600">`€299`</span>.
          </p>

          <div className="bg-green-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10 text-center">
            <p className="text-lg sm:text-xl mb-4 sm:mb-6">
              Mas quando compartilhei minha história com a equipe, eles foram além.
            </p>
            <p className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 break-words">
              Hoje, por tempo limitado, você pode acessar o Joint Reset por apenas:
            </p>
            
            <div className="mb-6 sm:mb-8">
              <div className="text-gray-400 text-lg sm:text-2xl line-through mb-2">`€299`</div>
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-green-600 mb-3 sm:mb-4">`€47`</div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-lg sm:text-2xl font-bold mb-3 sm:mb-4">
                Economia de `€252`!
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Com acesso digital imediato.
              </p>
            </div>

            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 sm:p-6">
              <p className="font-bold text-base sm:text-lg text-blue-900">
                E você recebe 2 bônus gratuitos:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-10">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6 sm:p-8 border border-red-200">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-red-700 break-words">Bônus 1</h3>
              </div>
              <p className="font-bold text-center text-base sm:text-lg mb-3 sm:mb-4 break-words">
                O Eliminador de Inflamação
              </p>
              <p className="text-center text-sm sm:text-base text-gray-700">
                Guia completo para desativar citocinas através da alimentação. Valor: `€47`
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 sm:p-8 border border-blue-200">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-700 break-words">Bônus 2</h3>
              </div>
              <p className="font-bold text-center text-base sm:text-lg mb-3 sm:mb-4 break-words">
                7 Movimentos de Alongamento da Juventude
              </p>
              <p className="text-center text-sm sm:text-base text-gray-700">
                Sequência de exercícios para reativar a mobilidade. Valor: `€37`
              </p>
            </div>
          </div>

          <div className="my-8 sm:my-12 text-center">
            <Button 
              onClick={handleCTA}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base sm:text-lg md:text-xl py-6 sm:py-8 md:py-10 px-6 sm:px-12 md:px-20 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 break-words whitespace-normal leading-tight min-h-[80px] sm:min-h-[100px] flex items-center justify-center"
            >
              <span className="text-center block leading-tight">
                ✅ OBTER ACESSO AGORA POR `€47`<br className="sm:hidden" />
                <span className="hidden sm:inline"> - </span>Inclui 2 Bônus Gratuitos
                <ArrowRight className="ml-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 inline-block align-middle" />
              </span>
            </Button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              🔒 Pagamento 100% Seguro • ⚡ Acesso Imediato • 🛡️ Garantia de 60 Dias
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center break-words">
            Garantia de 60 Dias, Sem Perguntas
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.garantiaSatisfacao}
                alt="Garantia de satisfação"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
            <figcaption className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 italic px-2 sm:px-0">
              Sua satisfação é garantida ou seu dinheiro de volta.
            </figcaption>
          </figure>

          <div className="bg-green-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <Shield className="w-20 h-20 sm:w-32 sm:h-32 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg sm:text-xl mb-3 sm:mb-4 break-words">
                  Experimente o Joint Reset por <strong>60 dias completos.</strong> São dois meses inteiros para sentir a diferença em suas articulações e mobilidade.
                </p>
                <p className="text-lg sm:text-xl mb-4 sm:mb-6 break-words">
                  Se você não ficar totalmente satisfeito, você receberá <strong className="text-green-700">100% do seu dinheiro de volta.</strong>
                </p>
                
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="text-green-600 text-2xl sm:text-3xl font-bold mb-1">✓</div>
                    <p className="text-xs sm:text-sm break-words">Sem complicações</p>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 text-2xl sm:text-3xl font-bold mb-1">✓</div>
                    <p className="text-xs sm:text-sm break-words">Sem letras miúdas</p>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 text-2xl sm:text-3xl font-bold mb-1">✓</div>
                    <p className="text-xs sm:text-sm break-words">Sem pegadinha</p>
                  </div>
                </div>

                <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6 text-center">
                  <p className="font-bold text-base sm:text-lg break-words">Por que eles fariam isso?</p>
                  <p className="text-xl sm:text-2xl font-bold text-yellow-800 mt-2 break-words">Porque sabem que funciona.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <div className="text-center mb-4 sm:mb-6">
              <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-3 sm:mb-4 break-words">
                ⚠️ ATENÇÃO: Esta Oferta Pode Acabar!
              </h3>
            </div>

            <p className="text-lg sm:text-xl text-center mb-6 sm:mb-8 break-words">
              O Joint Reset já ficou indisponível diversas vezes devido à enorme procura.
            </p>

            <figure className="my-6 sm:my-8 w-full">
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] rounded-lg overflow-hidden bg-gray-200">
                <Image 
                  src={IMAGES.ativarRegeneracao}
                  alt="Ativar regeneração agora"
                  fill
                  className="object-contain sm:object-cover"
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                />
              </div>
            </figure>

            <p className="text-lg sm:text-xl text-center mb-6 sm:mb-8 break-words">
              Se você está interessado em recuperar sua mobilidade e independência, <strong className="text-red-700">agora é a hora de agir.</strong>
            </p>

            <div className="text-center">
              <Button 
                onClick={handleCTA}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-base sm:text-lg md:text-xl py-6 sm:py-8 md:py-10 px-6 sm:px-12 md:px-20 rounded-full shadow-2xl animate-pulse break-words whitespace-normal leading-tight min-h-[80px] sm:min-h-[100px] flex items-center justify-center"
              >
                <span className="text-center block leading-tight">
                  🚨 GARANTIR MEU ACESSO AGORA
                </span>
              </Button>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center break-words">
            Você Tem Duas Opções
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-10">
            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 sm:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white text-2xl sm:text-3xl font-bold">✗</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-700 break-words">Opção 1: Não Fazer Nada</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">As citocinas continuarão atacando</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Suas articulações ficarão mais frágeis</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Seu mundo continuará encolhendo</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Até você lamentar não ter agido</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 sm:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-700 break-words">Opção 2: Experimentar o Joint Reset</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Movimento sem medo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Articulações suaves e flexíveis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Recuperar a liberdade de movimento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Se não funcionar? Dinheiro de volta. Sem riscos.</span>
                </li>
              </ul>
              <div className="bg-green-100 border border-green-400 rounded-lg p-2 sm:p-3 text-center">
                <p className="font-bold text-green-800 text-sm sm:text-base">✅ 100% SEM RISCOS</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            <AccordionItem value="item-1" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Funciona se minha cartilagem está desgastada?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                Sim, a cartilagem se regenera quando as citocinas são desativadas. Estudos mostram que a reparação cartilaginosa é possível em qualquer idade quando o ambiente inflamatório é reduzido.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Ajuda em lesões antigas?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                Sim, o método alivia nervos e melhora a mobilidade mesmo em lesões antigas. A chave é reativar o sistema natural de reparação do corpo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Ajuda em hérnias de disco?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                Sim, a sequência vertebral hidrata os discos e reduz pressão. Muitos usuários relatam alívio significativo de dor nas costas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                É seguro?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                Sim, é natural, suave e cientificamente comprovado. Não há medicamentos, injeções ou cirurgias. Sempre consulte seu médico se tiver condições específicas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Com que rapidez você sente resultados?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                Alguns sentem alívio em poucos dias; regeneração mais profunda leva 4 a 8 semanas. Resultados variam de pessoa para pessoa.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Como recebo o acesso?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                O acesso é imediato! Após a confirmação do pagamento, você receberá um email com link para baixar o eBook Joint Reset completo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Preciso de suplementos caros?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                Não! O método usa alimentos comuns, técnicas naturais e nenhuma suplementação cara. Tudo pode ser feito com ingredientes que você provavelmente já tem.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="my-8 sm:my-12 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 sm:p-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">
              Sua Vida Pode Mudar Começando Hoje
            </h3>
            
            <div className="mb-6 sm:mb-8">
              <div className="text-gray-400 text-lg sm:text-2xl line-through mb-2">`€299`</div>
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-green-600 mb-3 sm:mb-4">`€47`</div>
              <p className="text-xl sm:text-2xl font-bold text-yellow-700 mb-4 sm:mb-6">
                🔥 Economia de `€252` Hoje!
              </p>
            </div>

            <Button 
              onClick={handleCTA}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base sm:text-lg md:text-xl py-6 sm:py-8 md:py-10 px-6 sm:px-12 md:px-20 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 break-words whitespace-normal leading-tight min-h-[80px] sm:min-h-[100px] flex items-center justify-center"
            >
              <span className="text-center block leading-tight">
                ✅ OBTER O JOINT RESET AGORA<br className="sm:hidden" />
                <span className="hidden sm:inline"> - </span>`€47` + 2 Bônus Grátis
                <ArrowRight className="ml-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 inline-block align-middle" />
              </span>
            </Button>

            <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base">
              🔒 Pagamento Seguro • ⚡ Acesso Imediato • 🛡️ Garantia Incondicional de 60 Dias
            </p>
          </div>

        </div>
      </article>

      <footer className="bg-gray-100 border-t-2 border-gray-300 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <p className="text-yellow-800 font-bold text-center mb-2 text-sm sm:text-base">
              ⚠️ IMPORTANTE - AVISO LEGAL
            </p>
            <p className="text-gray-700 text-xs sm:text-sm text-center leading-relaxed break-words">
              <strong>ESTE É UM ANÚNCIO E NÃO UM ARTIGO DE NOTÍCIAS.</strong> As informações são apenas para fins educativos. Consulte sempre seu médico antes de iniciar qualquer novo protocolo de saúde.
            </p>
          </div>

          <div className="text-center text-gray-600 text-xs leading-relaxed space-y-3 sm:space-y-4 break-words">
            <p>
              © 2024 Método Joint Reset. Todos os direitos reservados.
            </p>
            <p>
              Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Os resultados podem variar de pessoa para pessoa.
            </p>
            <p>
              Este site não faz parte do site Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca registada da FACEBOOK, Inc.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .article-body {
          font-family: Georgia, 'Times New Roman', serif;
        }
        
        .article-body p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        
        .article-body h2,
        .article-body h3 {
          font-family: Georgia, serif;
          line-height: 1.2;
        }
        
        @media (min-width: 640px) {
          .article-body p:first-of-type::first-letter {
            font-size: 3.5rem;
            float: left;
            line-height: 0.9;
            margin-right: 0.5rem;
            font-weight: bold;
          }
        }
        
        .article-body a {
          color: #2563eb;
          text-decoration: underline;
        }
        
        .article-body a:hover {
          color: #1d4ed8;
        }
        
        .article-body blockquote {
          font-style: italic;
          position: relative;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .8;
          }
        }

        @media (max-width: 640px) {
          .object-contain {
            object-fit: contain !important;
          }
        }

        .break-words {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

    </main>
  )
}