webpackJsonp([0],{y7nQ:function(n,t,o){"use strict";function l(n){return u._25(0,[(n()(),u._3(0,0,null,null,1,"span",[],[[8,"className",0],[2,"win",null]],[[null,"click"]],function(n,t,o){var l=!0;return"click"===t&&(l=!1!==n.component.playerTurn(n.parent.context.index,n.context.index)&&l),l},null,null)),(n()(),u._23(1,null,["\n    ","\n  "]))],null,function(n,t){n(t,0,0,u._6(1,"span-",t.context.$implicit.win,""),t.context.$implicit.win),n(t,1,0,t.context.$implicit.type)})}function e(n){return u._25(0,[(n()(),u._3(0,0,null,null,4,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),u._23(-1,null,["\n    "])),(n()(),u.Y(16777216,null,null,1,null,l)),u._2(3,802816,null,0,a.h,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(n()(),u._23(-1,null,["\n"]))],function(n,t){n(t,3,0,t.context.$implicit)},function(n,t){n(t,0,0,u._6(1,"row-",t.context.index,""))})}function i(n){return u._25(0,[(n()(),u._3(0,0,null,null,0,"hr",[["class","ver one love"]],null,null,null,null,null)),(n()(),u._23(-1,null,["\n"])),(n()(),u.Y(16777216,null,null,1,null,e)),u._2(3,802816,null,0,a.h,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(n()(),u._23(-1,null,["\n"])),(n()(),u._3(5,0,null,null,0,"hr",[["class","ver two"]],null,null,null,null,null))],function(n,t){n(t,3,0,t.component.board)},null)}Object.defineProperty(t,"__esModule",{value:!0});var u=o("LMZF"),r=function(){},a=o("Un6q"),c=function(){function n(n,t,o,l){this.route=n,this.tic=t,this.play=o,this.router=l,this.position="relative",this.status=!1,this.playFirst=!0}return n.prototype.ngOnInit=function(){this.board=this.tic.boards,this.computerTurn()},n.prototype.reset=function(){this.tic.boards=this.play.reset(),this.board=this.tic.boards},n.prototype.playerTurn=function(n,t){this.playFirst||(this.play.playerTurn(n,t),this.playFirst=!0,this.router.navigate([{outlets:{player:null}}],{skipLocationChange:!0}),this.computerTurn())},n.prototype.computerTurn=function(){var n=this;if(this.playFirst){var t=this.play.computerTurn();new Promise(function(o,l){setTimeout(function(){n.router.navigate([{outlets:{computer:"computer-alert"}}],{skipLocationChange:!0})},1e3),setTimeout(function(){n.play.updateBoard(t.row,t.col,n.tic.computer)},2e3),setTimeout(function(){n.won()?(n.play.computerScore++,n.router.navigate([{outlets:{computer:null,player:null}}],{skipLocationChange:!0}),setTimeout(function(){n.reset()},1500),l()):o()},2500)}).then(function(t){n.router.navigate([{outlets:{computer:null}}],{skipLocationChange:!0})}).then(function(t){setTimeout(function(){n.playFirst=!1,n.router.navigate([{outlets:{player:"player-alert"}}],{skipLocationChange:!0})},1e3)}).catch(function(t){setTimeout(function(){n.playFirst=!1,n.router.navigate([{outlets:{player:"player-alert"}}],{skipLocationChange:!0})},2e3)})}},n.prototype.won=function(){var n=this,t=this.play.won();if(t)return t.pos.forEach(function(t){var o=n.board[t.row][t.col];n.board[t.row][t.col]={name:o.name,type:o.type,win:!0}}),this.play.computerWon=!0,!0},n}(),s=o("UHIZ"),p=o("2ojh"),h=o("bj/B"),f=u._1({encapsulation:0,styles:[["div[_ngcontent-%COMP%]{height:11.466666666667rem;border-bottom:solid;text-align:center;color:#87cefa}div[_ngcontent-%COMP%]:nth-last-child(2){border:none}span[_ngcontent-%COMP%]{display:block;float:left;height:116px;width:11.334374rem;border-right:5px solid;font-size:8rem;line-height:1.45}span[_ngcontent-%COMP%]:last-child{border:none}span.win[_ngcontent-%COMP%]{background:#006400}hr[_ngcontent-%COMP%]{position:absolute;-webkit-transform:rotate(90deg);transform:rotate(90deg)}"]],data:{}}),m=u.Z("ng-component",c,function(n){return u._25(0,[(n()(),u._3(0,0,null,null,1,"ng-component",[],[[4,"position",null]],null,null,i,f)),u._2(1,114688,null,0,c,[s.a,p.a,h.a,s.k],null,null)],function(n,t){n(t,1,0)},function(n,t){n(t,0,0,u._16(t,1).position)})},{},{},[]);o.d(t,"PlayGroundModuleNgFactory",function(){return y});var y=u._0(r,[],function(n){return u._14([u._15(512,u.j,u.W,[[8,[m]],[3,u.j],u.v]),u._15(4608,a.k,a.j,[u.s,[2,a.p]]),u._15(512,a.b,a.b,[]),u._15(512,s.n,s.n,[[2,s.s],[2,s.k]]),u._15(512,r,r,[]),u._15(1024,s.i,function(){return[[{path:"",component:c}]]},[])])})}});