//import { useSession } from 'next-auth/react';

const useFetch = () => {

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const session =  {} as any // useSession()

	const getAuthToken = () =>{
		if(session.data && session.data.user){
			return session.data.user["authToken"];
		}

		return ''
	}

	const validateErrorResponse = (response: Response) => {
		if (response.status === 401) {

			//signOut({ redirect: false })

			const loginPath = `/login?returnUrl=${encodeURIComponent(window.location.href)}`;

			setTimeout(() => {
				window.location.href = loginPath
			}, 100)
		}

		if (response.status === 500) {
			console.error("api error", response)
		}
	}

	async function post(API_URL: string, _data?: BodyInit | undefined): Promise<Response> {
		let data = ''

		if (typeof _data === 'object') {
			data = JSON.stringify(_data)
		}

		const response = await fetch(API_URL, {
			method: 'POST',
			body: data,
			headers: {
				'Content-Type': 'application/json',
				Authorization: getAuthToken(),
			}
		})

		validateErrorResponse(response)

		return response
	}

	async function put(API_URL: string, _data?: BodyInit | undefined): Promise<Response> {
		let data = ''

		if (typeof _data === 'object') {
			data = JSON.stringify(_data)
		}

		const response = await fetch(API_URL, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: getAuthToken(),
			},
			body: data
		})

		validateErrorResponse(response)

		return response
	}

	async function deleteApi(API_URL: string, data?: BodyInit | undefined): Promise<Response> {

		const response = await fetch(API_URL, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: getAuthToken(),
			},
			body: data
		})

		return response
	}

	async function upload(API_URL: string, data:  BodyInit | undefined): Promise<Response> {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				Authorization: getAuthToken(),
			},
			body: data
		})

		return response
	}

	async function get(API_URL: string, _data?: BodyInit | undefined): Promise<Response> {

		let data = ''

		if (typeof _data === 'object') {
			data = JSON.stringify(_data)
		}

		const response = await fetch(API_URL, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: getAuthToken(),
				body: data
			}
		})

		validateErrorResponse(response)

		return response
	}

	const fetchService = Object.freeze({
		put,
		post,
		get,
		upload,
		deleteApi,
	})

	return fetchService
}

export default useFetch
