import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("Button component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("it-kamasutra.com")
    })
    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>)
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })
    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>)
        const root = component.root
        expect(() => {
            root.findByType("input")
        }).toThrow()
    })
    test("after creation span should contain correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>)
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("it-kamasutra.com")
    })
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>)
        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("it-kamasutra.com")
    })
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="it-kamasutra.com" updateUserStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.editModeOff()
        expect(mockCallback.mock.calls.length).toBe(1)
    })

})