window.onload = function()
{
    var fenetre;
    var block = 25;
    var delay = 50;
    var ctx;        
    var serpent;
    var pomme;
    var x;
    var y;
    var timeout;
    var compteur = 0;

    document.onkeydown = function handleKeyDown(e)
    {
        var touche = e.keyCode;
        var newDirection;
        switch(touche)
        {
            case 32 :
                restart();
                return;
            case 37:
                newDirection = "gauche";
                break;
            case 38:
                newDirection = "haut";
                break;
            case 39:
                newDirection = "droite";
                break;
            case 40:
                newDirection = "bas";
                break;
            default:
                return;
        }
        serpent.setDirection(newDirection);
    }

    function init()
    {
        fenetre = document.createElement("canvas");

        fenetre.width = block*50;
        fenetre.height = block*25;
        fenetre.style.border = "1px solid";
        fenetre.style.background = "#f4a261";
        fenetre.style.margin = "auto";
        fenetre.style.display = "block";

        document.body.appendChild(fenetre);
        ctx = fenetre.getContext("2d");

        serpent = new Snake([ [6,4],[5,4],[4,4] ] , "droite");
        pomme = new Apple([ Math.round(Math.random() * 50-1) , Math.round(Math.random() * 25-1) ]);

        refresh()
    }

    function refresh()
    {
        ctx.clearRect(0, 0, fenetre.width, fenetre.height);

        score();
        
        serpent.draw();
        serpent.avance();

        if (serpent.miam(pomme))
        {
            compteur +=1;
            serpent.aManger = true;
            do
            {
                pomme.newposition();
            }
            while (pomme.surSerpent(serpent))
        }
        pomme.draw();

        timeout = setTimeout(refresh,delay);
    }

    function Apple(position)
    {
        this.position = position;
        
        this.draw = function()
        {
            ctx.save();
            ctx.fillStyle = "#2a9d8f";
            ctx.beginPath();
            ctx.arc(this.position[0] * block + block/2, this.position[1] * block + block/2, block/2, 0, Math.PI*2, true);
            ctx.fill();
            ctx.restore();
        };

        this.newposition = function()
        {
            var newX = Math.round(Math.random() * 50-1);
            var newY = Math.round(Math.random() * 25-1);
            this.position = [newX , newY];
        };

        this.surSerpent = function(serpentACheck)
        {
            for (var i = 0; i < serpentACheck.corp.length; i++)
            {
                if (this.position[0] === serpentACheck.corp[i][0] && this.position[1] === serpentACheck.corp[i][1])
                    return true
                else
                    return false
            }
        };

    }

    function Snake(corp, direction)
    {
        this.corp = corp;
        this.direction = direction;
        this.aManger = false;

        this.draw = function ()
        {
            ctx.save();
            ctx.fillStyle = "#264653";
            for (var i = 0; i < this.corp.length; i++)
            {
                x = this.corp[i][0] * block;
                y = this.corp[i][1] * block;
                ctx.fillRect(x, y, block, block);
            }
            ctx.restore();
        };

        this.avance = function()
        {
            var stop = false;
            var newpos = this.corp[0].slice();

            if (this.corp[0][0] > 50-1 || this.corp[0][0] < 0 || this.corp[0][1] < 0 || this.corp[0][1] > 25-1)
            {
                stop = true;
            }
            for (var i = 1; i < this.corp.length; i++)
            {
                if (newpos[0] === this.corp[i][0] && newpos[1] === this.corp[i][1])
                {
                    stop = true;
                }
            }
            if (this.direction === "droite" && stop === false)
            {
                newpos[0] += 1;
                this.corp.unshift(newpos);
                if (!this.aManger)
                    this.corp.pop();
                else
                    this.aManger = false
            } else if (this.direction === "gauche" && stop === false)
            {
                newpos[0] -= 1;
                this.corp.unshift(newpos);
                if (!this.aManger)
                    this.corp.pop();
                else
                    this.aManger = false
            }else if (this.direction === "haut" && stop === false)
            {
                newpos[1] -= 1;
                this.corp.unshift(newpos);
                if (!this.aManger)
                    this.corp.pop();
                else
                    this.aManger = false
            } else if (this.direction === "bas" && stop === false)
            {
                newpos[1] += 1;
                this.corp.unshift(newpos);
                if (!this.aManger)
                    this.corp.pop();
                else
                    this.aManger = false       
            }else
                looser();
        };

        this.setDirection = function(newDirection)
        {
            if (this.direction == "droite" || this.direction == "gauche" )
            {
                if (newDirection == "haut" )
                {
                    this.direction = "haut";
                } else if (newDirection == "bas" )
                {
                    this.direction = "bas";
                }
            }else if (this.direction == "haut" || this.direction == "bas")
            {
                if (newDirection == "droite" )
                {
                    this.direction = "droite";
                } else if (newDirection == "gauche" )
                {
                    this.direction = "gauche";
                }
            }
        };

        this.miam = function(hum)
        {
            if (this.corp[0][0] === hum.position[0] && this.corp[0][1] === hum.position[1])
                return true;
            else
                return false;
        };

    }

    function looser()
    {
        ctx.save();

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.font = "bold 100px sans-serif";
        ctx.fillStyle = "black";
        ctx.strokeStyle = "white";
        ctx.lineWidth = 5;

        ctx.strokeText("Game Over", 50*block/2, 25*block/4);
        ctx.fillText("Game Over", 50*block/2, 25*block/4);

        ctx.font = "bold 30px sans-serif";
        ctx.lineWidth = 2;
        ctx.strokeText("Press space to play again",50*block/2, 25*block/4+100);
        ctx.fillText("Press space to play again",50*block/2, 25*block/4+100);
        ctx.restore();
    }

    function score()
    {
        ctx.save();
        ctx.font = "bold 400px sans-serif";
        ctx.fillStyle = "#f6b480";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(compteur, 50*block/2, 25*block/2);
        ctx.restore();
    }

    function restart()
    {
        serpent = new Snake([ [6,4],[5,4],[4,4] ] , "droite");
        pomme = new Apple([ Math.round(Math.random() * 50-1) , Math.round(Math.random() * 25-1) ]);
        clearTimeout(timeout);
        compteur = 0;

        refresh()
    }

    init();
    
}