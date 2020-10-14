	let a,c
	let dt=new Date()
	let yy=dt.getFullYear()
	let mm=dt.getMonth()

		calyear.innerHTML=yy

	arr=['January','February','March','April','May',"Jun",'Jul','August','September','October','November','December']
		
		calmonth.innerHTML=arr[mm]




	
	let dt1=new Date(yy,mm)

		let weekday=dt1.getDay()
		

		if (weekday==0) {
			weekday=7
		}

		for(let i=0;i<weekday-1;i++){
			let li=document.createElement('li')
			li.innerHTML=''
			li.className='or'
			document.querySelector('.days').append(li)
		}

	
		
		
		while (mm==dt1.getMonth()) {
			let o=dt1.getDate()
			


			let li=document.createElement('li')
			li.innerHTML=o
			li.className='or'
			document.querySelector('.days').append(li)
			dt1.setDate(o+1)

		}
		let current = new Date
		currentDay = current.getDate()

		let days = document.querySelectorAll('.or')

		for(let i=0;i<days.length;i++){
			if(days[i].innerHTML == currentDay){
				days[i].classList.add('active')
			}
		}

		a=yy
		c=mm



function f(){
	let yearNumber = document.getElementById('tari').value
	if(yearNumber != ''){
			t=true

		let li = document.querySelectorAll('.or')
		for(let i=0;i < li.length;i++){
			li[i].remove()
		}

		let y=tari.value
		let m=amis.value

		calyear.innerHTML=y
		m=m.split(',')
		calmonth.innerHTML=m[1]

		let d=new Date(y,m[0])
			a=y
			c=m[0]

			

			let weekday=d.getDay()
			

			if (weekday==0) {
				weekday=7
			}

			for(let i=0;i<weekday-1;i++){
				let li=document.createElement('li')
				li.innerHTML=''
				li.className='or'
				document.querySelector('.days').append(li)
			}

		while (m[0]==d.getMonth()) {

			let o=d.getDate()
			let li=document.createElement('li')
			li.innerHTML=o
			li.className='or'
			document.querySelector('.days').append(li)
			d.setDate(o+1)

		}
		let current = new Date
		currentDay = current.getDate()

		let days = document.querySelectorAll('.or')

		for(let i=0;i<days.length;i++){
			if(days[i].innerHTML == currentDay  && d.getMonth() == current.getMonth()+1 && d.getYear() == current.getYear()){
				days[i].classList.add('active')
			}
		}
	}	
}	

	


function next(){

		c++
		if(c==12){
			c=0
			a++
		}
	

	
	calyear.innerHTML=a
	calmonth.innerHTML=arr[c]

	let li = document.querySelectorAll('.or')
	for(let i=0;i < li.length;i++){
		li[i].remove()
	}


	let d=new Date(a,c)

	let weekday=d.getDay()
		

		if (weekday==0) {
			weekday=7
		}

		for(let i=0;i<weekday-1;i++){
			let li=document.createElement('li')
			li.innerHTML=''
			li.className='or'
			document.querySelector('.days').append(li)
		}
		while (c==d.getMonth()) {

			let o=d.getDate()
			let li=document.createElement('li')
			li.innerHTML=o
			li.className='or'
			document.querySelector('.days').append(li)
			d.setDate(o+1)

		}	
		let current = new Date
		currentDay = current.getDate()

		let days = document.querySelectorAll('.or')
		

		for(let i=0;i<days.length;i++){
			if(days[i].innerHTML == currentDay  && d.getMonth() == current.getMonth()+1 && d.getYear() == current.getYear()){
				days[i].classList.add('active')
			}
		}
		
		
}

function prev(){
	c--
	if(c==-1){
		c=11
		a--
	}
	calyear.innerHTML=a
	calmonth.innerHTML=arr[c]

	let li = document.querySelectorAll('.or')
	for(let i=0;i < li.length;i++){
		li[i].remove()
	}

	let d=new Date(a,c)

	let weekday=d.getDay()
		

		if (weekday==0) {
			weekday=7
		}

		for(let i=0;i<weekday-1;i++){
			let li=document.createElement('li')
			li.innerHTML=''
			li.className='or'
			document.querySelector('.days').append(li)
		}
		while (c==d.getMonth()) {

			let o=d.getDate()
			let li=document.createElement('li')
			li.innerHTML=o
			li.className='or'
			document.querySelector('.days').append(li)
			d.setDate(o+1)

		}	
		let current = new Date
		currentDay = current.getDate()

		let days = document.querySelectorAll('.or')
		
		for(let i=0;i<days.length;i++){
			

			if(days[i].innerHTML == currentDay  && d.getMonth() == current.getMonth()+1 && d.getYear() == current.getYear()){
				days[i].classList.add('active')
				
			}
		}
		




	
}