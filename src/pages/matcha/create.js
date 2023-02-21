export default function Create({ producers, grades }) {
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Get data from form
    const data = {
      name: event.target.name.value,
      producer: event.target.producer.value,
      grade: event.target.grade.value,
      price: event.target.price.value,
      description: event.target.description.value,
    }

    // Send the data to the server in JSON format
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data
    const endpoint = "http://localhost:3001/matcha/create"

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },

      // Body of the request is the JSON we created above.
      body: JSONdata,
    }

    try {
      // Send the form data to our forms API and get a response
      const response = await fetch(endpoint, options)

      // Get the response data from server as JSON.
      const result = await response.json()
      alert(`The server sent back: ${result.data}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="Create">
      <form onSubmit={handleSubmit} className="create__form" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="producer">Producer</label>
        <select name="producer" id="producer">
          <option value="">--Please choose a producer--</option>
          {producers.map((producer) => (
            <option key={producer._id} value={producer._id}>
              {producer.name}
            </option>
          ))}
        </select>
        <label htmlFor="grade">Grade</label>
        <select name="grade" id="grade">
          <option value="">--Please choose a grade--</option>
          {grades.map((grade) => (
            <option key={grade._id} value={grade.name}>
              {grade.name}
            </option>
          ))}
        </select>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3001/matcha/create")
  const data = await response.json()

  return { props: { producers: data.producers, grades: data.grades } }
}
