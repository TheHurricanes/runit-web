import uuidv1 from 'uuid/v1';

export const getUniqueSession = () => {
	let uniqueSession = localStorage.getItem('sessionId');
	if (!uniqueSession) {
		uniqueSession = uuidv1();
		localStorage.setItem('sessionId', uniqueSession)
	}
	return uniqueSession;
}

export const getCustomSession = (customSessionId) => {
	localStorage.setItem('sessionId', customSessionId)
	return customSessionId;
}