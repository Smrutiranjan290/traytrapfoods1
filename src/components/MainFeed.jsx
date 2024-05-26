import UserReview from "./UserReview";

const MainFeed = () => {
  return (
    <main className="">
      <section className="bg-white w-full flex flex-col justify-center items-center mb-8 mt-2">
        <div className="w-11/12">
          <p className="text-[#222] text-3xl  font-semibold  md:leading-normal">
            Dont take our word for it
            <br />
            <span className="text-[#ff9900]"> take theirs...</span>
          </p>
        </div>
        <div className="flex gap-4 w-full justify-center">
          <UserReview />
        </div>
      </section>
    </main>
  );
};

export default MainFeed;
