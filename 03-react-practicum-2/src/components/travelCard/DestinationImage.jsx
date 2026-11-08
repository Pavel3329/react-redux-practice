function DestinationImage({ name, imageUrl, imageAlt }) {
  return (
    <div className="DestinationImage">
      <h2>{name}</h2>
      <img width="400" height="300" src={imageUrl} alt={imageAlt} />
    </div>
  );
}

export default DestinationImage;
