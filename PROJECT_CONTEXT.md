# PROJECT_CONTEXT.md

# Blueprint -- Project Context

Version: 0.1

## Mission

Blueprint is an offline-first competitive companion application for
Pokémon Champions. Its purpose is to help players manage their account,
collection, teams, builds, items, battle history and long-term
progression.

## Core Principles

1.  Account-centric, not team-centric.
2.  Data-driven.
3.  Offline-first.
4.  Modular and maintainable.
5.  One canonical source of truth.

## Repository Structure

    apps/
      blueprint/

    packages/
      blueprint-db/

    docs/

    tools/

## Technology

Frontend: - React - TypeScript - Tailwind - PWA

Data: - Dexie (IndexedDB) - Zod - Repository pattern

Future: - Supabase sync - GitHub-hosted static metadata

## Domain Model

PokemonSpecies PokemonInstance Move Ability Item Build Team BattleLog
Matchup Synergy Archetype

PokemonSpecies is immutable game data. PokemonInstance represents an
owned Pokémon. A Build is reusable and can be assigned to teams. A Team
references Builds rather than raw Pokémon.

## Data Ownership

Static Game Data - Pokémon - Moves - Abilities - Items - Types -
Learnsets

Meta Data - Tiering - Matchups - Synergy - Recommendation weights

User Data - Collection - Teams - Builds - Battle logs - Notes - Settings

## Database Strategy

BlueprintDB is a reusable package.

Responsibilities: - Domain models - Zod schemas - Dexie database -
Repository interfaces - Migration framework - Import pipeline

The UI must never access IndexedDB directly. All access goes through
repositories/services.

## Milestones

Sprint 1 - Project foundation

Sprint 2 - Domain models

Sprint 3 - Schemas - Dexie

Sprint 4 - Repository layer

Sprint 5 - Import pipeline

Sprint 6 - Static game data

Sprint 7 - Team Builder

Sprint 8 - Bring-3 engine

Sprint 9 - Analytics

## ADRs

ADR-001 Blueprint is account-centric.

ADR-002 BlueprintDB is the canonical data layer.

ADR-003 Offline-first architecture.

ADR-004 Repositories isolate persistence.

ADR-005 Static game data is separated from user data.

## Definition of Done

Every feature: - typed - documented - validated - tested where
appropriate - migration-safe

## Instructions for AI Contributors

Before making changes: 1. Read this document. 2. Preserve existing
architecture. 3. Favor composition over inheritance. 4. Do not duplicate
domain logic. 5. Never hardcode Pokémon data in UI components. 6. Extend
BlueprintDB before extending the UI. 7. Keep commits focused and small.
