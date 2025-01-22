import BackgroundBlobAnimation from "./BackgroundBlobAnimation";
import ProductCard from "./ProductCard";
import ShowroomContent from "./ShowroomContent";
import Summary from "./Summary";

const productsData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export default function Body() {
  return (
    <main>
      <BackgroundBlobAnimation />
      <h3 className="main_title">Nuovi arrivi</h3>
      <ul>
        {productsData.map((product, i) => {
          return <ProductCard key={`product_${i}`} />;
        })}
      </ul>
      <div className="pagination">
        <button type="button">Visualizza tutti i prodotti</button>
        <button type="button">&lt;</button>
        <button type="button">&gt;</button>
      </div>
      <ShowroomContent />
      <Summary />
    </main>
  );
}
