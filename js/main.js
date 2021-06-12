/*slideshow*/


const slideShoDiv = () => {
  for (let i = 1; i < 5; i++) {
    const div = document.createElement("div");

    div.style.backgroundImage = `url(img/images/slideshow/section-1-bg-${i}.jpg)`

    i === 1 && div.classList.add("change")

    document.querySelector(".slideshow").appendChild(div);
  }
}


slideShoDiv();


$(document).ready(function () {
  const divs = $(".slideshow div");

  a = 1;


  setInterval(() => {

    a++;
    const div = $(".slideshow .change");
    div.removeClass("change");
    if (a < divs.length) {
      div.next().addClass("change");
    } else {
      a = 1;
      divs.first().addClass("change")
    }


  }, 10000)

  /*cubbe controller*/

  let x = 0;
  let y = 0;
  let z = 0;

  let boolean = true;

  let inteval;

  const cube = $(".cube");


  $(".top-x-control").click(() => {
    cube.css("transform", `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`);
  });

  $(".bottom-x-control").click(() => {
    cube.css("transform", `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`);
  });


  $(".left-y-control").click(() => {
    cube.css("transform", `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg)`);

  });


  $(".right-y-control").click(() => {
    cube.css("transform", `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`);

  });


  $(".top-z-control").click(() => {
    cube.css("transform", `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`);

  });

  $(".bottom-z-control").click(() => {
    cube.css("transform", `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`);

  });
  $(".controls").mouseover(() => {
    clearInterval(inteval);
  })

  $(".controls").mouseout(() => {
    inteval = setInterval(() => {

      cube.css("transform", `rotateX(${x}deg) rotateY(${y += 2}deg) rotateZ(${z}deg)`);

    }, 100)
  })


  if (boolean) {
    inteval = setInterval(() => {

      cube.css("transform", `rotateX(${x}deg) rotateY(${y += 2}deg) rotateZ(${z}deg)`);

    }, 100)
  } else {
    clearInterval(inteval);
  }


  /*end cube controller*/


  /*e*/

});


/* end of slideshow*/
/*controllers*/

