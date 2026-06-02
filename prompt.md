# Prompt: Webová stránka – Hodinový manžel Kliment

> Vytvoř kompletní webovou stránku pro živnostníka – **Jiří Kliment, hodinový manžel, Brno a okolí**.  
> Stránka musí být plně custom, žádné generické šablony. Vše na míru pro Jiřího.

---

## Podklady – reálné údaje klienta

### Kontaktní a osobní údaje
| Položka | Hodnota |
|---|---|
| Jméno | Jiří Kliment |
| Telefon | +420 736 545 899 |
| E-mail | kliment.jiri@post.cz |
| Adresa | Hlaváčova 458/43, 614 00 Brno |
| IČ | 72436662 |
| Oblast působení | Brno a okolí |

### Zkušenosti
- Více než **20 let v oboru**
- Z toho **15 let v Německu** (praxe v zahraničí = základ pro férovost a kvalitu německého standardu)

### Motto / citát (z jeho stávající stránky)
> „Úspěšný je ten, kdo dokáže postavit dům z cihel, které po něm ostatní hází."  
> — David Brinkley

### Ceník
- Hodinová sazba: **500 Kč / hod**
- Větší zakázky: **dohodou**
- Doprava po Brně: **500 Kč**

### Služby (přesný seznam z jeho webu)
1. **Elektrické instalace**
2. **Malování a tapetování**
3. **Stavební práce**
4. **Instalatérské práce**
5. **Údržba, opravy, montáže**

### Fotka majitele
- Cesta k souboru: `C:\Users\Fajlajp\Desktop\profilovka1.webp`
- Použij ji v hero sekci i v sekci „O mně" – fotka buduje důvěru zákazníků

### Fotky práce / před a po
- Zatím nejsou k dispozici → vytvoř **placeholder sekce** s popiskem „foto bude doplněno"

---

## Struktura stránky (povinné sekce)

### 1. Navigace (sticky)
- Logo / jméno: **Jiří Kliment – hodinový manžel**
- Položky: Úvod · Služby · O mně · Jak to funguje · Galerie · Ceník · Kontakt
- Hamburger menu na mobilu

### 2. Hero sekce
- Výrazný H1: např. *„Zručná pomoc pro váš dům a byt v Brně"*
- Podnadpis: krátká věta o spolehlivosti a zkušenostech
- Dva CTA buttony: **„Zavolat hned – +420 736 545 899"** + **„Nezávazná poptávka"**
- Fotka Jiřího (`profilovka1.webp`) prominentně v hero – buduje důvěru

### 3. Počítadlo statistik (animované při scrollu)
- **20+** let zkušeností
- **15** let praxe v Německu
- **500+** spokojených zákazníků *(odhadovaný údaj, lze upravit)*
- **500 Kč** hodinová sazba

### 4. Služby
- Každá ze 5 služeb jako karta s ikonou (SVG/Font Awesome outline), nadpisem a krátkým popisem
- Pod kartami menší zmínka o ceníku: *„500 Kč/hod · větší zakázky dohodou · doprava po Brně 500 Kč"*

### 5. O mně
- Foto Jiřího (`profilovka1.webp`) + text vedle sebe (na desktopu)
- Příběh: 20+ let v oboru, 15 let zkušeností z Německa, důraz na kvalitu a spolehlivost
- Motto / citát Davida Brinkleyho graficky zvýrazněný jako blockquote

### 6. Proč zrovna já (USP)
- 4–5 karet / ikon s hodnotami: zkušenosti z Německa · férová cena · spolehlivost · rychlý příjezd · práce s plnou odpovědností

### 7. Jak to funguje (3 kroky)
1. **Napíšete nebo zavoláte** – poptávka nezávazná
2. **Domluvíme se** – termín a cena předem
3. **Přijedu a udělám** – pořádně, včas, bez skrytých poplatků

### 8. Galerie
- Sekce „Před a po" – 4–6 placeholderů (šedé dlaždice s popiskem „foto bude doplněno")
- Sekce „Ukázky práce" – dalších 6 placeholderů

### 9. Reference / recenze
- 4–5 věrohodných recenzí od fiktivních zákazníků z Brna (jméno, čtvrť, hvězdičky, text)
- Týkají se různých služeb (elektrika, malování, instalatérka...)

### 10. Ceník (přehledná tabulka nebo karty)
- 500 Kč / hod
- Větší zakázky: dohodou
- Doprava po Brně: 500 Kč
- CTA pod ceníkem: „Pošlete poptávku – nacením přesně"

### 11. FAQ
- 6–7 otázek relevantních pro hodinového manžela v Brně, např.:
  - Jak rychle můžete přijet?
  - Platím i za dopravu?
  - Děláte práci na fakturu?
  - Jaká je minimální délka zakázky?
  - Pracujete i o víkendech?
  - Jak velké zakázky zvládnete?

### 12. Kontaktní sekce + finální CTA
- Formulář: jméno · telefon · e-mail · typ služby (select) · popis práce · souhlas GDPR
- Vedle formuláře: telefon (+420 736 545 899 – klikatelný `tel:`), e-mail, adresa, mapa Google
- Velký nadpis: *„Těším se na osobní setkání"* (z jeho stránky)

---

## Technické požadavky

- **Soubory zvlášť:** `index.html` / `style.css` / `script.js` → **žádný inline CSS ani inline JS**
- Plně responzivní, **mobile-first**
- Smooth scroll, sticky navigace, hamburger menu na mobilu
- Animace při scrollování (fade-in, slide-in) – subtilní, profesionální, pomocí IntersectionObserver
- Formulář s **JS validací** + vizuální feedback po odeslání (success stav, error stav)
- Lazy loading obrázků (`loading="lazy"`)
- Počítadla statistik animovaná (countUp efekt při vstupu do viewportu)

---

## SEO & GEO (povinné, vše konkrétně vyplněno)

- `<meta name="description">` – konkrétní, s klíčovými slovy a lokací Brno
- `<meta name="keywords">` – hodinový manžel Brno, elektrikář Brno, malíř Brno, instalatér Brno...
- Open Graph tagy (`og:title`, `og:description`, `og:image`, `og:url`)
- **Strukturovaná data JSON-LD** – schema `LocalBusiness`:
  ```json
  {
    "name": "Jiří Kliment – hodinový manžel",
    "telephone": "+420736545899",
    "email": "kliment.jiri@post.cz",
    "address": {
      "streetAddress": "Hlaváčova 458/43",
      "postalCode": "614 00",
      "addressLocality": "Brno"
    },
    "areaServed": "Brno a okolí",
    "priceRange": "500 Kč/hod"
  }
  ```
- Klíčová slova přirozeně v textech: *hodinový manžel Brno*, *elektrikář Brno*, *malování bytů Brno*, *instalatér Brno*, *opravy v bytě Brno*
- Heading hierarchie: **H1** (hero) → **H2** (sekce) → **H3** (podpoložky) – žádné přeskakování
- Alt texty u všech obrázků a placeholderů
- `sitemap.xml` + `robots.txt`
- Kanonická URL
- Rychlost: žádné zbytečné závislosti, max 1–2 Google Fonts

---

## Design

Podívej se na tyto soubory, které jsou součástí projektu, a **řiď se jejich pokyny**:

- `DESIGN SKILL.md`
- `SEO, GEO.md`
- `starter.md`

**Paleta:**
- Primární barva: teplá oranžová (např. `#E8650A` nebo podobná)
- Pozadí: bílá + světle šedá (`#F8F8F6`) pro střídání sekcí
- Text: tmavě šedá (`#1A1A1A`)
- Akcent / hover: o stupeň tmavší oranžová

**Fonty** (Google Fonts):
- Nadpisy: **Montserrat** (600–700)
- Text: **Inter** nebo **Open Sans** (400–500)

**Ikony:** SVG inline nebo Font Awesome 6 Free – **pouze outline styl**

**Zákaz:** žádný Bootstrap, žádné UI kity → čistý custom CSS, vše ručně psané

---

## Navíc – máš volnou ruku

Povinně zahrň:

- **Floating CTA tlačítko** (telefon nebo WhatsApp) – fixně viditelné při celém scrollování
- **Cookie lišta** – jednoduchá, GDPR-friendly, tlačítka „Přijmout vše" a „Jen nezbytné"
- **Back-to-top tlačítko** – zobrazí se po sescrollování dolů

Volitelně / doporučeno:
- WhatsApp button (+420 736 545 899) v kontaktní sekci i jako floating prvek
- Jemný parallax efekt na hero pozadí
- Hover animace na kartách služeb (lehké zvednutí / shadow)
- Progress bar načítání stránky (tenký proužek nahoře)

---

## Styl psaní textů

- Jazyk: **česky**, **vykání** (konzistentní tón z jeho stávající stránky)
- Přátelský, ale profesionální – jako řemeslník, ne korporace
- Krátké věty, konkrétní výhody, žádný marketing-speak
- CTA texty akční: *„Zavolejte dnes"*, *„Pošlete poptávku"*, *„Objednejte se"*
- Používej lokální spojení: *„v Brně a okolí"*, *„po Brně přijedu rychle"*

---

## Výstup – soubory v tomto pořadí

1. `index.html` – kompletní HTML struktura
2. `style.css` – veškeré styly
3. `script.js` – veškerý JavaScript (hamburger, animace, validace, countUp, cookie lišta)
4. `schema.json` – strukturovaná data LocalBusiness (JSON-LD, pro vložení do `<head>`)
5. `sitemap.xml`
6. `robots.txt`

> Všechny soubory musí být **ihned funkční a nasaditelné** bez dalších úprav (kromě doplnění fotek).