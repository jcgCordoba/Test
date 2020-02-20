import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/mainchar.action';

export interface State{
    speed: number;
    w: number;
    h:number;
    color: string;
}

export const initialState: State = {
   speed: 1,
   w: 50,
   h: 100,
   color: 'red'
};

const mainReducer = createReducer(
    initialState,
    on( actions.normal, (state) => ({speed: 1, w:50, h:100, color:'red' }) ),
    on( actions.speed, (state, {s}) => ({speed: s, w:30, h:180, color:'green' }) ),
    on( actions.slow, (state, {s}) => ({speed: s, w:60, h:70, color:'blue' }) )
);

export  function reducer(state: State, action ) {
   return mainReducer( state, action );  
} 