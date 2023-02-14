import MatchaCard from "../components/MatchaCard"
import Link from "next/link"

export default function Matcha({ matchaList }) {
  const matchas = matchaList.map((matcha) => {
    return (
      // <MatchaCard
      //   key={matcha.id}
      //   name={matcha.name}
      //   producer={matcha.producer}
      //   stock={matcha.stock}
      //   price={matcha.price}
      //   description={matcha.description}
      // />
      <li key={matcha._id}>
        <Link href={`/matcha/${encodeURIComponent(matcha._id)}`}>
          {matcha.name}
        </Link>
      </li>
    )
  })

  return (
    <div>
      <h1>Matcha</h1>
      <ul>{matchas}</ul>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3001/matcha/")
  const data = await response.json()

  return { props: { matchaList: data } }
}
