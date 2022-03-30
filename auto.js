// const sleep = (milliseconds) => {
// 	return new Promise(resolve => setTimeout(resolve, milliseconds))
//   }


// const getExamResult = async() =>{
// 	while(true) {
// 		await sleep(5000)
// 		if(!(document.querySelectorAll("tbody")[6].querySelectorAll("td")[63].querySelector("font").textContent != 'בלימוד\n')) {
// 			console.log("try again")
// 			location.reload();
// 		} else{
// 			console.log("@@@@@@@@success!@@@@@@@")
// 		}
// 	}
// }
// getExamResult()

// setInterval(() =>{
// 	window.location.href = "https://sheilta.apps.openu.ac.il/pls/dmyopt2/course_info.courses"
// 	if(!(document.querySelectorAll("tbody")[6].querySelectorAll("td")[63].querySelector("font").textContent != 'בלימוד\n')) {
// 		console.log("try again")
// 		window.location.href = "https://sheilta.apps.openu.ac.il/pls/dmyopt2/course_info.courses"
// 	} else{
// 		console.log("@@@@@@@@success!@@@@@@@")
// 	}
// }, 2000)





const fetch = require("node-fetch");
const cheerio = require('cheerio');

const main = async() => {
	const response = await fetch("https://sheilta.apps.openu.ac.il/pls/dmyopt2/course_info.courses")
	const body = await response.text();
	console.log(body);
}
main();


