# UdaciFlashCards Project
This is the third practice program  for the assessment project for Udacity's React Native course. This mobile application allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.


## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.


##Specific Requirements
1)Use create-react-native-app to build your project.
2)Allow users to create a deck which can hold an unlimited number of cards.
3)Allow users to add a card to a specific deck.
4)The front of the card should display the question.
5)The back of the card should display the answer.
6)Users should be able to quiz themselves on a specific deck and receive a score once they're done.
7)Users should receive a notification to remind themselves to study if they haven't already for that day.

##Views
1. Decks List Views
   User could browse all the created decks in this screen.
2. Add new Deck View
   User could create new Deck on this screen.
3. Deck View
   User could see the detail of each deck, and options to add card to quiz.
4. Add Card Views
   User could add new card to certain deck.
5. Quiz View
   User could quiz themselves, flip card to see the answer, and receive a score.


##Data
   We'll use AsyncStorage to store our decks and flashcards. Redux is optional for this project.

## Helper Methods

### `getDecks`

Method Signature:

```js
getDecks()
```

* Returns a decks list from local storage

### `saveDeckTitle`

Method Signature:

```js
saveDeckTitle()
```

* Add a new deck to current deck list to local storage
* Return a updated deck list

### `addCardToDeck`

Method Signature:

```js
addCardToDeck()
```

* Add a new card to the current deck.
* Return an updated deck list.

## Contributing

The whole project is completed by Lei He with UdaciFitness proects as a template resource.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
