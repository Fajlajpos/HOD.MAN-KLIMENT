# 🚀 FAJLAJP'S STARTER PROMPTS ENGINE (v1.2)

Tento soubor obsahuje univerzální prompty pro Gemini a technický checklist pro bleskový start nového projektu. Všechny fáze se odkazují na tvůj hlavní soubor `DESIGN SKILL.md`.

---

## 🛠️ INSTALAČNÍ CHECKLIST (Spusť v otevřeném terminálu projektu)
Předtím, než začneš psát Gemini, odpal v terminálu, který máš otevřený ve složce projektu, tyto příkazy:

```bash
# 1. Inicializuj komponentové prostředí Shadcn (naklikej výchozí nastavení)
npx shadcn@latest init

# 2. Nainstaluj knihovny pro animace a ikony, které tvůj design engine využívá
npm install framer-motion lucide-react clsx tailwind-merge