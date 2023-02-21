import MatchaCard from "@/components/MatchaCard"
import Link from "next/link"

export default function MatchaDetail({ matchaData }) {
  console.log(matchaData)

  return (
    <div>
      <MatchaCard
        name={matchaData.name}
        producer={matchaData.producer}
        stock={matchaData.stock}
        price={matchaData.price}
        grade={matchaData.grade.name}
        description={matchaData.description}
      />
      <Link href="/matcha/">Back to all matcha</Link>
    </div>
  )
}

export async function getServerSideProps(context) {
  const pid = context.params.pid

  const response = await fetch(`http://localhost:3001/matcha/${pid}`)
  const data = await response.json()

  return { props: { matchaData: data } }
}
