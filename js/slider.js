/**
 * Created by Анна Вовк on 04.08.2016.
 */
(
    function(){
        $( "#price-slider" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
            slide: function( event, ui ) {
                console.log(ui.values);
                //$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
    }
)();
