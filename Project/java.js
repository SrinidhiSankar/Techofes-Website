function validate()
{
var fname,lname,mail,phone,c_id,c_name,c_city;
fname=document.getElementById('fname').value;
lname=document.getElementById('lname').value;
mail=document.getElementById('mail').value;
phone=document.getElementById('phone').value;
c_id=document.getElementById('c_id').value;
c_name=document.getElementById('c_name').value;
c_city=document.getElementById('c_city').value;
if(fname.length==0)
	{
	alert('First name should not be empty');
	}
if(lname.length==0)
	{
	alert('Last name should not be empty');
	}
if(mail.length==0)
	{
	alert('Mail should not be empty');
	} 
if(phone.length==0)  
	{
	alert('Phone number should not be empty');
	}
if(c_id.length==0)
	{
	alert('College id should not be empty');
	}
	if(c_city.length==0)
	{
	alert('College city should not be empty');
	}
if(c_name.length==0)
	{
	alert('College name should not be empty');
	}

}