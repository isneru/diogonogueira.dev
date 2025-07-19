export const timeAgo = (input: string | number | Date) => {
	const utc =
		typeof input === 'string' ? new Date(input + 'Z') : new Date(input)
	const diff = Date.now() - utc.getTime()

	const minutes = Math.floor(diff / 60000)
	if (minutes < 1) return 'just now'
	if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`

	const hours = Math.floor(minutes / 60)
	if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`

	const days = Math.floor(hours / 24)
	if (days < 30) return `${days} day${days === 1 ? '' : 's'} ago`

	const months = Math.floor(days / 30)
	if (months < 12) return `${months} month${months === 1 ? '' : 's'} ago`

	const years = Math.floor(months / 12)
	return `${years} year${years === 1 ? '' : 's'} ago`
}
