<?php
    function createUser($bdd,$nom, $prenom, $mail, $password){
        try {
            $req = $bdd->prepare("INSERT INTO utilisateur(nom_util, prenom_util, mail_util,
            password_util)VALUES(?, ?, ?, ?)");
            $req->bindParam(1, $nom, PDO::PARAM_STR);
            $req->bindParam(2, $prenom, PDO::PARAM_STR);
            $req->bindParam(3, $mail, PDO::PARAM_STR);
            $req->bindParam(4, $password, PDO::PARAM_STR);
            $req->execute();
        } 
        catch (Exception $e) 
        {
            //affichage d'une exception en cas d’erreur
            die('Erreur : '.$e->getMessage());
        }
    }

    //fonction qui retourne un tableau associatif d'un utilisateur null (ex :?string)
    function showUserByMail($bdd, $mail):?array{
        try {
            $req = $bdd->prepare("SELECT id_util, nom_util, prenom_util,mail_util, password_util FROM utilisateur WHERE mail_util = ?");
            $req->bindParam(1, $mail, PDO::PARAM_STR);
            $req->execute();

            $data = $req->fetchAll(PDO::FETCH_ASSOC);
            return $data;
        } 
        catch (Exception $e) 
        {
            //affichage d'une exception en cas d’erreur
            die('Erreur : '.$e->getMessage());
        }
    }
?>