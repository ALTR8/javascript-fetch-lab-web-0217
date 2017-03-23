const userName = 'altr8'
const repo = 'javascript-fetch-lab'

function getIssues() {
  fetch(`https://api.github.com/repos/${userName}/${repo}/issues`, {
    method: 'get',
    })
  .then(res => res.json())
  .then(showIssues);
}


function showIssues(json) {
	const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
    document.getElementById('issues').innerHTML = template(json)

}

function createIssue() {
	let token = '76dde5bce36415b31c63f65a6ce32844ef8f9690'
	const title = document.getElementById('title').value
	const body = document.getElementById('body').value

	fetch(`https://api.github.com/repos/${userName}/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    },
    body: document.getElementById('body').value
  }).then(res => res.json())
  .then(getIssues)
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  let token = '76dde5bce36415b31c63f65a6ce32844ef8f9690'
  fetch(`https://api.github.com/repos/${repo}`, {
  method: 'post',
  headers: {
    Authorization: `token ${token}`
  },
}).then(res => res.json())
  .then(json => showResults(json))
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
