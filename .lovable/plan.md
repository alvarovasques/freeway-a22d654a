

# Landing Page "PABX Virtual" - Plano de Implementacao

## Resumo

Criar a landing page do produto PABX Virtual seguindo exatamente o mesmo padrao visual e estrutural das paginas Mega Link e Condominios, com cores laranja predominantes, e integrar aos menus e links do site.

---

## Estrutura da Pagina

A pagina `src/pages/PabxVirtual.jsx` seguira o mesmo padrao das outras landing pages (header proprio com nav de secoes, hero animado, secoes de conteudo, footer proprio com ContactModal).

### Secoes planejadas:

1. **Header** - Navegacao interna (Recursos, Planos, Vantagens, Suporte, Voltar ao Site) + CTA "Falar com Consultor"

2. **Hero Section** - Fundo escuro com gradiente laranja e elementos visuais representando telefonia (icones de headset, ramais, URA)
   - Headline: "Telefonia empresarial inteligente com PABX 100% na nuvem"
   - Subheadline: texto sobre eliminar custos com hardware, URA, gravacao de chamadas, portabilidade e gestao centralizada
   - CTA: "Solicitar Demonstracao Gratuita"

3. **Secao Recursos** - Cards com os principais recursos:
   - URA (Unidade de Resposta Audivel) completa
   - Gravacao de chamadas com armazenamento
   - Portabilidade numerica
   - Ramais ilimitados
   - Filas de atendimento inteligentes
   - Painel de gestao web

4. **Secao Vantagens** - Beneficios em relacao ao PABX fisico:
   - Zero investimento em hardware
   - Escalabilidade imediata
   - Mobilidade (atenda de qualquer lugar)
   - Integracao com sistemas existentes

5. **Secao Planos** - Precos com gatilho "A partir de":
   - Plano Basico: a partir de R$ 99,00/mes (inclui URA + gravacao)
   - Plano Profissional: a partir de R$ 199,00/mes (+ filas + painel avancado)
   - Plano Enterprise: sob consulta (personalizacao total)

6. **Secao Suporte** - Mesma estrutura do MegaLink (gestao completa, suporte 24/7, infraestrutura propria)

7. **Footer** - Padrao com contatos, selos e links

---

## Integracoes no Site

### Arquivos a criar:
- `src/pages/PabxVirtual.jsx` - Landing page completa

### Arquivos a modificar:

- **`src/pages.config.js`** - Adicionar rota `/PabxVirtual`
- **`src/components/freeway/Header.jsx`** - Adicionar "PABX Virtual" ao array `navItems` com `isRoute: true` e `href: '/PabxVirtual'`
- **`src/components/freeway/Footer.jsx`** - Alterar o link "PABX Virtual" nos produtos de `href: '#solucoes'` para `href: '/PabxVirtual'` com `isRoute: true`
- **`src/components/freeway/SolutionsSection.jsx`** - Adicionar `link: '/PabxVirtual'` ao card do PABX Virtual para que o botao "Saiba mais" leve a nova pagina

---

## Detalhes Tecnicos

- React + Framer Motion para animacoes de entrada (mesmo padrao whileInView)
- Tailwind CSS com paleta laranja predominante (from-orange-500, to-orange-600, text-orange-400, etc.)
- Componentes Shadcn/UI (Button, Card, Badge)
- ContactModal reutilizado para todos os CTAs
- Header e Footer internos a pagina (mesmo padrao de MegaLink.jsx e Condominios.jsx)
- Logo com classe `h-16 w-auto`
- Layout responsivo com grid lg:grid-cols-2 e lg:grid-cols-3

