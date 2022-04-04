import React, { useState } from "react"
import axios from "axios"
import "./SearchForm.css"

export default function SearchForm() {
	let [keyword, setKeyword] = useState("")

	function search(e) {
		e.preventDefault()
		alert("searching")
	}

	function handleKeywordChange(e) {
		console.log(e)
	}

	return (
		<div className='SearchForm'>
			<form onSubmit={search}>
				<input type='search' onChange={handleKeywordChange} />
			</form>
		</div>
	)
}
