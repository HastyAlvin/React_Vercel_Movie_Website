import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPLay from "../assets/play-button.png";

function Banner() {
  return (
    <div className="bg-banner w-full h-[600px] bg-center bg-no-repeat bg-cover relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="w-full h-full  flex items-center justify-center space-x-[30px] px-4 relative z-20">
        <div className="flex flex-col space-y-2 items-baseline w-[50%]">
          <p className="Button  text-white font-medium text-md bg-gradient-to-r from-red-600 to-red-300 py-2 px-4">
            TV show
          </p>
          <div className="Film title  flex flex-col items-center space-y-4">
            <h1 className="text-white text-5xl">Nghe nói em thích toai</h1>
          </div>
          <div className="Rating  flex items-center space-x-3">
            <img src={IconRating} alt="rating" className="w-8 h-8" />
            <img src={IconRating} alt="rating" className="w-8 h-8" />
            <img src={IconRating} alt="rating" className="w-8 h-8" />
            <img src={IconRating} alt="rating" className="w-8 h-8" />
            <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
          </div>
          <div>
            <p className="text-white text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="Button ">
            <button className="p-2 text-white bg-black font-bold text-lg">
              Chi tiết
            </button>
            <button className="p-2 text-white bg-red-600 font-bold text-lg">
              Xem phim
            </button>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover "
            />

            <div className="w-full h-full  absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={IconPLay} alt="play" className="Icon w-16 h-16 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
