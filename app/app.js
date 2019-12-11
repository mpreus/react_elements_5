class Omen extends React.Component {
	state = {
		omens: [
		"Nawet wciąż potykając się można zajść daleko. Pamiętaj tylko, by po każdym upadku wstać", 
		"Postaraj się trochę, a wszystko wróci do normy", 
		"Na święta mniej ciasta, więcej uwagi poświęć ludziom",
		"Pomóż szczęściu: naucz się czegoś, rozejrzyj się wkoło uważnie, przyłóż się do tego co robisz",
		"Każda zmiana zaczyna sie od pierwszego kroku",
		"Cała Twoja przyszłość zaczyna się dzisiaj",
		"Jeśli jesteś gotowy na porażki, sukcesy są w zasięgu ręki",
		"Człowiek, który nie robi błędów, zwykle nie robi niczego",
		"Mądrzy ciągle się uczą, głupcy wszystko umieją",
		"Różnica między niemożliwym a możliwym leży w Twojej determinacji"],
		option: null
	}
	
	handleOmenButtonClick = () => {
		const omensIndex = Math.floor(Math.random() * this.state.omens.length);
		this.setState({
			option: this.state.omens[omensIndex]
		})
	}
	
	render() {
		return (
			<div>
				<h1>Sentencja na nowy rok</h1>
				<p><b>kliknij, by zobaczyć sentencję na nowy rok</b></p>
				<button onClick={this.handleOmenButtonClick}>Pokaż</button>
				{this.state.option ? <div><h4>{this.state.option}</h4><br/><h3>Życzenia noworoczne sukcesów zawodowych, pomyślności i życiowego szczęścia składa wszystkim
			<a href="mailto:mpreus@onet.eu">Maciej Preus</a></h3></div> : null}
			</div>
		)
	}
}

const Footer = () => {
	return (
		<footer>
			<a target="_blank" href="http://www.freepik.com">Obrazek w tle z Freepik.com</a>
		</footer>
	)
}

const App = () => {
	return (
		<React.Fragment>
			<Omen myOmens="myOmens"/>
			<Footer />
		</React.Fragment>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)