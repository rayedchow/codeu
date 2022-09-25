import questions from './diagnosticExam.json'
import axios from "axios";

export const compileAnswers = (answers: (string | number)[]) => {
	const examData = {
		total: questions.length,
		correct: 0,
		incorrect: []
	}
	for(let i = 0; i < answers.length; i++) {
		const answer = answers[i];
		console.log(answer);
		if((questions[i].type == 1) && (typeof answer == 'number')) {
			if(questions[i].answer != answer) examData.incorrect.push(questions[i].unit);
			else examData.correct++;
		} else if(typeof answer == 'string') {
			console.log('compiling')
			compileInput(i, answer, (output) => {
				if(output != questions[i].answer) {
					examData.incorrect.push(questions[i].unit);
				} else examData.correct++;
			});
		}
	}
	return examData;
}

export const compileInput = (i: number, answer: string, returnOutput) => {

	const handleCompile = () => {
		const formData = {
		  language_id: 62,
		  // encode source code in base64
		  source_code: btoa(answer)
		};
		const options = {
		  method: "POST",
		  url: "https://judge0-ce.p.rapidapi.com/submissions",
		  params: { base64_encoded: "true", fields: "*" },
		  headers: {
			"content-type": "application/json",
			"Content-Type": "application/json",
			"X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
			"X-RapidAPI-Key": "833aa7ea13mshac9174985fe7629p17d2bejsn7e0cf7ce5430",
		  },
		  data: formData,
		};
	
		axios
		  .request(options)
		  .then(function (response) {
			const token = response.data.token;
			checkStatus(token);
		  })
		  .catch((err) => {
			let error = err.response ? err.response.data : err;
			// get error status
			let status = err.response.status;
			console.log("status", status);
			if (status === 429) {
			  console.log("too many requests", status);
			}
			console.log("catch block...", error);
		  });
	  };

	  const checkStatus = async (token) => {
		const options = {
		  method: "GET",
		  url: "https://judge0-ce.p.rapidapi.com/submissions" + "/" + token,
		  params: { base64_encoded: "true", fields: "*" },
		  headers: {
			"X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
			"X-RapidAPI-Key": "833aa7ea13mshac9174985fe7629p17d2bejsn7e0cf7ce5430",
		  },
		};
		try {
		  let response = await axios.request(options);
		  let statusId = response.data.status?.id;
	
		  // Processed - we have a result
		  if (statusId === 1 || statusId === 2) {
			// still processing
			setTimeout(() => {
			  checkStatus(token);
			}, 2000);
			return;
		  } else {
			returnOutput(atob(response.data.stdout));
			return;
		  }
		} catch (err) {
		  console.log("err", err);
		}
	  };

	  handleCompile();
}