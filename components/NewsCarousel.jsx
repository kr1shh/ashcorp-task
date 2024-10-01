import NewsCard from "./ui/NewsCard"

const NewsCarousel = () => {
  return (
    <>
    <div className="w-full flex justify-center items-center gap-1 sm:gap-6">
      <NewsCard
        newsParagraph="
        &quot;Chairman's Vision Expands to India's Food Processing
          Industry, as He Collaborates with Minister Pashupathi Kumar
          Paras &quot;"
        imageUrl={"/assets/icons/news-img-1.png"}
      />

<NewsCard
        newsParagraph="
        &quot;Chairman's Vision Expands to India's Food Processing
          Industry, as He Collaborates with Minister Pashupathi Kumar
          Paras &quot;"
        imageUrl={"/assets/icons/news-img-2.png"}
      />

<NewsCard
        newsParagraph="
        &quot;Chairman's Vision Expands to India's Food Processing
          Industry, as He Collaborates with Minister Pashupathi Kumar
          Paras &quot;"
        imageUrl={"/assets/icons/news-img-3.png"}
      />
    </div>
    </>
  );
}

export default NewsCarousel