import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data, kelvin) {
  const avg = _.round(_.sum(data)/data.length)

  if (kelvin) {
    return toFahrenheit(avg);
  } else {
    return avg;
  }
}

function toFahrenheit(kelvin) {
  return Math.round(kelvin * 9/5 - 459.67)
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data, props.convert)} {props.units}</div>
    </div>
  )
}