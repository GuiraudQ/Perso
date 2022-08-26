$(document).ready(
    function(){
        var $mainMenuItems = $("#main-menu ul").children("li"),
            totalMainMenuItems = $mainMenuItems.length,
            openedIndex = 2,

            init = 
            function(){
                bindEvents ();
                if(ValidIndex(openedIndex))
                {
                    animateItem ($mainMenuItems.eq(openedIndex), true, 500);
                }
            },

            bindEvents =   
            function (){
                $mainMenuItems.children(".images").click(
                    function(){
                        var newIndex = $(this).parent().index();
                            $item = $mainMenuItems.eq(newIndex);
                        CheckAndAnimateItem(newIndex);               
                    }
                );

                $(".button").click(
                    function(){
                        var newIndex = $(this).index();
                    CheckAndAnimateItem(newIndex);      
                    }
                );
            },

            ValidIndex = 
            function(IndexToCheck){
                return (IndexToCheck >= 0) && (IndexToCheck < totalMainMenuItems)
            },

            animateItem = 
            function($item, toOpen, speed){
                var $colorImage = $item.find(".color");

                itemParam = toOpen ?  {width : "420px"} : {width :"140px"},
                colorImageParam = toOpen ? {left : "0px"} : {left :"140px"};

                $colorImage.animate( colorImageParam , speed );
                $item.animate( itemParam , speed );
            };

            CheckAndAnimateItem = 
            function(IndexToCheckAndAnimate){
                if (openedIndex == IndexToCheckAndAnimate)
                    {
                        animateItem ($mainMenuItems.eq(IndexToCheckAndAnimate), false, 250);
                        openedIndex = -1;
                    } else
                    {
                        if(ValidIndex(IndexToCheckAndAnimate))
                        {
                            animateItem ($mainMenuItems.eq(openedIndex), false, 250);
                            openedIndex = IndexToCheckAndAnimate
                            animateItem ($mainMenuItems.eq(openedIndex), true, 250);
                        }
                    }
            };
        init();
    }
);