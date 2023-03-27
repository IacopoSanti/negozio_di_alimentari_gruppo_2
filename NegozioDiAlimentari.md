# Negozio di Alimentari

## Partecipanti Gruppo 2:

## Cecchini Gioele

## Conte Filippo

## Gregori Diego 

## Santi Iacopo

## Testo
Si vuole realizzare un sistema di gestione di un negozio di alimentari. 
Le entità principali del sistema sono i prodotti e i clienti. 
I prodotti hanno un nome, un codice univoco, un prezzo e una quantità disponibile in magazzino. I prodotti possono essere freschi ed in questo caso hanno una data di scadenza oppure confezionati ed in questo caso hanno un tipo di confezione: ad esempio, lattina, barattolo, scatola, ecc.
I clienti hanno un nome, un cognome, un codice univoco e un saldo disponibile per gli acquisti.
Il negozio deve poter calcolare il numero totale di prodotti disponibili in magazzino.
Il negozio deve poter calcolare il valore complessivo dei prodotti disponibili in magazzino.


## Immagine del diagramma UML
![Negozio di Alimentari](https://github.com/GioeleCecchinii/negozio_di_alimentari_gruppo_2/blob/main/Negozio_di_Alimentari.svg)


## Codice del diagramma UML

``` python
@startuml

class NegozioAlimentari {
  nome : string
  indirizzo : string
  prodotti[] : Prodotto
  clienti[] : Cliente
  prodottiDisponibili() : prodotti[]
  calcolaValoreProdotti() : float
}

class Cliente {
  nome : string  
  cognome : string
  codiceUnivoco : string
  saldo : float
}

class Prodotto {
  nome : string
  codiceUnivoco : string
  prezzo : float
  quantita : int
}

class ProdottoFresco {
  dataScadenza : date
}

class ProdottoConfezionato {
  confezione : string
}

Prodotto <|-- ProdottoFresco 
Prodotto <|-- ProdottoConfezionato 
NegozioAlimentari "1..1"---"0..N" Cliente : possiede 
NegozioAlimentari "1..1"---"0..N" Prodotto : possiede

@enduml
```
