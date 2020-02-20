import { createAction, props }  from '@ngrx/store';

export const normal = createAction( 'normal' );
export const speed = createAction( 'speed', props<{s:number}>() );
export const slow = createAction( 'slow', props<{s:number}>() );

