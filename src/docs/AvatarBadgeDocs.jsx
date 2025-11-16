// AvatarBadgeDocs.jsx
import React from "react";
import Avatar from "../components/Avatar/Avatar";
import DocsLayout from "./DocsLayout/DocsLayout";

const AvatarBadgeDocs = () => {
  // Live example of different avatar variants
  const example = (
    <div
      className="avatar-preview"
      style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}
    >
      <Avatar size="sm" initials="AB" status="online" badgeCount={3} />
      <Avatar size="md" initials="CD" status="away" variant="glass" />
      <Avatar size="lg" src="https://i.pravatar.cc/100" status="offline" />
      <Avatar size="md" initials="EF" variant="gradient" badgeCount={5} />
      <Avatar size="lg" src="https://i.pravatar.cc/150" variant="gradient" status="online" badgeCount={1} />
    </div>
  );

  // Code snippet for docs
  const codeExample = `import Avatar from '...';

<Avatar size="sm" initials="AB" status="online" badgeCount={3} />
<Avatar size="md" initials="CD" status="away" variant="glass" />
<Avatar size="lg" src="https://i.pravatar.cc/100" status="offline" />
<Avatar size="md" initials="EF" variant="gradient" badgeCount={5} />
<Avatar size="lg" src="https://i.pravatar.cc/150" variant="gradient" status="online" badgeCount={1} />`;

  // Props table
  const propsTable = [
    { name: "size", type: "string", default: "'md'", description: "Avatar size: 'sm', 'md', or 'lg'" },
    { name: "src", type: "string", default: "—", description: "Image URL for avatar" },
    { name: "initials", type: "string", default: "—", description: "Fallback initials if image is not provided" },
    { name: "status", type: "string", default: "—", description: "User status indicator: 'online', 'away', 'offline'" },
    { name: "badgeCount", type: "number", default: "0", description: "Number badge displayed on avatar" },
    { name: "variant", type: "string", default: "'glass'", description: "Visual variant: 'glass', 'bordered', 'gradient'" },
  ];

  // Tips
  const tips = [
    "Use initials if user image is not available.",
    "Combine with status indicators to show online/offline presence.",
    "Badge counts are useful for notifications or messages.",
    "Gradient and glass variants add visual depth to your UI.",
  ];

  return (
    <DocsLayout
      title="Avatar & Badge"
      description={
        <>
          <strong>Avatar</strong> displays user profile images or initials with optional
          status indicators and badges. Use <code>size</code>, <code>variant</code>,
          <code>status</code>, and <code>badgeCount</code> to customize.
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

export default AvatarBadgeDocs;
