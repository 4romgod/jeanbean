# Repository Guidelines

## Project Structure & Module Organization
- Root HTML entry points live at `index.html`, `about.html`, `contact.html`, `testimonial.html`, and `404.html`. Keep page-specific content with its page file.
- Shared assets: styles in `css/` (theme, colors), scripts in `js/` (`main.js` for UI behaviors, `appointment.js` for form handling), images in `img/`, and third-party libs in `lib/`.
- Bootstrap overrides and other Sass tweaks belong in `scss/` (entry: `scss/bootstrap.scss`, partials in `scss/bootstrap/`). Generated vendor assets are copied into `build/` by the build step; edit sources, not the files under `build/`.

## Build, Test, and Development Commands
- `npm install` — install front-end dependencies.
- `npm run build` — copies Bootstrap, Animate.css, and Owl Carousel assets into `build/` for packaging or static hosting.
- Local preview: open `index.html` directly in a browser or serve the root with `python -m http.server 8000` to avoid CORS issues when loading assets.

## Coding Style & Naming Conventions
- HTML/JS/CSS use 4-space indentation; prefer semantic HTML and Bootstrap utilities before custom classes.
- JavaScript follows strict mode and jQuery-style helpers; keep function and variable names in `camelCase`.
- CSS class names use kebab-case; scope page-specific overrides with a page-level wrapper to avoid bleed.
- Keep vendor files untouched; add or upgrade third-party code via `npm` and the provided copy scripts.

## Testing Guidelines
- No automated test suite is configured; rely on manual QA across modern browsers and mobile widths.
- Verify interactive pieces (nav, carousel, appointment form) after asset updates. Re-run `npm run build` before a final pass to ensure vendor copies are current.
- When fixing a regression, describe the manual checks you performed in the PR (e.g., pages exercised, viewport sizes tried).

## Commit & Pull Request Guidelines
- Follow the existing history: short, imperative commit messages (e.g., “Fix hero spacing”, “Add contact details”).
- Keep commits focused; update only the assets you touched, and avoid committing `build/` unless the change requires new vendor copies.
- PRs should include: brief description of intent, linked issue (if any), screenshots or GIFs for visual changes, and notes on manual testing steps and environments.
