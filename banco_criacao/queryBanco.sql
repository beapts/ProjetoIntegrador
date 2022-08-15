use plantinhas;
  
CREATE TABLE `carrinho` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_produto` int,
  `nome_produto` varchar(200) COLLATE utf8mb4_unicode_ci,
  `preco` decimal(7,2),
  `quantidade` int,
  `produto_img` varchar(200),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
CREATE TABLE `categoria_produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `plantinhas`.`categoria_produtos` (`id`, `categoria`) VALUES ('1', 'Plantas');
INSERT INTO `plantinhas`.`categoria_produtos` (`id`, `categoria`) VALUES ('2', 'Vasos');

CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_categoria_fk` int NOT NULL,
  `preco` decimal(7,2) NOT NULL,
  `quantidade` int NOT NULL,
  `produto_img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descricao_curta` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descricao_longa` varchar(800) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categoria_fk` (`id_categoria_fk`),
  CONSTRAINT `id_categoria_fk` FOREIGN KEY (`id_categoria_fk`) REFERENCES `categoria_produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('1', 'Planta-mosaico', '1', '68,00', '4', '/images/plants/severin-candrian-hIQDNawFoaM-unsplash.jpg', 'Fittonia albivenis', 'A planta-mosaico é uma espécie rasteira e herbácea, de folhagem decorativa e muito popular em terrários fechados, locais em que se adapta muito bem, por sua grande necessidade de umidade. Apresenta ramagem macia e pubescente, com folhas simples, ovaladas, opostas, de nervuras bem marcadas e contrastantes na cor branca, na espécie típica. ');
INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('2', 'Filodendro-glorioso', '1', '105,10', '7', '/images/plants/severin-candrian-E1TcypjMSPE-unsplash.jpg', 'Philodendron gloriosum', 'O filodendro-glorioso é uma espécie herbácea, rizomatosa e perene, que se destaca pela folhagem exuberante. Nativo da América Central e do Sul, ele cresce na sombra das árvores, em regiões de vale de florestas tropicais.As folhas são em formato de coração, tem cor verde-escura. Uma característica interessante é que as folhas se movimentam ao longo do dia, buscando a luz do sol, da mesma maneira que o fazem as flores do girassol ');
INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('3', 'Folha-de-macaco', '1', '89,90', '5', '/images/plants/severin-candrian-R0d0JHaBR1g-unsplash.jpg', 'Monstera adansonii', 'A Monstera adansonii é uma trepadeira herbácea e tropical de grande valor ornamental, proporcionado por suas folhas brilhantes e perfuradas e que faz grande sucesso como planta de interior.As folhas variam de tamanho, tem formato elíptico a cordiforme, textura ligeiramente espessa e cerosa, com grandes perfurações ovais. ');
INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('4', 'Caládio', '1', '75,00', '12', '/images/plants/severin-candrian-Rn1QlV1MDaw-unsplash.jpg', 'Caladium bicolor', 'Os caládios são plantas bulbosas muito apreciadas devido à sua folhagem ornamental. Elas apresentam folhas grandes, rajadas ou pintalgadas, com duas ou mais cores e tonalidades de branco, verde, rosa ou vermelho.Durante o inverno o caládio entra em repouso e aparenta estar morto, mas emite novas brotações na primavera. Neste período as adubações devem ser suspensas e podemos remover os bulbos e guardá-los em local seco, sombreado e fresco');
INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('5', 'Espada-de-são-jorge', '1', '49,90', '10', '/images/plants/severin-candrian--11MmJRwCPo-unsplash.jpg', 'Sansevieria trifasciata', 'Herbácea de resistência extrema, excelente para jardins de baixa manutenção. No entanto seu crescimento é um pouco lento. Suas folhas são muito ornamentais e podem se apresentar de coloração verde acinzentada e variegadas, com margens de coloração branco-amareladas, todas com estriações de um tonalidade mais escura.Devem ser cultivadas à pleno sol ou meia-sombra, em vasos ou em maciços e bordaduras. Resiste tanto à estiagem, como ao frio e ao calor, além de ser pouco exigente quanto à fertilidade. ');
INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('6', 'Singônio', '1', '85,50', '8', '/images/plants/severin-candrian-IgnTVnGkk4Y-unsplash.jpg', 'Syngonium angustatum', 'O singônio é uma planta de folhagem muito decorativa. As folhas se alteram de acordo com a maturação da planta. Plantas jovens apresentam folhas simples, claras, com nervuras brancas e nas plantas adultas as folhas são subdividas e completamente verdes.');
INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('7', 'Zamioculca', '1', '78,00', '9', '/images/plants/severin-candrian-cLaaxa4DSnc-unsplash.jpg', 'Zamioculcas zamiifolia', 'A zamioculcas é uma folhagem ornamental, popular pela rusticidade e beleza, principalmente quando utilizada em interiores e outros locais de baixa luminosidade natural. Sua textura é herbácea, com folhas muito brilhantes, glabras, pinadas e de cor verde-escura, que chegam a um metro de altura ');
INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('8', 'Comigo-ninguém-pode', '1', '65,00', '14', '/images/plants/severin-candrian-qQZdmUzXjZA-unsplash.jpg', 'Dieffenbachia amoena', 'Sua folhagem muito ornamental é composta de folhas grandes e brilhantes, com manchas rajadas de branco ou amarelo. Deve ser cultivada a meia-sombra ou sombra, em solo rico em matéria orgânica e com regas regulares. Ficam muito bem em vasos em ambientes internos ou em bordaduras e maciços, protegidas por muros e árvores. Deve-se atentar para crianças pequenas e animais domésticos pois é uma planta bastante tóxica');
INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('9', 'Costela-de-adão', '1', '98,00', '8', '/images/plants/severin-candrian-bwsTJMnhcwE-unsplash.jpg', 'Monstera deliciosa', 'Suas folhas são espetaculares! Gigantes, elas possuem um desenho único. As bordas são perfeitamente recortadas e possuem furos no meio, como se quisessem arejar-se. Além disso, apresentam uma coloração verde escura e são muito brilhantes.Deve ser cultivada em substrato rico em matéria orgânica, com regas regulares, à meia-sombra. ');
INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('10', 'Filodendro-brasil', '1', '64,50', '6', '/images/plants/severin-candrian-Ug5roZHlC78-unsplash.jpg', 'Philodendron hederaceum', 'O filodendro-brasil é uma planta herbácea e tropical, que apresenta folhagem de cores vivazes, contrastantes entre si, oferecendo um visual estonteante. O nome ‘Brasil’, dado à cultivar é uma referência ao verde-amarelo da bandeira brasileira. Suas folhas são ovadas a cordiformes, acuminadas, brilhantes, coriáceas, de cor verde escura e com o centro verde-limão. Este belo filodendro é ideal para plantar em vasos ou cestas pendentes, adornando interiores bem iluminados. ');
INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('11', 'Jibóia', '1', '88,00', '11', '/images/plants/kevin-lessy-aKqw_M1CmfI-unsplash.jpg', 'Epipremnum pinnatum', 'A jibóia é uma planta bastante vistosa que tem a habilidade de se apoiar em diversos substratos, esta planta pode ser uma boa pedida para decorar interiores. Suas folhas são brilhantes e se alteram de acordo com a maturidade da planta, inicialmente são pequenas, sem variegações ou recortes, com o crescimento tornam-se grandes, variegadas e algumas vezes recortadas. É uma das poucas trepadeiras para utilização à meia-sombra.Para ter uma folhagem sempre bonita e crescimento rápido, deve ser plantada em substrato rico em matéria orgânica e receber regas periódicas.');
INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('12', 'Planta-chinesa-do-dinheiro', '1', '77,00', '5', '/images/plants/severin-candrian-qoegZJ3ybOY-unsplash.jpg', 'Pilea peperomioides', 'A planta-chinesa-do-dinheiro é uma folhagem ornamental, nativa das províncias de Yunnan e  Sichuan, localizadas ao sul da China, onde cresce sobre rochas úmidas em florestas entre 1500 a 3000m de altitude. Atinge cerca de 30 cm de altura. Seu caule é ereto e a textura suculenta, lignificando levemente na base dos exemplares mais velhos. As folhas são peltadas (o pecíolo se insere no meio do limbo), redondas, de cor verde brilhante e com longos pecíolos. ');
INSERT INTO `plantinhas`.`produtos` (`id`, `nome`, `id_categoria_fk`, `preco`, `quantidade`, `produto_img`, `descricao_curta`, `descricao_longa`) VALUES ('13', 'Antúrio-browni', '1', '102,00', '10', '/images/plants/sanni-sahil-LEaK1Lmd1a8-unsplash.jpg', 'Anthurium brownii', 'O antúrio-browni é uma planta herbácea, tanto epífita quanto terrestre, de ciclo de vida perene, que apresenta folhagem ornamental, com aspecto de coração. Ele é nativo das Américas Central e do Sul, sendo encontrado nas florestas tropicais. Essa espécie é ideal para cultivar em ambientes internos, trazendo tropicalidade e o característico clima urban jungle aos cômodos.');

CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `senha` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cpf` char(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `plantinhas`.`usuario` (`id`, `nome`, `email`, `senha`, `cpf`, ) VALUES ('1', 'Usuario Padrão', 'mail@email.com', '12345', '000.000.000-50');

CREATE TABLE `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario_fk` int NOT NULL,
  `quantidade_itens` int NOT NULL,
  `valor_total` decimal(7,2) NOT NULL,
  `forma_pagamento` varchar(250),
  `endereco_entrega` varchar(300) COLLATE utf8mb4_unicode_ci,
  `data_pedido` date DEFAULT CURRENT_TIMESTAMP,
  `status_pedido` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT "realizado",
  PRIMARY KEY (`id`),
  KEY `id_usuario_fk` (`id_usuario_fk`),
  CONSTRAINT `id_usuario_fk` FOREIGN KEY (`id_usuario_fk`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `itens_pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_pedido_fk` int NOT NULL,
  `item_fk` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `item_fk` (`item_fk`),
  KEY `id_pedido_itens_fk` (`id_pedido_fk`),
  CONSTRAINT `id_pedido_itens_fk` FOREIGN KEY (`id_pedido_fk`) REFERENCES `pedido` (`id`),
  CONSTRAINT `item_fk` FOREIGN KEY (`item_fk`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;