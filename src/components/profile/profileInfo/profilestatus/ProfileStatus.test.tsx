import React from "react";
import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should ne in state", () => {
        const component = create(<ProfileStatus status={'Alex Gor'} updateUserStatus={() => alert('update')}/>);
        const instance = component.getInstance();
        // console.log(instance)
        expect(instance?.state.status).toBe('Alex Gor');
    });
    test("after creation <span> should be display", () => {
        const component = create(<ProfileStatus status={'Alex Gor'} updateUserStatus={() => alert('update')}/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <input> shouldn't be display", () => {
        const component = create(<ProfileStatus status={'Alex Gor'} updateUserStatus={() => alert('update')}/>);
        const root = component.root;

        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });
    test(" <span> should be contain correct text", () => {
        const component = create(<ProfileStatus status={'Alex Gor'} updateUserStatus={() => alert('update')}/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe('Alex Gor');
    });
    test(" <input> should be displayed in editMode inspead of span", () => {
        const component = create(<ProfileStatus status={'Alex Gor'} updateUserStatus={() => alert('update')}/>);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe('Alex Gor');
        expect(() => {
            const span = root.findByType("span");
        }).toThrow();
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'Alex Gor'} updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();

        instance?.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});