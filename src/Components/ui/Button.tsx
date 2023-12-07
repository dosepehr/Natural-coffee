type hrefProps = {
  href?: string;
  className?: string;
  type?: string;
};
const Button: React.FC<React.PropsWithChildren<hrefProps>> = ({
  href,
  type = "base",
  className,
  children,
}) => {
  const styles: { main: string; count: string; base: string } = {
    main: "w-fit cursor-pointer rounded-md border-2 border-mainBrown bg-secondaryBrown px-6 py-2 text-[13px] font-bold text-white transition-all duration-200 hover:bg-mainBrown",
    count:
      "inline-block cursor-pointer rounded-full border border-gray-300 bg-transparent px-1 py-1 text-gray-700 transition-all duration-300 hover:border-gray-700",
    base: "w-fit cursor-pointer rounded-lg border-b-4 border-mainBrown bg-secondaryBrown px-10 py-2 text-sm font-bold text-white transition-all duration-100 hover:border-b-[3px] hover:bg-[#a06d51]",
  };
  if (href) {
    return (
      <a href={href} className={`${className} ${styles[type]}`}>
        {children}
      </a>
    );
  }
  return <div className={`${className} ${styles[type]}`}>{children}</div>;
};

export default Button;
