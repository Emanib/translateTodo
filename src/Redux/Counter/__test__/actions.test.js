import {incrementAction} from "../actions";
import {INCREMENT} from "../constants";


describe('Counter Actions', function () {
    it('should incrementAction return obj contains 5', function () {
        expect(incrementAction(5)).toStrictEqual({
            type:INCREMENT,
            payload:5
        })
    });

    it('should not incrementAction return obj contains 5', function () {
        expect(incrementAction(5)).not.toStrictEqual({
            type:INCREMENT,
            payload:2
        })
    });
})