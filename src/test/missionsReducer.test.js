import missionsReducer from '../redux/missions/missions';

describe("Missions Reducer Function", ()=>{
    const initialState = [];
    const missions = [
        {name: 'Thaicom',
         id: 1,
         description: 'Lorem ipsum dolor sit amet',
         member: false
        }, 
        {name: 'Silicon',
         id: 2,
         description: 'Lorem ipsum dolor sit amet',
         member: true
        }
    ]
    it("exists",()=>{
        expect(missionsReducer).toBeTruthy();
    });
    it("Returns missions if given a populated GET_MISSIONS_SUCCESS action", ()=>{
        expect(missionsReducer(initialState, {type:'GET_MISSIONS_SUCCESS', payload: missions}).missions).toStrictEqual(missions);
    });
    it("Returns an error if given GET_MISSIONS_FAILED action", ()=>{
        expect(missionsReducer(initialState, {type:'GET_MISSIONS_FAILED', payload: 'critical error'}).error).toBe('critical error');
    });
    it("Returns a mission as joined if its id is sent in a JOIN_MISSION action", ()=>{
        expect(missions[0].member).toBeFalsy();
        let newState = missionsReducer(initialState, {type:'GET_MISSIONS_SUCCESS', payload: missions});
        expect(missionsReducer(newState, {type: 'JOIN_MISSION', payload: 1}).missions[0].member).toBeTruthy;
    });
    it("Returns a mission as not joined if its id is sent in a LEAVE_MISSION action", ()=>{
        expect(missions[1].member).toBeTruthy();
        let newState = missionsReducer(initialState, {type:'GET_MISSIONS_SUCCESS', payload: missions});
        expect(missionsReducer(newState, {type: 'LEAVE_MISSION', payload: 2}).missions[1].member).toBeFalsy();
    });
    
});