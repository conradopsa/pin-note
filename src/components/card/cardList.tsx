import React from "react";
import { CardItem } from ".";
import { CardItemProps } from "./cardItem";
import { CardListStyled } from "../../style/card";

export interface CardListProps {
  cards: CardItem[];
}

export interface CardListState {
  cards: CardItemProps[];
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
      <CardListStyled>
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
      </CardListStyled>
    );
  }
}

export default CardList;
