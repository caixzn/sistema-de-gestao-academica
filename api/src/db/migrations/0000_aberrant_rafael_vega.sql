CREATE TABLE `aluno` (
	`id` bigint PRIMARY KEY NOT NULL,
	`data_nascimento` date,
	`data_ingresso` date,
	`curso_id` bigint
);
--> statement-breakpoint
CREATE TABLE `campus` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`nome` varchar(256),
	`endereco_id` bigint,
	CONSTRAINT `campus_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `curso` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`nome` varchar(256),
	`campus_id` bigint,
	CONSTRAINT `curso_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `disciplina` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`nome` varchar(256),
	CONSTRAINT `disciplina_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `disciplina_pre_requisito` (
	`pre_requisito_id` bigint NOT NULL,
	`disciplina_id` bigint NOT NULL,
	CONSTRAINT `disciplina_pre_requisito_disciplina_id_pre_requisito_id` PRIMARY KEY(`disciplina_id`,`pre_requisito_id`)
);
--> statement-breakpoint
CREATE TABLE `endereco` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`pessoa_id` bigint,
	`cep` char(8),
	`logradouro` varchar(256),
	`numero` varchar(256),
	`complemento` varchar(256),
	`bairro` varchar(256),
	`cidade` varchar(256),
	`estado` enum('AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'),
	CONSTRAINT `endereco_id_unique` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `pessoa` (
	`id` bigint AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`nome` varchar(256),
	`sobrenome` varchar(256),
	`cpf` char(11) NOT NULL,
	`sexo` enum('M','F','O'),
	`raca` varchar(256),
	CONSTRAINT `pessoa_id_unique` UNIQUE(`id`),
	CONSTRAINT `pessoa_cpf_unique` UNIQUE(`cpf`)
);
--> statement-breakpoint
CREATE TABLE `professor` (
	`id` bigint PRIMARY KEY NOT NULL,
	`data_contratacao` date,
	`departamento` varchar(256),
	`salario` decimal(16,2),
	`curso_id` bigint,
	CONSTRAINT `professor_id_unique` UNIQUE(`id`)
);
