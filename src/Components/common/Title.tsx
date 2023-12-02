type TitlePropsType = {
  mainTitle: string;
  secondTitle?: string;
};

const Title: React.FC<TitlePropsType> = ({ mainTitle, secondTitle }) => {
  return (
    <>
      <h2 className="mb-4 font-alex text-4xl">{mainTitle}</h2>
      <h2 className="mb-6 text-5xl font-extrabold">{secondTitle}</h2>
    </>
  );
};

export default Title;
