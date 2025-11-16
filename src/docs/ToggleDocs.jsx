// ToggleDocs.jsx
import React, { useState } from 'react';
import SoftToggle from '../components/SoftToggle/SoftToggle';
import DocsLayout from './DocsLayout/DocsLayout';

const ToggleDocs = () => {
  // State for interactive examples
  const [toggleStates, setToggleStates] = useState({
    rose: true,
    blush: false,
    accent: true,
    neo: false,
    disabled: true,
  });

  const handleToggle = (key) => {
    setToggleStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Live examples
  const example = (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <SoftToggle
        checked={toggleStates.rose}
        onChange={() => handleToggle('rose')}
        size="sm"
        variant="rose"
      />
      <SoftToggle
        checked={toggleStates.blush}
        onChange={() => handleToggle('blush')}
        size="md"
        variant="blush"
      />
      <SoftToggle
        checked={toggleStates.accent}
        onChange={() => handleToggle('accent')}
        size="lg"
        variant="accent"
      />
      <SoftToggle
        checked={toggleStates.neo}
        onChange={() => handleToggle('neo')}
        size="md"
        variant="neo"
      />
      <SoftToggle
        checked={toggleStates.disabled}
        onChange={() => handleToggle('disabled')}
        size="md"
        disabled
      />
    </div>
  );

  // Code snippet (static, for documentation)
  const codeExample = `<SoftToggle checked={true} onChange={() => {}} size="sm" variant="rose" />
<SoftToggle checked={false} onChange={() => {}} size="md" variant="blush" />
<SoftToggle checked={true} onChange={() => {}} size="lg" variant="accent" />
<SoftToggle checked={false} onChange={() => {}} size="md" variant="neo" />
<SoftToggle checked={true} onChange={() => {}} size="md" disabled />`;

  // Props table
  const propsTable = [
    { name: 'checked', type: 'boolean', default: 'false', description: 'Whether the toggle is on or off.' },
    { name: 'onChange', type: 'function', default: '—', description: 'Callback fired when the toggle changes state.' },
    { name: 'size', type: 'string', default: "'md'", description: "Size of the toggle. Options: 'sm', 'md', 'lg'." },
    { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the toggle interaction.' },
    { name: 'variant', type: 'string', default: "'rose'", description: "Color style of the toggle. Options: 'rose', 'blush', 'accent', 'neo'." },
  ];

  const tips = [
    'Use smaller sizes for inline forms or compact UIs.',
    'Variants can help match your theme colors.',
    'Disabled toggles show state but prevent interaction.',
    'Use toggles for binary options only (on/off).',
  ];

  return (
    <DocsLayout
      title="Soft Toggle"
      description={
        <>
          <strong>SoftToggle</strong> provides stylish, gradient/modern toggle switches.
          Use <code>rose</code>, <code>blush</code>, <code>accent</code>, or <code>neo</code> variants
          to match your UI theme.
        </>
      }
      codeExample={codeExample}
      propsTable={propsTable}
      tips={tips}
    >
      {example}
    </DocsLayout>
  );
};

export default ToggleDocs;
