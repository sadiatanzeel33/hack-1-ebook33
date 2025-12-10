# Project Constitution: AI-Native Textbook for Physical AI & Humanoid Robotics

## Vision
To develop an AI-native technical textbook platform for Physical AI & Humanoid Robotics, enabling efficient content creation by authors and interactive learning for readers, powered by AI Agents and state-of-the-art deployment strategies. This project aims to support the next generation of AI skills development and potentially scale to various educational disciplines.

## Goals
*   Create a Docusaurus-based, content-rich ebook.
*   Implement advanced UI/UX features, including personalization and translation.
*   Integrate a Retrieval-Augmented Generation (RAG) chatbot for interactive learning.
*   Develop a robust authentication system.
*   Ensure the project is deployable and scalable using modern cloud-native practices.

## Phases

### Phase 1: Console / Core Utilities
*   **Objective:** Establish foundational tools and command-line interfaces for project management, data processing, or initial development tasks.
*   **Key Components:** `uv` installation, basic data processing scripts, task management utilities.

### Phase 2: Web Frontend (Docusaurus)
*   **Objective:** Develop and enhance the user-facing ebook platform.
*   **Key Components:** Docusaurus site, detailed chapter content, custom themes, navigation, UI elements.
*   **Current Status:** Docusaurus project is set up, content added, UI styled, placeholder authentication/personalization/translation buttons are in place.

### Phase 3: Chatbot & AI Agents
*   **Objective:** Integrate intelligent agents for interactive Q&A and advanced functionalities.
*   **Key Components:** FastAPI backend, Qdrant Vector DB, Neon Postgres, LLM integration (Gemini), RAG chatbot logic, Gemini Subagents and Agent Skills.
*   **Current Status:** Backend code structure (FastAPI, Qdrant, Embeddings, LLM, Gemini Agent) and frontend Chatbot UI are drafted.

### Phase 4: Kubernetes Deployment
*   **Objective:** Define and implement container orchestration for scalable and resilient deployment.
*   **Key Components:** Dockerization of services, Kubernetes manifests (Deployments, Services, Ingress).

### Phase 5: Cloud Infrastructure
*   **Objective:** Deploy the entire solution to a cloud provider, leveraging managed services for scalability, reliability, and cost-effectiveness.
*   **Key Components:** Cloud provider-specific configurations (e.g., AWS, GCP, Azure), CI/CD pipelines, monitoring and logging.

## Core Deliverables
*   AI/Spec-Driven Book (Docusaurus + Content + Speckit)
*   Integrated RAG Chatbot
*   Authentication (Signup/Signin)
*   Personalization Features
*   Translation Features
*   Deployment artifacts (Docker, Kubernetes, Cloud)

## Task Management
*   Detailed tasks for each phase will be tracked and managed. (Potentially using `speckit`'s task management features if available).

## Testing
*   Comprehensive unit, integration, and end-to-end tests will be developed for all components.
