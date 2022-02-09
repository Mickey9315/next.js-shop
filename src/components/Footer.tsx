import { Github, Twitter } from "./Icons";

const iconClasses = "w-8 h-8 transition-opacity hover:opacity-75";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center py-16 space-x-4">
      <a href="https://github.com/eggsy" target="_blank" rel="noreferrer">
        <Github className={iconClasses} />
      </a>

      <a href="https://twitter.com/eggsydev" target="_blank" rel="noreferrer">
        <Twitter className={iconClasses} />
      </a>
    </footer>
  );
};

export default Footer;
