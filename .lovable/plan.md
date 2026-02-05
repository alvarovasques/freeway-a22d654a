

# Plano de Implementacao - Freeway Landing Page

## Resumo das Alteracoes

Este plano aborda tres modificacoes principais na landing page:

1. Remover o banner da parceria Olli IXIC
2. Criar uma nova secao de planos de Telefonia Movel com cards
3. Substituir a logo por uma versao local otimizada

---

## 1. Remover Banner Olli IXIC

**Arquivo:** `src/components/freeway/SolutionsSection.jsx`

Sera removido o bloco "Partnership Banner" (linhas 134-158) que exibe a parceria com Olli IXIC.

---

## 2. Nova Secao - Planos de Telefonia Movel

**Novo arquivo:** `src/components/freeway/MobilePlansSection.jsx`

Criacao de uma nova secao dedicada com cards no mesmo estilo visual do `PlansSection.jsx`, contendo:

**Cards de Telefonia Movel:**

| Plano | Preco | Recursos |
|-------|-------|----------|
| Movel Essencial | A partir de R$ 24,99/mes | 5G, Ligacoes ilimitadas, SMS |
| Movel Business | A partir de R$ 49,99/mes | 5G Premium, Roaming, Dados extras |
| Movel Enterprise | A partir de R$ 89,99/mes | Gestao de frota, Multi-linhas, Relatorios |

**Cards M2M (Machine-to-Machine):**

| Plano | Preco | Recursos |
|-------|-------|----------|
| M2M Basico | A partir de R$ 4,58/mes | Sensores, Telemetria basica |
| M2M Plus | A partir de R$ 9,99/mes | Rastreamento GPS, Alertas |
| M2M Enterprise | A partir de R$ 19,99/mes | API dedicada, Dashboards, SLA |

**Caracteristicas visuais:**
- Grid de 3 colunas (igual aos planos Speedway)
- Card central destacado como "Mais Popular"
- Icones diferenciados (Smartphone, Radio, Cpu)
- Badges com features principais
- Botao CTA conectando ao WhatsApp

---

## 3. Atualizar Logo

**Arquivos afetados:**
- Copiar `user-uploads://logo.png` para `src/assets/logo.png`
- Atualizar `src/components/freeway/Header.jsx` para usar import local

A logo sera importada como modulo ES6 em vez de URL externa, garantindo melhor performance e cache.

---

## 4. Atualizar Pagina Principal

**Arquivo:** `src/pages/Home.jsx`

Adicionar o novo componente `MobilePlansSection` na ordem correta da pagina.

---

## 5. Atualizar SolutionsSection

**Arquivo:** `src/components/freeway/SolutionsSection.jsx`

Remover o item "Telefonia Movel e M2M" do array de solutions, ja que tera secao propria.

---

## Ordem das Secoes na Pagina

```text
+----------------------------+
|         Header             |
+----------------------------+
|       HeroSection          |
+----------------------------+
|   InfrastructureSection    |
+----------------------------+
|      PlansSection          |  (Speedway)
+----------------------------+
|    MobilePlansSection      |  (NOVA)
+----------------------------+
|     SolutionsSection       |  (sem Olli, sem Movel)
+----------------------------+
|   SolutionsCalculator      |
+----------------------------+
|   InstitutionalSection     |
+----------------------------+
|       FAQSection           |
+----------------------------+
|       CTASection           |
+----------------------------+
|         Footer             |
+----------------------------+
```

---

## Secao Tecnica

### Arquivos a Modificar

| Arquivo | Acao |
|---------|------|
| `src/assets/logo.png` | Criar (copiar da logo enviada) |
| `src/components/freeway/Header.jsx` | Atualizar import da logo |
| `src/components/freeway/MobilePlansSection.jsx` | Criar novo componente |
| `src/components/freeway/SolutionsSection.jsx` | Remover banner Olli e item Telefonia Movel |
| `src/pages/Home.jsx` | Adicionar MobilePlansSection |

### Dependencias Utilizadas

- `framer-motion` - Animacoes de entrada
- `lucide-react` - Icones (Smartphone, Radio, Cpu, Check, Star, ArrowRight)
- Componentes UI existentes (Button, Badge)

### Estrutura do Novo Componente

```text
MobilePlansSection
|-- Header com titulo e badge
|-- Tabs (Movel / M2M) ou Grid unificado
|-- Grid de 3 cards por categoria
|-- Cards com:
    |-- Icone e titulo
    |-- Preco "A partir de"
    |-- Lista de features com checks
    |-- Botao CTA WhatsApp
```

