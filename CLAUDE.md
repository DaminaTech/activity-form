# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a simple static web application for a Romanian construction activity form ("Formular Activitate Zilnică"). The application is built as a single-page application with vanilla HTML, CSS, and JavaScript.

### Core Files

- `index.html` - Main form interface with Bootstrap UI components
- `script.js` - Form logic, data structures, and webhook integration
- `style.css` - Custom styling with CSS variables and responsive design

### Data Architecture

The application uses a complex hierarchical data structure defined in `script.js`:

- **Contracts** (`data.contracts`): Top-level contract types (industrial, administrativ, caseta)
- **Locations**: Geographic locations within contracts (currently only 'glina')
- **Buildings**: Specific structures within locations, each with a 'faza' (phase) property
- **Inspection Types**: Different types of inspections with associated checks and frequencies

### Form Flow Logic

1. **Contract Selection**: Populates location dropdown
2. **Location Selection**: Populates building dropdown  
3. **Building Selection**: Shows zone input (non-caseta) or inspection types (caseta)
4. **Activity Type**: Shows inspection or intervention sections
5. **Inspection Type**: Dynamically generates checkboxes based on contract and building
6. **Problem Identification**: Conditional required fields based on yes/no selection

### Key Features

- **Dynamic Form Sections**: Form sections show/hide based on user selections
- **Conditional Validation**: Required fields change based on activity type and problem identification
- **Photo Upload**: File handling with preview, drag-and-drop, and removal
- **Data Submission**: Sends to n8n webhook with structured FormData

### Caseta Contract Special Handling

The 'caseta' contract type has building-specific inspection types stored in `building.inspections` rather than global `contract.inspectionTypes`. Each inspection has frequency data at the check level.

## Development Commands

This is a static HTML application - no build process required. Simply open `index.html` in a browser or serve via any static file server.

## Form Validation

- Custom validation for required fields with Bootstrap styling
- Special validation for checkbox groups (verificări necesare) 
- Photo upload validation (minimum 1 photo required)
- Dynamic required field management based on form state

## Data Integration

- Submits to n8n webhook (`N8N_WEBHOOK_URL` in script.js)
- Includes computed fields: 'faza' (from building), 'frecventa' (from inspection type)
- Handles timezone patching for date fields