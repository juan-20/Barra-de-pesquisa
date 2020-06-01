// pega o input da pesquisa e usa querySelectorAll

pesquisa_input = document.querySelectorAll(".pesquisa");


	for(i in pesquisa_input){
		 		
			pesquisa_input[i].onkeyup=function(e){
				
				// values
				// console.log(i)

				reg = new RegExp(this.value.toLowerCase(),"g")
				lis = this.parentElement.querySelector(".lista")

				// moatra a ul toda
				// console.log(lis)
				// oque foi digitado
				// console.log(reg)

				
				// o J pega o li individual, lê "nome"
				for(let j of lis.children){
					// console.log(j)

					debugger
					
					// vê se não tem algum J(li) igual ao reg(o digitado)
					if( !j.getAttribute("nome").match(reg) )
						
						// se não tem nada parecido ele apaga tudo
						j.style.display="none"
					else
						// se tem ele tira os que nao tem
						j.removeAttribute("style")
				}
			}
	}

