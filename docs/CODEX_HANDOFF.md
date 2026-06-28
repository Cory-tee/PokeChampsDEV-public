# CODEX_HANDOFF.md

# Blueprint / BlueprintDB -- Engineering Handoff

## Purpose

This document transfers the current project state to future AI coding
agents. Read this and `/docs/PROJECT_CONTEXT.md` before making changes.

## Vision

Blueprint is an offline-first competitive companion application for
Pokémon Champions. It is account-centric, not team-centric.

## Goals

-   Manage collection
-   Manage builds
-   Manage teams
-   Prepare Bring-3 selections
-   Track battle history
-   Provide analytics
-   Scale into a commercial-quality application

## Repository

    apps/
      blueprint/

    packages/
      blueprint-db/
      shared/

    docs/
    tools/

## Current Status

-   Sprint 1 foundation complete.
-   BlueprintDB is the current priority.
-   UI work is secondary until the data layer matures.

## Tech Stack

Frontend: - React - TypeScript - Tailwind - PWA

Data: - Dexie - Zod

Patterns: - Repository - Service Layer

Future: - Supabase sync

## Domain Model

PokemonSpecies PokemonInstance Move Ability Item Type Build Team
BattleLog Matchup Synergy Archetype

Species = immutable game data. Instances = user's owned Pokémon. Teams
reference Builds.

## Data Ownership

Static: - Pokémon - Moves - Items - Abilities - Learnsets

Meta: - Matchups - Tiering - Synergy

User: - Collection - Teams - Builds - Notes - Battle logs - Settings

## Architectural Decisions

-   Offline-first.
-   BlueprintDB owns business logic.
-   UI uses repositories/services only.
-   Keep static, meta, and user data separate.
-   Strict TypeScript.
-   Composition over inheritance.

## Immediate Priorities

1.  Complete domain models.
2.  Create Zod schemas.
3.  Define Dexie tables.
4.  Repository interfaces.
5.  Migration framework.
6.  Import pipeline.

## Future Features

-   Bring-3 engine
-   Team scoring
-   Account score
-   Acquisition advisor
-   Battle journal
-   Analytics
-   Cloud sync

## AI Workflow

1.  Read docs.
2.  Explain plan.
3.  List files.
4.  Implement.
5.  Run checks.
6.  Summarize.
7.  Recommend next sprint.

## Definition of Done

-   Compiles
-   Typed
-   Documented
-   Fits architecture
-   No duplicated logic
