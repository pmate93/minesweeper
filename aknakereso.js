$('document').ready(function(){

    var columns=0;
    var bombs=0;
    
    if(!$('#field').hasClass('first')){
        var columns=10;
        var bombs=10;
        $('#field').addClass('first');
    }else{

    }

    $('#submit').click(function(){
        columns = parseInt($('#columns').val());
        bombs = parseInt($('#bombs').val());
        field = makeField(columns, bombs);
        
    });

    function makeField(columns, bombs){
        $('#field').text('');
        $('.flex').removeClass('green');
        $('.flex').removeClass('red');
        $('.message').remove();

        var field = new Array(columns);
        

        for(var i = 0; i < columns ;i++){
            for(var j=0; j< columns ; j++){
                field[j] = new Array(columns);
            }
        }
        for(var i = 0; i < columns; i++){
            for(var j = 0; j < columns; j++){
                field[i][j] = false;
            }
        }

        var counter = 0;
        do{
            var first = Math.floor(Math.random() * columns);
            var second = Math.floor(Math.random() * columns);
            if(field[first][second]==false){
                field[first][second] = true;
                counter++;
            }
        }while(counter!=bombs);



        for(var i = 0; i < columns; i++){
            $('#field').append('<tr>');
            for(var j=0; j< columns; j++){
                $('#field tr:last').append('<td><img src="images/button.png" class="click imgH" id="' + i + '-' + j + '"></td>');
            }
        }

        return field;
    }

    function korbe(first, second, field, columns){
        var counter=0;

        //teljes
        if(first>0 && second < columns && second > 0 && first < columns){
            
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
        if(second == columns && first == 0){
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
        if(second == columns && first == columns){
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
        if(second == 0 && first == columns){
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
        if(second == 0 && first < columns && first > 0 ){
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
        if(first == 0 && second > 0 && second < columns){
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
        if(second == columns && first >0 && first < columns){
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
        if(first == columns && second < columns && second > 0){
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

        if(counter==0 && (!$('#' + first + '-' + second).hasClass('checked'))){
            $('#' + first + '-' + second).attr("src", "images/0.png");
            $('#' + first + '-' + second).addClass('checked');
            
            if(first+1 <= columns && second-1 >= 0){
                korbe(first+1, second-1, field, columns);
            }
            if(first + 1 <= columns){
                korbe(first+1, second, field, columns);
            }
            if(first+1 <= columns && second+1 <= columns){
                korbe(first+1, second+1, field, columns);
            }
            if(second+1 <=columns){
                korbe(first, second+1, field, columns);
            }
            if(first-1 >=0 && second+1 <= columns){
                korbe(first-1, second+1, field, columns);
            }
            if(first-1 >=0){
                korbe(first-1, second, field, columns);
            }
            if(first-1 >=0 && second-1 >= 0){
                korbe(first-1, second-1, field, columns);
            }
            if(second-1 >= 0){
                korbe(first, second-1, field, columns);
            }
            

        }else{
            $('#' + first + '-' + second).attr("src", "images/" + counter + ".png");
            $('#' + first + '-' + second).addClass('checked');
            return(counter);
        }

    }

    
    $('table').on('click', '.click', function(){
        
        var id = $(this).attr('id');
        id = id.split('-');
        for(var i = 0; i< id.length; i++){
            id[i] = parseInt(id[i]);
        }
        if(($(this).attr("src") != "images/flag.jpg")){
            if(field[id[0]][id[1]] == true){
                $(this).attr("src", "images/akna.jpg");
                $('.flex').addClass('red');
                $('.click').removeClass('imgH');
                $('.click').addClass('imgNot');
                $('img').removeClass('click');

                for(var i = 0; i < columns; i++){
                    for(var j = 0; j < columns; j++){
                        if(field[i][j]){
                            $('#' + i + '-' + j).attr("src", "images/akna.jpg");
                        }
                    }
                }


            }else{
                
                korbe(id[0], id[1], field, (columns - 1));
            }
        }

        //ellenőrzés
        var counter=0;
        $('.click').each(function(){
        if($(this).attr('src') == 'images/button.png' || $(this).attr('src') == 'images/flag.jpg'){
            counter++;
            }
        })

        if(counter == bombs){
            $('.flex').addClass('green');
            $('.sign').after('<div class="message"></div>');
            $('.message').append('Ön nyert!');
            $('.click').removeClass('imgH');
            $('.click').addClass('imgNot');
            $('img').removeClass('click');
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
        //location.reload();
        field = makeField(columns, bombs);
    })
    
    
    field = makeField(columns, bombs);
    //$('#0-0').attr("src", "images/akna.jpg");
    
})