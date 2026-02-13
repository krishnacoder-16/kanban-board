# Project: React Kanban Task Board

This document records how AI tools were used during the development of the React Kanban Task Board project.

## Project Understanding & Planning

**Prompt style used:**
> Explain how to build a Trello-like Kanban board using React step by step.

**Purpose:**
- Break the assignment into Level 1 and Level 2 requirements
- Understand React component architecture
- Plan implementation order (Core logic → UI polish → Persistence)
- Avoid writing unstructured or messy code

## React Component Architecture

**Prompt style used:**
> How should I structure components for a Kanban board in React?

**Purpose:**
- Learn component-based design
- Separate concerns properly:
  - `App.jsx` → state & logic
  - `Column.jsx` → filtered rendering
  - `TaskCard.jsx` → individual task behavior
  - `AddTask.jsx` → input logic
- Understand lifting state up

## State Management & useState Logic (Level 1)

**Prompt style used:**
> How should tasks be stored and updated using useState in React?

**Purpose:**
- Understand immutability principles
- Learn how to use:
  - `map()` for updating
  - `filter()` for deleting
- Implement:
  - Add task
  - Move task
  - Delete task
- Avoid directly mutating state

## Modern UI & Tailwind Integration

**Prompt style used:**
> How do I integrate Tailwind CSS in a Vite + React project properly?

**Purpose:**
- Fix Tailwind installation errors
- Understand Tailwind configuration
- Apply glassmorphism design
- Improve visual hierarchy
- Maintain responsive layout using grid/flex

## Debugging React Runtime Errors

**Prompt style used:**
> My React page went blank after adding new logic. Help me debug it step by step.

**Issue encountered:**
- Hooks used outside component
- Undefined variables in `TaskCard`
- Props not passed correctly

**Purpose:**
- Understand React hook rules
- Learn how white screens happen due to runtime errors
- Debug props drilling issues
- Fix incorrect state placement

**Outcome:**
- Moved edit state inside `TaskCard`
- Correctly passed `updateTask` through components
- Restored application functionality

## Editing Feature Implementation (Level 2)

**Prompt style used:**
> How do I implement inline editing in React with auto-save on blur?

**Purpose:**
- Implement `isEditing` toggle logic
- Use controlled inputs
- Understand `onBlur` vs `onKeyDown`
- Synchronize edited state using `useEffect`
- Prevent stale state bugs

## Priority System & Conditional Styling

**Prompt style used:**
> How can I add dynamic border colors based on task priority?

**Purpose:**
- Implement priority dropdown (High / Medium / Low)
- Apply conditional Tailwind classes
- Improve visual UX through color coding
- Avoid hardcoded styling

## Persistence with localStorage

**Prompt style used:**
> How can I persist React state using localStorage properly?

**Issue encountered:**
- Data not persisting after refresh
- Strict Mode overwriting localStorage

**Purpose:**
- Understand lazy initialization of state
- Avoid race conditions in `useEffect`
- Use: `useState(() => initialValue)`
- Save state using dependency-based `useEffect`

**Outcome:**
- Implemented clean persistence
- Tasks remain after page refresh
- Understood real-world client-side storage patterns

## Deployment on Vercel

**Prompt style used:**
> How do I deploy a Vite + React project on Vercel properly?

**Purpose:**
- Understand build process
- Confirm output directory (`dist`)
- Learn how automatic redeployment works
- Deploy successfully to production

**Outcome:**
- Live project deployed
- Verified production functionality
- Confirmed localStorage works per domain

## Documentation & Professional Practices

**Prompt style used:**
> How should I write a professional README and Prompts.md for an internship project?

**Purpose:**
- Document features clearly
- Explain learning process honestly
- Follow internship submission requirements
- Maintain transparency about AI usage

## 🧠 Overall Reflection

Using AI as a learning assistant helped me:
- Understand React architecture deeply
- Debug real runtime errors independently
- Apply modern UI principles
- Implement persistence correctly
- Deploy a production-ready application
- Think like a frontend engineer rather than just copying code

## ✅ Final Note

AI tools were used for:
- Concept clarification
- Debugging guidance
- Code structuring advice
- UI improvement suggestions

All final code was implemented, tested, and refined manually to ensure genuine understanding and learning.
