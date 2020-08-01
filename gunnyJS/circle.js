
            
    var circle = document.getElementsByClassName('xoay')
    console.log(circle)
    let deg = -360;
    let _deg = 360
    let num = 360
    function xoayCircle(){
        circle[0].style.transform       = 'rotate('+deg+'deg) '; 
        circle[0].style.mozTransform    = 'rotate('+deg+'deg)'; 
        circle[0].style.msTransform     = 'rotate('+deg+'deg) '; 
        circle[0].style.oTransform      = 'rotate('+deg+'deg) '; 
        circle[0].style.transform       = 'rotate('+deg+'deg) '; 

        circle[1].style.transform       = 'rotate('+_deg+'deg) '; 
        circle[1].style.mozTransform    = 'rotate('+_deg+'deg)'; 
        circle[1].style.msTransform     = 'rotate('+_deg+'deg) '; 
        circle[1].style.oTransform      = 'rotate('+_deg+'deg) '; 
        circle[1].style.transform       = 'rotate('+_deg+'deg) '; 

        circle[2].style.transform       = 'rotate('+deg+'deg) '; 
        circle[2].style.mozTransform    = 'rotate('+deg+'deg)'; 
        circle[2].style.msTransform     = 'rotate('+deg+'deg) '; 
        circle[2].style.oTransform      = 'rotate('+deg+'deg) '; 
        circle[2].style.transform       = 'rotate('+deg+'deg) '; 

        circle[3].style.transform       = 'rotate('+_deg+'deg) '; 
        circle[3].style.mozTransform    = 'rotate('+_deg+'deg)'; 
        circle[3].style.msTransform     = 'rotate('+_deg+'deg) '; 
        circle[3].style.oTransform      = 'rotate('+_deg+'deg) '; 
        circle[3].style.transform       = 'rotate('+_deg+'deg) '; 

        
        circle[4].style.transform       = 'rotate('+deg+'deg) '; 
        circle[4].style.mozTransform    = 'rotate('+deg+'deg)'; 
        circle[4].style.msTransform     = 'rotate('+deg+'deg) '; 
        circle[4].style.oTransform      = 'rotate('+deg+'deg) '; 
        circle[4].style.transform       = 'rotate('+deg+'deg) '; 

        circle[5].style.transform       = 'rotate('+_deg+'deg) '; 
        circle[5].style.mozTransform    = 'rotate('+_deg+'deg)'; 
        circle[5].style.msTransform     = 'rotate('+_deg+'deg) '; 
        circle[5].style.oTransform      = 'rotate('+_deg+'deg) '; 
        circle[5].style.transform       = 'rotate('+_deg+'deg) '; 
        deg < -36000 ? deg = 0: deg=deg-num
        _deg > 36000 ? _deg = 0: _deg=_deg+num
        
    }
    
