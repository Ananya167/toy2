var scene;
var accused = document.getElementById("accused");
var writer = document.getElementById("writer");
var judge1 = document.getElementById("judge1");
var judge2 = document.getElementById("judge2");
var judge3 = document.getElementById("judge3");
var plawyer = document.getElementById("Plawyer");
var plawyer1 = document.getElementById("Plawyer1");
var dlawyer = document.getElementById("Dlawyer");
var dlawyer1 = document.getElementById("Dlawyer1");
var plawyer_stand = document.getElementById("player_stand");
var dlawyer_stand = document.getElementById("dlawyer_stand");

function startstory(no) {
  scene = no;
  story();
}
/*
async function story() {
  console.log("scene: ", scene);
  switch (scene) {
    case 9:
      //scene 06, Plawyer calls upon accused
      await wait(1000);
      setTimeout( function(){
      display_dialog(plawyer_stand, "Thank you, your honor", 3000)},00);
      await wait(4000);

      setTimeout(function () {
        display_dialog(
        plawyer_stand,
          "I would like to call upon the accused, Mr. William Moore",
          4000);
      }, 2500);
      await wait(4000);
      //scene++;
      story();
    case 11:
      //scene 10, writer calls accused
      setTimeout( function(){
      display_dialog(writer, "Mr. William Moore, come up in the witness box", 5000)},6500);
      await wait(8000);
      scene++;
      story();
  case 12:
    // await wait(5000);
    setTimeout(async function () {
    increaseOpacity(accused, 0.005);
    }, 5000);
    //await wait(5000);
    
    setTimeout(function() {
      display_dialog(writer,"Mr. Moore repeat after me ",2000)},4000);
      //await wait(2000);
    
    setTimeout(function(){
    display_dialog(writer,"I William Moore do Solemnly Affirm that ",4000)},8000);
     
    await wait(4000);
    /* 
    setTimeout(function(){
      display_dialog(writer,"What I shall state shall be the truth,",4000)},5000);
    await wait(4000); 
    setTimeout(function(){
      display_dialog(writer,"the whole truth and nothing but the truth. ",4000)},5000);   
    //await wait(5000);
    //story();

  }
}
*/
function story() {
  console.log("scene: ", scene);

  // Queue template
  // function scene08() {
  //   {
  //     //code BLOCK
  //   }
  //   setTimeout(
  //     //next scene link
  //   , 4000);
  // }

  function scene26() {
    console.log("ended", scene);
  }
  function scene25(){
    display_dialog_big(
      lady,
      "Mr Shinde searched her trunk in front of me and we were shocked to find Rs 10,000 in an envelope.Shanti got this money from selling my gold chain. She is a thief ",
      5000
    );
    console.log(scene++);
    setTimeout(scene26, 26700);    
  }
  function scene24(){
    display_dialog_big(
      lady,
      "And the next day I witnessed it was lost, Shanti stole it. No other outsider except Shanti goes into my room.",
      5000
      );
    console.log(scene++);
    setTimeout(scene25,26600);
  }
  function scene23(){
    display_dialog_big(
      lady,
      "I had kept my chain in the drawer last night and we went to a party after that and shanti was alone at home.", 
 
      5000
    );
    console.log(scene++);1
    setTimeout(scene24, 26500);    
  }
  function scene22(){
    display_dialog_big(
      plawyer_stand,
      "Ms. shinde when did you felt the chain was stolen and that too by Shanti",
      5000
    );
    console.log(scene++);
    setTimeout(scene23, 26000);    
  }
  function scene21(){
    decreaseOpacity(accused,0.005);
    increaseOpacity(lady,0.005);
    console.log(scene++);
    setTimeout(scene22, 21500);    
  }
  function scene20(){
    display_dialog_big(
      plawyer_stand,
      "Ok so, Your honor now i would like to call Ms. Shinde",
      3000
    );
    console.log(scene++);
    setTimeout(scene21, 21000);    
  }
  function scene19(){
    display_dialog_big(
      accused,
      "I left early morning that day as I have to go to my brother's school and returned back till mid day.",
      3000
    );
    console.log(scene++);
    setTimeout(scene20, 20500);    
  }
  function scene18(){
    display_dialog_big(
      plawyer_stand,
      "So Ms. Shanti when did you left and returned back to Ms. Shinde's house on the day the gold chain was stolen.",
      3000
    );
    console.log(scene++);
    setTimeout(scene19, 20000);    
  }
  function scene17(){
    display_dialog_big(
      judge1,
      "Prosecuter Lawyer you may proceed",
      3000
    );
    console.log(scene++);
    setTimeout(scene18, 19500);    
  }
  function proceed(){
    //button proceed yes/not

  }

  function scene16() {
    display_dialog_big(
      writer,
      "The hearing will now proceed please refer to the Law Book and the Case Abstract when done click on proceed.",
      3000
    );
    console.log(scene++);
    setTimeout(scene17, 19000);
  } 
  function scene15() {
    display_dialog_big(
      accused,
      "I Shanti Priya do Solemnly Affirm that, What I shall state shall be the truth,the whole truth and nothing but the truth.",
      6000
    );
    console.log(scene++);
    setTimeout(scene16, 18000);
  } 

  function scene14() {
    display_dialog_big(
      writer,
      "I Shanti Priya do Solemnly Affirm that, What I shall state shall be the truth,the whole truth and nothing but the truth.",
      6000
    );
    console.log(scene++);
    setTimeout(scene15, 13500);
  }
  function scene13() {
    display_dialog(
      writer,
      "Ms. Shanti Priya, repeat after me.",
      1500
    );
    console.log(scene++);
    setTimeout(scene14, 12000);
  }
  function scene12() {
    increaseOpacity(accused,0.005);
    console.log(scene++);
    setTimeout(scene13, 11000);
  }
  function scene11() {
    display_dialog(
      writer,
      "Ms. Shanti, come up in the witness box",
      2500
    );
    console.log(scene++);
    setTimeout(scene12, 11500);
  }
  function scene10() {
    display_dialog(
      plawyer_stand,
      "I would like to call upon the accused, Ms. Shanti Priya",
      3000
    );
    console.log(scene++);
    setTimeout(scene11, 9000);
  }

  function scene09() {
    display_dialog(plawyer_stand, "Thank you, your honor", 2500);
    console.log(scene++);
    setTimeout(scene10, 6000);
  }

  setTimeout(scene09, 1000);
}

