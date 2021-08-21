import React, { useState, useEffect } from 'react'

const GetJs = () => {
	// const [js, setjs] = useState([])

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=5').then(async data => {
			console.log(await data.json())
			const JavaScript = JSON.stringify(data.results);
		})

	//   // setJavascript(response)
	}, [])

 //  return js
	return 
}

export default GetJs