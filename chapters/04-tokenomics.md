---
layout: page
title: "Tokenomics"
---

## Tokenomics & Ecosystem Incentive Architecture
Chain-Fox adopts a utility-driven token model that aligns platform usage, open-source contribution, and stakeholder governance into a sustainable economic loop. The CFX token functions not just as a payment mechanism, but as a representation of rights, incentives, and long-term participation in the security infrastructure ecosystem.

### 4.1 Core Utilities of the CFX Token

CFX is designed to fulfill three key functions across the ecosystem:

* **Open-Source Incentives**
  Developers contribute new detection modules (Checkers) and receive CFX rewards from a dedicated incentive pool. High-quality tools gain repeated usage and compounding returns.

* **Service Access & Staking**
  Users stake CFX to unlock advanced detection features, including multi-chain contract scanning, OS-level threat monitoring, and AI-assisted risk profiling. Staking also entitles users to receive protocol-based yield, sourced from service revenue.

* **Governance & Dividends**
  CFX holders participate in key governance decisions — such as support for new chain integrations, security policy updates, and treasury deployment — and share in protocol profits via a revenue-sharing mechanism.

### 4.2 Economic Loop & Deflation Mechanics

The CFX economy is built on a positive feedback loop between developers, users, and token holders:

```mermaid
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'primaryColor': '#4A90E2',
    'primaryTextColor': '#F0F0F0',
    'primaryBorderColor': '#2C3E50',
    'lineColor': '#E0E0E0',
    'secondaryColor': '#F5F5F5',
    'tertiaryColor': '#F5F5F5',
    'fontFamily': 'Arial, sans-serif',
    'fontSize': '18px',
    'nodeBorder': '#2C3E50',
    'mainBkg': '#4A90E2',
    'clusterBkg': '#F5F5F5',
    'edgeLabelBackground': '#1A2634',
    'nodeTextColor': '#F0F0F0',
    'backgroundColor': '#1A2634'
  }
}}%%
flowchart TB
    A[Developers contribute Checkers] -->|1. Receive CFX rewards| B(Reward Pool)
    C[Users stake CFX] -->|2. Unlock features| D[Advanced Detection Services]
    D -->|3. Pay CFX| B
    B -->|4a. Dividends| E[CFX Holders]
    B -->|4b. Buyback & Burn| F[Reduced Circulating Supply]
    F -->|5. Deflation pressure| G[Token Appreciation]
    G -->|6a. Attract more developers| A
    G -->|6b. Attract more users| C

    classDef developers fill:#E57373,stroke:#C62828,stroke-width:2px,color:#F0F0F0,font-weight:bold;
    classDef users fill:#64B5F6,stroke:#1976D2,stroke-width:2px,color:#F0F0F0,font-weight:bold;
    classDef services fill:#81C784,stroke:#388E3C,stroke-width:2px,color:#F0F0F0,font-weight:bold;
    classDef rewards fill:#FFD54F,stroke:#FFA000,stroke-width:2px,color:#2C3E50,font-weight:bold;
    classDef tokenomics fill:#9575CD,stroke:#512DA8,stroke-width:2px,color:#F0F0F0,font-weight:bold;

    class A developers;
    class B,E rewards;
    class C users;
    class D services;
    class F,G tokenomics;
```

This loop ensures:

* Incentives for continuous development
* Locked token supply through staking
* Deflation through burn mechanisms
* Long-term alignment between usage and value capture

### 4.3 Stakeholder Incentive Model

#### **Developers**

* Earn CFX by contributing detection modules
* Passive yield as their tools are reused across the ecosystem
* Long-term value accrual through staking + governance access

#### **Users**

* Stake CFX to unlock premium services
* Earn staking rewards during lock-up periods
* Contribute to token scarcity by locking tokens in non-circulating pools

#### **Investors**

* Benefit from dual-value drivers:

    * **Yield participation** from protocol revenue
    * **Token appreciation** via reduced circulating supply and usage growth
* Reduced sell pressure via long-term staking commitments

### 4.4 Innovation Highlights in Token Design

* **Token = Equity**
  CFX represents both platform access and governance influence — moving beyond the “utility token” mold into functional digital equity.

* **Ecosystem Flywheel**
  Developer participation leads to more detection tools → Attracts more users → Increases demand for staking & payments → Recycles value to developers

* **Risk-Adjusted Rewards**
  A portion of staking returns can be redirected to insurance or buyback funds during security incidents, stabilizing the system during volatility.

The token value can be modeled using the following formula:

$$V_{CFX} = \frac{(U \times F \times S)}{C} \times (1 + G)$$

Where:
- $V_{CFX}$ = Token value
- $U$ = Active users
- $F$ = Average fee per user
- $S$ = Staking ratio (% of tokens staked)
- $C$ = Circulating supply
- $G$ = Governance premium

### 4.5 Recommendations for Execution

To operationalize this model, we suggest:

* **Transparent Allocation Plan**
  (e.g., open-source incentive pool, staking pool, team, and liquidity reserves)

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'darkMode': true,
    'primaryColor': '#3b7ea6',
    'primaryTextColor': '#f0f0f0',
    'primaryBorderColor': '#2c3e50',
    'lineColor': '#e0e0e0',
    'secondaryColor': '#233446',
    'tertiaryColor': '#1c2a38',
    
    'pie1': '#5C7CFA',
    'pie2': '#3DAA6B',
    'pie3': '#DDB71A',
    'pie4': '#D66049',
    'pie5': '#37A8BD',
    'pie6': '#7B68EE',
    
    'pieTitleTextSize': '25px',
    'pieSectionTextSize': '18px',
    'pieLegendTextSize': '18px',
    'pieSectionTextColor': '#f0f0f0',
    'pieSectionTextStroke': '#2c3e50',
    'pieSectionTextStrokeWidth': '1px',
    'backgroundColor': '#1a2634',
    'fontFamily': 'Segoe UI, Helvetica, Arial, sans-serif'
  }
}}%%
pie
    title CFX Token Allocation
    "Open-Source Incentives" : 30
    "Staking Rewards" : 25
    "Team & Advisors" : 15
    "Liquidity Reserves" : 15
    "Community Treasury" : 10
    "Initial Investors" : 5
```

> *The allocation prioritizes ecosystem growth (55%) with strong incentives for developers and users, while maintaining sufficient operational reserves (30%) and a modest allocation for early supporters (15%).*

* **Tiered Staking Mechanism**
  Dynamic yield and service access based on staked amount and lock duration

* **DAO Governance Modules**
  Allow token holders to vote on:

    * New chain/system support
    * Rule updates
    * Grant approvals for ecosystem development
