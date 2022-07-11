const elements = document.querySelectorAll('a');
alert(elements)

for(i =0; i< elements.length;i++){console.log(elements.NodeList)}
gsap.to(child,
    {
    duration:1,
    scrollTrigger:
      {
        trigger: child,
        container: "#section2",
        start: "top 90%",
        end: "top 50%",
        markers: {fontSize: "2rem"},
        toggleClass: "invisible",
        //toggleActions:"none none none none",
        //            onenter onLeave  onEnterback   onLeaveBack
        onToggle: self =>  console.log(child.className),
        //pinSpacing: false,
        //pin: true          
        
      }
    }
    )
;