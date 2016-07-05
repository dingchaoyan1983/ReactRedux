import React from 'react';
import RingChart from 'components/RingChart';


export class MembershipsOverviewReportsRetention extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render () {
    return (
      <div>
        <RingChart radius={300}/>
      </div>
    )
  }
}

MembershipsOverviewReportsRetention.defaultProps = {

}

MembershipsOverviewReportsRetention.contextTypes = {

}

MembershipsOverviewReportsRetention.propTypes = {

}

export default MembershipsOverviewReportsRetention
