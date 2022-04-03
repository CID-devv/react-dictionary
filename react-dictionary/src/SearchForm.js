import React from "react"
import axios from "axios"
import "./SearchForm.css"

export default function Searchform() {
	function search(e) {
		e.preventDefault()
		alert("searching")
	}

	return (
		<div className='searchForm'>
			<form onSubmit={search}>
				<input type='search' />
			</form>
		</div>
	)
}
