import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smooth from 'jquery-smooth-scroll';

class StickyHeader {
    constructor(){
        this.lazyImages = $('lazyload');
        this.siteHeader = $('.site-header');
        this.headerTriggerEl= $('.large-hero__title');
        this.createHeaderWaypoint();
        this.pageSections = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.createSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }
    //questa funzione serve a fare refresh dei waypoints: waypoint calcola distanza viewport e elemento e se non si fa refresh di questo calcolo, volta che immagini caricate con lazyload, queste modifichino distanze tra waypoint ed elementi provocando effetto sfasato
   refreshWaypoints(){
        this.lazyImages.on('load',function(){
            Waypoint.refreshAll();
        });
    }
    
    addSmoothScrolling(){
        this.headerLinks.smoothScroll();
    }
    
    createHeaderWaypoint(){
        var that = this;
        new Waypoint({
            element: that.headerTriggerEl[0],
            handler:function(direction){
                if(direction == 'down'){
                    that.siteHeader.addClass('site-header--dark');   
                }else{
                    that.siteHeader.removeClass('site-header--dark');
                }
            }
        });
    }
    
    createSectionWaypoints(){
        var that = this;
        this.pageSections.each(function(){
            var currentPageSection = this;
            new Waypoint({
                element:currentPageSection,
                handler: function (direction){
                   if(direction == 'down'){   
                        var matchinHeaderLink = currentPageSection.getAttribute('data-match');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchinHeaderLink).addClass('is-current-link');
                   }
                },
                offset: "18%"
            });
            
            new Waypoint({
                element:currentPageSection,
                handler: function (direction){
                   if(direction == 'up'){   
                        var matchinHeaderLink = currentPageSection.getAttribute('data-match');
                        that.headerLinks.removeClass('is-current-link');
                        $(matchinHeaderLink).addClass('is-current-link');
                   }
                },
                offset: "-40%"
            });
        });
    }
    
}

export default StickyHeader;