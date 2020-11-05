import React from "react";
import {
  IconPlus,
  IconMenu2,
  IconList,
  IconGrid,
  IconCircleCheck,
} from "tabler-icons";
import CardList from "./card/cardList";
import { CardItem } from "./card";
import {
  Button,
  IconButton,
  TextField,
  ThemeProvider,
} from "@material-ui/core";

import { theme } from "../style/theme";
import { RightDrawerStyled } from "../style/custom-material";
import { AppStyled } from "../style/AppStyled";

import { ReactComponent as IconHorse } from "../assets/icon/horse.svg";

export interface AppProps {}

export interface AppState {
  showASide: boolean;
  cards: CardItem[];
}

class App extends React.Component<AppProps, AppState> {
  state!: AppState;
  cards: CardItem[] = [];
  showASide: boolean = false;

  insertNote(e: any) {
    this.cards.push(
      new CardItem({
        title: "Seu título...",
        text: "Seu texto...",
      })
    );

    const newState: AppState = { ...this.state };
    newState.cards = this.cards;

    this.setState(newState);
  }

  showOrHideASide() {
    const newState: AppState = { ...this.state };

    this.showASide = !this.showASide;

    newState.showASide = this.showASide;
    this.setState(newState);
  }

  hideASide() {
    const newState: AppState = { ...this.state };
    this.showASide = false;

    newState.showASide = this.showASide;
    this.setState(newState);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppStyled>
          <section>
            <RightDrawerStyled
              anchor="right"
              open={this.showASide}
              onClose={this.hideASide.bind(this)}
            >
              <TextField />

              <div className="main-content-drawer">
                <p>Digite para pesquisar por título ou conteúdo.</p>
                <hr />
                <p>Exibir como</p>
                <Button>
                  <div className="inline">
                    <IconGrid />
                    Cards
                  </div>
                  <IconCircleCheck color="#11cb5f" />
                </Button>
                <Button>
                  <div className="inline">
                    <IconList />
                    Lista
                  </div>
                </Button>
              </div>
            </RightDrawerStyled>

            <header id='app-header'>
              <h2>Pin Note</h2>
              <IconHorse fill="black" />
            </header>

            <nav id='app-navbar'>
              <div className="left">
                <Button
                  onClick={this.insertNote.bind(this)}
                  style={{ height: "100%" }}
                >
                  <IconPlus height={28} />
                  Inserir
                </Button>
              </div>
              <div className="right">
                <IconButton
                  style={{ color: "black" }}
                  onClick={this.showOrHideASide.bind(this)}
                >
                  <IconMenu2 />
                </IconButton>
              </div>
            </nav>

            <main>
              <CardList cards={this.cards} />
            </main>

            <footer>
              <IconHorse fill="white" />

              <p>
                Software desenvolvido por
                <br />
                &lt;&gt; Conrado Pinheiro &lt;/&gt;
              </p>
            </footer>
          </section>
        </AppStyled>
      </ThemeProvider>
    );
  }
}

export default App;
