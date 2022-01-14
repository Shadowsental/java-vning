const number = document.getElementById("divisible")
const bish = document.getElementById("bish")
const bosh = document.getElementById("bosh")

let div = document.getElementById('change')

    function bishbosh() 
    {
        div.innerHTML = div.innerHTML
        for(let i = 1; i < number.value; i++)
        {
            if(i % bish.value == 0)
            {
                console.log("bish")
                div.innerHTML = div.innerHTML + "bish"
                
            } 

            else if(i % bosh.value == 0) 
            {
                console.log("bosh")
                div.innerHTML = div.innerHTML + "bosh"
            }

            else if(i % bosh.value == 0 && i % bish.value == 0) 
            {
                console.log("bishbosh")
                div.innerHTML = div.innerHTML + "bishbosh"
            }

            else 
            {
                console.log(i)
                div.innerHTML = div.innerHTML + i
            }

            div.innerHTML = div.innerHTML + '<p>'
        }
    }