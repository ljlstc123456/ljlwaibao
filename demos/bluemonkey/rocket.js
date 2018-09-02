function Rocket(){
	this.$bg = $("#runPad") ;
	this.$el = this.$bg.find("#rocket") ;
    this.$bg.find(".close").on("click",function(){
    	$("#runPad").hide() ;
    	resetInterpreter();
        resetStepUi(false);
    }) ;
	this.turnRight = function(){
		this.stopRun() ;
		this.$el.css({"transform":"rotate(90deg)"}) ;
	}
	this.turnShun = function(s){
		this.setInSpeed(s) ;
		this.$el.removeAttr('class').addClass("shun animated") ;
	}
	this.turnNi = function(s){
		this.setInSpeed(s) ;
		this.$el.removeAttr('class').addClass("ni animated") ;
	}
	this.turnLeft = function(){
		this.stopRun() ;
		this.$el.css({"transform":"rotate(-90deg)"}) ;
	}
	this.turnForward = function(){
		this.stopRun() ;
		this.$el.css({"transform":"rotate(0deg)"}) ;
	}
	this.turnBack = function(){
		this.stopRun() ;
		this.$el.css({"transform":"rotate(180deg)"}) ;
	}
	this.runForward = function(s){
		this.setSpeed(s) ;
		this.$bg.removeAttr('class').addClass("forward animated") ;
	}
	this.runBack = function(s){
		this.setSpeed(s) ;
		this.$bg.removeAttr('class').addClass("back animated") ;
	}
	this.runLeft = function(s){
		this.setSpeed(s) ;
		this.$bg.removeAttr('class').addClass("left animated") ;
	}
	this.runRight = function(s){
		this.setSpeed(s) ;
		this.$bg.removeAttr('class').addClass("right animated") ;
	}
	this.setSpeed = function(speed){
		this.$bg.css({"animation-duration":100/speed+"s"}) ;
		this.$bg.find(".dashboard span:eq(0)").html("速度:"+speed) ;
	}
	this.setInSpeed = function(speed){
		this.$el.css({"animation-duration":100/speed+"s"}) ;
		this.$bg.find(".dashboard span:eq(0)").html("速度:"+speed) ;
	}
	this.duration = function(t){
		this.$bg.find(".dashboard span:eq(1)").html("持续:"+t) ;
	}
	this.stopRun = function(){
		this.$bg.removeAttr('class') ;
	}
	this.stopInRun = function(){
		this.$el.removeAttr('class') ;
	} 
	return this ;
}

$(function(){
	window.MyRocket = new Rocket() ;
}) ;