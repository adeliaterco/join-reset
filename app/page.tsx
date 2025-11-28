"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Clock, CheckCircle, Shield, AlertTriangle, Award, Heart, TrendingUp, Activity, Zap } from "lucide-react"
import Image from "next/image"

const IMAGES = {
  mulherAtiva50Anos: "https://i.ibb.co/x8H0047y/5c4fa786e4bf6b95eae2720de5a6f7-1764217967139.png",
  elonMuskFoto: "https://i.ibb.co/PGvKFDM3/7028b3efd3bc7cae736f2bead2d857-1764218051919.jpg",
  ataqueCelulasZumbisDentro: "https://i.ibb.co/v2PrSm9/1cfb8ad7a3e4dae6f664e94f2e533d-1764218053701.jpg",
  celulasSenescentes: "https://i.ibb.co/MkQZ8Z1R/94ee6615abe3b5144ee00558e3764e-1764218058684.png",
  pesquisaNasaDensidadeOssea: "https://i.ibb.co/v4DhG8Jr/75ec9d11fde58bba5436049d0b807a-1764218063334.jpg",
  raioXOssoSaudavel: "https://i.ibb.co/CpswnrYz/unnamed.png",
  protocoloAntiCelulasZumbis: "https://i.ibb.co/Jwm1FtHw/unnamed-1.png",
  draMarina: "https://i.ibb.co/k2XRy3S3/Generatedimage-1764255762791.png",
  esperancaRenovada: "https://i.ibb.co/MDj3zdcb/CAPA-EBOOK-ALEMAO-01.png",
  consequenciasInacao: "https://i.ibb.co/fGTMZNwn/Generatedimage-1764342260674.png",
  garantiaSeguranca: "https://i.ibb.co/DfcqvmR6/Generatedimage-1764343869418.png",
  agiAgora: "https://i.ibb.co/cKq4vW8M/limitado-ofer.png",
}

const CHECKOUT_URL = "https://pay.hotmart.com/P103120932I?off=r5yaffdw"

const CRONOLOGIA = [
  {
    semana: "Semana 1-2",
    fase: "FASE DE BLOQUEIO",
    tecnicas: "Técnicas 1, 3, 4 ativadas",
    biologico: "Citocinas destrutivas reduzem em 40-60%",
    sensacao: "Menos rigidez, melhor sono, menos dor",
    status: "CÉLULAS ZUMBIS ATACADAS",
    cor: "bg-red-100",
    corBorda: "border-red-400",
  },
  {
    semana: "Semana 3-4",
    fase: "FASE DE LIMPEZA",
    tecnicas: "Técnicas 2, 5, 6 adicionadas",
    biologico: "Células zumbis sendo eliminadas sistemicamente",
    sensacao: "Movimento mais fluido, menos inflamação",
    status: "CÉLULAS ZUMBIS ELIMINADAS",
    cor: "bg-yellow-100",
    corBorda: "border-yellow-400",
  },
  {
    semana: "Semana 5-8",
    fase: "FASE DE REGENERAÇÃO",
    tecnicas: "Técnicas 7, 8 completas",
    biologico: "Corpo foca 100% em CONSTRUIR osso novo",
    sensacao: "Força, confiança, independência",
    status: "CÉLULAS ZUMBIS ERRADICADAS",
    cor: "bg-green-100",
    corBorda: "border-green-400",
  },
]

export default function ProtocoloAntiCelulasZumbis() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 })
  const [vagas, setVagas] = useState(47)

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
          <Badge className="bg-red-600 text-white px-3 sm:px-4 py-1 text-xs font-bold uppercase">
            Saúde • Investigação Científica
          </Badge>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6 break-words" style={{ fontFamily: 'Georgia, serif' }}>
          A Descoberta da NASA Que Regenera Ossos em 7 Minutos
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8 break-words" style={{ fontFamily: 'Georgia, serif' }}>
          Como Elon Musk resolveu o problema dos astronautas — agora adaptado para você
        </p>

        <figure className="mb-6 sm:mb-10 w-full">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-200">
            <Image 
              src={IMAGES.mulherAtiva50Anos}
              alt="Mulher ativa com mais de 50 anos recuperando mobilidade"
              fill
              className="object-contain sm:object-cover"
              priority
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
          </div>
        </figure>

        <div className="text-base sm:text-lg leading-relaxed text-gray-800 mb-6 sm:mb-8 break-words" style={{ fontFamily: 'Georgia, serif' }}>
          <p className="mb-4 sm:mb-6">
            <span className="font-bold text-xl sm:text-2xl float-left mr-2 leading-none">O</span>s primeiros sinais de deterioração óssea e articular são fáceis de passar despercebidos. Com muita frequência, os médicos ignoram os sinais de alerta, com consequências devastadoras; <strong>todos os meses, cerca de 1.100 pessoas morrem após fraturarem o quadril devido à baixa densidade óssea.</strong>
          </p>
        </div>

        <div className="article-body text-base sm:text-lg leading-relaxed text-gray-800 space-y-4 sm:space-y-6 break-words" style={{ fontFamily: 'Georgia, serif' }}>
          
          <div className="bg-gray-50 border-l-4 border-red-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4">
              Na verdade, assisti horrorizada enquanto minha mãe morria lentamente de osteoporose.
            </p>
            <p className="mb-3 sm:mb-4">
              Ver alguém que você ama morrer lentamente, em agonia, sem saber nada sobre a doença que o matou, é de partir o coração.
            </p>
            <p className="mb-3 sm:mb-4">
              <strong>A pior parte?</strong> Três médicos diferentes nos disseram que era apenas "envelhecimento normal". Que mulheres da idade dela deveriam esperar "diminuir o ritmo".
            </p>
            <p className="font-bold">
              Mas não foi o envelhecimento normal que levou minha mãe...
            </p>
          </div>

          <p>
            Porque uma nova pesquisa inovadora sugere que essa crença pode estar <strong>perigosamente errada.</strong>
          </p>

          <p>
            Na verdade, estudos clínicos mostram agora que milhões de mulheres com mais de 50 anos estão sofrendo perda óssea e de cartilagem acelerada, não simplesmente por causa do envelhecimento, mas devido a uma <strong>invasão celular oculta</strong> que silenciosamente sabota seus ossos e articulações por dentro.
          </p>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center py-6 sm:py-8 my-6 sm:my-8 border-y-2 border-gray-300 px-4 break-words">
            "Então, por que algumas mulheres permanecem fortes, ativas e sem dor até os 70 anos, enquanto outras começam a se deteriorar aos 50 — mesmo seguindo as recomendações médicas?"
          </blockquote>

          <p>
            Essa pergunta me levou a uma busca incessante por respostas que iam além de comprimidos de cálcio sem graça, anti-inflamatórios ou suplementos caros que nunca funcionavam.
          </p>

          <p>
            <strong>Foi então que descobri o trabalho de Elon Musk e sua equipe científica,</strong> que investigavam um problema que a NASA enfrentava: os astronautas perdiam rapidamente densidade óssea no espaço.
          </p>

          <p className="font-bold text-lg sm:text-xl">
            E o que essa investigação revelou... mudou tudo.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            A Descoberta de Elon Musk Sobre a NASA — E a Verdade Alarmante Sobre a Perda Óssea
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.elonMuskFoto}
                alt="Elon Musk investigação NASA células zumbis"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <p>
            <strong>Elon Musk não estava apenas lançando foguetes</strong> — ele investigava um problema perturbador que a NASA enfrentava: os astronautas perdem rapidamente densidade óssea e força articular no espaço.
          </p>

          <p>
            Durante essa investigação, ele e sua equipe fizeram uma conexão surpreendente que revelou uma crise silenciosa:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="font-bold mb-3 sm:mb-4">
              O mesmo mecanismo biológico que destrói os ossos dos astronautas no espaço está silenciosamente atacando as mulheres à medida que envelhecem na Terra.
            </p>
            <p>
              E a causa? Um grupo perturbador de células disfuncionais conhecidas como <strong className="text-red-600">"células zumbis".</strong>
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            O que são "células zumbis" — e por que estão destruindo seus ossos
          </h2>

          <p>
            <strong>As "células zumbis" são células senescentes que se recusam a morrer,</strong> mas, em vez disso, permanecem no corpo, inundando os tecidos circundantes com substâncias químicas inflamatórias que corroem a estrutura óssea, destroem a cartilagem e aceleram a dor e a rigidez nas articulações.
          </p>

          <p>
            Durante anos, essas células anômalas foram consideradas inofensivas. Mas a investigação de Elon Musk e sua equipe descobriu algo muito mais perturbador:
          </p>

          <blockquote className="text-lg sm:text-xl md:text-2xl font-bold text-red-700 italic text-center py-4 sm:py-6 my-6 sm:my-8 bg-red-50 rounded-lg px-4 sm:px-6 break-words">
            "As células zumbis não apenas envelhecem seu corpo... elas sabotam ativamente seus ossos e articulações — muitas vezes décadas antes do aparecimento dos sintomas."
          </blockquote>

          <p>
            Desde 2020, o acúmulo de células zumbis tornou-se uma epidemia invisível em mulheres idosas, roubando silenciosamente sua força, mobilidade e independência dia após dia.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            "Seus ossos não estão apenas fracos — eles estão sendo atacados de dentro para fora"
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.ataqueCelulasZumbisDentro}
                alt="Ataque de células zumbis na estrutura óssea"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <p>
            No interior do seu corpo, milhões de células estão se tornando rebeldes — transformando-se no que os cientistas agora chamam de "células zumbis".
          </p>

          <p>
            Essas células disfuncionais <strong>se recusam a morrer... mas também não se curam.</strong>
          </p>

          <p>
            Em vez disso, elas liberam substâncias químicas inflamatórias tóxicas que corroem seus ossos e cartilagens de dentro para fora.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4">
              <strong>Quando você é jovem,</strong> seu corpo consegue eliminar essas células anômalas antes que elas causem muitos danos.
            </p>
            <p className="font-bold text-red-700">
              Mas depois dos 50, esse sistema de defesa começa a falhar.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4 break-words">
            E o que acontece a seguir é aterrador:
          </h3>

          <ul className="list-none space-y-2 sm:space-y-3 my-4 sm:my-6">
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">A densidade óssea diminui em até <strong>2% ao ano</strong></span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">A cartilagem articular torna-se mais fina, mais rígida e mais inflamada</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">Sua estrutura óssea torna-se frágil, quebradiça e vulnerável até mesmo a movimentos leves</span>
            </li>
          </ul>

          <p className="font-bold text-lg sm:text-xl text-red-700">
            Você pode não sentir nada até que já seja tarde demais.
          </p>

          <p>
            Isso não é apenas rigidez. <strong>É deterioração estrutural.</strong>
          </p>

          <p className="font-bold text-lg sm:text-xl">
            Seu esqueleto está se desfazendo — pedaço por pedaço.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Se você está apresentando esses sintomas, seus ossos e articulações podem já estar comprometidos
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.celulasSenescentes}
                alt="Sinais de células senescentes ativas"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <div className="bg-red-50 rounded-lg p-6 sm:p-8 my-6 sm:my-8">
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              Se você está enfrentando algum dos seguintes problemas, pode ser um sinal de que <strong>células zumbis já estão destruindo seus ossos e articulações de dentro para fora:</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">1</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Rigidez ou dor profunda</p>
                  <p className="text-xs sm:text-sm text-gray-600">Persistente nos quadris, joelhos ou região lombar</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">2</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Sons de rangido ou estalo</p>
                  <p className="text-xs sm:text-sm text-gray-600">Crepitação nas articulações ao se mover</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">3</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Dificuldade em levantar-se</p>
                  <p className="text-xs sm:text-sm text-gray-600">De uma cadeira sem usar os braços</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">4</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Medo de cair</p>
                  <p className="text-xs sm:text-sm text-gray-600">Especialmente em escadas ou terrenos irregulares</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">5</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Diminuição da altura</p>
                  <p className="text-xs sm:text-sm text-gray-600">Ou postura visivelmente curvada</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold text-xs sm:text-sm">6</div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Fraqueza muscular</p>
                  <p className="text-xs sm:text-sm text-gray-600">Ao carregar compras, subir escadas ou caminhar</p>
                </div>
              </div>
            </div>

            <p className="mt-4 sm:mt-6 font-bold text-sm sm:text-base">
              E eventualmente… você começa a dizer não às coisas que davam sentido à vida:
            </p>
            <p className="text-gray-600 text-sm sm:text-base break-words">
              Jardinagem • Viajar • Brincando com os netos • Até mesmo ir à igreja ou visitar amigos.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Por que os tratamentos "padrão" não apenas falham, como também pioram a situação
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.pesquisaNasaDensidadeOssea}
                alt="Pesquisa NASA sobre densidade óssea"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <div className="space-y-4 sm:space-y-6 my-6 sm:my-8">
            <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">Suplementos de cálcio?</h3>
              <p className="text-sm sm:text-base">Você absorve muito pouco disso. O que você absorve pode acabar <strong>endurecendo suas artérias mais do que seus ossos.</strong></p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">Bifosfonatos como Fosamax ou Boniva?</h3>
              <p className="mb-3 text-sm sm:text-base">Esses medicamentos podem retardar temporariamente a perda óssea, mas <strong>a que custo?</strong></p>
              <div className="bg-gray-100 rounded p-3 sm:p-4">
                <p className="font-bold text-xs sm:text-sm mb-2">Efeitos colaterais incluem:</p>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li>• Necrose óssea na mandíbula</li>
                  <li>• Úlceras</li>
                  <li>• Câncer de esôfago</li>
                  <li>• Alto risco de fraturas espontâneas</li>
                </ul>
              </div>
              <p className="mt-3 font-bold text-red-700 text-sm sm:text-base break-words">
                Medicamentos destinados a prevenir fraturas podem, na verdade, causá-las.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4 sm:pl-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 break-words">Glucosamina e condroitina?</h3>
              <p className="text-sm sm:text-base">Estudo após estudo mostra <strong>pouca ou nenhuma melhoria mensurável</strong> no espaço articular ou na mobilidade.</p>
            </div>
          </div>

          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 text-center py-6 sm:py-8 my-8 sm:my-10 bg-blue-50 rounded-lg px-4 sm:px-6 break-words">
            "Se você ainda não está acamada, seu corpo ainda está implorando por cura."
          </blockquote>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.raioXOssoSaudavel}
                alt="Diferença entre osso saudável e fragilizado"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <p>
            O que você está sentindo agora não é apenas dor.
          </p>

          <p className="font-bold text-lg sm:text-xl">
            É um sinal. Um último aviso.
          </p>

          <p>
            Porque, no interior dos seus ossos e articulações, ainda existem células vivas tentando reconstruir, tentando manter a posição.
          </p>

          <p className="font-bold">
            Mas elas estão sobrecarregadas.
          </p>

          <p className="text-red-700">
            Rodeadas por inflamação. Sufocadas por células zumbis. Privadas dos estímulos necessários para sobreviver.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              <strong>Mas se você ainda sente desconforto</strong> — se seu corpo ainda está reagindo — isso significa que ainda há tempo.
            </p>
            <p className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">
              Esta ainda é uma chance de:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base break-words">Eliminar as células zumbis que desencadeiam inflamação e deterioração</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base break-words">Reativar a capacidade do seu corpo de construir ossos e reparar cartilagens</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base break-words">Sentir-se mais forte, estável e flexível semana após semana</span>
              </li>
            </ul>
          </div>

          {/* ============================================
              NOVA SEÇÃO IMPLEMENTADA CONFORME ESPECIFICAÇÕES
              ============================================ */}
          <section className="protocolo-secao">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
              🦴 O Protocolo Que Regenera Seus Ossos
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">
              Comece Com Apenas 7 Minutos. Adicione o Resto Quando Quiser.
            </h3>

            <p className="text-base sm:text-lg mb-6 sm:mb-8 break-words">
              O <strong>Protocolo Anti-Células Zumbis</strong> possui <strong>8 técnicas científicas</strong> organizadas de forma inteligente:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
              <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-bold text-blue-800 mb-3 break-words">🎯 NÚCLEO ESSENCIAL (7 minutos)</h4>
                <p className="text-sm sm:text-base text-blue-700 break-words">As <strong>3 técnicas principais</strong> que eliminam 70% das células zumbis</p>
              </div>
              
              <div className="bg-green-50 border-2 border-green-600 rounded-lg p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-3 break-words">⚡ POTENCIALIZADORES (+8 minutos)</h4>
                <p className="text-sm sm:text-base text-green-700 break-words">Mais <strong>5 técnicas</strong> que aceleram a regeneração completa</p>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">
              📊 PROGRESSÃO COMPROVADA:
            </h3>

            <div className="overflow-x-auto my-6 sm:my-8">
              <table className="w-full border-collapse border-2 border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-left font-bold text-sm sm:text-base">Semana</th>
                    <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-left font-bold text-sm sm:text-base">Técnicas</th>
                    <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-left font-bold text-sm sm:text-base">Tempo</th>
                    <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-left font-bold text-sm sm:text-base">Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-bold text-sm sm:text-base">1-2</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">3 principais</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">7 min</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">Dor reduzida 30-50%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-bold text-sm sm:text-base">3-4</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">8 completas</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">15 min</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">Movimento fluido</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-bold text-sm sm:text-base">5+</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">8 completas</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">15 min</td>
                    <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">Regeneração total</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr className="border-2 border-gray-300 my-8 sm:my-10" />

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 break-words">
              🔥 AS 3 TÉCNICAS DO NÚCLEO (7 MINUTOS)
            </h2>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">1️⃣ SEQUÊNCIA ANTI-CITOCINAS (3 minutos)</h3>
                <p className="mb-2 text-sm sm:text-base"><strong className="text-red-700">🎯 O PROBLEMA:</strong> Células zumbis liberam toxinas inflamatórias 24/7</p>
                <p className="mb-2 text-sm sm:text-base"><strong className="text-blue-700">💡 A SOLUÇÃO:</strong> Movimentos que forçam eliminação dessas células</p>
                <p className="text-sm sm:text-base"><strong className="text-green-700">✅ RESULTADO:</strong> Menos rigidez, melhor sono, -50% dor</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">2️⃣ MOBILIDADE ARTICULAR REGENERATIVA (2 minutos)</h3>
                <p className="mb-2 text-sm sm:text-base"><strong className="text-red-700">🎯 O PROBLEMA:</strong> Articulações secas por células mortas no fluido</p>
                <p className="mb-2 text-sm sm:text-base"><strong className="text-blue-700">💡 A SOLUÇÃO:</strong> Lubrificação natural através de movimento específico</p>
                <p className="text-sm sm:text-base"><strong className="text-green-700">✅ RESULTADO:</strong> Movimento sem estalos, confiança ao caminhar</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">3️⃣ ATIVAÇÃO ÓSSEA DIRETA (2 minutos)</h3>
                <p className="mb-2 text-sm sm:text-base"><strong className="text-red-700">🎯 O PROBLEMA:</strong> Ossos param de produzir células novas</p>
                <p className="mb-2 text-sm sm:text-base"><strong className="text-blue-700">💡 A SOLUÇÃO:</strong> Estímulos que reativam construção óssea</p>
                <p className="text-sm sm:text-base"><strong className="text-green-700">✅ RESULTADO:</strong> Densidade óssea aumenta semana após semana</p>
              </div>
            </div>

            <hr className="border-2 border-gray-300 my-8 sm:my-10" />

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 break-words">
              ⚡ AS 5 TÉCNICAS COMPLEMENTARES (+8 MINUTOS)
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">4️⃣ RESET ARTICULAR COMPLETO (2 min)</h3>
                <p className="text-sm sm:text-base text-gray-700">Elimina células zumbis presas nas articulações</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">5️⃣ DESLIZAMENTO VERTEBRAL (2 min)</h3>
                <p className="text-sm sm:text-base text-gray-700">Libera compressão e melhora postura</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">6️⃣ COORDENAÇÃO TOTAL (2 min)</h3>
                <p className="text-sm sm:text-base text-gray-700">Reconecta músculos com ossos</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">7️⃣ ATIVAÇÃO DE CÉLULAS-TRONCO (1 min)</h3>
                <p className="text-sm sm:text-base text-gray-700">Acelera produção de células ósseas novas</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">8️⃣ PROTOCOLO ALIMENTAR (1 min)</h3>
                <p className="text-sm sm:text-base text-gray-700">3 alimentos que cortam nutrição das células zumbis</p>
              </div>
            </div>

            <hr className="border-2 border-gray-300 my-8 sm:my-10" />

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 break-words">
              🎯 COMEÇE HOJE: SÓ 7 MINUTOS
            </h2>

            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 sm:p-8 text-center">
              <p className="text-base sm:text-lg mb-3 sm:mb-4 break-words"><strong>Primeira semana:</strong> Apenas técnicas 1, 2, 3 (7 minutos)</p>
              <p className="text-base sm:text-lg mb-3 sm:mb-4 break-words"><strong>Se funcionar:</strong> Adicione as outras 5 (+8 minutos)</p>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 break-words"><strong>Se não funcionar:</strong> Dinheiro de volta, sem perguntas</p>
              
              <blockquote className="bg-white border-l-4 border-green-600 pl-4 sm:pl-6 py-3 sm:py-4 italic text-lg sm:text-xl text-green-800 break-words">
                "A maioria vê resultados NA PRIMEIRA SEMANA com apenas as 3 técnicas principais."
              </blockquote>
            </div>

          </section>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            O protocolo revolucionário que ajuda os ossos a se regenerarem e as articulações a se revitalizarem
          </h2>

          <p>
            Essa descoberta de Elon Musk levou ao desenvolvimento de um <strong>protocolo revolucionário</strong> que aborda a deterioração óssea na sua origem.
          </p>

          <figure className="my-8 sm:my-10 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <Image 
                src={IMAGES.protocoloAntiCelulasZumbis}
                alt="Protocolo de Regeneração Óssea Anti-Células Zumbis"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          {/* ============================================
              ALTERAÇÃO 1: NOVA SEÇÃO SIMPLIFICADA
              ============================================ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Como Seus Ossos Se Regeneram Enquanto Você Dorme
          </h2>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-4 sm:mb-6 break-words">
            As 3 Técnicas Principais Que Eliminam Células Zumbis
          </h3>

          <div className="space-y-4 sm:space-y-6 my-8 sm:my-10">
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 break-words">1️⃣ Rotina Anti-Citocinas de 7 Minutos</h4>
              <p className="mb-2"><strong className="text-red-700">🎯 O PROBLEMA:</strong> Células zumbis liberam toxinas inflamatórias 24/7</p>
              <p className="mb-2"><strong className="text-blue-700">💡 A SOLUÇÃO:</strong> Sequência matinal que força seu corpo a eliminar essas células invasoras</p>
              <p><strong className="text-green-700">✅ RESULTADO:</strong> Semana 1: Menos rigidez, melhor sono, redução de 30-50% da dor</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 break-words">2️⃣ Mobilidade Articular Regenerativa</h4>
              <p className="mb-2"><strong className="text-red-700">🎯 O PROBLEMA:</strong> Articulações secas e rígidas por células zumbis no fluido</p>
              <p className="mb-2"><strong className="text-blue-700">💡 A SOLUÇÃO:</strong> Movimentos específicos que expulsam células mortas e lubrificam articulações</p>
              <p><strong className="text-green-700">✅ RESULTADO:</strong> Semana 2: Movimento fluido, sem estalos, confiança ao caminhar</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 rounded-r-lg p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold mb-3 break-words">3️⃣ Protocolo Alimentar Anti-Inflamatório</h4>
              <p className="mb-2"><strong className="text-red-700">🎯 O PROBLEMA:</strong> Sua alimentação atual alimenta as células zumbis</p>
              <p className="mb-2"><strong className="text-blue-700">💡 A SOLUÇÃO:</strong> 3 alimentos-chave que cortam nutrição das células invasoras</p>
              <p><strong className="text-green-700">✅ RESULTADO:</strong> Semana 3: Mais energia, recuperação muscular, ossos mais fortes</p>
            </div>
          </div>

          <div className="bg-green-100 border-2 border-green-600 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <h4 className="text-lg sm:text-xl font-bold mb-4 break-words">🎁 BÔNUS: Mais 5 Técnicas Avançadas</h4>
            <p className="mb-4 text-sm sm:text-base">Além das 3 principais, você recebe 5 técnicas complementares para regeneração completa:</p>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>• Ativação de células-tronco dormentes</li>
              <li>• Reidratação de cartilagem</li>
              <li>• Deslizamento vertebral</li>
              <li>• Reset articular completo</li>
              <li>• Mapa de coordenação total</li>
            </ul>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Da Dor Crônica à Mobilidade Total em 30 Dias
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-8 sm:my-10">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-4 sm:p-6 text-center">
              <h4 className="text-lg sm:text-xl font-bold text-red-800 mb-3">🔴 SEMANA 1-2: BLOQUEIO</h4>
              <p className="text-sm sm:text-base">Células zumbis atacadas • Inflamação reduzida • Dor diminuída</p>
            </div>
            
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 sm:p-6 text-center">
              <h4 className="text-lg sm:text-xl font-bold text-yellow-800 mb-3">🟡 SEMANA 3-4: LIMPEZA</h4>
              <p className="text-sm sm:text-base">Células invasoras eliminadas • Movimento fluido • Confiança restaurada</p>
            </div>
            
            <div className="bg-green-100 border-2 border-green-400 rounded-lg p-4 sm:p-6 text-center">
              <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-3">🟢 SEMANA 5-8: REGENERAÇÃO</h4>
              <p className="text-sm sm:text-base">Ossos reconstruídos • Força total • Independência completa</p>
            </div>
          </div>

          {/* ============================================
              ALTERAÇÃO 2: PRIMEIRO CTA FORTALECIDO COM CTA ATUALIZADO
              ============================================ */}
          <div className="my-8 sm:my-12 text-center">
            <Button 
              onClick={handleCTA}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 break-words whitespace-normal leading-tight min-h-[60px] sm:min-h-[80px] flex items-center justify-center"
            >
              <span className="text-center block leading-tight">
                ✅ COMEÇAR COM 7 MINUTOS HOJE
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 inline-block align-middle" />
                <br />
                <small className="text-xs sm:text-sm opacity-80">Protocolo completo + garantia incondicional</small>
              </span>
            </Button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              Comece a regeneração em 7 minutos
            </p>
          </div>

          {/* ============================================
              ALTERAÇÃO 3: HEADLINE ATUALIZADO
              ============================================ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words text-center">
            Seus Ossos Se Fortalecem Automaticamente a Cada Semana
          </h2>

          <div className="space-y-4 sm:space-y-6 my-8 sm:my-10">
            {CRONOLOGIA.map((item, idx) => (
              <div key={idx} className={`${item.cor} border-2 ${item.corBorda} rounded-lg p-6 sm:p-8`}>
                <div className="mb-4">
                  <p className="text-sm font-bold text-gray-600">{item.semana}</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{item.fase}</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-lg">📋</span>
                    <div>
                      <p className="font-bold text-sm text-gray-700">Técnicas Ativadas:</p>
                      <p className="text-gray-700">{item.tecnicas}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-bold text-lg">🔬</span>
                    <div>
                      <p className="font-bold text-sm text-gray-700">O Que Acontece Biologicamente:</p>
                      <p className="text-gray-700">{item.biologico}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-bold text-lg">💫</span>
                    <div>
                      <p className="font-bold text-sm text-gray-700">O Que Você Sente:</p>
                      <p className="text-gray-700">{item.sensacao}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-bold text-lg">🎯</span>
                    <div>
                      <p className="font-bold text-sm text-gray-700">Status das Células Zumbis:</p>
                      <p className="text-gray-900 font-bold text-lg">{item.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-8 sm:my-10">
            <div className="bg-red-50 rounded-lg p-4 sm:p-6 border-2 border-red-300">
              <h3 className="text-lg sm:text-xl font-bold text-red-800 mb-3">🔴 SEMANA 1</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Menos rigidez ao acordar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Melhor qualidade de sono</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Redução de 20-30% na dor</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 border-2 border-yellow-300">
              <h3 className="text-lg sm:text-xl font-bold text-yellow-800 mb-3">🟡 SEMANA 2</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Articulações se movem sem estalos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Confiança ao subir/descer escadas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Menos inflamação sistêmica</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 border-2 border-blue-300">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">🔵 SEMANA 4</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Força muscular notavelmente melhorada</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Postura mais ereta naturalmente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Capacidade de fazer atividades sem medo</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 sm:p-6 border-2 border-green-300">
              <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-3">🟢 SEMANA 8</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Densidade óssea aumentada visualmente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Independência completa recuperada</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">Mobilidade que você pensava ter perdido</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ============================================
              ALTERAÇÃO 3: HEADLINE ATUALIZADO
              ============================================ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            7 Minutos Pela Manhã = Ossos Mais Fortes o Dia Todo
          </h2>

          <p>
            Obter resultados com o Protocolo Anti-Células Zumbis é <strong>simples.</strong>
          </p>

          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 my-6 sm:my-8 text-center">
            <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">
              📅 Basta seguir o protocolo de 15 minutos todas as manhãs após acordar.
            </p>
            <p className="text-gray-700 text-sm sm:text-base break-words">
              Para resultados mais rápidos, muitos usuários aplicam o protocolo vespertino adicional, especialmente nos primeiros 30 a 60 dias.
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4 break-words">
            Desde a primeira aplicação, o Protocolo ativa:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-4 sm:my-6">
            <div className="bg-green-50 rounded-lg p-3 sm:p-4 flex items-center">
              <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base break-words">Elimina as células zumbis inflamatórias</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 sm:p-4 flex items-center">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base break-words">Ativa proteínas formadoras de osso</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 sm:p-4 flex items-center">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base break-words">Alivia dores e inchaço nas articulações</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 sm:p-4 flex items-center">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 mr-2 sm:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm sm:text-base break-words">Reconstrói a força de dentro para fora</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              <strong>Inicialmente,</strong> você notará mudanças sutis: Mais energia. Melhor sono. Menos rigidez ao acordar.
            </p>
            <p className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">
              Então algo incrível acontece...
            </p>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Subir escadas não te assusta. Levantar-se de uma cadeira não exige estratégia.
            </p>
            <p className="font-bold text-lg sm:text-xl text-green-800 break-words">
              Você se move com confiança. É como recuperar a própria vida.
            </p>
          </div>

          {/* ============================================
              ALTERAÇÃO 3: HEADLINE ATUALIZADO
              ============================================ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Como Mulheres Reais Eliminaram Suas Células Zumbis
          </h2>

          <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Helena, 68 anos</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "Senti a diferença nos meus joelhos em poucos dias."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "Tentei de tudo: cálcio, glucosamina, cremes. Mas nada fez meus joelhos se sentirem estáveis novamente. Comecei a seguir o Protocolo Anti-Células Zumbis há alguns meses e senti a diferença em poucos dias. A dor diminuiu e não me sentia mais como se estivesse a um passo de uma lesão."
            </p>
            <p className="text-gray-700 font-bold text-sm sm:text-base break-words">
              "Agora passeio com meu cachorro todas as manhãs sem medo. Até voltei ao jardim. Sigo o protocolo todos os dias e nunca vou parar."
            </p>
          </div>

          <div className="border-l-4 border-green-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Ruth, 64 anos</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "Cada semana me aproximava de me sentir eu mesma novamente."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "Depois da primeira semana, minhas articulações não estavam mais tão rígidas. No segundo mês, conseguia me levantar sem me apoiar. No terceiro? Dancei no casamento da minha sobrinha — e quando digo dancei, é dancei mesmo."
            </p>
            <p className="text-gray-700 font-bold text-sm sm:text-base break-words">
              "O protocolo não apenas ajudou meus ossos, como me devolveu a confiança. Sinto-me forte novamente."
            </p>
          </div>

          <div className="border-l-4 border-purple-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Diane, 66 anos</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "Estava cética, mas em 10 dias me senti mais forte."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "Sigo o Protocolo há uma semana e meia, e estou impressionada com a rapidez. Antes, não conseguia dormir sem analgésicos. Meus joelhos gritavam toda vez que me levantava."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "Hoje? Atravessei a cidade, passei por três lojas e não precisei sentar nenhuma vez. A dor melhorou pelo menos 75 a 80% — e sinto-me estável. Confiante."
            </p>
            <p className="text-gray-700 font-bold text-sm sm:text-base break-words">
              "Não uso mais almofada térmica. Pela primeira vez em muito tempo, sinto que há esperança novamente."
            </p>
          </div>

          <div className="border-l-4 border-orange-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 bg-gray-50 rounded-r-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <div>
                <p className="font-bold text-base sm:text-lg">Margarete, 62 anos</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm sm:text-base">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              "Comecei apenas com as 3 primeiras técnicas — e funcionou!"
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "Estava cética porque tenho artrite avançada. Não quis fazer tudo de uma vez. Comecei apenas com a Técnica 1 (7 minutos) + Técnica 3 (dor) + Técnica 4 (alimentar)."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "No TERCEIRO DIA, já sentia menos rigidez. No OITAVO DIA, dormi sem analgésicos pela primeira vez em 3 anos."
            </p>
            <p className="text-gray-700 mb-2 sm:mb-3 italic text-sm sm:text-base break-words">
              "Agora estou na semana 6 com as 8 técnicas completas. Meus dedos estão menos inchados. Consigo escrever sem dor. Fiz uma caminhada de 45 minutos ontem — algo que não conseguia há 10 anos."
            </p>
            <p className="text-gray-700 font-bold text-sm sm:text-base break-words">
              "O protocolo é de verdade. As 8 técnicas funcionam porque cada uma elimina células zumbis de um ângulo diferente. Não precisa fazer todas de uma vez!"
            </p>
          </div>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.esperancaRenovada}
                alt="Esperança renovada - Mulheres recuperando qualidade de vida"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center break-words">
              O que a comunidade médica tem a dizer
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden relative">
                <Image 
                  src={IMAGES.draMarina}
                  alt="Dra. Marina Santos"
                  fill
                  className="object-contain sm:object-cover"
                  unoptimized
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4 italic break-words">
                  "Analisei inúmeros protocolos para densidade óssea e o <strong>Protocolo Anti-Células Zumbis é único.</strong> Se você sofre de perda óssea ou desconforto articular, recomendo este protocolo."
                </p>
                <p className="font-bold text-blue-900 flex items-center justify-center sm:justify-start text-sm sm:text-base">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Dra. Marina Santos, PhD, MSM
                </p>
              </div>
            </div>
          </div>

          {/* ============================================
              ALTERAÇÃO 2: SEGUNDO CTA FORTALECIDO
              ============================================ */}
          <div className="my-8 sm:my-12 text-center">
            <Button 
              onClick={handleCTA}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 break-words whitespace-normal leading-tight min-h-[60px] sm:min-h-[80px] flex items-center justify-center"
            >
              <span className="text-center block leading-tight">
                ⚡ RECUPERAR MINHA MOBILIDADE EM 7 MINUTOS
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 inline-block align-middle" />
              </span>
            </Button>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
              Protocolo completo + garantia 30 dias
            </p>
          </div>

          {/* ============================================
              ALTERAÇÃO 3: HEADLINE ATUALIZADO
              ============================================ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words text-center">
            Por Que Este Protocolo Funciona Quando Tudo Mais Falha
          </h2>

          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10 space-y-6">
            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-red-600">
              <p className="mb-3">
                <strong>Você já tentou:</strong>
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">❌</span>
                  <span className="text-sm sm:text-base">Cálcio (não absorve)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">❌</span>
                  <span className="text-sm sm:text-base">Bifosfonatos (efeitos colaterais)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">❌</span>
                  <span className="text-sm sm:text-base">Glucosamina (não funciona)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">❌</span>
                  <span className="text-sm sm:text-base">Exercício genérico (não elimina célula zumbi)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 border-l-4 border-blue-600">
              <p className="font-bold text-lg mb-3 break-words">
                Tudo isso trata SINTOMAS. O Protocolo trata a CAUSA.
              </p>
              <p className="text-sm sm:text-base text-gray-700 break-words">
                Você não está lutando contra a dor. Você está eliminando as células que criam a dor.
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-4 sm:p-6 border-l-4 border-green-600">
              <p className="font-bold text-lg mb-3 text-gray-900 break-words">
                Por que as 8 técnicas funcionam onde outros falharam:
              </p>
              <ol className="space-y-2 text-sm sm:text-base">
                <li><strong>1.</strong> Cada técnica ataca UMA FONTE específica de células zumbis</li>
                <li><strong>2.</strong> Juntas, elas não deixam escapatória</li>
                <li><strong>3.</strong> Seu corpo consegue regenerar (finalmente)</li>
                <li><strong>4.</strong> Resultados começam na SEMANA 1, não meses depois</li>
              </ol>
            </div>

            <div className="bg-yellow-100 rounded-lg p-4 sm:p-6 border-l-4 border-yellow-600">
              <p className="font-bold text-lg break-words">
                Você não está pagando por 'esperança'. Você está pagando por um PROTOCOLO CIENTÍFICO com 8 técnicas que funcionam de formas diferentes.
              </p>
            </div>
          </div>

          {/* ============================================
              ALTERAÇÃO 3: HEADLINE ATUALIZADO
              ============================================ */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            A Cada Dia de Espera, Suas Células Zumbis Se Multiplicam
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.consequenciasInacao}
                alt="Consequências da inação - Deterioração óssea progressiva"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <p className="text-lg sm:text-xl mb-4 sm:mb-6 break-words">
            O que hoje parece <strong>"apenas uma pequena dor"...</strong> pode se transformar em uma <strong className="text-red-700">fratura que mudará sua vida amanhã.</strong>
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Imagine uma rachadura na fundação da sua casa. Com o tempo, se espalha, enfraquecendo toda a estrutura até que cause o colapso.
            </p>
            <p className="font-bold text-lg sm:text-xl">
              É exatamente isso que está acontecendo dentro do seu corpo.
            </p>
          </div>

          <ul className="space-y-2 sm:space-y-3 my-4 sm:my-6">
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">Os ossos ficam mais finos e fracos</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">As articulações ficam inflamadas e quebradiças</span>
            </li>
            <li className="flex items-start">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
              <span className="text-sm sm:text-base break-words">Um movimento errado pode deixar você lesionada, imóvel ou pior</span>
            </li>
          </ul>

          <p className="font-bold text-lg sm:text-xl text-center my-6 sm:my-8 break-words">
            A diferença entre recuperar suas forças... e perdê-las para sempre... tudo se resume ao que você faz agora.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Por que você não encontrará o Protocolo em livrarias ou farmácias
          </h2>

          <p className="mb-4 sm:mb-6">
            O Protocolo Anti-Células Zumbis está disponível <strong>apenas através desta página</strong> — e por um bom motivo.
          </p>

          <p className="mb-4 sm:mb-6">
            Ao eliminar intermediários, garantimos que você tenha acesso direto às descobertas mais avançadas a um preço justo.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-600 pl-4 sm:pl-6 py-4 sm:py-6 my-6 sm:my-8 rounded-r-lg">
            <p className="text-sm sm:text-base break-words">
              Essa abordagem faz parte do compromisso com a acessibilidade: tornar o suporte avançado para ossos e articulações <strong>acessível para quem mais precisa.</strong>
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center break-words">
            E agora vem a melhor parte
          </h2>

          <div className="bg-green-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10 text-center">
            <p className="text-lg sm:text-xl mb-4 sm:mb-6">
              Embora o preço normal seja <span className="line-through text-red-600">€297</span>, agora mesmo você pode ter acesso por apenas <span className="line-through text-red-600">€197</span>.
            </p>
            
            <p className="text-lg sm:text-xl mb-4 sm:mb-6">
              Mas quando compartilhei minha história com a equipe, eles foram além.
            </p>

            <p className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 break-words">
              Hoje, por tempo limitado, você pode experimentar o Protocolo Anti-Células Zumbis por apenas:
            </p>
            
            <div className="mb-6 sm:mb-8">
              <div className="text-gray-400 text-lg sm:text-2xl line-through mb-2">€297</div>
              <div className="text-gray-400 text-base sm:text-xl line-through mb-3 sm:mb-4">€197</div>
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-green-600 mb-3 sm:mb-4">€27</div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-lg sm:text-2xl font-bold mb-3 sm:mb-4">
                🔥 Economia de €270!
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Um preço que o torna acessível para quem mais precisa.
              </p>

              <div className="mt-6 sm:mt-8 bg-red-100 border-2 border-red-400 rounded-lg p-4 sm:p-6">
                <p className="text-red-700 font-bold text-2xl mb-2">🛡️ {vagas} Vagas Restantes Nesta Semana</p>
              </div>
            </div>

            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 sm:p-6">
              <p className="font-bold text-base sm:text-lg text-blue-900">
                E você não precisa tomar uma decisão agora.
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center break-words">
            Garantia Progressiva de 30 Dias, Sem Perguntas
          </h2>

          <figure className="my-6 sm:my-8 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={IMAGES.garantiaSeguranca}
                alt="Garantia de segurança e satisfação"
                fill
                className="object-contain sm:object-cover"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              />
            </div>
          </figure>

          <div className="bg-green-50 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <Shield className="w-20 h-20 sm:w-32 sm:h-32 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg sm:text-xl mb-4 sm:mb-6 break-words">
                  <strong>Experimente o Protocolo por 30 dias completos.</strong> São 30 dias para sentir a diferença em seus ossos, articulações e no seu dia a dia.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-red-600">
                    <p className="font-bold text-red-800 text-sm sm:text-base">✓ Semana 1</p>
                    <p className="text-xs sm:text-sm text-gray-700">Se não notar redução de dor/rigidez → Reembolso total</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-yellow-600">
                    <p className="font-bold text-yellow-800 text-sm sm:text-base">✓ Semana 2</p>
                    <p className="text-xs sm:text-sm text-gray-700">Se não notar movimento mais fluido → Reembolso total</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 border-l-4 border-green-600">
                    <p className="font-bold text-green-800 text-sm sm:text-base">✓ Semana 4</p>
                    <p className="text-xs sm:text-sm text-gray-700">Se não notar regeneração começando → Reembolso total</p>
                  </div>
                </div>

                <p className="text-lg sm:text-xl mb-4 sm:mb-6 break-words">
                  Você tem <strong className="text-green-700">30 dias para confirmar que as 8 técnicas funcionam.</strong> Se não funcionar EM QUALQUER PONTO, seu dinheiro volta.
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
                  <p className="font-bold text-base sm:text-lg text-yellow-900 break-words">Por que eles fariam isso?</p>
                  <p className="text-xl sm:text-2xl font-bold text-yellow-800 mt-2 break-words">Porque sabem que funciona.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 sm:p-8 my-8 sm:my-10">
            <div className="text-center mb-4 sm:mb-6">
              <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-3 sm:mb-4 break-words">
                ⚠️ ATENÇÃO: Esta oferta pode estar indisponível quando você voltar!
              </h3>
            </div>

            <p className="text-lg sm:text-xl text-center mb-4 sm:mb-6 break-words">
              O Protocolo já ficou indisponível diversas vezes devido à <strong>enorme procura.</strong>
            </p>

            <p className="text-lg sm:text-xl text-center mb-6 sm:mb-8 break-words">
              Se você está interessada em reconstruir seus ossos e recuperar sua independência, <strong className="text-red-700">agora é a hora de agir.</strong>
            </p>

            <figure className="my-6 sm:my-8 w-full">
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] rounded-lg overflow-hidden bg-gray-200">
                <Image 
                  src={IMAGES.agiAgora}
                  alt="Hora de agir - Não perca esta oportunidade"
                  fill
                  className="object-contain sm:object-cover"
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                />
              </div>
            </figure>

            {/* ============================================
                ALTERAÇÃO 2: CTA DE URGÊNCIA
                ============================================ */}
            <div className="text-center">
              <Button 
                onClick={handleCTA}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 rounded-full shadow-2xl animate-pulse break-words whitespace-normal leading-tight min-h-[60px] sm:min-h-[80px] flex items-center justify-center"
              >
                <span className="text-center block leading-tight">
                  🚨 PARAR A DESTRUIÇÃO ÓSSEA AGORA
                </span>
              </Button>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                Antes que seja tarde demais
              </p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center break-words">
            O verdadeiro risco? Viver com dor e arrependimento.
          </h2>

          <p className="text-lg sm:text-xl text-center mb-6 sm:mb-8 break-words">Você tem duas opções:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-10">
            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 sm:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white text-2xl sm:text-3xl font-bold">✗</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-700 break-words">Opção 1: Não fazer nada</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Ossos continuarão mais finos</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Articulações mais rígidas</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Mundo cada vez menor</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Até você se perguntar: "Como cheguei a isso?"</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 sm:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-700 break-words">Opção 2: Dar uma chance ao Protocolo</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Movimento sem medo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Ossos mais fortes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base break-words">Articulações revitalizadas</span>
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

          <div className="bg-yellow-50 border-l-4 border-yellow-600 pl-4 sm:pl-6 py-4 sm:py-6 my-8 sm:my-10 rounded-r-lg">
            <p className="text-lg sm:text-xl mb-3 sm:mb-4">
              Ainda agradeço a Deus todos os dias por ter encontrado este protocolo.
            </p>
            <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 break-words">
              Não mudou apenas o meu corpo — mudou o meu futuro.
            </p>
            <p className="text-lg sm:text-xl mb-3 sm:mb-4">
              Você quer continuar presa à dor e mobilidade reduzida?
            </p>
            <p className="text-xl sm:text-2xl font-bold text-yellow-800 break-words">
              Ou quer uma chance real de conquistar a força e confiança que merece?
            </p>
          </div>

          {/* ============================================
              ALTERAÇÃO 2: CTA PRINCIPAL FINAL
              ============================================ */}
          <div className="my-8 sm:my-12 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 sm:p-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 break-words">
              Esta pode ser a decisão que divide sua vida em "antes" e "depois"
            </h3>
            
            <div className="mb-6 sm:mb-8">
              <div className="text-gray-400 text-lg sm:text-2xl line-through mb-2">€297</div>
              <div className="text-gray-400 text-base sm:text-xl line-through mb-3 sm:mb-4">€197</div>
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-green-600 mb-3 sm:mb-4">€27</div>
              <p className="text-xl sm:text-2xl font-bold text-yellow-700 mb-4 sm:mb-6">
                🔥 ECONOMIA DE €270 HOJE!
              </p>
            </div>

            <Button 
              onClick={handleCTA}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base sm:text-lg md:text-xl py-6 sm:py-8 md:py-10 px-6 sm:px-12 md:px-20 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 break-words whitespace-normal leading-tight min-h-[80px] sm:min-h-[100px] flex items-center justify-center"
            >
              <span className="text-center block leading-tight">
                🦴 ELIMINAR CÉLULAS ZUMBIS DOS MEUS OSSOS
                <ArrowRight className="ml-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 inline-block align-middle" />
              </span>
            </Button>

            <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base">
              🔒 Pagamento Seguro • ⚡ Acesso Imediato • 🛡️ Garantia Incondicional de 30 Dias
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 break-words">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            <AccordionItem value="item-1" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Preciso fazer as 8 técnicas ou posso começar com menos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                Você pode começar com as 3 técnicas principais (Técnicas 1, 3, 4 = ~10 minutos). Muitas pessoas notam resultados na primeira semana com apenas essas 3.

                Mas para máxima eliminação de células zumbis, as 8 técnicas trabalham juntas. Pessoas que fazem as 8 veem resultados 3x mais rápido.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Qual técnica eu devo fazer PRIMEIRO?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                A Técnica 1 (Rotina de 7 Minutos). Ela bloqueia as citocinas inflamatórias. Sem esse bloqueio inicial, as outras técnicas têm efetividade reduzida.

                Depois da Técnica 1, você adiciona as outras gradualmente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                O Protocolo funciona para todos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                O Protocolo foi desenvolvido especialmente para adultos acima de 50 anos que sofrem com perda óssea e desconforto articular. Funciona particularmente bem para pessoas que ainda sentem sintomas (dor, rigidez), pois isso indica que o corpo ainda está tentando se recuperar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Quanto tempo leva para ver resultados?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                A maioria das pessoas nota mudanças sutis nas primeiras semanas (mais energia, melhor sono, menos rigidez matinal). Resultados mais significativos aparecem entre 30-60 dias de uso consistente do protocolo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                É seguro usar junto com medicamentos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                O Protocolo é baseado em técnicas naturais e alimentares. No entanto, sempre recomendamos consultar seu médico antes de iniciar qualquer novo protocolo de saúde, especialmente se você já usa medicamentos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                E se o Protocolo não funcionar para mim?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                Você tem 30 dias completos para experimentar o Protocolo sem riscos. Se não ficar satisfeita em qualquer ponto, basta solicitar o reembolso total — sem perguntas, sem complicações.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Como recebo o Protocolo após a compra?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                O acesso é imediato! Após a confirmação do pagamento, você receberá um email com as instruções de acesso completo ao Protocolo. Você pode começar a aplicá-lo no mesmo dia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-gray-900 hover:text-blue-700 font-bold text-sm sm:text-base break-words">
                Preciso comprar suplementos caros?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4 text-sm sm:text-base break-words">
                Não! O Protocolo se concentra em técnicas naturais, exposição solar estratégica, combinações alimentares específicas e protocolos baseados em alimentos comuns. Não exige suplementos caros ou difíceis de encontrar.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

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
              © 2024 Protocolo de Regeneração Óssea Anti-Células Zumbis. Todos os direitos reservados.
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