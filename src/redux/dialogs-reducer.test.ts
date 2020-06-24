import {v1} from "uuid";
import dialogsReducer, {changeNewMessageTextAC, addMessAC} from "./dialogs-reducer";

test('dialogs reducer should change only messages newMessageText in startState', () => {
    const startState = {
        dialogs: [
            {
                id: v1(),
                name: "Alex",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvTQmV6oI5wUAiXdI6JjvFjPAUm7iq2AeNR45ffjomO1zLtmik&usqp=CAU"
            },
            {
                id: v1(),
                name: "Gor",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT1zZkQjtBjyYp5uq1qhmdpmoRkTFws1hL54z8U40EQv08o06Q&usqp=CAU"
            },
            {
                id: v1(),
                name: "Jora",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK9DkWY2BgUcJMNZXyAz6Cpmiq-AhC098wtOnBL-3foioVeyaI&usqp=CAU"
            },
            {
                id: v1(),
                name: "Anyfriy",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqX1EK98tD5uSgn72MKv-2pEhDAPiiiIgXH7LMYAe982_CtbRN&usqp=CAU"
            },
            {
                id: v1(),
                name: "Sveta",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb0QBmlGsym_SIuH6d-OrApu0iX0j8K4bxOufsI9D9GeKv7h1i&usqp=CAU"
            },
            {
                id: v1(),
                name: "ergey",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_yhvGXHtP8leB8fhWCAOke-8h5gRG1Wxo6fS814OFjX_g1qOl&usqp=CAU"
            }
        ],
        messages: [
            {id: v1(), message: 'E-ho-ho'},
            {id: v1(), message: 'And the bottle of rum'},
            {id: v1(), message: 'Yes!'}
        ],
        newMessageText: ''
    }

    let updateMessage = 'Updated';
    const endState = dialogsReducer(startState, changeNewMessageTextAC(updateMessage));

    expect(endState.newMessageText).toBe(updateMessage);
    expect(endState.messages.length).toBe(3);
    expect(endState.dialogs.length).toBe(6);
});

test('correct message should be added in startState.messages',() => {
    const startState = {
        dialogs: [
            {
                id: v1(),
                name: "Alex",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvTQmV6oI5wUAiXdI6JjvFjPAUm7iq2AeNR45ffjomO1zLtmik&usqp=CAU"
            },
            {
                id: v1(),
                name: "Gor",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT1zZkQjtBjyYp5uq1qhmdpmoRkTFws1hL54z8U40EQv08o06Q&usqp=CAU"
            },
            {
                id: v1(),
                name: "Jora",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK9DkWY2BgUcJMNZXyAz6Cpmiq-AhC098wtOnBL-3foioVeyaI&usqp=CAU"
            },
            {
                id: v1(),
                name: "Anyfriy",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqX1EK98tD5uSgn72MKv-2pEhDAPiiiIgXH7LMYAe982_CtbRN&usqp=CAU"
            },
            {
                id: v1(),
                name: "Sveta",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb0QBmlGsym_SIuH6d-OrApu0iX0j8K4bxOufsI9D9GeKv7h1i&usqp=CAU"
            },
            {
                id: v1(),
                name: "ergey",
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_yhvGXHtP8leB8fhWCAOke-8h5gRG1Wxo6fS814OFjX_g1qOl&usqp=CAU"
            }
        ],
        messages: [
            {id: v1(), message: 'E-ho-ho'},
            {id: v1(), message: 'And the bottle of rum'},
            {id: v1(), message: 'Yes!'}
        ],
        newMessageText: ''
    };
    startState.newMessageText = 'Message added from test';
    const endState = dialogsReducer(startState, addMessAC());

    expect(endState.dialogs.length).toBe(6);
    expect(endState.messages.length).toBe(4);
    expect(endState.messages[3].message).toBe(startState.newMessageText);
    expect(endState.newMessageText).toBe('');
});

