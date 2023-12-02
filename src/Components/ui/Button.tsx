type hrefProps = {
  content: string;
  href?: string;
  className?: string;
  type?: string | "base";
};
const Button: React.FC<hrefProps> = ({ href, type, content, className }) => {
  if (href) {
    return (
      <a
        href={href}
        className={`
          w-fit cursor-pointer rounded-lg border-b-4 border-mainBrown bg-secondaryBrown px-10 py-2 text-sm font-bold text-white transition-all duration-100 hover:border-b-[3px] hover:bg-[#a06d51] ${className}`}
      >
        {content}
      </a>
    );
  }
  if (type === "main") {
    return (
      <div
        className={`w-fit cursor-pointer rounded-md border-2 border-mainBrown bg-secondaryBrown px-6 py-2 text-[13px] font-bold text-white transition-all duration-200 hover:bg-mainBrown ${className}`}
      >
        {content}
      </div>
    );
  }
};

export default Button;
