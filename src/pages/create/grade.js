export default function grade() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Get data from form.
    const data = {
      name: event.target.name.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = "http://localhost:3001/grades/create"

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
      // Send the form data to our forms API and get a response.
      const response = await fetch(endpoint, options)

      // Get the response data from server as JSON.
      const result = await response.json()
      alert(`The server sent back: ${result.data}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="create__grade">
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
