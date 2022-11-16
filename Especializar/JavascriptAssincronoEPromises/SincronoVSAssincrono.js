/*
    # Síncrono vs Assíncrono

    Sistema síncrono (synchronous), uma tarefa é concluída após a outra:

        No exemplo abaixo vemos uma imagem terminar de carregar, para então, carregar a outra.

        imagem 1 carrega primeiro, so dps de terminar a imagem 1 a imagem 2 começa a carregar, e só a imagem 3 começa a carregar após a imagem 2 ter terminado o carregamento

        A tarefa anterior precisa ser concluída, para então iniciar a próxima
        Por padrão, o Javascript é um sistema síncrono

    Sistema assíncrono (asynchronous), tarefas são executadas de maneira independente de uma da outra.
        
        Perceba na imagem abaixo que todas as imagens estão sendo carregadas de maneira independente

        O Javascript poderá usar o assincronismo a seu favor
*/