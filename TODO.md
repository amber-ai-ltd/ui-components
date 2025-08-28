# Legal Centre TODO

## Critical Issues (Fix Immediately)

### [ ] Fix version consistency across all documents
- Privacy Policy shows v2.4 in sidebar but v2.1 in metadata
- Audit all documents and ensure single source of truth for versions
- Update LegalDocument component to enforce version consistency

### [ ] Fix dark/light mode theme inconsistencies  
- Test and fix color contrast in both light and dark modes
- Ensure proper CSS custom properties usage in legal components
- Fix text visibility issues and component styling
- Test sidebar, breadcrumb, and document content in both themes

### [ ] Implement proper active state for current document
- Current document in sidebar needs clear visual distinction
- Add bold text, different background, or accent border
- Update LegalSidebar component styling

## High Priority (This Sprint)

### [ ] Remove duplicate table of contents
- TOC appears both in sidebar navigation and document content
- Keep only document TOC, remove from navigation
- Simplify LegalPortal component structure

### [ ] Add proper heading hierarchy and semantic HTML
- Ensure h1 -> h2 -> h3 structure matches navigation
- Add proper ARIA labels and landmarks for screen readers
- Update LegalDocument component markup

### [ ] Improve visual hierarchy and contrast
- Increase text contrast for accessibility compliance
- Fix spacing inconsistencies across components
- Add proper visual feedback for interactive elements

## Medium Priority (Next Sprint)

### [ ] Fix anchor linking and TOC navigation
- Ensure table of contents links properly scroll to sections
- Add smooth scrolling and proper offset for sticky headers
- Update TableOfContents component functionality

### [ ] Improve mobile responsive design
- Fixed sidebar breaks on mobile devices
- Implement collapsible sidebar or slide-over pattern
- Update LegalPortal and LegalSidebar for small screens

### [ ] Add proper print styles for legal documents
- Legal documents need professional print formatting
- Add page breaks, headers, and proper typography
- Create print-specific CSS in legal styles

## Future Enhancements

### [ ] Implement search functionality for legal documents
- Add search input to sidebar
- Allow users to find specific legal terms across all documents
- Integrate with LegalSidebar component

### [ ] Add document status badges and metadata
- Show Current/Superseded/Draft status indicators
- Display last modified and effective dates prominently
- Show document relationships and dependencies

### [ ] Add document change tracking and history
- Show what changed between document versions
- Provide document revision history for transparency
- Add changelog functionality to legal components

## Component-Specific Tasks

### LegalPortal
- [ ] Fix layout for mobile screens
- [ ] Remove duplicate navigation elements
- [ ] Improve theme consistency

### LegalSidebar  
- [ ] Add active document highlighting
- [ ] Fix version display consistency
- [ ] Implement collapsible mobile pattern
- [ ] Add search input

### LegalDocument
- [ ] Fix heading hierarchy
- [ ] Improve print styles
- [ ] Add proper ARIA landmarks
- [ ] Fix dark mode text contrast

### LegalBreadcrumb
- [ ] Ensure proper navigation functionality
- [ ] Fix theme styling inconsistencies

### TableOfContents
- [ ] Fix anchor linking
- [ ] Add smooth scrolling
- [ ] Improve mobile layout

## Testing Requirements

- [ ] Test all components in light and dark modes
- [ ] Verify accessibility with screen readers
- [ ] Test print functionality across browsers
- [ ] Validate mobile responsive behavior
- [ ] Test anchor linking and scrolling behavior
