class Prodotto {
    constructor(nome, codiceUnivoco, prezzo, quantita) {
        this.nome = nome;
        this.codiceUnivoco = codiceUnivoco;
        this.prezzo = prezzo;
        this.quantita = quantita;
    }
}

class ProdottoFresco extends Prodotto {
    constructor(nome, codiceUnivoco, prezzo, quantita, dataScadenza) {
        super(nome, codiceUnivoco, prezzo, quantita);
        this.dataScadenza = dataScadenza;
    }
}

class ProdottoConfezionato extends Prodotto {
    constructor(nome, codiceUnivoco, prezzo, quantita, confezione) {
        super(nome, codiceUnivoco, prezzo, quantita);
        this.confezione = confezione;
    }
}
