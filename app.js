// gsap.to("セレクタ", {
//   様々なパラメータ: 値,
//   duration: 秒数
// });

// window.onload = () => {
//   console.log("onload!");
//   gsap.to("#red", {
//     x: 300,
//     duration: 1,
//     ease: "power4.out",
//     delay: 1,
//     pause: true,
//     onStart: () => {
//       console.log("onload!");
//     },
//     onComplete: () => {
//       console.log("onComplete!!");
//     }
//   });
// }


window.onload = () => {
  gsap.fromTo('.js-demo-section', {
    autoAlpha: 0, //ここで初期状態を設定
  }, {
    autoAlpha: 1,
    x: 800, //横に800px動かす
    scrollTrigger: {
      trigger: '.js-trigger', //アニメーションが始まるトリガーとなる要素
      start: 'top center', //アニメーションが始まる位置を指定
      markers: true,
    }
  });
}
