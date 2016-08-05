/**
 * Created by Анна Вовк on 04.08.2016.
 */
(
    function(){
        $( "#price-slider" ).slider({
            range: true,
            min: 0,
            max: 100500,
            values: [ 500, 100000 ],
            slide: function( event, ui ) {
                console.log(ui.values);
                //$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
    }
)();


(
    function(){
        $( "#heat-slider" ).slider({
            range: true,
            min: 0,
            max: 200,
            values: [ 10, 100 ],
            slide: function( event, ui ) {
                console.log(ui.values);
                //$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
    }
)();
