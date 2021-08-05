import React from 'react'
import { create } from 'react-test-renderer';
import ProfileStatus from './profileStatus';



describe("profileStatus component", () => {
    test("status prop should be in the state", () => {
        const status = create(<ProfileStatus status ="it-kamasutra" />);
        const instance = status.getInstance()
        expect(instance.state.status).toBe("it-kamasutra");
    });
    test("after creation span should be displayed with correct status", () => {
        const status = create(<ProfileStatus status="it-kamasutra" />);
        const root = status.root
        const span = root.findByType("span")
        expect(span).not.toBeNull();
    });
    test("after creation span should be displayed with correct status", () => {
        const status = create(<ProfileStatus status="it-kamasutra" />);
        const root = status.root
        const span = root.findByType("span")
        expect(span.children[0]).toBe("it-kamasutra" );
    });
    test("after creation input should be displayed", () => {
        const status = create(<ProfileStatus status="it-kamasutra" />);
        const root = status.root
       
        expect(() => {
            const span = root.findByType("input")
        }).toThrow();
    });
    test("after creation span should be displayed with correct status", () => {
        const status = create(<ProfileStatus status="it-kamasutra" />);
        const root = status.root
        const span = root.findByType("span")
        span.props.onDoubleClick()
        const input = root.findByType("input")
        expect(input.props.value).toBe("it-kamasutra");
    });
    test("so much coll function for editMode", () => {
        let mockCallBack = jest.fn()
        const status = create(<ProfileStatus status="it-kamasutra" updateStatus = {mockCallBack} />);
        const instance = status.getInstance()
        instance.diActiveEditMode()
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});
