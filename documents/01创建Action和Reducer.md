在创建Action之前，先创建一个js文件用来保存actioin.type信息。

<br>

> src/actions下创建types.js

<br>

> src/actions/types.js

<br>

	export const FETCH_USERS = 'fetch_users';

<br>

> src/actions/index.js

<br>

	import { FETCH_USERS } from './types';
	
	export function fetchUsers(){
	    return {
	        type: FETCH_USERS,
	        payload: [
	            {name: 'Jane'},
	            {name: 'Alex'},
	            {name: 'Jim'}
	        ]
	    };
	}

<br>

> src/reducers下创建users.js

<br>

> src/reducers/users.js

<br>

	import { FETCH_USERS } from '../actions/types';
	
	export default function(state = [], action){
	    switch(action.type){
	        case FETCH_USERS:
	            return [...state, ...action.payload];
	    }
	    
	    return state;
	}

<br>

添加的reducer是需要注册到combineReducers中的。

<br>

> src/reducers/index.js

<br>

	import { combineReducers } from 'redux';
	import usersReducer from './users';
	
	const rootReducer = combineReducers({
	  users: usersReducer
	});
	
	export default rootReducer;

<br>



