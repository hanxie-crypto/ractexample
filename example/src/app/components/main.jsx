var React = require('react'),
  mui = require('material-ui'),
  BODY=require('./body.jsx'),
  HEADER = require('./header.jsx'),
  FOOTER=require('./footer.jsx');



var Main = React.createClass({

  render: function() {

    return (
      <div className="g-fruitmain">
       <HEADER/>
       <BODY/>
       <FOOTER/>
      </div>
    );
  },

  
});

module.exports = Main;