export interface ExamData {
	totalQuestions: number
	correctQuestions: number
	incorrectInputs: incorrectQuestion[]
}

interface incorrectQuestion {
	question: number
	input: string
}