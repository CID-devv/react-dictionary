import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import SearchForm from "./SearchForm"

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<header className='App-header'>React Dictionary App</header>
				<main>
					<SearchForm />
				</main>
				<footer className='App-footer'>
					<small>Coded by Cassandra Dauphin</small>
				</footer>
			</div>
		</div>
	)
}

export default App
