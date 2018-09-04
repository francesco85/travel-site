import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll {
    constructor(els,offset) {
        this.itemsToReveal = els;
        this.offsetPerc = offset;
        this.events();
        this.hideInitially();
        this.createWaypoints();
    }
    events() {
        
    }
    
    hideInitially(){
        this.itemsToReveal.addClass('reveal-item');
    }
    
    createWaypoints(){
        var that = this;
        this.itemsToReveal.each(function(){
            var currentItem = this;
            new Waypoint({
                element:currentItem,
                handler: function(){
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: that.offsetPerc
            });
        });
    }
}

export default RevealOnScroll; 