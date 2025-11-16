// src/pages/docs/LayoutDocs.jsx
import React from "react";
import DocsLayout from "../DocsLayout/DocsLayout";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import JazziePropsTable from "../../components/JazziePropsTable/JazziePropsTable";

const NavFooterDocs = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const navCodeExample = `
import NavBar from './NavBar';
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];
<NavBar brand="JazzieUI" links={navLinks} />
  `;

  const navProps = [
    { name: "brand", type: "string | node", default: "-", description: "The brand text or logo displayed on the navbar." },
    { name: "links", type: "array", default: "[]", description: "Array of link objects { label, path }." },
  ];

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Components", href: "#components" },
    { label: "Docs", href: "#docs" },
    { label: "Contact", href: "#contact" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" }
  ];

  const footerCodeExample = `
import Footer from './Footer';
<Footer 
  links={footerLinks} 
  footerText="© 2025 JazzieUI. Crafted with 🌸 and 💻"
/>
  `;

  const footerProps = [
    { name: "links", type: "array", default: "-", description: "Navigation links for the footer." },
    { name: "socialLinks", type: "object", default: "-", description: "Social media links object: { instagram, twitter, github }." },
    { name: "footerText", type: "string", default: "-", description: "Footer copyright or tagline text." },
  ];

  const tips = [
    "Combine NavBar and Footer in a layout component to create a full-page template.",
    "Keep NavBar links concise to avoid horizontal overflow.",
    "Footer should provide both navigation and social links for accessibility."
  ];

  return (
    <DocsLayout
      title="NavBar & Footer"
      description="This documentation page covers both NavBar and Footer components. You can preview, copy code, and view props for each component."
      tips={tips}
    >
      <section style={{ marginBottom: "3rem" }}>
        <h2>NavBar Example</h2>
        <NavBar brand="JazzieUI" links={navLinks} />
        <h2>Usage Example</h2>
        <pre><code>{navCodeExample}</code></pre>
        <JazziePropsTable propsData={navProps} />
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2>Footer Example</h2>
        <Footer links={footerLinks} />
        <h2>Usage Example</h2>
        <pre><code>{footerCodeExample}</code></pre>
        <JazziePropsTable propsData={footerProps} />
      </section>
    </DocsLayout>
  );
};

export default NavFooterDocs;
