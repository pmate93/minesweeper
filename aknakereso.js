$('document').ready(function(){

    function makeField(){
        var field = new Array(10);

        for(var i = 0; i <10;i++){
            for(var j=0; j<10; j++){
                field[j] = new Array(10);
            }
        }
        for(var i = 0; i < 10; i++){
            for(var j = 0; j < 10; j++){
                field[i][j] = false;
            }
        }

        var counter = 0;
        do{
            var first = Math.floor(Math.random() * 10);
            var second = Math.floor(Math.random() * 10);
            if(field[first][second]==false){
                field[first][second] = true;
                counter++;
            }
        }while(counter!=10);



        for(var i = 0; i <10;i++){
            $('#field').append('<tr>');
            for(var j=0; j<10; j++){
                $('#field tr:last').append('<td><img src="images/button.png" class="click imgH" id="' + i + j + '"></td>');
            }
        }

        return field;
    }

    function korbe(first, second, field){
        var counter=0;
        

        //teljes
        if(first>0 && second < 9 && second > 0 && first < 9){
            if(field[first+1][second-1] == true){
                counter++;
            }
            if(field[first+1][second] == true){
                counter++;
            }
            if(field[first+1][second+1] == true){
                counter++;
            }
            if(field[first][second+1] == true){
                counter++;
            }
            if(field[first-1][second+1] == true){
                counter++;
            }
            if(field[first-1][second] == true){
                counter++;
            }
            if(field[first-1][second-1] == true){
                counter++;
            }
            if(field[first][second-1] == true){
                counter++;
            }
        }
        //balfelsősarok
        if(second == 0 && first == 0){
            if(field[first+1][second] == true){
                counter++;
            }
            if(field[first+1][second+1] == true){
                counter++;
            }
            if(field[first][second+1] == true){
                counter++;
            }
        }

        //jobbfelsősarok
        if(second == 9 && first == 0){
            if(field[first+1][second-1] == true){
                counter++;
            }
            if(field[first+1][second] == true){
                counter++;
            }
            if(field[first][second-1] == true){
                counter++;
            }
        }

        //jobbalsósarok
        if(second == 9 && first == 9){
            if(field[first-1][second] == true){
                counter++;
            }
            if(field[first-1][second-1] == true){
                counter++;
            }
            if(field[first][second-1] == true){
                counter++;
            }
        }

        //balalsósarok
        if(second == 0 && first == 9){
            if(field[first][second+1] == true){
                counter++;
            }
            if(field[first-1][second+1] == true){
                counter++;
            }
            if(field[first-1][second] == true){
                counter++;
            }
        }


        //balközép
        if(second == 0 && first < 9 && first > 0 ){
            if(field[first+1][second] == true){
                counter++;
            }
            if(field[first+1][second+1] == true){
                counter++;
            }
            if(field[first][second+1] == true){
                counter++;
            }
            if(field[first-1][second+1] == true){
                counter++;
            }
            if(field[first-1][second] == true){
                counter++;
            }
        }

        //felsőközép
        if(first == 0 && second > 0 && second < 9){
            if(field[first+1][second-1] == true){
                counter++;
            }
            if(field[first+1][second] == true){
                counter++;
            }
            if(field[first+1][second+1] == true){
                counter++;
            }
            if(field[first][second+1] == true){
                counter++;
            }
            if(field[first][second-1] == true){
                counter++;
            }
        }

        //jobbközép
        if(second == 9 && first >0 && first < 9){
            if(field[first+1][second-1] == true){
                counter++;
            }
            if(field[first+1][second] == true){
                counter++;
            }
            if(field[first-1][second] == true){
                counter++;
            }
            if(field[first-1][second-1] == true){
                counter++;
            }
            if(field[first][second-1] == true){
                counter++;
            }
        }

        //alsóközép
        if(first == 9 && second < 9 && second > 0){
            if(field[first][second+1] == true){
                counter++;
            }
            if(field[first-1][second+1] == true){
                counter++;
            }
            if(field[first-1][second] == true){
                counter++;
            }
            if(field[first-1][second-1] == true){
                counter++;
            }
            if(field[first][second-1] == true){
                counter++;
            }
        }

        if(counter==0 && (!$('#' + first + second).hasClass('checked'))){
            $('#' + first + second).attr("src", "images/0.png");
            $('#' + first + second).addClass('checked');
            
            if(first+1 <= 9 && second-1 >= 0){
                korbe(first+1, second-1, field);
            }
            if(first + 1 <= 9){
                korbe(first+1, second, field);
            }
            if(first+1 <= 9 && second+1 <= 9){
                korbe(first+1, second+1, field);
            }
            if(second+1 <=9){
                korbe(first, second+1, field);
            }
            if(first-1 >=0 && second+1 <= 9){
                korbe(first-1, second+1, field);
            }
            if(first-1 >=0){
                korbe(first-1, second, field);
            }
            if(first-1 >=0 && second-1 >= 0){
                korbe(first-1, second-1, field);
            }
            if(second-1 >= 0){
                korbe(first, second-1, field);
            }
            

        }else{
            $('#' + first + second).attr("src", "images/" + counter + ".png");
            $('#' + first + second).addClass('checked');
            return(counter);
        }

    }




    $('table').on('click', '.click', function(){
        var id = $(this).attr('id');
        id = id.split('');
        for(var i = 0; i< id.length; i++){
            id[i] = parseInt(id[i]);
        }

        if(($(this).attr("src") != "images/flag.jpg")){
            if(field[id[0]][id[1]] == true){
                $(this).attr("src", "images/akna.jpg");
                $('table').off();
                $('.flex').addClass('red');
                $('.click').removeClass('imgH');
                $('.click').addClass('imgNot');

                for(var i = 0; i < 10; i++){
                    for(var j = 0; j < 10; j++){
                        if(field[i][j]){
                            $('#' + i + j).attr("src", "images/akna.jpg");
                        }
                    }
                }


            }else{
                korbe(id[0], id[1], field);
            }
        }

        //ellenőrzés
        var counter=0;
        $('.click').each(function(){
        if($(this).attr('src') == 'images/button.png' || $(this).attr('src') == 'images/flag.jpg'){
            counter++;
            }
        })

        if(counter == 10){
            $('.flex').addClass('green');
            $('.sign').after('<div class="message"></div>');
            $('.message').append('Ön nyert!');
            $('table').off();
            $('.click').removeClass('imgH');
            $('.click').addClass('imgNot');
        }

    
    });
    
    $('table').on('contextmenu', '.click', function(){
        if($(this).attr("src") == 'images/button.png'){
            $(this).attr("src", "images/flag.jpg");
            
        }
        else if($(this).attr("src") == "images/flag.jpg"){
            $(this).attr("src", "images/button.png");
            
        }
    });

    $(document).bind("contextmenu",function(e){
        return false;
    });
   
    $('.head').click(function(){
        location.reload();
    })
    
    
    field = makeField();
})
