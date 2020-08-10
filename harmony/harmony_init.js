( function ( harmony, undefined )
{
    harmony.init_pixi = function ( pixi, document, harmony_data )
    {
        let type = "WebGL";

        if ( !pixi.utils.isWebGLSupported () )
        {
            type = "canvas";
        }

        pixi_app = new pixi.Application (
        {
            width  : harmony_data.canvas_size,
            height : harmony_data.canvas_size,
            view   : document.getElementById ( "pixi_canvas" ),
            transparent : false,
            backgroundColor : 0x112266,
        });


        pixi.utils.sayHello ( type );

    };
} ( self.harmony = self.harmony || {} ) )
