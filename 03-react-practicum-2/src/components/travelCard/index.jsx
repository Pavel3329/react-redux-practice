import DestinationImage from "./DestinationImage.jsx";
import DestinationInfo from "./DestinationInfo.jsx";
import DestinationStats from "./DestinationStats.jsx";

function TravelCard({ cardInfo }) {
  return (
    <div className="TravelCard">
      <DestinationImage
        name={cardInfo.name}
        imageUrl={cardInfo.imageUrl}
        imageAlt={cardInfo.name}
      />

      <DestinationInfo description={cardInfo.description} />

      <DestinationStats stats={cardInfo.stats} />
    </div>
  );
}

export default TravelCard;
