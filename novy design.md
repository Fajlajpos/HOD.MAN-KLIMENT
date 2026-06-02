# Prompt: Design stránky – vizuální styl

Předělej celý design stránky **úplně od nuly**. Neriaď sa žiadnym existujúcim markdown súborom ani šablónou – jedinou výnimkou je `SEO, GEO.md`, toho sa drž. Všetko ostatné vizuálne staviaj celkom znovu podľa tohto zadania.

---

## Pocit a atmosféra

Stránka má působit jako **prémiový řemeslný prostor** – teplý, uzemněný, moderní, důvěryhodný. Zákazník se musí cítit jako doma, zároveň musí okamžitě vnímat kvalitu a profesionalitu.

Inspirace: **industriálně-teplý interiér** – kombinace tmavého kovu / betonu s teplým dřevem, zlatými detaily a měkkým světlem. Přesně jako na přiložených referenčních fotkách.

**Klíčové slovo celého designu: „teplá solidnost"** – ne sterilní, ne přehlcené, ale uzemněné a kvalitní. Moderní, ale ne studené.

---

## Barevná paleta

| Role | Barva | Hex |
|---|---|---|
| Hlavní pozadí (tmavé sekce) | Antracitová / tmavá šedá | `#1C1C1C` |
| Světlé sekce (střídání) | Teplá krémová / béžová | `#F5F0E8` |
| Primární akcent | Teplá zlatavá / jantarová | `#C8892A` |
| Hover / aktivní stav | Světlejší zlatá | `#E0A040` |
| Text na tmavém pozadí | Téměř bílá teplá | `#F0EDE6` |
| Text na světlém pozadí | Tmavý antracit | `#1C1C1C` |
| Sekundární text / popisky | Teplá šedá | `#8A8070` |
| Jemný border / oddělovač | Průhledná zlatá | `rgba(200,137,42,0.25)` |

> Žádná studená modrá, žádná agresivní červená, žádné fialové gradienty. Vše v teplých tónech – dřevo, kov, beton, zlatý odlesk.

---

## Textury a materiálové efekty (čistě CSS, bez externích obrázků textur)

- **Tmavé sekce:** jemný CSS gradient simulující hloubku – např. `linear-gradient(135deg, #1C1C1C 0%, #2A2A2A 100%)`, doplněný subtilní `::before` vrstvou s průhledností pro pocit povrchu
- **Hero sekce:** tmavé pozadí + fotka Jiřího + poloprůhledný overlay `rgba(28,28,28,0.65)` → text čitelný, foto viditelné a přítomné
- **Dřevěný motiv:** v sekci „O mně" a hero použij jako boční panel nebo pozadí fotografii dřeva (background-image) – přes ni text na poloprůhledném tmavém panelu. Efekt jako dřevěná stěna s kovovou cedulkou
- **Karty služeb:** tmavý antracit `#2A2A2A` + border `1px solid rgba(200,137,42,0.3)` + zlatá linka `3px` nahoře jako akcent
- **Přechody mezi sekcemi:** šikmý řez pomocí `clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%)` nebo SVG vlnka pro plynulý přechod tmavá ↔ světlá
- **CTA tlačítka:** zlatá výplň `#C8892A` + tmavý text + při hoveru `scale(1.03)` a světlejší zlatá

---

## Typografie

**Fonty z Google Fonts:**
- Nadpisy: **Playfair Display** (700) – elegantní serif, evokuje kvalitu a tradici řemesla
- Labely / tagy: **Montserrat** (500–600, uppercase, `letter-spacing: 0.1em`) – moderní kontrast k serify
- Tělo textu: **Inter** (400) – čistý, čitelný

**Velikosti:**
- H1 hero: `clamp(2.5rem, 5vw, 4rem)`
- H2 sekce: `2rem` Playfair Display
- Popisky karet: `0.85rem` Montserrat uppercase

---

## Layout a prostorování

- Velkorysé paddingování sekcí – min `5rem` nahoře i dole, vzduch je součástí designu
- Max-width obsahu: `1200px`, centrovaný
- Hero: dvousloupcový layout – text vlevo, foto Jiřího vpravo, foto mírně přesahuje okraj sekce dolů
- Grid služeb: `repeat(auto-fit, minmax(260px, 1fr))`
- Citát / motto: velký, centrovaný, Playfair Display italic, zlatý dekorativní symbol `"` jako velký pozadíový prvek
- Statistiky: horizontální řada, čísla oddělená zlatou svislou linkou
- **Sekce se striktně střídají:** tmavá → světlá → tmavá → světlá, nikdy dvě stejné za sebou

---

## Detaily které dělají rozdíl

- Zlaté podtržení nadpisů: `::after` pseudo-element, `width: 60px`, `height: 3px`, `background: #C8892A`, `margin-top: 0.5rem`
- Ikonky ve službách: outline ikony v tenkém zlatém kruhu (`border: 1px solid #C8892A`, `border-radius: 50%`)
- Recenze: tmavá karta + velké zlaté uvozovky nahoře + jméno zákazníka zlatě
- Formulář: tmavé inputy (`background: #2A2A2A`, `border: 1px solid rgba(200,137,42,0.4)`, `color: #F0EDE6`) + plovoucí label při focusu
- Floating CTA button: zlatý kruh s ikonou telefonu + jemná pulse animace
- Scrollbar: tenký, zlatý thumb
- Hover na kartách: lehké zvednutí `translateY(-4px)` + zlatý border zesiluje

---

## Co stránka nesmí být

- Žádná studená bílá/šedá šablona
- Žádné „plastové" či duhové gradienty
- Žádná stock-photo estetika
- Žádný přehlcený layout – méně je více, každý prvek má místo a důvod
- Žádný Bootstrap, žádné hotové UI kity – čistý custom CSS, vše ručně

---

## Ikony

Font Awesome 6 Free – **výhradně outline styl**, barva `#C8892A`