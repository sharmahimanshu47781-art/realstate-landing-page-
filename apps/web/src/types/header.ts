export interface NavLink {
  name: string;
  href: string;
  active?: boolean;
  hasDropdown?: boolean;
}

export const navLinks: NavLink[] = [
  { name: "HOME", href: "#", active: true },
  { name: "SHOP", href: "#", hasDropdown: true },
  { name: "LISTINGS", href: "#", hasDropdown: true },
  { name: "BLOG", href: "#", hasDropdown: true },
  { name: "PAGES", href: "#", hasDropdown: true },
  { name: "CONTACT", href: "#" },
];
