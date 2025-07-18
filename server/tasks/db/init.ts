export default defineTask({
	meta: {
		name: 'db:init',
		description: 'Initialise guestbook table'
	},
	run({ payload, context }) {
		const db = useDatabase()
		return db.sql`
      CREATE TABLE IF NOT EXISTS guestbook (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `.then(() => {
			console.log('Guestbook table initialised')
			return { result: true }
		})
	}
})
