import React from 'react';
import './App.scoped.scss';
import { IconPlus, IconMenu2, IconList, IconGrid } from 'tabler-icons'
import iconHorse from '../assets/icon/horse.svg'
import CardList from './card/cardList';
import { CardItem } from './card';

export interface AppProps {

}

export interface AppState {
  cards: CardItem[]
}

class App extends React.Component<AppProps, AppState> {
  state!: AppState;
  cards: CardItem[] = [];

  insertNote(e: any) {
    this.cards.push(new CardItem({
      title: "Seu título...",
      text: "Seu texto..."
    }))

    const newState: AppState = { cards: this.cards };
    this.setState(newState)
  }

  render() {

    return (
      <section>
        <main>
          <header>
            <h2>Pin Note</h2><img alt="horse" src={iconHorse} />
          </header>

          <nav>
            <div className="left">
              <button onClick={this.insertNote.bind(this)}><IconPlus />Inserir</button>
            </div>
            <div className="right">
              <button><IconMenu2 /></button>
            </div>
          </nav>

          <CardList cards={this.cards} />

          <footer>
            <h4>Aprendendo React</h4>
            <p>
              Software desenvolvido por<br />
            Conrado Pinheiro &lt;conradopsa@gmail.com&gt;
            </p>
          </footer>
        </main>
        <aside>
          <input type='text'></input>
          Digite para pesquisar por título ou conteúdo.

          <hr />

          Exibir como
          <button><IconList />Lista</button>
          <button><IconGrid />Cards</button>

        </aside>
      </section>
    );
  }
}

export default App;
