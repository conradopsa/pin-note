import React from "react";
import { CardItem } from ".";
import { CardItemProps } from "./cardItem";
import './cardList.scoped.scss'

export interface CardListProps {
    cards: CardItem[]
}

export interface CardListState {
    cards: CardItemProps[]
}

class CardList extends React.Component<CardListProps, CardListState> {
    state!: CardListState;
    cards: CardItem[] = [];

    constructor(props: CardListProps) {
        super(props);

        this.cards = props.cards;
    }

    render() {
        return (
            <main>
                <div>
                    {this.cards.map((card, index) => (
                        <CardItem
                            title={card.props.title}
                            text={card.props.text}
                            key={index}
                        />
                    ))}
                </div>
            </main>
        );
    }
}

export default CardList;