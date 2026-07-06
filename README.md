# Better Bombuj.si Extension

A lightweight, cross-browser extension for Chrome and Firefox that automatically remembers and selects your last-clicked video server on `bombuj.si`. 

Written in strongly-typed **TypeScript** and powered by **Bun** for near-instant builds.

---

## ✨ Features

* **Zero-UI Automation:** No annoying popup configurations or menus required. It works silently in the background.
* **Persistent Preference:** Remembers your preferred video server across sessions by securely listening to real user click interactions.
* **Resilient DOM Tracking:** Uses an optimized `MutationObserver` layout that captures dynamic elements nested deep inside asynchronously loaded containers.
* **Cross-Browser Safe:** Fully optimized for Manifest V3 execution contexts across Chrome and Firefox natively.
* **Clean Development Structure:** Automatically routes compiled distributions directly into a `.gitignore`-protected target workspace, separating source code from deployment packages.

---

## 📂 Project Layout

```text
├── node_modules/
├── tsconfig.json       # Strict TypeScript layout (configured for modules: "None")
├── package.json        # Dependencies and automation runner hooks
├── .gitignore          # Keeps build outputs and packages out of version control
├── content.ts          # Pure TypeScript Source File (Logic & Listeners)
├── manifest.json       # Master Extension Configuration
└── dist/               # 🚫 Git Ignored (Automatically built on run)
    ├── manifest.json   # Dropped here dynamically by the build pipeline
    └── content.js      # Clean compiled JavaScript running standard browser bindings