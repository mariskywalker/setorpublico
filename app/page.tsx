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
            <a href="#execucao">Execução</a>
          </li>
          <li>
            <a href="#modelo">Modelo</a>
          </li>
          <li>
            <a href="#ppp">PPP</a>
          </li>
          <li>
            <a href="#legislacao">Leis</a>
          </li>
          <li>
            <a href="#piloto-publico">Piloto</a>
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

              <p className="hero-body reveal d2" style={{ marginTop: "1rem" }}>
                O programa de cuidado integrado é viabilizado por uma camada de infraestrutura digital interoperável
                (CADU), com registro longitudinal, coordenação entre pontos de atenção e governança de dados conforme
                legislação e gestão local.
              </p>

              <div className="hero-btns reveal d3">
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
                  <span className="stat-num">
                    60<sup>%</sup>
                  </span>
                  <span className="stat-label">redução de custo com intervenção precoce efetiva</span>
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
              <li>Judicialização crescente em autismo e neurodesenvolvimento</li>
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

      <section id="execucao" className="section-setor">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Execução institucional</p>
            <h2 className="section-headline">Pronto para implementação imediata</h2>
            <p className="section-body" style={{ marginTop: "1rem" }}>
              O programa pode ser iniciado por meio de termo de cooperação técnica com municípios, permitindo implantação
              sem contratação inicial.
            </p>
            <p className="section-body" style={{ marginTop: "1rem" }}>
              A execução ocorre sobre a rede existente, com integração progressiva e geração de dados estruturados para
              decisão pública.
            </p>
          </div>

          <div className="setor-grid setor-grid-execucao" style={{ marginTop: "2.25rem" }}>
            {[
              "Entrada sem fricção financeira inicial",
              "Validação em ambiente real",
              "Geração de evidência para escala",
              "Preparação para financiamento e expansão",
            ].map((t, i) => (
              <div key={t} className={`setor-card reveal${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="modelo" className="section-valor">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Modelo de implementação</p>
            <h2 className="section-headline">Estrutura progressiva e orientada por resultado</h2>
          </div>

          <div className="modelo-grid">
            <div className="modelo-card reveal">
              <div className="modelo-title">Fase 1 — Cooperação técnica e piloto (0–120 dias)</div>
              <ul className="modelo-list">
                <li>Implantação da infraestrutura</li>
                <li>Capacitação de equipes</li>
                <li>Acompanhamento inicial de usuários</li>
              </ul>
            </div>
            <div className="modelo-card reveal d1">
              <div className="modelo-title">Fase 2 — Consolidação (4–12 meses)</div>
              <ul className="modelo-list">
                <li>Expansão progressiva</li>
                <li>Monitoramento de indicadores</li>
                <li>Ajustes operacionais</li>
              </ul>
            </div>
            <div className="modelo-card reveal d2">
              <div className="modelo-title">Fase 3 — Escala (12+ meses)</div>
              <ul className="modelo-list">
                <li>Ampliação municipal</li>
                <li>Integração regional</li>
                <li>Base para política pública permanente</li>
              </ul>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: "3rem" }}>
            <p className="eyebrow">Como iniciar no município</p>
            <ol className="piloto-ppp-steps" style={{ marginTop: "1rem" }}>
              <li className="reveal">
                <span className="piloto-ppp-n">1</span>
                <div>
                  <div className="step-title">Assinatura de termo de cooperação técnica</div>
                  <p className="step-desc">Instrumento de início com escopo e governança definidos.</p>
                </div>
              </li>
              <li className="reveal d1">
                <span className="piloto-ppp-n">2</span>
                <div>
                  <div className="step-title">Definição de território ou equipamento piloto</div>
                  <p className="step-desc">Seleção do recorte inicial e parceiros locais.</p>
                </div>
              </li>
              <li className="reveal d2">
                <span className="piloto-ppp-n">3</span>
                <div>
                  <div className="step-title">Capacitação das equipes locais</div>
                  <p className="step-desc">Rotinas, perfis de acesso, consentimento e protocolo operacional.</p>
                </div>
              </li>
              <li className="reveal d3">
                <span className="piloto-ppp-n">4</span>
                <div>
                  <div className="step-title">Início do acompanhamento com dados estruturados</div>
                  <p className="step-desc">Registro longitudinal ativo e coordenação entre pontos aderentes.</p>
                </div>
              </li>
              <li className="reveal d3">
                <span className="piloto-ppp-n">5</span>
                <div>
                  <div className="step-title">Geração de relatório técnico para decisão</div>
                  <p className="step-desc">Base para escala, financiamento e pactuações intersetoriais.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id="ppp" className="section-ppp">
        <div className="blobs" aria-hidden="true">
          <div className="blob ppp-blob" />
        </div>
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Parceria Público-Privada</p>
            <h2 className="section-headline">Estratégia de escala e sustentabilidade</h2>
            <p className="section-body" style={{ marginTop: "1rem" }}>
              O modelo prevê entrada via cooperação técnica, validação por piloto com dados reais, estruturação de
              financiamento público e implementação de parcerias público-privadas para escala. O CADU atua como camada de
              execução digital que conecta saúde, educação, assistência e famílias, sem substituição das atribuições
              institucionais.
            </p>
          </div>
          <div className="ppp-grid">
            <div className="ppp-card reveal">
              <div className="ppp-card-kicker">Saúde</div>
              <p className="ppp-card-text">UBS, CER, CAPS, hospitais e regulação.</p>
            </div>
            <div className="ppp-card reveal d1">
              <div className="ppp-card-kicker">Educação</div>
              <p className="ppp-card-text">Escolas e AEE.</p>
            </div>
            <div className="ppp-card reveal d2">
              <div className="ppp-card-kicker">Assistência social</div>
              <p className="ppp-card-text">CRAS e CadÚnico.</p>
            </div>
            <div className="ppp-card reveal d3">
              <div className="ppp-card-kicker">Família</div>
              <p className="ppp-card-text">Continuidade do cuidado.</p>
            </div>
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

      <section id="dados" className="section-dados">
        <div className="wrap">
          <div className="dados-head reveal">
            <p className="eyebrow">Arquitetura de dados</p>
            <h2 className="section-headline">Dados estruturados para cuidado e gestão pública.</h2>
            <p className="dados-hint">
              Dados pessoais e sensíveis exigem LGPD, consentimento, controle de acesso rigoroso e anonimização para
              indicadores de gestão.
            </p>
          </div>

          <div className="dados-grid">
            <div className="dados-card reveal">
              <h3 className="dados-card-title">Dados clínicos</h3>
              <p className="dados-card-body">Diagnóstico, terapias, evolução, comorbidades e medicação.</p>
            </div>
            <div className="dados-card reveal d1">
              <h3 className="dados-card-title">Dados comportamentais</h3>
              <p className="dados-card-body">Rotina, crises, comunicação, autonomia e marcos do desenvolvimento.</p>
            </div>
            <div className="dados-card reveal d2">
              <h3 className="dados-card-title">Dados educacionais</h3>
              <p className="dados-card-body">Escola, AEE, adaptação, interação social e demandas pedagógicas.</p>
            </div>
            <div className="dados-card reveal">
              <h3 className="dados-card-title">Dados familiares e sociais</h3>
              <p className="dados-card-body">Cuidador principal, engajamento familiar, rede de apoio e contexto de vulnerabilidade social.</p>
            </div>
            <div className="dados-card reveal d1">
              <h3 className="dados-card-title">Dados administrativos</h3>
              <p className="dados-card-body">Fila, regulação, frequência, tempo de espera e encaminhamentos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="setor" className="section-setor">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Setor público</p>
            <h2 className="section-headline">Do cuidado individual à informação para gestão.</h2>
          </div>
          <div className="setor-grid">
            {[
              "Redução de retrabalho entre profissionais",
              "Continuidade do histórico entre serviços",
              "Base real para gestão de filas e acesso",
              "Apoio à regulação",
              "Indicadores para secretarias",
              "Monitoramento de políticas",
            ].map((t, i) => (
              <div key={t} className={`setor-card reveal${i > 0 ? ` d${Math.min(i, 4)}` : ""}`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="piloto-publico" className="section-piloto-ppp">
        <div className="blobs" aria-hidden="true">
          <div className="blob piloto-blob" />
        </div>
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Piloto público</p>
            <h2 className="section-headline">Validação em operação real</h2>
            <p className="section-body" style={{ marginTop: "1rem", maxWidth: "44rem" }}>
              Abrangência inicial controlada, métricas explícitas e expansão baseada em evidência.
            </p>
          </div>

          <div className="piloto-ppp-grid">
            <div>
              <ol className="piloto-ppp-steps">
                <li className="reveal">
                  <span className="piloto-ppp-n">1</span>
                  <div>
                    <div className="step-title">Território e parceiros</div>
                    <p className="step-desc">Escolha de território ou equipamento público alinhado à gestão local.</p>
                  </div>
                </li>
                <li className="reveal d1">
                  <span className="piloto-ppp-n">2</span>
                  <div>
                    <div className="step-title">Cadastro inicial</div>
                    <p className="step-desc">Inclusão responsável de crianças e famílias, com consentimento e governança.</p>
                  </div>
                </li>
                <li className="reveal d2">
                  <span className="piloto-ppp-n">3</span>
                  <div>
                    <div className="step-title">Acompanhamento (90 dias)</div>
                    <p className="step-desc">Coleta estruturada e coordenação entre pontos de atenção aderentes ao arranjo.</p>
                  </div>
                </li>
                <li className="reveal d3">
                  <span className="piloto-ppp-n">4</span>
                  <div>
                    <div className="step-title">Relatório técnico</div>
                    <p className="step-desc">Indicadores de impacto e subsídios para decisão em saúde, educação e assistência.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="pilot-indicators reveal d2">
              <p className="pilot-indicators-title">Indicadores</p>
              <ul className="pilot-indicators-list">
                <li>Tempo até o primeiro atendimento</li>
                <li>Adesão familiar</li>
                <li>Coordenação entre profissionais</li>
                <li>Redução de duplicidade</li>
                <li>Evolução do desenvolvimento</li>
                <li>Satisfação das famílias</li>
                <li>Dados para gestão pública</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="financiamento" className="section-valor">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Viabilização e financiamento</p>
            <h2 className="section-headline">Estrutura de sustentabilidade progressiva</h2>
          </div>
          <div className="valor-grid" style={{ marginTop: "2.25rem" }}>
            {[
              "Emendas parlamentares para pilotos",
              "Recursos do SUS, educação e assistência",
              "Contratação institucional baseada em resultado",
              "Parcerias público-privadas para escala",
            ].map((t, i) => (
              <div key={t} className={`valor-card reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipamentos" className="section-equip">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Portas de entrada</p>
            <h2 className="section-headline">Possíveis pontos de conexão com a infraestrutura.</h2>
          </div>
          <div className="equip-grid">
            {[
              "CER",
              "CAPS / CAPSi",
              "UBS",
              "Hospitais",
              "Centros TEA",
              "Escolas públicas / AEE",
              "CRAS / assistência social",
              "Centrais de regulação",
            ].map((label, i) => (
              <div key={label} className={`equip-card reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
                {label}
              </div>
            ))}
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

      <section id="governanca" className="section-gov">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">LGPD e segurança</p>
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

      <section id="valor" className="section-valor">
        <div className="wrap">
          <div className="reveal">
            <p className="eyebrow">Para o município</p>
            <h2 className="section-headline">Por que implementar</h2>
          </div>
          <div className="valor-grid">
            {[
              "Melhoria da jornada das famílias",
              "Visibilidade de gargalos",
              "Base quantitativa para decisão",
              "Redução de desperdício",
              "Aumento de eficiência",
              "Fortalecimento de políticas públicas",
            ].map((t, i) => (
              <div key={t} className={`valor-card reveal${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
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
          <p className="cta-eyebrow reveal">Coordenação técnica</p>

          <h2 className="cta-headline reveal d1">
            O CADU não é um sistema.
            <br />
            É a infraestrutura que permite que o cuidado público funcione como sistema.
          </h2>

          <p className="cta-sub reveal d2">
            Pronto para estruturar pilotos municipais com base técnica, governança de dados e indicadores de impacto.
          </p>

          <div className="cta-btns reveal d3" style={{ flexWrap: "wrap", justifyContent: "center" }}>
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
