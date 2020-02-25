import React from "react";

const RoomContext = React.createContext();

class RoomProvider extends React.Component {
    state = {};
    render() {
        return (
            <RoomContext.Provider value="value">
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
