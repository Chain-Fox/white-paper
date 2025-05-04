// Mermaid initialization script with responsive container
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Mermaid with optimized settings
  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    flowchart: {
      useMaxWidth: true, // Use max width to fit container
      htmlLabels: true,
      curve: 'basis'
    },
    themeVariables: {
      primaryColor: '#3a6aff',
      primaryTextColor: '#fff',
      primaryBorderColor: '#7a3aff',
      lineColor: '#3a6aff',
      secondaryColor: '#7a3aff',
      tertiaryColor: '#0a0a1a'
    }
  });

  // Function to process Mermaid code blocks
  function processMermaidCodeBlocks() {
    // Find all pre code blocks with language 'mermaid'
    document.querySelectorAll('pre code.language-mermaid').forEach(function(element) {
      // Get the parent pre element
      const preElement = element.parentNode;

      // Create a wrapper div for scrolling
      const wrapperDiv = document.createElement('div');
      wrapperDiv.className = 'mermaid-wrapper';

      // Create a div with class mermaid
      const mermaidDiv = document.createElement('div');
      mermaidDiv.className = 'mermaid';

      // Clean the content
      let content = element.textContent.trim();

      // Add directive for better rendering
      if (!content.includes('%%{')) {
        if (content.includes('graph')) {
          content = '%%{init: {"flowchart": {"curve": "basis"}} }%%\n' + content;
        } else if (content.includes('pie')) {
          content = '%%{init: {"pie": {"textPosition": 0.5}} }%%\n' + content;
        }
      }

      mermaidDiv.textContent = content;

      // Add mermaid div to wrapper
      wrapperDiv.appendChild(mermaidDiv);

      // Replace the pre element with the wrapper div
      if (preElement && preElement.parentNode) {
        preElement.parentNode.replaceChild(wrapperDiv, preElement);
      }
    });

    // Run mermaid rendering
    try {
      mermaid.init(undefined, '.mermaid');
    } catch (error) {
      console.error('Mermaid initialization error:', error);
    }
  }

  // Process Mermaid blocks after a short delay
  setTimeout(processMermaidCodeBlocks, 300);
});
