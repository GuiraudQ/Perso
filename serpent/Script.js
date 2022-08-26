window.onload = function()
{
    var canvas;
    var hauteur = 600;
    var largeur = 900;
    var block = 15;
    var ctx;
    var delay = 50;
    var xCoord = 0;
    var yCoord = 0;
    var vilain;

    function init()
    {
        canvas = document.createElement("canvas");
        canvas.width = largeur;
        canvas.height = hauteur;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext("2d");
        vilain = new Snake(body);
        refreshCanvas();
    }

    function refreshCanvas ()
    {
        xCoord += 1;
        yCoord += 1;
        ctx.clearRect(0, 0, largeur, hauteur);
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(xCoord, yCoord, block, block);
        vilain.draw();
        setTimeout(refreshCanvas, delay);
    }

    function Snake(Body)
    {
        this.body = body;
        this.draw = function()
        {
            ctx.save();
            ctx.fillStyle = "#ff0000";
            for(var i=0; i<this.body.length; i++)
            {
                drawblock(ctx, this.body[i]);
            }
            ctx.restore();
        }
    }

    init();
}

pomme = 2a9d8f