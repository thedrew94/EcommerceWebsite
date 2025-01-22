export default function ShowroomCard({ showroomImg = "", showroomImgAlt = "" }) {
  return (
    <li className="showroom_item">
      <div className="showroom_item_img">
        <img src={`/src/assets/img/${showroomImg}`} alt={showroomImgAlt} />
      </div>
      <div className="showroom_item_content">
        <h3 className="showroom_item_title">
          <span>C</span>oncept Room
        </h3>
        <p className="showroom_item_body">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis vero assumenda impedit deleniti, aperiam quo, laudantium doloremque
          soluta, dignissimos doloribus corporis aliquam! Corrupti ab quo modi maxime provident tenetur soluta?
        </p>
        <a href="#" target="_blank" className="showroom_item_visit">
          Dai un occhiata
        </a>
      </div>
    </li>
  );
}
