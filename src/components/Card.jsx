function Card(title, price) {
  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <div>Add to shopping cart</div>
    </div>
  );
}

export default Card;
