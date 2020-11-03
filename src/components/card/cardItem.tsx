import React from "react";
import './cardItem.scoped.scss';
//import './cardItem.scss'

export interface CardItemProps {
    title: string;
    text: string;
}

interface CardItemState {

}

export class CardItem extends React.Component<CardItemProps, CardItemState> {
    state!: CardItemState;
    props: CardItemProps;

    constructor(props: CardItemProps) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <section>
                <header>{this.props.title}</header>
                <main>{this.props.text}</main>
            </section>
        );
    }
}