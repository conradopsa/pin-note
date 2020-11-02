import React, { useState } from 'react';
import './App.scss';
import { IconPlus, IconMenu2, IconList, IconGrid } from 'tabler-icons'
import iconHorse from './assets/icon/horse.svg'

interface ICard {
  title: string,
  text: string
}

export interface AppProps {

}

export interface AppState {
  cards: ICard[]
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = { cards: [] }

  cards: ICard[] = [];

  insertNote(e: any) {
    this.cards.push({ title: "Seu título...", text: "Seu texto..." })

    const newState: AppState = { cards: this.cards };

    this.setState(newState)
  }

  render() {

    return (
      <section>
        <main>
          <header>
            <h2>Pin Note</h2><img src={iconHorse} />
          </header>

          <nav>
            <div className="left">
              <button onClick={this.insertNote.bind(this)}><IconPlus />Inserir</button>
            </div>
            <div className="right">
              <button><IconMenu2 /></button>
            </div>
          </nav>

          <main id="cards">
            <div>
              {this.cards.map((card, index) => (
                <div className="card" key={index}>
                  <header>{card.title}</header>
                  <main>{card.text}</main>
                </div>
              ))}
            </div>
          </main>

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
