import {incrementAction} from "../actions";
import {INCREMENT} from "../constants";
import {counterReducer} from "../reducer";


describe('Counter Reducers', function () {
    it('should return 0', function () {
        expect(counterReducer(0, {})).toBe(0)
    });

    it('should return 10', function () {

        // To run action with reducers
        //expect(counterReducer(0, incrementAction(10))).toBe(10)
        expect(counterReducer(2, {
            type:INCREMENT,
            payload:10
        })).toBe(12)
    });
})