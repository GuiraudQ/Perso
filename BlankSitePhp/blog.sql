CREATE DATABASE blank;
USE blank;
-- Ajouter une table maTable
CREATE TABLE maTable(
	id_table int primary key auto_increment not null,
    nom_table varchar(50) not null,
    prenom_table varchar(50) not null,
    mail_table varchar(50) not null,
    password_table varchar(100) not null,
    img_table varchar(100) null,
	validate_table tinyint(1),
    id_table2 int null
)Engine=InnoDB;

-- modifier la table utilisateur
ALTER TABLE utilisateur
-- ajouter une contrainte et lui donner un nom en cas de probleme
add constraint fk_posseder_table2
-- ajouter la contrainte sur la clé id_table2
foreign key(id_table2)
-- ajouter la contrainte sur la clé ajouter au dessus depuis la clé ajouter dessous
references role(id_table2);