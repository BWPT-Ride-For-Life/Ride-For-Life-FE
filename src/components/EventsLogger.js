import React from "react";

export default class EventsLogger extends React.Component {
    render() {
        return (
            <div className="example-config">
                <h5>Event log</h5>
                <ul className="event-log" style={{ textAlign: 'right' }}>
                    {this.props.events.map(function(event, index) {
                        return (<li key={index}>{event}</li>);
                    })}
                </ul>
            </div>
        );
    }
}