import ReviewSlider from "./ReviewSlider";

export default function Summary() {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d95041.1562588085!2d12.646265!3d41.89208!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f7ce0595a00f1%3A0x2f676cf9803e6f0!2sVia%20Prenestina%2C%201376%2C%2000132%20Roma%20RM!5e0!3m2!1sit!2sit!4v1702096966765!5m2!1sit!2sit";

  return (
    <summary className="summary_section">
      <div className="map">
        <iframe
          title="Google Maps for Via Prenestina"
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="our_mission">
        <div className="our_mission_text">
          <h2>Our mission</h2>
          <p>
            Ci dedichiamo a fornire un&apos;esperienza di acquisto semplice e gratificante con tempi di consegna veloci, politiche di reso semplici e
            un servizio clienti eccellente.
          </p>
        </div>
        <ReviewSlider
          reviews={[
            { reviewUser: "user1", reviewBody: "some random text1" },
            { reviewUser: "user2", reviewBody: "some random text2" },
            { reviewUser: "user3", reviewBody: "some random text3" },
          ]}
        />
      </div>
    </summary>
  );
}
