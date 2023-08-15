/*function Log(){
    document.getElementById('titulo').innerHTML = 'luciano' ;
    document.getElementById('SENHA').innerHTML = 123 ;

}
*/
function digitou(e){
    if (e.keyCode == 13 && e.ctrlKey == true){


    let texto = document.getElementById("LOGIN").value;

    console.log(texto);
}
}


 function azul(){
    limpar();
    document.getElementById('titulo2').classList.add('azul')
 }
 function vermelho(){
    limpar();
    document.getElementById('titulo2').classList.add('vermelho')

 }function verde(){
    limpar();
    document.getElementById('titulo2').classList.add('verde')


 }function amarelo(){
   limpar()
    document.getElementById('titulo').classList.add('amarelo')
 }



 function limpar(){
    document.getElementById('titulo2').classList.remove('azul');

    document.getElementById('titulo2').classList.remove('vermelho');

    document.getElementById('titulo2').classList.remove('verde');
    document.getElementById('titulo').classList.remove('amarelo');

   

 }

 function btn(elemento){
    elemento.style.display = 'none';
    document.getElementById ('telefone').style.display='block';

 }

 function mudarNome(){
   var loka = 2
   var total = 5 
   var vida =  3 

   if( loka == vida  ){
      return this.total (document.getElementById('titulo2').innerHTML= 'vida loka');
   }else if (total > vida ){
      return this.loka (document.getElementById('titulo2').innerHTML = 'agora vai ');
   }
 }

  
 