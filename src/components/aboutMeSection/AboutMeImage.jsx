const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="https://drive.google.com/file/d/1Li_uAIavNpE1Gne2mSLsbJewMVukPTK1/view?usp=sharing"
          alt="About Me Image"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
