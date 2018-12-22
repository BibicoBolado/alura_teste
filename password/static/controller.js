class RegisterController{
	constructor(){
		this.nivel_um		= document.getElementById('nivel_um');
		this.nivel_dois  	= document.getElementById('nivel_dois');
		this.nivel_tres  	= document.getElementById('nivel_tres');
		this.nivel_quatro 	= document.getElementById('nivel_quatro');
		this.iguais		 	= document.getElementById('iguais');
		this.botao			= document.getElementById('botao');

		this.senha_um		= document.getElementById('senha_um');
		this.senha_dois		= document.getElementById('senha_dois');
		this.addEvent();
	}

	addEvent(){
		this.senha_um.addEventListener('input',()=>{
			this.transforma_vetor(this.senha_um.value);
		})
	}

	transforma_vetor(x){
		var controle_sim = 0;
		var controle_let	= 0;
		var controle_num = 0;
		var soma	= 0;
		var tamanho = 0;
		var vetor = x.split("");
		var i;
		for (i = 0; i<vetor.length;i++){
			var a = this.verifica_senha(vetor[i]);
			if(a==1){
				controle_sim 	= 1;
			}
			if(a==2){
				controle_let	= 1;
			}
			if(a==3){
				controle_num 	= 1;
			}
		}
		soma = controle_num+controle_let+controle_sim;
		if(vetor.length>=4 && vetor.length<=7){
			tamanho 			= 1;
		}
		if(vetor.length>=8){
			tamanho 			= 2;
		}
		console.log(vetor)
		console.log(soma,tamanho);
		this.altera_status(soma,tamanho);

	}

	verifica_senha(x){

		var simbolos	= 	["!","@","#","$","%","&","*","(",")","?","+","-"];
		if(simbolos.indexOf(x)!=-1){
			return (1);
		}

		else if(isNaN(x)){
			return (2);
			
		}else{
			return (3);
		}
	}

	altera_status(x,y){
		if(y==0){
			this.nivel_dois.style.display = "none";
			this.botao.disabled = true;
		}
		if (y==1){
			this.nivel_tres.style.display = "none";
			this.botao.disabled = true;
			if(x==1){
				this.nivel_dois.style.display = "block";	
			}
		}else if(y==2){
			if(x==2){
				this.botao.disabled = false;
				this.nivel_quatro.style.display = "none";
				this.nivel_tres.style.display = "block";
			}

			if(x==3){
				this.nivel_quatro.style.display = "block";
			}
		}
	}

}