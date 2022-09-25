export interface Question {
	unit: string
	type: number
	question: string
	options?: string[],
	input: number | string[],
	answer: string | number
}