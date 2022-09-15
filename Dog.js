

class newDow {
    constructor(data){
        Object.assign(this,data)
    }
    getDogHtml(){
        const {name,  age, bio } = this
        
        
        return (


            `<div class="background-image" id="image">
                <div class="rotated" id="rotated-id">
                    <img src="/images/badge-like.png"></img>
                </div>
                <div class="d-flex-image">
                    <h1>${name}, ${age}</h1>
                    <h2>${bio}</h2>
                </div>
            </div>`
        )
    }
}

export default newDow