import { VITE_APP_NAME } from '$env/static/public';

// the old way still works
// const variables = {
// 	appName: import.meta.env.VITE_APP_NAME
// };

// the new way does not work
const variables = {
	appName: VITE_APP_NAME
};

export default variables;
