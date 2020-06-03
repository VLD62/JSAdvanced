(function () {
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
            if (!validFaces.includes(face)) {
                throw new Error('Invalid Card Face!');
            }
            this._face = face;
            return;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            let validSuits = ['♠', '♥', '♦', '♣'];
            if (!validSuits.includes(suit)) {
                throw new Error('Invalid Card Suit!');
            }
            this._suit = suit;
            return;
        }
    }
    let Suits = {
        SPADES: "♠",
        HEARTS: "♥",
        DIAMONDS: "♦",
        CLUBS: "♣"
    }
    return {
        Suits: Suits,
        Card: Card
    }
}())
