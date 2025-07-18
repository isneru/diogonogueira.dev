export default defineEventHandler(async event => {
	const { name, message, token } = await readBody(event)

	if (!name?.trim() || !message?.trim() || !token) {
		setResponseStatus(event, 400)
		throw createError({
			statusCode: 400,
			message: 'name, message, and captcha token are required'
		})
	}

	const validation = await verifyTurnstileToken(token)
	if (!validation.success) {
		setResponseStatus(event, 400)
		throw createError({
			statusCode: 400,
			message: 'captcha verification failed'
		})
	}

	const db = useDatabase()
	await db.sql`INSERT INTO guestbook (name, message) VALUES (${name}, ${message})`

	return { success: true }
})
