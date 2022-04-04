import React, { useState } from "react"
import axios from "axios"
import Results from "./Results"
import "./SearchForm.css"

export default function SearchForm() {
	let [keyword, setKeyword] = useState("")
	let [results, setResults] = useState(null)

	function handleResponse(response) {
		setResults(response.data[0])
	}

	function search(e) {
		e.preventDefault()
		alert(`searching for ${keyword}`)

		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`

		axios.get(apiUrl).then(handleResponse)
	}

	function handleKeywordChange(e) {
		setKeyword(e.target.value)
	}

	return (
		<div className='SearchForm'>
			<form onSubmit={search}>
				<input type='search' onChange={handleKeywordChange} />
			</form>
			<Results results={results} />
		</div>
	)
}
