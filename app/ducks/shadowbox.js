'use strict';

/*---------------CONSTANTS-----------------*/
const SHOW_BOX = 'SHOW_BOX';

const HIDE_BOX = 'HIDE_BOX';


/*---------------ACTION CREATORS-----------------*/
export const showBox = () => ({
    type: SHOW_BOX
})

export const hideBox = () => ({
    type: HIDE_BOX
})




/*---------------- REDUCER ---------------- */

export default (state = false, action) => {
	switch(action.type) {
	 	case SHOW_BOX:
      return true;
      break;
    case HIDE_BOX:
      return false;
      break;
    }
    return state;
}
