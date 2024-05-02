
document.getElementById('pedidoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nome = document.getElementById('nome').value;
  
  let pedido = '';
  const itens = document.querySelectorAll('.itemPedido');
  itens.forEach(item => {
    const produto = item.querySelector('.produto').innerText;
    const preco = item.querySelector('.preco').innerText;
    const quantidade = item.querySelector('.quantidade').value;
    pedido += `${produto} - ${quantidade} x ${preco}\n`;
  });
  
  const mensagem = `Olá, meu nome é ${nome}. Meu pedido é:\n${pedido}`;
  const numeroLoja = 'SEU_NÚMERO_DE_WHATSAPP'; // Substitua pelo número da loja
  
  const linkWhatsApp = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;
  
  window.open(linkWhatsApp, '_blank');
});

function adicionarItem(produto, preco) {
  const divItem = document.createElement('div');
  divItem.classList.add('itemPedido');
  
  const imgProduto = document.createElement('img');
  imgProduto.src = produto; // Substitua pelo link da imagem do produto
  imgProduto.alt = 'Imagem do Produto';
  divItem.appendChild(imgProduto);
  
  const spanProduto = document.createElement('span');
  spanProduto.classList.add('produto');
  spanProduto.innerText = produto;
  divItem.appendChild(spanProduto);
  
  const spanPreco = document.createElement('span');
  spanPreco.classList.add('preco');
  spanPreco.innerText = preco;
  divItem.appendChild(spanPreco);
  
  const inputQuantidade = document.createElement('input');
  inputQuantidade.type = 'number';
  inputQuantidade.classList.add('quantidade');
  inputQuantidade.value = 1;
  divItem.appendChild(inputQuantidade);
  
  document.getElementById('itensPedido').appendChild(divItem);
}

// Exemplo de uso: adicionarItem('link_da_imagem_do_produto.jpg', 'R$ 10.00');
