const Hero = () => {
  return (
    <div className="bg-fixed bg-hero-pattern bg-cover bg-center md:px-[calc((100vw_-_var(--max-width))/2)]">
      <div className="flex flex-col justify-center items-start h-full min-h-screen px-8 w-full md:w-[650px] text-myPink uppercase font-bold leading-none">
        <h1 className="mt-20 mb-4 text-[2.5rem] md:text-[4rem] lg:text-[5rem] shadow-[3px_3px_rgba(255,0,0,1)] ">
          Los postres de Maria
        </h1>
        <p className="mb-8 text-[1.8rem] md:text-[2.5rem] lg:text-[3rem]">
          Con la receta de la abuela
        </p>
        <button className="btn text-[1.4rem] py-4 px-16 border-none bg-myRose rounded-none hover:bg-myYellow">
          Pedidos
        </button>
      </div>
    </div>
  );
};

export default Hero;
