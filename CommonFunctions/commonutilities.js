class CommonUtilities
{ 
    scroll()
    {
        const {width,height}=driver.getWindowSize();
        const startx=height/2;
        const starty=width*0.8;
        const endy=width*0.2;
        driver.touchPerform([
            {action: 'longPress',
            options: {
                x:startx,
                y:starty,
            },
        },
        {
            action: 'moveTo',
            options: {
                x:startx,
                y:endy,
            },
        },
        {
            action: 'release',
            options: {},
        },
        ])
        
    }

    scrollHorizontal()
    {
        const {width,height}=driver.getWindowSize();
        const starty=height/2;
        const startx=width*0.8;
        const endx=width*0.2;
        driver.touchPerform([
            {action: 'longPress',
            options: {
                x:startx,
                y:starty,
            },
        },
        {
            action: 'moveTo',
            options: {
                x:endx,
                y:starty,
            },
        },
        {
            action: 'release',
            options: {},
        },
        ])
    }
}
module.exports=new CommonUtilities();