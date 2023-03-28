class NegozioAlimentari {
	constructor(nome, indirizzo, prodotti, clienti) {
		this.nome = nome;
		this.indirizzo = indirizzo;
		this.prodotti = prodotti;
		this.clienti = clienti;
	}
	prodottiDisponibili() {
		let n = 0;
		for (let i = 0; i < this.prodotti.length; i++) {
			n += this.prodotti[i].quantita;
		}
		document.write(n + "<br>");
	}
	calcolaValoreProdotti() {
		let val = 0;
		for (let i = 0; i < this.prodotti.length; i++) {
			val += this.prodotti[i].quantita * this.prodotti[i].prezzo;
		}
		document.write(val + "<br>");
	}
}
