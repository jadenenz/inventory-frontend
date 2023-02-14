import Link from "next/link"

export default function MatchaCard({
  name,
  producer,
  description,
  price,
  grade,
  stock,
}) {
  return (
    <div className="matchaCard">
      <h1>{name}</h1>
      <p>{description}</p>
      <div className="matchaCard__info">
        Producer:{" "}
        <Link href={`/producers/${producer._id}`}> {producer.name} </Link> -
        Grade: {grade} - Stock: {stock} - Price: {price}
      </div>
    </div>
  )
}
