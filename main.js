window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount()
});

function getVisitCount() {
  let count = 30;
  const url = "https://us-central1-gcp-resume-challenge-445002.cloudfunctions.net/get-visit-counter";
  
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log('Website called API.');
      count = data.count;
      document.getElementById('counter').innerText = count;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    return count;
} 


