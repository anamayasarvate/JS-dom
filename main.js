const name=document.querySelector("#name");
const email=document.querySelector("#email");
const msg=document.querySelector(".msg");
const users=document.querySelector("#users");
const myForm=document.querySelector("#my-form");
myForm.addEventListener("submit",(e)=>{
	e.preventDefault();
	if(name.value===""||email.value==="")
	{
		msg.classList.add("error");
		msg.innerHTML="<h4>Please enter both name and email</h4>";
		setTimeout(()=>msg.remove(),3000);
	}
	else
	{
		const li=document.createElement("li");
		li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
		users.appendChild(li);

		//clear fields
		name.value="";
		email.value="";
	}	
});