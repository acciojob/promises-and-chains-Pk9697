//your JS code here. If required.
const inputAge=document.getElementById('age')
const inputName=document.getElementById('name')
const submitBtn=document.getElementById('btn')

const checkAge=(age)=>{
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			if(age>=18) res()
			rej()
		},4000)
	})
}

submitBtn.addEventListener('click',(e)=>{
	e.preventDefault()
	if(!inputAge.value.trim() || !inputName.value.trim()) return
	checkAge(inputAge.value)
		.then(()=>alert(`Welcome, ${inputName.value}. You can vote.`))
		.catch(()=>alert(`Oh sorry ${inputName.value}. You aren't old enough.`))
	
})