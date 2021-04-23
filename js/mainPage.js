

export const personObserver = () => {
    const person = document.querySelectorAll('.person');
    const options = {
        //threshold: 0.2
    }
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            console.log(entry)
            if(!entry.isIntersecting) return;
            if(entry.intersectionRatio > 0) {
                entry.target.style.animation = `fadein 2s ease-in`;
            } else {
                entry.target.style.animation = 'none';
            }
            
        })
        
    }, options)
    
    
    person.forEach(persona => {
        observer.observe(persona);
    })
}