export default defineEventHandler(async event => {
	const db = useDatabase()

	const { rows } =
		await db.sql`SELECT id, name, message, created_at FROM guestbook ORDER BY created_at DESC`
	return rows
})
