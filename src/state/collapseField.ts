import Action, { CollapseFieldAction } from './action';

export const reducer = ( state = {}, action: Action ) => {
	if ( action.type === 'COLLAPSE_FIELD' ) {
		return { ...state, [action.id]: undefined };
	}
	return state;
};

export default ( id: number ): CollapseFieldAction => ({ type: 'COLLAPSE_FIELD', id });
