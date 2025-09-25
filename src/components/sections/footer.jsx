import React from 'react';

const footerLinks = [
  {
    title: "OVERVIEW",
    links: [
      { name: "Product", href: "#" },
      { name: "Features", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { name: "Request Demo", href: "#" },
      { name: "Email", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "X / Twitter", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <p className="text-caption font-medium uppercase tracking-widest text-muted-foreground mb-6">
                {column.title}
              </p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-body-regular text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="mt-16 mb-8 border-border" />
        <p className="text-center text-caption text-muted-foreground">
          © 2025 Rogo AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;