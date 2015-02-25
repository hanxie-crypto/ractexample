var React = require('react');
var mui = require('material-ui');
var Icon = mui.Icon;
var FOOTER = React.createClass({
  render: function() {

    return (
     <div className="g-footer">
      		<ul>
      			<li onTouchTap={this._handleTouchTap} className="tg2-1"><Icon icon='mui-icon-sort' className="u-icon"/>新闻</li>
      			<li onTouchTap={this._handleTouchTap} className="tg2-2"><Icon icon='communication-voicemail' className="u-icon"/>问答</li>
      			<li onTouchTap={this._handleTouchTap} className="tg2-3"><Icon icon='communication-chat' className="u-icon"/>辩论</li>
      			<li onTouchTap={this._handleTouchTap} className="tg2-4" ><Icon icon='action-perm-identity' className="u-icon"/>我的</li>
      		</ul>
      </div>
    );
  },

   _handleTouchTap: function(e) {
   	var target=(e.target);
   		var act=target.nodeName.toLowerCase();
   		var litabclass={};
   		var showclass={};
   	if(act==="li"){
   		litabclass=target.className;
   		showclass='.m'+litabclass;
   	}
   	else{
   		litabclass=target.parentNode.className;
   		showclass='.m'+litabclass;
   	
   	}
   	var pretab=$(".g-footer").data("tabli");
   	var preactbody=$(".g-footer").data("actbody");
   	if(pretab){
   		pretab.removeClass("u-act");
   		preactbody.addClass("f-hide");
   	}else{
   	}
   	$('.'+litabclass).addClass("u-act");
   	$(showclass).removeClass("f-hide");
   	$(".g-footer").data("tabli",$('.'+litabclass));
   	$(".g-footer").data("actbody",$(showclass));
   	
  }
});

module.exports = FOOTER ;