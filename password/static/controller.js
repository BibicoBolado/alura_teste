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

	addEvent(){ //Método que adiciona o evento input ao campo de senha e chama a função transforma_vetor
		this.senha_um.addEventListener('input',()=>{
			this.transforma_vetor(this.senha_um.value);
		})
	}

	transforma_vetor(senha_digitada){
		var existe_simbolo = 0; //Variável que indica a existência de um símbulo dentro da senha digitada. (!,@,#,$,%,&,*,(,),?,+,-)
		var existe_letra   = 0; //Variável que indica a existência de uma letra dentro da senha digitada .
		var existe_numero  = 0; //Variável que indica a existência de um número dentro da senha digitada .
		var nivel_senha	   = 0; //Variável que   verifica  quantos requisitos  da  senha foram atendidos .
		var senha_vetor    = senha_digitada.split("");//Transforma a senha digitada em um array

		for (var i = 0; i<senha_vetor.length;i++){
			var item_senha = this.verifica_senha(senha_vetor[i]); //Verifica se cada Item da Seha é Número, Símbolo ou Variável .
			if(item_senha==1){
				existe_simbolo 	= 1; //Existe um número na  senha
			}
			else if(item_senha==2){
				existe_letra  	= 1; //Existe uma letra na  senha
			}
			else if(item_senha==3){
				existe_numero  	= 1; //Existe um símbolo na senha
			}
		}
		nivel_senha = existe_numero + existe_letra  + existe_simbolo; // Verifica o nível da senha
		console.log(senha_vetor)
		console.log(nivel_senha,senha_vetor.length );
		this.altera_status(nivel_senha,senha_vetor.length ); 
		//Modifica o DOM, mostrando status da senha ao usuário de acordo com o nivel da senha e o tamanho.

	}

	verifica_senha(item_senha){

		//Lista de símbolos aceitos para tornar a senha mais forte
		var simbolos	= 	["!","@","#","$","%","&","*","(",")","?","+","-"];

		//Verifica se o item analisado é algum dos símbolos
		if(simbolos.indexOf(item_senha)!=-1){
			return (1);
		}

		//Verifica se o item analisado é alguma letra
		else if(isNaN(item_senha)){
			return (2);

		//Verifica se o item analisado é  um   número
		}else{
			return (3);
		}
	}

	altera_status(nivel_senha,tamanho_senha){
		if(tamanho_senha<=4){
			this.trava_tudo();
		}
		else if (tamanho_senha>=4 && tamanho_senha<=7){
			if(nivel_senha==1){
				this.trava_botao();
				this.senha_fraca();
			}
			else if(nivel_senha==2){
				this.trava_botao();
				this.senha_mediana();
			}

			else{
				this.trava_botao();
				this.senha_forte();
			}
		}
		else{
			if(nivel_senha==1){
				this.trava_botao();
				this.senha_fraca();

			}
			else if(nivel_senha==2){
				this.trava_botao();
				this.senha_mediana();
				
			}

			else{
				this.libera_botao();
				this.senha_forte();
			}
		}
	}

	libera_botao(){
		this.botao.disabled = false;
	}

	trava_botao(){
		this.botao.disabled = true;
	}

	senha_forte(){
		this.nivel_dois.style.display = "block";
		this.nivel_tres.style.display = "block";
		this.nivel_quatro.style.display = "block";		
	}

	senha_mediana(){
		this.nivel_dois.style.display = "block";
		this.nivel_tres.style.display = "block";
		this.nivel_quatro.style.display = "none";
	}

	senha_fraca(){
		this.nivel_dois.style.display = "block";
		this.nivel_tres.style.display = "none";	
		this.nivel_quatro.style.display = "none";
	}

	trava_tudo(){
		this.botao.disabled = true;
		this.nivel_dois.style.display = "none";
		this.nivel_tres.style.display = "none";	
		this.nivel_quatro.style.display = "none";
	}

}