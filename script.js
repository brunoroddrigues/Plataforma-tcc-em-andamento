<script>
        // Função para adicionar itens ao carrinho
        function adicionarAoCarrinho(nome, preco) {
            // Cria um novo elemento de lista
            var itemLista = document.createElement("li");
            // Define o texto do item da lista com o nome do produto e o preço
            itemLista.textContent = nome + " - R$ " + preco.toFixed(2);
            // Adiciona o item da lista à lista de itens do carrinho
            document.getElementById("lista-carrinho").appendChild(itemLista);
            
            // Atualiza o total somando o preço do produto ao total atual
            var total = parseFloat(document.getElementById("total").textContent);
            total += preco;
            // Atualiza o texto do total
            document.getElementById("total").textContent = total.toFixed(2);
        }
    </script>