// import Avatar from "@mui/material/Avatar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserReview = () => {
  const userReviewData = [
    {
      name: "Sameer",
      review:
        "I have been using Daily Meal Service for 6 months and I am very satisfied with their service. They deliver fresh and tasty meals to my home or office, depending on my preference. The menu is varied and the portions are generous. The price is also very reasonable for the quality and convenience they offer. I highly recommend Daily Meal Service to anyone looking for a hassle-free and healthy meal option.",
      location: "Patia",
    },
    {
      name: "Smruti",
      review:
        "After trying several meal delivery services, I found Daily Meal Service to be the best. The food is consistently delicious, and I love the flexibility of having meals delivered to my home or office. The menu options are diverse, catering to different tastes and dietary needs, and the portion sizes are just right. Plus, the pricing is fair considering the quality and convenience. I highly recommend Daily Meal Service for anyone seeking a reliable and tasty meal solution.",
      location: "Info City",
    },
    {
      name: "Swati",
      review:
        "I've been a customer of Daily Meal Service for two months now, and I'm extremely pleased with their service. The meals are always fresh, flavorful, and arrive on time, whether I'm at home or at work. There's a good variety on the menu, so I never get bored with the options, and the portions are generous. The price is very reasonable for the convenience and quality provided. I would recommend Daily Meal Service to anyone in search of a convenient and nutritious meal delivery service.",
      location: "Acharya Bihar",
    },
    {
      name: "HR",
      review:
        "Daily Meal Service has exceeded my expectations. I've been using their service for several weeks, and the meals are consistently fresh and delicious. I appreciate the convenience of having meals delivered to either my home or office, depending on my schedule. The menu offers a great variety, ensuring I always have something new to try, and the portions are perfect. The cost is very reasonable, making it an excellent choice for anyone wanting hassle-free and healthy meals. I highly recommend giving Daily Meal Service a try.",
      location: "Niladri Bihar",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" flex flex-col w-11/12 gap-4">
      <Slider {...settings}>
        {userReviewData.map((user) => (
          <div
            className="bg-[#FF8911] max-h-max rounded-3xl px-8 py-4 flex flex-col justify-center items-center border-8 border-white"
            key={user.name}
          >
            <p className="text-white font-semibold">{user.review}</p>
            <div className="flex flex-col bg-[#fec72f] w-fit rounded-xl px-4 mt-4">
              <p className="text-[#765532] font-bold text-xl">{user.name}</p>
              <p className="text-[#765532] font-medium text-xl">
                {user.location}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UserReview;
