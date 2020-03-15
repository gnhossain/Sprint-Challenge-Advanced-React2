import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const PlayersResponsiveBar = (props) => (
    console.log(props),

    <ResponsiveBar
        data={props.players}
        keys={['searches']}
        indexBy="id"
        margin={{ top: 10, right: 20, bottom: 50, left: 50 }}
        padding={.5}
        groupMode="grouped"
        colors='wheat'

        borderColor= '#456b7c'
        axisTop={null}
        axisRight={null}
        // axisBottom={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: 'Players',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Searches',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#1ea8fc"
        legends={[]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        tooltip={({ indexValue, value }) => (
            <strong>
              Id - {indexValue}: Searches - {value}
            </strong>
          )}
        gridXValues='none'
    />
)

export default PlayersResponsiveBar;