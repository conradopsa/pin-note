import React from "react";
import { CardItemStyled } from "../../style/card";

export interface CardItemProps {
  title: string;
  text: string;
}

interface CardItemState {}

export class CardItem extends React.Component<CardItemProps, CardItemState> {
  state!: CardItemState;
  props: CardItemProps;

  constructor(props: CardItemProps) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <CardItemStyled>
        <section>
          <header>{this.props.title}</header>
          <main>{this.props.text}</main>
        </section>
      </CardItemStyled>
    );
  }
}
