import { ScrollEffects } from "./components/ScrollEffects";
import { CenarioAtualWidgetGraphic } from "./components/CenarioAtualWidget";

export default function Home() {
  return (
    <>
      <ScrollEffects />

      <nav>
        <a href="https://cadu.health" className="nav-brand">
          <span className="nav-wordmark">CADU</span>
          <span className="nav-slash">/</span>
          <span className="nav-context">Setor Público</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#problema">O Problema</a>
          </li>
          <li>
            <a href="#solucao">Infraestrutura</a>
          </li>
          <li>
            <a href="#implementacao-publico">Na prática</a>
          </li>
          <li>
            <a href="#modelo-parceria">Contratar</a>
          </li>
          <li>
            <a href="#piloto-proposto">Piloto</a>
          </li>
          <li>
            <a href="#indicadores-sucesso">Medição</a>
          </li>
          <li>
            <a href="#escalabilidade">Escala</a>
          </li>
          <li>
            <a href="#parlamentares">Gabinetes</a>
          </li>
          <li>
            <a href="#legislacao">Leis</a>
          </li>
          <li>
            <a href="#roi-publico">Impacto fiscal</a>
          </li>
          <li>
            <a href="#cuidado">Rede</a>
          </li>
          <li>
            <a href="#governanca">LGPD</a>
          </li>
        </ul>

        <a href="#proximo" className="nav-cta">
          Contato institucional
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </a>
      </nav>

      <section id="hero">
        <div className="blobs">
          <div className="blob hero-blob-orange" />
          <div className="blob hero-blob-pink" />
          <div className="blob hero-blob-blue" />
        </div>

        <div className="wrap">
          <div className="hero-brand-stage" aria-hidden="true">
            <div className="hero-brand enter-1">CADU</div>
          </div>

          <div className="hero-scrollspace" data-hero-scrollspace />
        </div>
      </section>

      <section id="hero-content" className="hero-content">
        <div className="wrap">
          <div className="hero-main">
            <div className="hero-left">
              <div className="hero-inline-brand" aria-hidden="true">
                CADU
              </div>

              <div className="pill-tag reveal">
                <span className="pill-dot" />
                Infraestrutura de Saúde Pública · Neurodesenvolvimento
              </div>

              <h1 className="hero-headline reveal d1">
                O sistema não está faltando atendimento.
                <br />
                Está faltando conexão.
                <br />
                <span className="red">
                  Infraestrutura de dados e coordenação do cuidado para integrar saúde, educação, assistência social e
                  famílias na jornada do neurodesenvolvimento.
                </span>
              </h1>

              <p className="hero-body reveal d2">
                Crianças com autismo e outros transtornos do neurodesenvolvimento percorrem múltiplos serviços sem
                continuidade de informação. O resultado é fragmentação do cuidado, retrabalho e baixa capacidade de
                gestão.
              </p>

              <p className="hero-body reveal d2" style={{ marginTop: "1rem", marginBottom: "1.25rem" }}>
                O programa de cuidado integrado é viabilizado por uma camada de infraestrutura digital interoperável
                (CADU), com registro longitudinal, coordenação entre pontos de atenção e governança de dados conforme
                legislação e gestão local.
              </p>

              <p
                className="reveal d2"
                style={{
                  fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.35,
                  color: "var(--black)",
                  maxWidth: "42rem",
                  marginBottom: "1.75rem",
                }}
              >
                Um piloto iniciado hoje gera relatório técnico de impacto antes de outubro de 2026.
              </p>

              <div className="hero-btns reveal d3" style={{ flexWrap: "wrap", rowGap: "10px" }}>
                <a href="mailto:contato@cadu.health?subject=Agendar%20reuni%C3%A3o%20t%C3%A9cnica%20-%20CADU%20PPP" className="btn-red">
                  Agendar reunião técnica
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
                <a href="mailto:contato@cadu.health?subject=Receber%20proposta%20de%20piloto%20-%20CADU" className="btn-ghost">
                  Receber proposta de piloto
                </a>
                <a
                  href="mailto:contato@cadu.health?subject=Apresenta%C3%A7%C3%A3o%20institucional%20-%20CADU%20%C2%B7%20setor%20p%C3%BAblico"
                  className="btn-ghost"
                >
                  Apresentação institucional
                </a>
                <a
                  href="mailto:contato@cadu.health?subject=Apresenta%C3%A7%C3%A3o%20CADU%20-%20gabinete%20parlamentar"
                  className="btn-ghost"
                >
                  Apresentação para gabinete parlamentar
                </a>
              </div>

              <div className="hero-stats reveal d4">
                <div>
                  <span className="stat-num">
                    2<sup>mi</sup>
                  </span>
                  <span className="stat-label">crianças com TEA no Brasil sem dados integrados</span>
                </div>
                <div>
                  <span className="stat-num">
                    18<sup>m</sup>
                  </span>
                  <span className="stat-label">tempo médio para diagnóstico no SUS</span>
                </div>
                <div>
                  <span className="stat-num" style={{ fontSize: "clamp(1.85rem, 3vw, 2.65rem)", letterSpacing: "-0.03em" }}>
                    ≤2/3
                  </span>
                  <span className="stat-label">
                    redução de custo com diagnóstico e intervenção precoce coordenada (referência: OMS e estudos
                    comparativos de custo em TEA)
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-aside reveal d2" aria-hidden="true">
              <figure className="hero-widget" aria-hidden="true">
                <div className="widget-hero" aria-hidden="true">
                  <CenarioAtualWidgetGraphic />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Registro longitudinal e coordenação entre pontos de atenção
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Continuidade clínica e redução de informação redundante
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Indicadores agregados para planejamento em saúde e educação
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Apoio a vigilância e registro de marcos do desenvolvimento
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Atenção às famílias cuidadoras no percurso de cuidado
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Convergência com marcos legais em TEA e neurodesenvolvimento
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Monitoramento e avaliação de políticas públicas
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Implementação via cooperação técnica
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Registro longitudinal e coordenação entre pontos de atenção
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Continuidade clínica e redução de informação redundante
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Indicadores agregados para planejamento em saúde e educação
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Apoio a vigilância e registro de marcos do desenvolvimento
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Atenção às famílias cuidadoras no percurso de cuidado
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Convergência com marcos legais em TEA e neurodesenvolvimento
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Monitoramento e avaliação de políticas públicas
          </div>
          <div className="ticker-item">
            <span className="ticker-dot" aria-hidden="true" />
            Implementação via cooperação técnica
          </div>
        </div>
      </div>

      <section id="problema">
        <div className="blobs">
          <div className="blob problema-blob" />
        </div>

        <div className="wrap">
          <div className="problema-grid">
            <div className="reveal">
              <p className="eyebrow">O problema</p>
              <h2 className="section-headline">
                O Brasil não falha por falta de política pública.
                <br />
                Falha por falta de conexão entre elas.
              </h2>
              <p className="section-body">
                Famílias recorrem à Justiça para acessar direitos já garantidos.
              </p>
              <p className="section-body" style={{ marginTop: "0.9rem" }}>
                O cuidado é fragmentado entre múltiplos profissionais sem coordenação.
              </p>
              <p className="section-body" style={{ marginTop: "0.9rem" }}>
                Recursos públicos são alocados sem visibilidade real de impacto.
              </p>
              <p className="section-body" style={{ marginTop: "0.9rem" }}>
                O sistema opera sem dados integrados, sem histórico contínuo e sem capacidade de medir resultado.
              </p>
              <p className="section-body problema-structural">
                Isso não é um problema clínico.
                <br />
                É um problema <span className="problema-structural-accent">estrutural.</span>
              </p>
              <p className="section-body" style={{ marginTop: "0.9rem" }}>
                Enquanto essa lacuna existir, qualquer política pública de neurodesenvolvimento continuará limitada em
                escala, eficiência e impacto.
              </p>
            </div>

            <div className="issue-cards reveal d2">
              <div className="issue-card">
                <div className="issue-icon orange">🧩</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Registros isolados por estabelecimento</div>
                  <div className="issue-desc">
                    Cada serviço opera em silo, sem circulação coordenada de dados.
                  </div>
                </div>
                <div className="issue-badge">Crítico</div>
              </div>

              <div className="issue-card">
                <div className="issue-icon pink">📋</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Histórico recomeça do zero</div>
                  <div className="issue-desc">
                    A cada troca de profissional, a jornada é reiniciada.
                  </div>
                </div>
                <div className="issue-badge">Crítico</div>
              </div>

              <div className="issue-card">
                <div className="issue-icon blue">⏱️</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Tempo elevado para diagnóstico</div>
                  <div className="issue-desc">
                    A janela de intervenção precoce é perdida.
                  </div>
                </div>
                <div className="issue-badge">Urgente</div>
              </div>

              <div className="issue-card">
                <div className="issue-icon red">🏛️</div>
                <div style={{ flex: 1 }}>
                  <div className="issue-title">Gestão sem dados estruturados</div>
                  <div className="issue-desc">
                    Secretarias operam sem base real para decisão.
                  </div>
                </div>
                <div className="issue-badge">Urgente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="urgencia">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Urgência sistêmica</p>
            <h2 className="section-headline">
              O problema não é falta de política.
              <br />
              É falta de execução.
            </h2>
            <ul className="urgencia-list">
              <li>
                Judicialização crescente: o Brasil registra crescimento contínuo de ações judiciais para acesso a terapias
                e diagnóstico em autismo — custo fiscal e político direto para estados e municípios.
              </li>
              <li>Interrupção do cuidado entre serviços</li>
              <li>Atendimento fragmentado por silos</li>
              <li>Ausência de histórico longitudinal</li>
              <li>Decisões públicas sem mensuração de impacto</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="solucao">
        <div className="wrap">
          <div className="solucao-intro reveal">
            <p className="solucao-lead">
              O Brasil já atende.
              <br />
              Mas não consegue acompanhar.
            </p>
            <p className="section-body solucao-vacuo">
              Hoje não existe uma infraestrutura integrada de dados que acompanhe a jornada do neurodesenvolvimento ao
              longo do tempo.
            </p>
            <p className="eyebrow">Infraestrutura de dados e coordenação do cuidado</p>
            <h2 className="section-headline">
              O programa de cuidado integrado não cria novas políticas.
              <br />
              Ele viabiliza a execução das políticas existentes.
            </h2>
            <p className="section-body">
              A camada de infraestrutura digital interoperável (CADU) atua como infraestrutura de dados e coordenação do
              cuidado, com interoperabilidade, registro longitudinal e governança, para alinhar informação na esfera
              clínica, educacional e pública, sob regras de acesso e consentimento.
            </p>
          </div>

          <div className="solucao-grid">
            <div className="sol-card reveal">
              <span className="sol-num">01</span>
              <span className="sol-icon">🗂️</span>
              <div className="sol-title">Registro longitudinal por criança</div>
              <div className="sol-body">
                Histórico de desenvolvimento vinculado à pessoa, com possibilidade de leitura por atores autorizados ao
                longo do percurso em diferentes serviços, sem reinício de narrativa a cada encaminhamento.
              </div>
              <span className="sol-tag">Continuidade</span>
            </div>

            <div className="sol-card reveal d1">
              <span className="sol-num">02</span>
              <span className="sol-icon">🤝</span>
              <div className="sol-title">Coordenação entre profissionais e serviços</div>
              <div className="sol-body">
                Informações relevantes compartilháveis, conforme protocolos e perfis, para alinhar condutas e reduzir
                retrabalho sem substituir decisão clínica ou pedagógica.
              </div>
              <span className="sol-tag">Rede de cuidado</span>
            </div>

            <div className="sol-card reveal d2">
              <span className="sol-num">03</span>
              <span className="sol-icon">🤱</span>
              <div className="sol-title">Continuidade com famílias cuidadoras</div>
              <div className="sol-body">
                Canal de acompanhamento e orientação no intervalo entre atendimentos, como apoio às políticas de atenção
                ao cuidado, sempre com base em consentimento e controle de privacidade.
              </div>
              <span className="sol-tag">Atenção ao cuidado</span>
            </div>

            <div className="sol-card reveal">
              <span className="sol-num">04</span>
              <span className="sol-icon">🔍</span>
              <div className="sol-title">Sinalização e registro de marcos</div>
              <div className="sol-body">
                Mecanismos de leitura assistida e registro de marcos do neurodesenvolvimento para apoio à vigilância e às
                condutas, sujeitos a validação profissional e ao arcabouço de cada rede.
              </div>
              <span className="sol-tag">Vigilância clínica</span>
            </div>

            <div className="sol-card reveal d1">
              <span className="sol-num">05</span>
              <span className="sol-icon">📊</span>
              <div className="sol-title">Indicadores para gestão pública</div>
              <div className="sol-body">
                Painéis e relatórios a partir de dados agregados e anonimizados, adequados a planejamento, regulação e
                monitoramento de políticas, sem exposição indevida de identificáveis.
              </div>
              <span className="sol-tag">Gestão e políticas</span>
            </div>

            <div className="sol-card reveal d2">
              <span className="sol-num">06</span>
              <span className="sol-icon">🔗</span>
              <div className="sol-title">Interoperabilidade com sistemas e redes</div>
              <div className="sol-body">
                Padrões de integração com sistemas de saúde, educação e assistência, para alimentar o registro
                longitudinal quando houver anuência, capacidade técnica e adesão instituída.
              </div>
              <span className="sol-tag">Dados e sistemas</span>
            </div>
          </div>

          <div className="solucao-axioms reveal d1">
            <div>Sem substituição de sistemas.</div>
            <div>Sem ruptura da rede.</div>
            <div>Apenas conexão.</div>
          </div>
        </div>
      </section>

      <section id="implementacao-publico" className="section-setor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "48rem" }}>
            <p className="eyebrow">Implementação no setor público</p>
            <h2 className="section-headline">Como o CADU roda na prática</h2>

            <div style={{ marginTop: "1.75rem" }}>
              <p style={{ margin: "0 0 0.35rem", fontWeight: 800, color: "var(--black)" }}>Quem usa?</p>
              <p className="section-body" style={{ marginTop: 0, marginBottom: "1.35rem", maxWidth: "none" }}>
                Profissionais de saúde, educação e assistência social cadastrados pela gestão local. Cada perfil acessa
                apenas o que é pertinente à sua função e ao consentimento do responsável.
              </p>

              <p style={{ margin: "0 0 0.35rem", fontWeight: 800, color: "var(--black)" }}>Onde é implementado?</p>
              <p className="section-body" style={{ marginTop: 0, marginBottom: "1.35rem", maxWidth: "none" }}>
                UBS, CAPS, CER, escolas com AEE e CRAS. A entrada pode começar por um único equipamento e expandir
                progressivamente.
              </p>

              <p style={{ margin: "0 0 0.35rem", fontWeight: 800, color: "var(--black)" }}>Quanto tempo para implementar?</p>
              <p className="section-body" style={{ marginTop: 0, marginBottom: "1.35rem", maxWidth: "none" }}>
                30 dias para onboarding da equipe e início de uso. 90 dias para primeiros indicadores estruturados. Sem
                necessidade de infraestrutura própria — funciona via navegador, com acesso por dispositivo existente.
              </p>

              <p style={{ margin: "0 0 0.35rem", fontWeight: 800, color: "var(--black)" }}>Precisa de treinamento?</p>
              <p className="section-body" style={{ marginTop: 0, marginBottom: "1.35rem", maxWidth: "none" }}>
                Sim. Capacitação inicial de 4h para equipes operacionais, com material de apoio e suporte técnico durante
                o piloto. Não exige conhecimento técnico avançado.
              </p>

              <p style={{ margin: "0 0 0.35rem", fontWeight: 800, color: "var(--black)" }}>Quem paga?</p>
              <p className="section-body" style={{ marginTop: 0, marginBottom: "1.35rem", maxWidth: "none" }}>
                O piloto pode ser viabilizado via emenda parlamentar, recurso de fundo municipal de saúde ou convênio
                federal. O CADU não exige contratação prévia — a entrada se dá por cooperação técnica.
              </p>

              <p style={{ margin: "0 0 0.35rem", fontWeight: 800, color: "var(--black)" }}>Quem mantém?</p>
              <p className="section-body" style={{ marginTop: 0, marginBottom: 0, maxWidth: "none" }}>
                A operação técnica da plataforma é responsabilidade do CADU. O município responde pela governança local,
                consentimento e adesão da rede.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="modelo-parceria" className="section-ppp">
        <div className="blobs" aria-hidden="true">
          <div className="blob ppp-blob" />
        </div>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "52rem" }}>
            <p className="eyebrow">Modelo de parceria pública</p>
            <h2 className="section-headline">Como contratar o CADU</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              O CADU não exige licitação para entrada. O modelo de início é via cooperação técnica — instrumento jurídico
              simples, sem transferência financeira inicial, que permite validação antes de qualquer contratação.
            </p>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none", fontWeight: 700, color: "var(--black)" }}>
              Etapas do modelo:
            </p>
          </div>

          <div className="modelo-grid" style={{ marginTop: "2rem" }}>
            <div className="modelo-card reveal">
              <div className="modelo-title">Fase 1 — Cooperação técnica (sem custo)</div>
              <ul className="modelo-list">
                <li>
                  <strong>Instrumento:</strong> Termo de Cooperação Técnica
                </li>
                <li>
                  <strong>Duração:</strong> até 120 dias
                </li>
                <li>
                  <strong>Escopo:</strong> piloto em rede selecionada, com equipe capacitada e dados estruturados
                </li>
                <li>
                  <strong>Entregável:</strong> relatório técnico com indicadores reais
                </li>
              </ul>
            </div>
            <div className="modelo-card reveal d1">
              <div className="modelo-title">Fase 2 — Contratação baseada em resultado</div>
              <ul className="modelo-list">
                <li>
                  <strong>Instrumento:</strong> contrato de prestação de serviços ou convênio
                </li>
                <li>
                  <strong>Financiamento:</strong> emenda parlamentar, fundo municipal de saúde, recurso federal (SUAS,
                  SUS, FNDE)
                </li>
                <li>
                  <strong>Modelo:</strong> SaaS público com valor por criança acompanhada
                </li>
              </ul>
            </div>
            <div className="modelo-card reveal d2">
              <div className="modelo-title">Fase 3 — Expansão e PPP</div>
              <ul className="modelo-list">
                <li>
                  Para municípios com carteira acima de 500 crianças, estruturação de Parceria Público-Privada para escala
                  regional
                </li>
              </ul>
            </div>
          </div>

          <div className="piloto-ppp-grid" style={{ marginTop: "2.5rem", alignItems: "start" }}>
            <div className="reveal">
              <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>
                Papel do município
              </p>
              <ul className="urgencia-list">
                <li>Indicar território e equipamentos do piloto</li>
                <li>Autorizar acesso às equipes locais</li>
                <li>Assinar o Termo de Cooperação Técnica</li>
                <li>Garantir adesão mínima da rede local</li>
              </ul>
            </div>
            <div className="reveal d1">
              <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>
                Papel do CADU
              </p>
              <ul className="urgencia-list">
                <li>Infraestrutura técnica e manutenção</li>
                <li>Capacitação das equipes</li>
                <li>Suporte durante o piloto</li>
                <li>Relatório técnico de impacto</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="piloto-proposto" className="section-piloto-ppp">
        <div className="blobs" aria-hidden="true">
          <div className="blob piloto-blob" />
        </div>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "48rem" }}>
            <p className="eyebrow">Piloto proposto</p>
            <h2 className="section-headline">O que estamos propondo — agora</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none", fontWeight: 700, color: "var(--black)" }}>
              Escopo fechado para piloto inicial:
            </p>
            <ul className="urgencia-list" style={{ marginTop: "0.65rem" }}>
              <li>
                <strong>Duração:</strong> 6 meses
              </li>
              <li>
                <strong>Local sugerido:</strong> 1 UBS + 1 escola com AEE + 1 CAPS ou CER
              </li>
              <li>
                <strong>Público:</strong> 80 a 120 crianças com suspeita ou diagnóstico de TEA/TDAH
              </li>
              <li>
                <strong>Equipe envolvida:</strong> profissionais já atuantes na rede, sem contratação adicional
              </li>
              <li>
                <strong>Instrumento:</strong> Termo de Cooperação Técnica com o município
              </li>
            </ul>
            <p className="section-body" style={{ marginTop: "1.35rem", maxWidth: "none", fontWeight: 700, color: "var(--black)" }}>
              Entregáveis ao final do piloto:
            </p>
            <ul className="urgencia-list" style={{ marginTop: "0.65rem" }}>
              <li>Relatório técnico com indicadores de impacto</li>
              <li>Mapeamento da jornada real das crianças na rede</li>
              <li>Dados de evolução por criança (anonimizados para gestão)</li>
              <li>Subsídios para decisão de escala ou política pública permanente</li>
              <li>Material para prestação de contas de emenda parlamentar</li>
            </ul>
            <p className="section-body" style={{ marginTop: "1.35rem", maxWidth: "none", fontWeight: 700, color: "var(--black)" }}>
              Cronograma:
            </p>
            <ul className="urgencia-list" style={{ marginTop: "0.65rem" }}>
              <li>
                <strong>Mês 1:</strong> assinatura do termo, onboarding, capacitação
              </li>
              <li>
                <strong>Mês 2–5:</strong> operação com acompanhamento semanal
              </li>
              <li>
                <strong>Mês 6:</strong> consolidação de dados e entrega do relatório
              </li>
            </ul>
            <p className="section-body" style={{ marginTop: "1.25rem", maxWidth: "none", marginBottom: 0 }}>
              Resultado esperado antes de outubro de 2026 para pilotos iniciados até maio.
            </p>
          </div>
        </div>
      </section>

      <section id="indicadores-sucesso" className="section-dados">
        <div className="wrap">
          <div className="dados-head reveal">
            <p className="eyebrow">Indicadores de sucesso</p>
            <h2 className="section-headline">O que vamos medir</h2>
          </div>

          <div className="dados-grid">
            <div className="dados-card reveal">
              <h3 className="dados-card-title">Tempo médio até primeiro atendimento especializado</h3>
              <p className="dados-card-body">
                <strong>Baseline:</strong> 18 meses (média SUS)
                <br />
                <strong>Esperado:</strong> redução ≥ 30% no território piloto
              </p>
            </div>
            <div className="dados-card reveal d1">
              <h3 className="dados-card-title">Duplicidade de atendimentos e retrabalho entre serviços</h3>
              <p className="dados-card-body">
                <strong>Baseline:</strong> sem dados estruturados
                <br />
                <strong>Esperado:</strong> redução identificável em 90 dias
              </p>
            </div>
            <div className="dados-card reveal d2">
              <h3 className="dados-card-title">Adesão terapêutica (sessões realizadas vs. prescritas)</h3>
              <p className="dados-card-body">
                <strong>Baseline:</strong> não mensurável
                <br />
                <strong>Esperado:</strong> taxa de adesão acima de 70% na rede
              </p>
            </div>
            <div className="dados-card reveal">
              <h3 className="dados-card-title">Ações judiciais no território piloto</h3>
              <p className="dados-card-body">
                <strong>Baseline:</strong> dado local (a ser levantado com município)
                <br />
                <strong>Esperado:</strong> redução após 6 meses de cuidado coordenado
              </p>
            </div>
            <div className="dados-card reveal d1">
              <h3 className="dados-card-title">Satisfação das famílias</h3>
              <p className="dados-card-body">
                <strong>Baseline:</strong> não coletada
                <br />
                <strong>Esperado:</strong> NPS ≥ 70 ao fim do piloto
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="escalabilidade" className="section-valor">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Escalabilidade</p>
            <h2 className="section-headline">Começa pequeno. Escala com evidência.</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "46rem" }}>
              O CADU foi desenhado para crescer sem ruptura.
            </p>
          </div>

          <div className="modelo-grid" style={{ marginTop: "2rem" }}>
            <div className="modelo-card reveal">
              <div className="modelo-title">Nível 1 — Equipamento</div>
              <ul className="modelo-list">
                <li>1 UBS, 1 CAPS ou 1 escola. Piloto de 6 meses. Dados reais em 90 dias.</li>
              </ul>
            </div>
            <div className="modelo-card reveal d1">
              <div className="modelo-title">Nível 2 — Município</div>
              <ul className="modelo-list">
                <li>Expansão para toda a rede municipal. Integração com sistemas existentes.</li>
                <li>Contratação formal baseada em resultado do piloto.</li>
              </ul>
            </div>
            <div className="modelo-card reveal d2">
              <div className="modelo-title">Nível 3 — Regional</div>
              <ul className="modelo-list">
                <li>Articulação intermunicipal ou estadual. Base para política pública permanente.</li>
                <li>Financiamento via PPP, fundo estadual ou federal.</li>
              </ul>
            </div>
          </div>

          <p className="section-body reveal d1" style={{ marginTop: "2rem", maxWidth: "42rem", fontWeight: 700, color: "var(--black)" }}>
            O piloto de hoje é a evidência que viabiliza a política de amanhã.
          </p>
        </div>
      </section>

      <section id="parlamentares" className="section-setor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "48rem" }}>
            <p className="eyebrow">Para parlamentares</p>
            <h2 className="section-headline">Para gabinetes com pauta em neurodesenvolvimento</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              Se seu gabinete tem pauta em autismo ou neurodesenvolvimento, o CADU pode ser o instrumento de execução das
              políticas que você já defende.
            </p>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              Um piloto municipal estruturado gera:
            </p>
            <ul className="urgencia-list" style={{ marginTop: "0.75rem" }}>
              <li>Relatório técnico de impacto com dados reais</li>
              <li>Entregável concreto antes do fim da legislatura</li>
              <li>Base para escala e política pública permanente</li>
            </ul>
            <p className="section-body" style={{ marginTop: "1.5rem", maxWidth: "none", fontWeight: 700, color: "var(--black)" }}>
              Como viabilizar com emenda parlamentar:
            </p>
            <p className="section-body" style={{ marginTop: "0.65rem", maxWidth: "none" }}>
              O piloto pode ser financiado via emenda parlamentar individual, de comissão ou de bancada, por meio de
              convênio ou termo de fomento com o município parceiro.
            </p>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              <strong style={{ color: "var(--black)" }}>Valor estimado para piloto inicial (90–120 dias, um município):</strong>{" "}
              entre R$ 80.000 e R$ 150.000 dependendo do porte e da rede envolvida.
            </p>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none" }}>
              Sua equipe não precisa estruturar nada. Preparamos a proposta técnica, o escopo do piloto e os instrumentos
              jurídicos necessários.
            </p>
            <div style={{ marginTop: "1.75rem" }}>
              <a
                href="mailto:contato@cadu.health?subject=Apresenta%C3%A7%C3%A3o%20CADU%20-%20gabinete%20parlamentar"
                className="btn-red"
              >
                Solicitar apresentação para gabinete
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="legislacao">
        <div className="blobs">
          <div className="blob legislacao-blob" />
        </div>

        <div className="wrap">
          <div className="legislacao-header reveal">
            <p className="eyebrow">Alinhamento legislativo</p>
            <h2 className="section-headline">Insumos técnicos para execução e acompanhamento de políticas.</h2>
            <p className="section-body" style={{ marginTop: "1rem" }}>
              O programa opera em convergência com legislações de autismo, inclusão, educação e cuidado humanizado,
              viabilizando execução, monitoramento e avaliação de políticas públicas, sem substituição das competências
              do poder público.
            </p>
            <p className="section-body reveal d1" style={{ marginTop: "1.35rem", maxWidth: "52rem", lineHeight: 1.75 }}>
              O CADU foi desenvolvido e validado na Clínica Casa do Urso (São Paulo), primeiro núcleo operacional com dados
              estruturados e longitudinais reais — ambiente controlado que serviu de base para o modelo de implementação
              pública.
            </p>
            <p className="section-body reveal d1" style={{ marginTop: "1.25rem", maxWidth: "52rem", lineHeight: 1.75 }}>
              A Dep. Renata Abreu (Podemos) é referência nacional na pauta de autismo e neurodesenvolvimento no Congresso.
              Os projetos abaixo têm o CADU como infraestrutura natural de execução e monitoramento.
            </p>
          </div>

          <div className="pl-grid">
            <div className="pl-card green reveal">
              <span className="pl-code">PL 5034 / 2024 · Dep. Renata Abreu</span>
              <div className="pl-title">Terapia ABA no SUS para pessoas com TEA</div>
              <div className="pl-desc">
                Estabelece diretrizes para ABA na rede pública. A implementação em escala pressupõe monitoramento
                longitudinal de evolução, condição que uma infraestrutura de dados viabiliza o registro contínuo, sem
                substituir protocolos assistenciais locais.
              </div>
              <span className="pl-badge approved">✓ Aprovado na Comissão</span>
              <div className="pl-cadu-link">Relação com o marco: continuidade e registro na cadeia ABA, família e clínica</div>
            </div>

            <div className="pl-card reveal d1">
              <span className="pl-code">PL 1285 / 2026 · Dep. Renata Abreu</span>
              <div className="pl-title">Assistência psicológica contínua a cuidadores de autistas</div>
              <div className="pl-desc">
                &quot;Não existe cuidado de qualidade sem cuidar de quem cuida.&quot; A infraestrutura viabiliza o
                registro e a continuidade do acompanhamento de cuidadores entre atendimentos, respeitando consentimento e
                perfis de acesso.
              </div>
              <span className="pl-badge in-progress">⏳ Em tramitação</span>
              <div className="pl-cadu-link">Relação com o marco: registro e continuidade do apoio ao cuidador com governança de dados</div>
            </div>

            <div className="pl-card amber reveal">
              <span className="pl-code">PL 1430 / 2025 · Dep. Renata Abreu</span>
              <div className="pl-title">Formação continuada de professores para alunos com TEA</div>
              <div className="pl-desc">
                Professores capacitados precisam do perfil de desenvolvimento da criança. A camada de dados permite
                a articulação escola, clínica e família, mediante consentimento e controle de acesso, sem substituir
                arranjos pedagógicos e de saúde nas redes.
              </div>
              <span className="pl-badge in-progress">⏳ Em tramitação</span>
              <div className="pl-cadu-link">Relação com o marco: informação educacional articulada ao cuidado clínico</div>
            </div>

            <div className="pl-card green reveal d1">
              <span className="pl-code">Lei 15.126 / 2025</span>
              <div className="pl-title">Lei da Atenção Humanizada no SUS</div>
              <div className="pl-desc">
                Humanização do cuidado como diretriz federal, com escuta ativa, continuidade do cuidado e vínculo com a
                família. Instrumentos de registro e continuidade permitem operacionalizar a diretriz, no âmbito de cada
                gestão e contratação.
              </div>
              <span className="pl-badge approved">✓ Sancionada</span>
              <div className="pl-cadu-link">Relação com o marco: jornada e continuidade assistencial em suporte à lei</div>
            </div>
          </div>
        </div>
      </section>

      <section id="roi-publico" className="section-valor">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "48rem" }}>
            <p className="eyebrow">ROI público</p>
            <h2 className="section-headline">O custo de não ter dados</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "none", fontWeight: 700, color: "var(--black)" }}>
              Uma criança com autismo sem diagnóstico precoce e cuidado coordenado gera:
            </p>
            <ul className="urgencia-list" style={{ marginTop: "0.75rem" }}>
              <li>Custo judicial médio por ação de saúde: R$ 15.000–80.000 (fonte: CNJ)</li>
              <li>Anos de atendimento fragmentado sem evolução mensurável</li>
              <li>Pressão crescente sobre orçamentos de saúde, educação e assistência</li>
            </ul>
            <p className="section-body" style={{ marginTop: "1.5rem", maxWidth: "none", fontWeight: 700, color: "var(--black)" }}>
              Com infraestrutura de dados e coordenação:
            </p>
            <ul className="urgencia-list" style={{ marginTop: "0.75rem" }}>
              <li>Diagnóstico mais precoce dentro da janela de intervenção</li>
              <li>Redução de retrabalho e duplicidade entre serviços</li>
              <li>Base para decisão orçamentária com evidência real</li>
            </ul>
            <p className="section-body" style={{ marginTop: "1.25rem", maxWidth: "none", marginBottom: 0 }}>
              O piloto gera os primeiros dados em 90 dias.
            </p>
          </div>
        </div>
      </section>

      <section id="cuidado" className="section-arch">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Arquitetura de cuidado</p>
            <h2 className="section-headline">O cuidado já existe. O problema é que ele não conversa.</h2>
            <p className="section-body" style={{ marginTop: "1rem" }}>
              Cada ponto de atenção detém fragmentos de informação. A infraestrutura articula a jornada em registro
              longitudinal por criança, com vistas à continuidade clínica e a indicadores de gestão, nos limites fixados
              em lei e no contrato de cooperação.
            </p>
          </div>

          <div className="arch-panel reveal d1">
            <div className="arch-chain">
              <span className="arch-node">Família</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Clínica / profissionais</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Escola</span>
            </div>

            <div className="arch-hub">
              <div className="arch-hub-title">CADU</div>
              <p className="arch-hub-desc">Camada de dados, comunicação e acompanhamento longitudinal</p>
            </div>

            <div className="arch-chain">
              <span className="arch-node">CER / CAPS / UBS</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Regulação</span>
              <span className="arch-arrow" aria-hidden="true" />
              <span className="arch-node">Secretaria</span>
            </div>
          </div>
        </div>
      </section>

      <section id="governanca" className="section-gov">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">LGPD e governança</p>
            <h2 className="section-headline">Dados sensíveis exigem governança rigorosa.</h2>
          </div>
          <div className="gov-grid">
            {[
              "Consentimento",
              "Controle de acesso",
              "Anonimização",
              "Auditoria",
              "Segurança da informação",
              "Conformidade com LGPD",
              "Separação entre dado individual e dado de gestão",
            ].map((t, i) => (
              <div key={t} className={`gov-card reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proximo" className="section-proximo">
        <div className="blobs" aria-hidden="true">
          <div className="blob cta-blob" />
        </div>

        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="cta-eyebrow reveal">Contato</p>

          <h2 className="cta-headline reveal d1">
            O CADU não é um sistema.
            <br />
            É a infraestrutura que permite que o cuidado público funcione como sistema.
          </h2>

          <p className="cta-sub reveal d2">
            Pronto para estruturar pilotos municipais com base técnica, governança de dados e indicadores de impacto.
          </p>

          <div className="cta-btns reveal d3" style={{ flexWrap: "wrap", justifyContent: "center", rowGap: "10px" }}>
            <a href="mailto:contato@cadu.health?subject=Agendar%20reuni%C3%A3o%20t%C3%A9cnica%20-%20CADU%20PPP" className="btn-white">
              Agendar reunião técnica
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a href="mailto:contato@cadu.health?subject=Receber%20proposta%20de%20piloto%20-%20CADU" className="btn-outline">
              Receber proposta de piloto
            </a>
            <a
              href="mailto:contato@cadu.health?subject=Apresenta%C3%A7%C3%A3o%20institucional%20-%20CADU%20%C2%B7%20setor%20p%C3%BAblico"
              className="btn-outline"
            >
              Apresentação institucional
            </a>
            <a
              href="mailto:contato@cadu.health?subject=Apresenta%C3%A7%C3%A3o%20CADU%20-%20gabinete%20parlamentar"
              className="btn-outline"
            >
              Apresentação para gabinete parlamentar
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-left">CADU — Infraestrutura de Saúde Pública para Neurodesenvolvimento</div>
        <div className="footer-right">Saúde · Educação · Assistência · Dados Públicos · PPP</div>
      </footer>
    </>
  );
}
