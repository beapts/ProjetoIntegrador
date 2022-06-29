CREATE DATABASE plantinhas;
USE plantinhas;

CREATE TABLE `categoria_produtos`(
	`id` int NOT NULL AUTO_INCREMENT,
	`categoria` varchar(200) NOT NULL,
	PRIMARY KEY(`id`)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
​
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `id_categoria_fk` int(10) NOT NULL,
  `preco` decimal(7,2) NOT NULL,
  `quantidade` int NOT NULL,
  CONSTRAINT id_categoria_fk FOREIGN KEY (id_categoria_fk) REFERENCES categoria_produtos(id),
  PRIMARY KEY(`id`)
) CHARSET=utf8 COLLATE=utf8_unicode_ci;
​
CREATE TABLE `usuario`(
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(200) NOT NULL,
    `data_nasc` date NOT NULL,
    `cpf` varchar(50) NOT NULL,
	PRIMARY KEY(`id`)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_fk` int NOT NULL,
  `quantidade_itens` int NOT NULL,
  `valor_total` decimal(7,2) NOT NULL,
  `id_pagamento_fk` int NOT NULL,
  `endereco_entrega` varchar(250) NOT NULL,
  `data_pedido` date, 
  CONSTRAINT usuario_fk FOREIGN KEY (usuario_fk) REFERENCES usuario(id),
  CONSTRAINT id_pagamento_fk FOREIGN KEY (id_pagamento_fk) REFERENCES pagamento_pedido(id),
  PRIMARY KEY(`id`)
) CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE `pagamento_pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_pedido_fk` int NOT NULL,
  `forma_pagamento` varchar(25) NOT NULL,
  `bandeira_cartao` varchar(25),
  `parcelamento` int NOT NULL,
  `valor_total` decimal(7,2) NOT NULL,
  PRIMARY KEY(`id`)
) CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE pagamento_pedido ADD CONSTRAINT id_pedido_fk
FOREIGN KEY(id_pedido_fk) REFERENCES pedido(id);

ALTER TABLE pedido ADD CONSTRAINT id_pagamento_fk
FOREIGN KEY(id_pagamento_fk) REFERENCES pagamento_pedido(id);

CREATE TABLE `itens_pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_pedido_fk` int NOT NULL,
  `item_fk` int NOT NULL,
  CONSTRAINT item_fk FOREIGN KEY (item_fk) REFERENCES produtos(id),
  CONSTRAINT id_pedido_itens_fk FOREIGN KEY (id_pedido_fk) REFERENCES pedido(id),
  PRIMARY KEY(`id`)
) CHARSET=utf8 COLLATE=utf8_unicode_ci;




