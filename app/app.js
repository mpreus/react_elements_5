/* w tle obrazek świąteczno-noworoczny */

class Omen extends React.Component {
	state = {
		omens: [
		"Nawet wciąż potykając się można zajść daleko. Pamiętaj tylko, by po każdym upadku wstać", 
		"Postaraj się trochę, a wszystko wróci do normy", 
		"Na święta mniej ciasta, więcej uwagi poświęć ludziom",
		"Pomóż szczęściu: naucz się czegoś, rozejrzyj się wkoło uważnie, przyłóż się do tego co robisz",
		"Każda zmiana zaczyna sie od jednego, tego pierwszego kroku",
		"Co masz zjeść dziś, zjedz jutro, co masz zrobić jutro, zrób dziś",
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
				<h1>Wróżba / sentecja na nowy rok</h1>
				<p>kliknij poniżej, by zobaczyć swoją wróżbę na nowy rok</p>
				<button onClick={this.handleOmenButtonClick}>Pokaż wróżbę</button>
				{this.state.option ? <h2>{this.state.option}</h2> : null}
			</div>
		)
	}
}

const App = () => {
	return (
		<Omen myOmens="myOmens"/>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
)