# PjotrCasteel creator hub

Source for the canonical creator-level site:

> https://pjotrcasteel.github.io/

This repository is the public front door for the independent open-source projects created by PjotrCasteel.

## Product map

```text
PjotrCasteel
├── Causalia          standalone
├── Forge             family
│   ├── Forge.Delta
│   ├── Forge.Sync
│   └── Forge.Parse   planned
└── GORM              standalone
```

Forge.Parse belongs inside Forge and is not a separate ParseForge brand.

## Creator-level contract

The canonical design/documentation constitution is:

- [CREATOR_DESIGN_DNA.md](CREATOR_DESIGN_DNA.md)

The shared identity is based on principles, documentation structure, quality and authorship—not a shared CSS framework, runtime package or umbrella product.

## Deployment

The site is static HTML/CSS/JS and deploys through GitHub Pages using:

```text
.github/workflows/pages.yml
```

Before deployment, `validate.py` checks required files, canonical URLs, product architecture and Forge-family naming.

## Public surfaces

- Creator hub: https://pjotrcasteel.github.io/
- GitHub: https://github.com/pjotrcasteel
- NuGet: https://www.nuget.org/profiles/PjotrCasteel
- Machine-readable map: https://pjotrcasteel.github.io/llms.txt
