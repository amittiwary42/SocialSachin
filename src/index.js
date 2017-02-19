import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import d3 from 'd3';
import BarChart from './BarChart'
import YearWise from './YearWise'
import Total from './Total'
import TotalTeamwise from './TotalTeamwise'
import MatchesWon from './MatchesWon'
import InningsWise from './InningsWise'
import WhatIf from './WhatIf'

ReactDOM.render(
  <div>
  <div className="row">
    <div className="text-center"><strong><h2>SACHIN, SACHIN!</h2></strong></div>
  </div>
  <div className="row"><hr /></div>

  <div className="row">
    <div className="container"><div className="text-center"><h4>Wikipedia says he is the greatest cricketer of all time. And why not! With an impeccable timing and mature sense of the
     gentlemen's game, he was a force to be reckoned with. Let us prove, once and for all, through his batting st
     atistics that he was and always will be the greatest cricketer of all time</h4></div></div>
  </div>
  <div className="spacer"></div>

    <div className="row">
      <div className="text-center"><strong><h2>SACHIN IN A NUTSHELL</h2></strong></div>
    </div>
    <div className="row">
      <div className="text-center"><h4>A graph showing how many runs he has scored over the years. Clearly he was India's pivot from 1996 till 2003.</h4></div>
    </div>
    <div className="row"><hr /></div>
    <div className="row"><Total /></div>
    <div className="row">
      <div className="text-center"><h4>Graph ranges from 1989 to 2012</h4></div>
    </div>
    <div className="spacer"></div>

    <div className="row">
      <div className="text-center"><strong><h2>SACHIN BY THE YEARS</h2></strong></div>
    </div>
    <div className="row">
      <div className="text-center"><h4>A graph showing his individual scores in a particular year</h4></div>
    </div>
    <div className="row"><hr /></div>
    <div className="row"><YearWise /></div>
    <div className="row">
      <div className="text-center"><h4>Graph shows his score over the particular year</h4></div>
    </div>

    <div className="spacer"></div>
    <div className="row">
      <div className="text-center"><strong><h2>SACHIN AGAINST ALL</h2></strong></div>
    </div>
    <div className="row">
      <div className="text-center"><h4>A graph showing his performances against major teams</h4></div>
    </div>
    <div className="row"><hr /></div>
    <div className="row"><TotalTeamwise /></div>
    <div className="row">
      <div className="text-center"><h4>Graph ranges from 1989 to 2012</h4></div>
    </div>

    <div className="spacer"></div>
    <div className="row">
      <div className="text-center"><strong><h2>HOW INDIA DEPENDED ON HIM</h2></strong></div>
    </div>
    <div className="row">
      <div className="text-center"><h4>A graph showing his performances when we lost or won. He was consistent when India won, though a lot of his high scores came in a losing cause.</h4></div>
    </div>
    <div className="row"><hr /></div>
    <div className="row"><MatchesWon /></div>
    <div className="row">
      <div className="text-center"><h4>Graph ranges from 1989 to 2012</h4></div>
    </div>

    <div className="spacer"></div>
    <div className="row">
      <div className="text-center"><strong><h2>BE IT 1ST OR 2ND</h2></strong></div>
    </div>
    <div className="row">
      <div className="text-center"><h4>A graph showing how he set up a target or chased it down, over the years. Clearly he was a master at setting targets up and went all or nothing while chasing.</h4></div>
    </div>
    <div className="row"><hr /></div>
    <div className="row"><InningsWise /></div>
    <div className="row">
      <div className="text-center"><h4>Graph ranges from 1989 to 2012</h4></div>
    </div>

    <div className="spacer"></div>
    <div className="row">
      <div className="text-center"><strong><h2>THE BIG QUESTION : WHAT IF?</h2></strong></div>
    </div>
    <div className="row">
      <div className="container text-center"><h4>We all did not want our little master to retire. He probably had so much more game left in him. And he showed that clearly in the recent retired cricketers' tournament. So why not find out how well would he have fared. This graph shows his average over the years till 2020. With age coming up to him, he still is very fit enough. Getting reflected in an average of 16 even in 2020 according to my estimate. The anamoly in year 2010 is because he played only two matches and scored a mammoth 200* in one of them and thus that year has not been taken into account in my calculations. I have included my math and the algorithm used by me along with this project.</h4></div>
    </div>
    <div className="row"><hr /></div>
    <div className="row"><WhatIf /></div>
    <div className="row">
      <div className="text-center"><h4>Graph ranges from 1989 to </h4><h3>2020</h3></div>
    </div>

    <div className="spacer"></div>




  </div>,
  document.getElementById('root')
);
