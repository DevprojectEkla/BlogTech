var section = document.querySelector('#intro');
var badge = document.querySelector('.badge')
console.log(section);
console.log(badge);
console.log(section.children.length);
console.log(section.children);
//for (i = 0; i<section.children.length; i++)
container = section.children

TweenMax.fromTo
  (badge,
    {
      opacity: 1,
      y: 15,
      x: -300,

    },
    {
      y: 100,
      x: (0),
      
      opacity: 0,
      duration: 10
    }
  )

TweenMax.fromTo
  (container[0],
    {

      opacity: 0,
      x: -300,

    },
    {
      x: (0),

      scrollTrigger:
      {
        trigger: container[0],
        container: "#section2",
        start: "top 30%",
        end: "bottom 80%",
        // markers: {fontSize: "2rem"},
        scrub: .5, //or a number in second
        //toggleClass: "invisible",
        toggleActions: "restart none none none",
        //            onenter onLeave  onEnterback   onLeaveBack
        onToggle: self => console.log(container.className),
        //pinSpacing: false,
        //pin: true          

      },
      opacity: 1,
      duration: 2
    }
  )
for (i = 1; i < section.children.length; i++) {
  TweenMax.fromTo
    (container[i],
      {

        opacity: 0,
        x: (-1) ** (i + 1) * 300,
      },
      {
        x: (-1) ** (i + 1) * (-40),
        scrollTrigger:
        {
          trigger: container[i],
          container: "#section2",
          start: "top 60%",
          end: "300px 50%",
          // markers: {fontSize: "2rem"},
          scrub: 1, //or a number in second
          //toggleClass: "invisible",
          toggleActions: "restart none none none",
          //            onenter onLeave  onEnterback   onLeaveBack
          onToggle: self => console.log(container.className),
          //pinSpacing: false,
          //pin: true          

        },
        opacity: 1,
        duration: 3
      }
    )
    ;
}