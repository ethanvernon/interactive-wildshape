(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),i=a.n(r),o=(a(15),a(2)),l=a(3),c=a(6),h=a(4),u=a(5),m=(a(17),a(7),a(1)),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value,a=this.props.checkStrength(t),n=this.props.checkDex(t),s=this.props.checkSizeMod(t),r=-1*this.props.checkSizeMod(t),i=this.props.checkMab(s,a),o=this.props.checkNA(t),l=this.props.checkSkillsMod(t);this.props.onChange(t,a,n,s,r,i,o,l)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",null,"Size: "),s.a.createElement("select",{id:"forms",onChange:this.handleChange},s.a.createElement("option",{value:"Dimunitive"},"Dimunitive"),s.a.createElement("option",{value:"Tiny"},"Tiny"),s.a.createElement("option",{value:"Small"},"Small"),s.a.createElement("option",{value:"Medium",selected:!0},"Medium"),s.a.createElement("option",{value:"Large"},"Large"),s.a.createElement("option",{value:"Huge"},"Huge")))}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=parseInt(this.props.amuletBonus),t=Math.floor((this.props.modStrength-10)/2),a=Math.floor((this.props.modDex-10)/2),n=this.props.form,r=this.props.modStrength,i=this.props.modDex,o=(this.props.modCMBD,this.props.CMD),l=this.props.AC,c=this.props.naturalArmor,h=this.props.touchAC,u=this.props.ffAC,m=this.props.modAA,d=this.props.CMB,b=this.props.initiative,g=this.props.refSave,p=this.props.skillsSizeMod,f=this.props.ringBonus,k=this.props.barkskin,C=this.props.prism,O=this.props.mageArmor,v=this.props.modMab+e+C,j=this.props.modMab+e-5+C,S=this.props.meleeDamage+e,B=this.props.meleeDamageSecondary+e,M=this.props.CMB+4,A=t<0?t+e:Math.floor(1.5*t)+e,E=2*this.props.skillsSizeMod;function y(e){return e<0?e:"+"+e}return s.a.createElement("div",null,s.a.createElement("h1",null,"You've selected: ",n),s.a.createElement("p",null,s.a.createElement("b",null,"Init:")," ",y(b)),s.a.createElement("p",null,s.a.createElement("b",null,"AC:")," ",l,", touch ",h,", flat-footed ",u," (",y(a)," Dex, ",y(c)," natural armor, ",y(O)," armor, ",y(m)," size, ",y(f)," deflection, ",y(k)," natural armor enhancement)"),s.a.createElement("p",null,s.a.createElement("b",null,"Ref:")," ",y(g)),s.a.createElement("p",null,s.a.createElement("b",null,"Melee (multiple attacks):")," ",y(v)," ",s.a.createElement("i",null,"primary")," (",s.a.createElement("i",null,"dice"),y(S),"), ",y(j)," ",s.a.createElement("i",null,"secondary")," (",s.a.createElement("i",null,"dice"),y(B),")"),s.a.createElement("p",null,s.a.createElement("b",null,"Melee (only 1 attack):")," ",y(v)," ",s.a.createElement("i",null,"sole attack")," (",s.a.createElement("i",null,"dice"),y(A),")"),s.a.createElement("p",null,s.a.createElement("b",null,"Str:")," ",r," (",t<0?t:"+"+t,"), ",s.a.createElement("b",null,"Dex:")," ",i," (",y(a),")"),s.a.createElement("p",null,s.a.createElement("b",null,"CMB:")," ",y(d)," (",y(M)," grapple if it has ",s.a.createElement("i",null,"grab"),")"),s.a.createElement("p",null,s.a.createElement("b",null,"CMD:")," ",o),s.a.createElement("p",null,s.a.createElement("b",null,"Size modified skills:")," ",y(E)," Stealth, ",y(p)," Fly"),s.a.createElement("p",null,s.a.createElement("b",null,"Applicable abilities (",s.a.createElement("i",null,"Beast Shape III"),"):")," burrow 30 feet, climb 90 feet, fly 90 feet (good maneuverability), swim 90 feet, blindsense 30 feet, darkvision 60 feet, low-light vision, scent, constrict, ferocity, grab, jet, poison, pounce, rake, trample, trip, and web."),s.a.createElement("br",null),s.a.createElement("p",null,"Unlisted stats default to your character's"),s.a.createElement("p",null,"Relevant skills use new Strength and Dexterity modifiers."),s.a.createElement("p",null,"Further modify Fly and Stealth by new size modifiers if applicable."))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleStrChange=a.handleStrChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleStrChange",value:function(e){this.props.onChange(parseInt(e.target.value),this.props.changeStr(parseInt(e.target.value)))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",null,"Strength: "),s.a.createElement("input",{id:"score",type:"number",min:"6",max:"22",defaultValue:this.props.strength,onInput:this.handleStrChange}))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleDexChange=a.handleDexChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleDexChange",value:function(e){this.props.onChange(parseInt(e.target.value),this.props.changeDex(parseInt(e.target.value)))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",null,"Dexterity: "),s.a.createElement("input",{id:"dexScore",type:"number",min:"6",max:"22",defaultValue:this.props.dex,onInput:this.handleDexChange}))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleBabChange=a.handleBabChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleBabChange",value:function(e){this.props.onChange(parseInt(e.target.value),this.props.changeBab(parseInt(e.target.value)))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",null,"Base attack bonus: "),s.a.createElement("input",{id:"babScore",type:"number",min:"0",max:"20",defaultValue:this.props.bab,onInput:this.handleBabChange}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleInitChange=a.handleInitChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleInitChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",null,"Initiative Bonuses: "),s.a.createElement("input",{id:"initBonus",type:"number",min:"-2",max:"6",defaultValue:this.props.initBonus,onInput:this.handleInitChange}))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleResChange=a.handleResChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleResChange",value:function(e){this.props.onChange(parseInt(e.target.value))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",null,"Resistance Bonus: "),s.a.createElement("input",{id:"resBonus",type:"number",min:"0",max:"5",defaultValue:this.props.resBonus,onInput:this.handleResChange}))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleAmuletChange=a.handleAmuletChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleAmuletChange",value:function(e){this.props.onChange(parseInt(e.target.value))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",null,"Amulet of Mighty Fists: "),s.a.createElement("input",{id:"initBonus",type:"number",min:"0",max:"5",defaultValue:this.props.amuletBonus,onInput:this.handleAmuletChange}))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleProtChange=a.handleProtChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleProtChange",value:function(e){this.props.onChange(parseInt(e.target.value))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",null,"Ring of Protection: "),s.a.createElement("input",{id:"protBonus",type:"number",min:"0",max:"5",defaultValue:this.props.ringBonus,onInput:this.handleProtChange}))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleBarkskinChange=a.handleBarkskinChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleBarkskinChange",value:function(e){this.props.onChange(parseInt(e.target.value))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",null,"Barkskin: "),s.a.createElement("input",{id:"barkskinBonus",type:"number",min:"0",max:"5",defaultValue:this.props.barkskin,onInput:this.handleBarkskinChange}))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handlePrismChange=a.handlePrismChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handlePrismChange",value:function(e){this.props.onChange(parseInt(e.target.value))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",null,"Pale Green Prism, cracked: "),s.a.createElement("input",{id:"barkskinBonus",type:"number",min:"0",max:"1",defaultValue:this.props.prismBonus,onInput:this.handlePrismChange}))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleMageArmorChange=a.handleMageArmorChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleMageArmorChange",value:function(e){this.props.onChange(parseInt(e.target.value))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",null,"Mage Armor: "),s.a.createElement("select",{id:"mageArmor",onChange:this.handleMageArmorChange},s.a.createElement("option",{value:"4"},"Yes"),s.a.createElement("option",{value:"0",selected:!0},"No")))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){this.props.onClick("hidden"==this.props.class?"":"hidden")}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"More stats: ",s.a.createElement("button",{type:"button",id:"showHideButton",onClick:this.handleClick},this.props.buttonName)),s.a.createElement("div",{className:this.props.class},this.props.children))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={form:"Medium",strength:18,dex:12,modStrength:20,modDex:12,modAA:0,modCMBD:0,bab:7,modMAB:12,meleeDamage:5,meleeDamageSecondary:2,CMB:12,CMD:23,naturalArmor:2,armorClass:15,touchAC:13,flatfootAC:14,initiative:3,modInit:3,initBonus:2,resBonus:3,refBase:3,refSave:7,skillsSizeMod:0,amuletBonus:2,ringBonus:2,barkskin:0,prismBonus:1,mageArmor:0,toggleHide:"hidden",buttonName:"Show"},a.changeForm=a.changeForm.bind(Object(m.a)(Object(m.a)(a))),a.checkStrength=a.checkStrength.bind(Object(m.a)(Object(m.a)(a))),a.changeStrState=a.changeStrState.bind(Object(m.a)(Object(m.a)(a))),a.checkDex=a.checkDex.bind(Object(m.a)(Object(m.a)(a))),a.changeDexState=a.changeDexState.bind(Object(m.a)(Object(m.a)(a))),a.checkSizeMod=a.checkSizeMod.bind(Object(m.a)(Object(m.a)(a))),a.checkMabOnBabChange=a.checkMabOnBabChange.bind(Object(m.a)(Object(m.a)(a))),a.checkMabOnSizeChange=a.checkMabOnSizeChange.bind(Object(m.a)(Object(m.a)(a))),a.changeBabState=a.changeBabState.bind(Object(m.a)(Object(m.a)(a))),a.checkNaturalArmor=a.checkNaturalArmor.bind(Object(m.a)(Object(m.a)(a))),a.changeInitState=a.changeInitState.bind(Object(m.a)(Object(m.a)(a))),a.changeSizeSkillMod=a.changeSizeSkillMod.bind(Object(m.a)(Object(m.a)(a))),a.changeResState=a.changeResState.bind(Object(m.a)(Object(m.a)(a))),a.changeAmuletState=a.changeAmuletState.bind(Object(m.a)(Object(m.a)(a))),a.changeProtState=a.changeProtState.bind(Object(m.a)(Object(m.a)(a))),a.changeBarkskinState=a.changeBarkskinState.bind(Object(m.a)(Object(m.a)(a))),a.changePrismState=a.changePrismState.bind(Object(m.a)(Object(m.a)(a))),a.changeMageArmor=a.changeMageArmor.bind(Object(m.a)(Object(m.a)(a))),a.hideCo=a.hideCo.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"changeForm",value:function(e,t,a,n,s,r,i,o){var l=Math.floor((a-10)/2),c=Math.floor((t-10)/2);this.setState({form:e,modStrength:t,modDex:a,modAA:n,modCMBD:s,modMAB:r,meleeDamage:c,meleeDamageSecondary:c<0?c:Math.floor(c/2),CMB:s+("Tiny"==e||"Dimunitive"==e?l:c)+this.state.bab,CMD:10+s+c+l+this.state.bab,naturalArmor:i,armorClass:10+n+l+i+this.state.ringBonus+this.state.barkskin+this.state.mageArmor,touchAC:10+n+l+this.state.ringBonus,flatfootAC:10+n+i+this.state.ringBonus+(l<0?l:0)+this.state.barkskin+this.state.mageArmor,modInit:l+this.state.initBonus,refSave:this.state.resBonus+this.state.refBase+l,skillsSizeMod:o})}},{key:"changeStrState",value:function(e,t){var a=Math.floor((this.state.modDex-10)/2),n=Math.floor((t-10)/2);this.setState({strength:e,modStrength:t,modMAB:this.state.bab+this.state.modAA+n,meleeDamage:n,meleeDamageSecondary:n<0?n:Math.floor(n/2),CMB:this.state.modCMBD+("Tiny"==this.state.form||"Dimunitive"==this.state.form?a:n)+this.state.bab,CMD:10+this.state.modCMBD+n+a+this.state.bab}),console.log("Strength is "+this.state.strength)}},{key:"changeDexState",value:function(e,t){var a=Math.floor((t-10)/2),n=Math.floor((this.state.modStrength-10)/2);this.setState({dex:e,modDex:t,CMB:this.state.modCMBD+("Tiny"==this.state.form||"Dimunitive"==this.state.form?a:n)+this.state.bab,CMD:10+this.state.modCMBD+n+a+this.state.bab,armorClass:10+this.state.modAA+a+this.state.naturalArmor+this.state.ringBonus+this.state.barkskin+this.state.mageArmor,touchAC:10+this.state.modAA+a+this.state.ringBonus,modInit:a+this.state.initBonus,refSave:this.state.resBonus+this.state.refBase+a}),console.log("Dexterity is "+this.state.dex)}},{key:"changeBabState",value:function(e,t){var a=Math.floor((this.state.modDex-10)/2),n=Math.floor((this.state.modStrength-10)/2);this.setState({bab:e,modMAB:t,CMB:this.state.modCMBD+("Tiny"==this.state.form||"Dimunitive"==this.state.form?a:n)+this.state.bab,CMD:10+this.state.modCMBD+n+a+this.state.bab}),console.log("modified melee attack bonus is "+this.state.modMAB)}},{key:"changeInitState",value:function(e){this.setState({initBonus:e,modInit:parseInt(e)+Math.floor((this.state.modDex-10)/2)})}},{key:"changeResState",value:function(e){this.setState({resBonus:e,refSave:e+Math.floor((this.state.modDex-10)/2)+this.state.refBase})}},{key:"changeProtState",value:function(e){var t=Math.floor((this.state.modDex-10)/2);this.setState({armorClass:10+this.state.modAA+t+this.state.naturalArmor+e+this.state.barkskin+this.state.mageArmor,touchAC:10+this.state.modAA+t+e,flatfootAC:10+this.state.modAA+this.state.naturalArmor+e+(t<0?t:0)+this.state.barkskin+this.state.mageArmor,ringBonus:e})}},{key:"changeSizeSkillMod",value:function(e){switch(e){case"Dimunitive":return 6;case"Tiny":return 4;case"Small":return 2;case"Medium":return 0;case"Large":return-2;case"Huge":return-4;default:return 0}}},{key:"changeAmuletState",value:function(e){this.setState({amuletBonus:e})}},{key:"hideCo",value:function(e){"hidden"==e?this.setState({toggleHide:"hidden",buttonName:"Show"}):this.setState({toggleHide:"",buttonName:"Hide"})}},{key:"changePrismState",value:function(e){this.setState({prismBonus:e})}},{key:"changeBarkskinState",value:function(e){var t=Math.floor((this.state.modDex-10)/2);this.setState({barkskin:e,armorClass:10+this.state.modAA+t+this.state.naturalArmor+this.state.ringBonus+e+this.state.mageArmor,flatfootAC:10+this.state.modAA+this.state.naturalArmor+this.state.ringBonus+(t<0?t:0)+e+this.state.mageArmor})}},{key:"changeMageArmor",value:function(e){var t=Math.floor((this.state.modDex-10)/2);this.setState({mageArmor:e,armorClass:10+this.state.modAA+t+this.state.naturalArmor+this.state.ringBonus+this.state.barkskin+e,flatfootAC:10+this.state.modAA+this.state.naturalArmor+this.state.ringBonus+(t<0?t:0)+this.state.barkskin+e})}},{key:"checkStrength",value:function(e){console.log("checkStrength was called"),console.log("form is: "+e);var t=null,a=null;switch("string"==typeof e?(t=this.state.strength,a=e,console.log("size changed")):(t=e,a=this.state.form,console.log("strength changed")),a){case"Dimunitive":return t-4;case"Tiny":return t-2;case"Small":return t;case"Medium":return t+2;case"Large":return t+4;case"Huge":return t+6;default:return t}}},{key:"checkDex",value:function(e){console.log("checkDex was called"),console.log("form is: "+e);var t=null,a=null;switch("string"==typeof e?(t=this.state.dex,a=e,console.log("size changed")):(t=e,a=this.state.form,console.log("dex changed")),a){case"Dimunitive":return t+6;case"Tiny":return t+4;case"Small":return t+2;case"Medium":return t;case"Large":return t-2;case"Huge":return t-4;default:return t}}},{key:"checkSizeMod",value:function(e){switch(e){case"Dimunitive":return 4;case"Tiny":return 2;case"Small":return 1;case"Medium":return 0;case"Large":return-1;case"Huge":return-2;default:return 0}}},{key:"checkMabOnBabChange",value:function(e){return console.log("checkMabOnBabChange was called"),console.log("bab is: "+e),e+this.state.modAA+Math.floor((this.state.modStrength-10)/2)}},{key:"checkMabOnSizeChange",value:function(e,t){return console.log("checkMabOnSizeChange was called"),console.log("modifier to attack and ac is: "+e),e+this.state.bab+Math.floor((t-10)/2)}},{key:"checkNaturalArmor",value:function(e){switch(e){case"Dimunitive":case"Tiny":case"Small":return 1;case"Medium":return 2;case"Large":return 4;case"Huge":return 6;default:return 2}}},{key:"render",value:function(){return s.a.createElement("div",{id:"main"},s.a.createElement(d,{onChange:this.changeForm,checkStrength:this.checkStrength,checkDex:this.checkDex,checkSizeMod:this.checkSizeMod,checkMab:this.checkMabOnSizeChange,checkNA:this.checkNaturalArmor,checkSkillsMod:this.changeSizeSkillMod}),s.a.createElement(M,{onClick:this.hideCo,class:this.state.toggleHide,buttonName:this.state.buttonName},s.a.createElement(v,{onChange:this.changeProtState,ringBonus:this.state.ringBonus}),s.a.createElement(C,{onChange:this.changeResState,resBonus:this.state.resBonus}),s.a.createElement(j,{onChange:this.changeBarkskinState,barkskin:this.state.barkskin}),s.a.createElement(B,{onChange:this.changeMageArmor}),s.a.createElement(S,{onChange:this.changePrismState,prismBonus:this.state.prismBonus}),s.a.createElement(O,{onChange:this.changeAmuletState,amuletBonus:this.state.amuletBonus}),s.a.createElement(k,{onChange:this.changeInitState,initBonus:this.state.initBonus}),s.a.createElement(f,{onChange:this.changeBabState,changeBab:this.checkMabOnBabChange,bab:this.state.bab}),s.a.createElement(g,{onChange:this.changeStrState,changeStr:this.checkStrength,strength:this.state.strength}),s.a.createElement(p,{onChange:this.changeDexState,changeDex:this.checkDex,dex:this.state.dex})),s.a.createElement(b,{form:this.state.form,modStrength:this.state.modStrength,modDex:this.state.modDex,modAA:this.state.modAA,modCMBD:this.state.modCMBD,modMab:this.state.modMAB,meleeDamage:this.state.meleeDamage,meleeDamageSecondary:this.state.meleeDamageSecondary,CMB:this.state.CMB,CMD:this.state.CMD,naturalArmor:this.state.naturalArmor,AC:this.state.armorClass,initiative:this.state.modInit,ffAC:this.state.flatfootAC,touchAC:this.state.touchAC,refSave:this.state.refSave,skillsSizeMod:this.state.skillsSizeMod,amuletBonus:this.state.amuletBonus,ringBonus:this.state.ringBonus,barkskin:this.state.barkskin,prism:this.state.prismBonus,mageArmor:this.state.mageArmor}))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(A,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){}},[[10,2,1]]]);
//# sourceMappingURL=main.63d2ac72.chunk.js.map