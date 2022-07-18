var section = document.querySelector('#intro');
console.log (section);
console.log(section.children.length);
console.log(section.children);
//for (i = 0; i<section.children.length; i++)
container = section.children
for (i = 0; i < section.children.length; i++)
{
TweenMax.fromTo
    (container[i],
      {
      
      opacity:0,
      x:(-1)^(i+1)*300,      
      },
      {
        x:(-1)^(i+1)*-40,
        scrollTrigger:
        {
          trigger: container[i],
          container: "#section2",
          start: "top 70%",
          end: "300px 50%",
          markers: {fontSize: "2rem"},
          scrub:1, //or a number in second
          //toggleClass: "invisible",
          toggleActions:"restart none none none",
          //            onenter onLeave  onEnterback   onLeaveBack
          onToggle: self =>  console.log(container.className),
          //pinSpacing: false,
          //pin: true          
          
        },
        opacity:1,
        duration:3
      }
    )
;}