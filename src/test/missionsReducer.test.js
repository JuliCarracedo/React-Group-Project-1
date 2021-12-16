import missionsReducer from '../redux/missions/missions';

describe("Missions Reducer Function", ()=>{
    const initialState = [];
    it("exists",()=>{
        expect(missionsReducer).toBeTruthy();
    });
    it("Returns missions if given a populated GET_MISSION_SUCCESS action", ()=>{
        const missions = [
            {name: 'Thaicom',
             id: 1,
             description: 'Lorem ipsum dolor sit amet'
            }, 
            {name: 'Silicon',
             id: 2,
             description: 'Lorem ipsum dolor sit amet'
            }
        ]
        expect(missionsReducer(initialState, {type:'GET_MISSIONS_SUCCESS', payload: missions}).missions).toStrictEqual(missions);
    });
    
});