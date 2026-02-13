

# Landing Page - Rede Neutra Freeway

## Resumo

Criar uma landing page dedicada para o produto Rede Neutra, voltada para donos de provedores de internet (ISPs), seguindo o mesmo padrao visual e estrutural das paginas MegaLink e PabxVirtual. Apos criar a pagina, integrar aos menus e links do site.

---

## Estrutura da Pagina

A pagina `src/pages/RedeNeutra.jsx` tera as seguintes secoes:

### 1. Header (padrao das landing pages)
- Navegacao interna: Vantagens, Como Funciona, Cobertura, Investimento, Voltar ao Site
- CTA: "Seja um Parceiro Freeway"
- Top bar com WhatsApp, endereco e horario

### 2. Hero Section
- Fundo escuro com gradiente laranja e animacoes de fibra optica (pontos de rede animados, mesmo padrao)
- **Headline:** "Expanda seu Provedor com a Rede Neutra da Freeway"
- **Subheadline:** "Utilize nossa infraestrutura de fibra optica de ultima geracao para alcancar novos clientes em Campo Grande sem custos de construcao de rede."
- **CTA:** "Seja um Parceiro Freeway"
- Lado direito (desktop): diagrama visual mostrando a rede compartilhada (Freeway no centro, ISPs conectados ao redor)

### 3. Secao Vantagens Estrategicas (fundo branco)
- 4 cards com icones:
  - Reducao Drastica de CAPEX
  - Agilidade (Time-to-Market)
  - Foco no Core Business
  - Qualidade Comprovada

### 4. Secao Como Funciona (fundo escuro cinza grafite)
- Detalhes tecnicos em cards:
  - VLAN Exclusiva (segregacao e isolamento)
  - Provisionamento Simplificado (OLT + credenciais)
  - Pontos de Presenca (POPs estrategicos)
  - Hardware Homologado (FiberHome, Huawei, Datacom)

### 5. Secao Cobertura (fundo branco)
- Destaque da capilaridade em Campo Grande (regioes Sul, Leste, Oeste, Norte, Central)
- Mencao a mais de 1.000 km de fibra e backbone de 100Gbps em anel

### 6. Secao Investimento e Parceria
- Porta: R$ 25,00 (franquia minima 100 portas)
- Porta com desconto: R$ 20,00 (com Link Freeway)
- CTA para contato

### 7. Footer proprio (padrao das landing pages)
- WhatsApp (67) 3025-3131
- Endereco: R. Goias, 1757, Campo Grande, MS
- Selo: "Uma empresa do Grupo Easy Net"
- Redes sociais e selos de confianca

---

## Integracoes no Site

### Arquivos a criar:
- `src/pages/RedeNeutra.jsx` - Landing page completa

### Arquivos a modificar:

- **`src/pages.config.js`** - Adicionar rota RedeNeutra
- **`src/components/freeway/Header.jsx`** - Adicionar "Rede Neutra" ao array `solucoesSubItems`
- **`src/components/freeway/SolutionsSection.jsx`** - Adicionar `link: '/RedeNeutra'` ao card da Rede Neutra para que o botao "Saiba mais" leve a nova pagina
- **`src/components/freeway/Footer.jsx`** - Adicionar "Rede Neutra" na lista de produtos

---

## Detalhes Tecnicos

- React + Framer Motion (animacoes whileInView, mesmo padrao das outras landing pages)
- Tailwind CSS com paleta laranja predominante e fundos cinza grafite para contraste
- Componentes reutilizados: Button, Card, CardContent, Badge (Shadcn/UI)
- ContactModal reutilizado para todos os CTAs
- Header e Footer internos a pagina (mesmo padrao de MegaLink.jsx e PabxVirtual.jsx)
- Icones Lucide: Network, Shield, Zap, Server, Globe, MapPin, Cpu, Settings, Building2, etc.
- Layout responsivo com grid lg:grid-cols-2 e lg:grid-cols-3
- Linguagem voltada para donos de provedores, enfatizando escalabilidade e crescimento

