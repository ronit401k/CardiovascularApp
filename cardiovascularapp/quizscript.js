document.getElementById("quiz-submit").addEventListener("click",getAnswers)
function getAnswers(event){
  var results=[]
  var formElem=document.forms.quizform
  
  var formData=new FormData(formElem)
  for(let i=1;i<=6; i++){
    results.push(formData.getAll("q"+i))
  }
  console.log(results)
  sessionStorage.setItem("quizResults",JSON.stringify(results))
  window.location.href="answers.html"
}


// Move sections to separate pages first
