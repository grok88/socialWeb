import {v1} from "uuid";

import dialogsReducer, {actions, DialogsReducerInitialStateType} from "./dialogs-reducer";

let startState:DialogsReducerInitialStateType;

beforeEach(() => {
    startState={
        dialogs: [
            {
                id: v1(),
                name: "Alex",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvTQmV6oI5wUAiXdI6JjvFjPAUm7iq2AeNR45ffjomO1zLtmik&usqp=CAU"
            }
        ],
        messages: [
            {id: v1(), message: 'E-ho-ho'},
            {id: v1(), message: 'And the bottle of rum'},
            {id: v1(), message: 'Yes!'}
        ],
    }
})

test('correct message should be added in startState.messages',() => {
   const newMessageText = 'Message added from test';

    const endState = dialogsReducer(startState, actions.addMessAC(newMessageText));

    expect(endState.dialogs.length).toBe(1);
    expect(endState.messages.length).toBe(4);
    expect(endState.messages[3].message).toBe(newMessageText);
});

