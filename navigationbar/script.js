var navigationstatus = 0;

function opennavigation()
{
    if(!navigationstatus)
        {
            $('.main').css('width','100%')
            $('li').css('display','block')
            navigationstatus = 1
        }
    else{
            $('.main').css('width','0%')
            $('li').css('display','none')
            navigationstatus=0
        }
}