var React = require('react');
var mui = require('material-ui');

var  RaisedButton = mui.RaisedButton;


var BODY = React.createClass({
  render: function() {

    return (
     <div className="g-bodycontent">
     <div className="g-content f-hide mtg2-1">
        <h1>新闻</h1>
        
      </div>
      <div className="g-content f-hide mtg2-2">
        <h1>问答</h1>
        
      </div>
       <div className="g-content mtg2-3">
        <h1>辩论</h1>
       
      </div>
      <div className="g-content f-hide mtg2-4">
        <h1>我的</h1>
        
      </div>
      </div>
    );
  }
});

module.exports = BODY;