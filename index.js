const mainText = document.getElementById('main-text');
debugger;
document.querySelectorAll('.number-button')
    .forEach(el => {
        el.addEventListener('click', function (e) {
            const {id} = el;
            const [a, number] = id.split('-'); //but-1 => ['but', '1']
            mainText.value += number;
        })
        document.querySelectorAll('.plus')
        el.addEventListener('click',function(eq)
        {
        const {id} = el;
        mainText.value += number;
        })
    
    });

   