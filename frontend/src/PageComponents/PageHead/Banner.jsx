import BannerCard from "./BannerCard";

export default function Banner() {
  return (
    <div className="banner">
      <BannerCard headingMain={"nuovi arrivi"} headingSub={"nuovi arrivi"} btnText={"Seleziona"} bannerClass={"banner_card_type1"} />
      <BannerCard headingMain={"in offerta"} headingSub={"in offerta"} btnText={"Seleziona"} bannerClass={"banner_card_type2"} />
      <BannerCard headingMain={"best sellers"} headingSub={"best sellers"} btnText={"Seleziona"} bannerClass={"banner_card_type3"} />
    </div>
  );
}
