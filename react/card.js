const Card = ({ name, picture, id }) => {
	const { title, first, last } = name
	return (
		<div key={id}>
			<p> {[title, first, last].join(' ')} </p>
			<img src={picture.large} />
		</div>
	)
}

const Cards = () => {
  const { users } = useCustomHook()

  return (
		<div>
	    {
	    	users.length > 0 ? (
		      users.map((user) => (
		      	Card(user)
		      ))
		    ) : (
		      <tr>
		        <td> loading.. </td>
		      </tr>
		    )
		  }
		</div>
  );
}