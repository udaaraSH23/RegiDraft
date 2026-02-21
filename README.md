# RegiDraft

**Author:** Udara Shanuka  
**Organization:** Axiolon Labs  
**License:** MIT  

## Overview

RegiDraft is a specialized React application designed to assist users in drafting Articles of Association (AoA) compliant with the Companies Act No. 07 of 2007 of Sri Lanka. It provides a guided wizard interface, educational resources, and a reference for Model Articles.

## Software Architecture & Design Patterns

This application follows a **Component-Based Architecture** typical of modern React applications, emphasizing separation of concerns, reusability, and maintainability.

### Key Design Patterns Used:

1.  **State Pattern**:
    *   The `Wizard` component manages the application's state (current step, active tab, user configuration) and alters its behavior and rendering based on this state.
    *   React's `useState` hook is the primary mechanism for this.

2.  **Strategy Pattern**:
    *   The `renderContent` function in `Wizard.tsx` acts as a strategy dispatcher. It selects the appropriate rendering strategy (Learn, Draft, Review, Reference) based on the `activeTab` state. This allows for easy extension of new tabs without modifying the core render logic significantly.

3.  **Container/Presentational Pattern**:
    *   **Container**: `Wizard.tsx` acts as a container, managing state, logic, and data flow.
    *   **Presentational**: Components like `Glossary.tsx`, `StructureExplainer.tsx`, and `ModelArticlesReference.tsx` are primarily presentational, receiving data or relying on static data to render UI.

4.  **Observer Pattern**:
    *   Implicitly used by React. Components "observe" state changes (props or hooks) and re-render automatically when data changes.

5.  **Module Pattern**:
    *   Data is encapsulated in separate modules (`src/data/modelArticles.ts`, `src/data/fullModelArticles.ts`) and exported for use. This keeps the data logic separate from the UI logic.

## Project Structure

*   `src/components/`: Contains all UI components.
    *   `Wizard.tsx`: Main controller component.
    *   `LandingPage.tsx`: Entry point and marketing view.
    *   `ModelArticlesReference.tsx`: Educational reference component.
*   `src/data/`: Contains static data and generator functions.
    *   `modelArticles.ts`: Logic for generating the specific "Short Form" legal document.
    *   `fullModelArticles.ts`: Full text of the Model Articles for reference.

## Usage

1.  **Landing Page**: Introduction and entry point.
2.  **Wizard**:
    *   **Draft**: Step-by-step form to configure the company details.
    *   **Learn**: Educational resources (Glossary, Structure).
    *   **Reference**: Full text of Model Articles with plain English explanations.
    *   **Review**: Final generation of the document for printing/copying.

## Disclaimer

This software is a tool for drafting and educational purposes. It does not constitute legal advice. Users should consult with a qualified professional before submitting documents to the Registrar of Companies.
