export default function BackgroundBlobAnimation() {
  return (
    <div className="blob">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" height="1500px" id="blobSvg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgba(241, 128, 85, 0.4)" }}></stop>
            <stop offset="100%" style={{ stopColor: "rgba(241, 128, 85, 0.4)" }}></stop>
          </linearGradient>
        </defs>
        <path fill="url(#gradient)">
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="M428.5,304.5Q400,359,350.5,382.5Q301,406,238,443Q175,480,120.5,431.5Q66,383,91,316.5Q116,250,113,199Q110,148,155.5,124Q201,100,247.5,107.5Q294,115,366,114Q438,113,447.5,181.5Q457,250,428.5,304.5Z;
    
    M434.5,318.5Q438,387,381.5,434.5Q325,482,259,454.5Q193,427,142,396.5Q91,366,98,308Q105,250,126.5,213Q148,176,171.5,128.5Q195,81,261,47Q327,13,360,79.5Q393,146,412,198Q431,250,434.5,318.5Z;
    
    M419.5,308Q409,366,361,405.5Q313,445,253.5,434.5Q194,424,134,401Q74,378,47.5,314Q21,250,53.5,190.5Q86,131,139.5,102.5Q193,74,258,50.5Q323,27,347,94.5Q371,162,400.5,206Q430,250,419.5,308Z;

    M428.5,304.5Q400,359,350.5,382.5Q301,406,238,443Q175,480,120.5,431.5Q66,383,91,316.5Q116,250,113,199Q110,148,155.5,124Q201,100,247.5,107.5Q294,115,366,114Q438,113,447.5,181.5Q457,250,428.5,304.5Z;
    "
          ></animate>
          &gt;
        </path>
      </svg>
    </div>
  );
}
