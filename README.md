# Ahmad Zohaib — Portfolio

A responsive personal portfolio built from scratch with HTML, CSS, and vanilla JavaScript. It presents my skills, experience, education, and a filterable gallery of real projects, each with a detailed view.

**Live Demo:** [imahmadzohaib.github.io/AhmadZohaib](https://imahmadzohaib.github.io/AhmadZohaib/)

## Overview

The site is a single page with a fixed navigation bar, a mobile slide-in menu, and smooth in-page navigation. The Featured Projects section is data driven: every card and detail modal is rendered from a single JavaScript array, so adding or updating a project means editing one object rather than touching the markup.

## Features

- Fully responsive layout from mobile to desktop
- Mobile slide-in navigation with a fixed, scroll-aware header
- Data driven project gallery rendered from a single source array
- Category filtering across Web Apps, Frontend, and Technical
- Project detail modal with overview, tech stack, and key features
- Optional per-project screenshot support with a gradient fallback tile
- Skills, professional experience, education, and contact sections

## Tech Stack

- HTML5
- CSS3 (hand written, responsive)
- JavaScript (vanilla, no frameworks)

## Featured Projects

| Project | Category | Description |
| --- | --- | --- |
| Finance App | Web App | Full stack personal finance tracker built on Nuxt 4 and Supabase. |
| Nuxt Dashboard | Web App | Admin dashboard shell with analytics and an interactive calendar. |
| Medical Dashboard — Ember | Web App | Hospital dashboard for patient flow, occupancy, and revenue analytics. |
| Recipe App | Frontend | Fast recipe search powered by TheMealDB with detail modals. |
| Portfolio | Frontend | This site, a responsive personal portfolio with a project showcase. |
| Word Guessing Game | Technical | Console word search puzzle written in C++. |
| University Course Registration | Technical | CLI course registration engine built on hand rolled data structures. |
| Farm Management | Technical | Console farm records system in C++17 showcasing clean OOP design. |

## Project Structure

```
.
├── index.html          # Page markup and content
├── main.js             # Menu, scroll header, project data + rendering, modal
└── src/
    ├── assets/
    │   └── style.css   # All styles
    └── *.png           # Logo, profile photo, and project screenshots
```

## Getting Started

No build step or dependencies are required. Clone the repository and open the page.

```bash
git clone https://github.com/imahmadzohaib/AhmadZohaib.git
cd AhmadZohaib
```

Then open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Adding or Editing a Project

Projects are defined in the `PROJECTS` array in `main.js`. Each entry controls its card and detail modal:

```js
{
  id: 'finance',
  title: 'Finance App',
  category: 'web',            // web | frontend | technical
  badge: 'Full Stack',        // optional ribbon
  icon: I.chart,              // fallback tile icon
  image: 'src/finance.png',   // optional screenshot; omit to use the gradient tile
  blurb: 'Short card summary.',
  tech: ['Nuxt 4', 'Supabase'],
  overview: 'Longer paragraph shown in the modal.',
  features: ['Feature one', 'Feature two'],
  github: 'https://github.com/...',
  live: 'https://...'         // leave empty to show "Demo coming soon"
}
```

Set `image` to a path inside `src/` to show a real screenshot on the card and as the modal banner. When it is omitted, the project falls back to a gradient tile with its category icon.

## Contact

- **Portfolio:** [imahmadzohaib.github.io/AhmadZohaib](https://imahmadzohaib.github.io/AhmadZohaib/)
- **GitHub:** [github.com/imahmadzohaib](https://github.com/imahmadzohaib)

## License

Released under the MIT License. Feel free to use it as a reference for your own portfolio.
