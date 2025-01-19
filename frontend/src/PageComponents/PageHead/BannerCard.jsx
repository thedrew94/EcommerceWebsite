export default function BannerCard({ headingMain = "", headingSub = "", btnText = "", bannerClass = "" }) {
  return (
    <div className={`banner_card ${bannerClass}`}>
      <h3>{headingSub}</h3>
      <h2>{headingMain}</h2>
      <button className="btn_type_main banner_btn">{btnText}</button>
    </div>
  );
}
