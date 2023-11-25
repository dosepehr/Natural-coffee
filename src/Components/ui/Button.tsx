type hrefProps = {
  content: string;
  href?: string;
  type?: string | "base";
};
const Button: React.FC<hrefProps> = ({ href, type, content }) => {
  const baseClassNames: string =
    "bg-secondaryBrown w-fit rounded-lg border-b-4 border-mainBrown px-10 py-2 text-sm font-bold text-white transition-all duration-100 hover:border-b-[3px] hover:bg-[#a06d51]";
  if (href) {
    return (
      <a href={href} className={baseClassNames}>
        {content}
      </a>
    );
  }
  return <div>Button</div>;
};

export default Button;
