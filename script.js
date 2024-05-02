document.getElementById('pedidoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const pedido = document.getElementById('pedido').value;
  
  const mensagem = `Olá, meu nome é ${nome}. Meu pedido é: ${pedido}.`;
  const numeroLoja = 'SEU_NÚMERO_DE_WHATSAPP'; // Substitua pelo número da loja
  
  const linkWhatsApp = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(linkWhatsApp, '_blank');
});
