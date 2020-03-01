import React from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";

export default class FeaturedRooms extends React.Component {
    static contextType = RoomContext;
    render() {
        const value = this.context;
        console.log(value);
        return (
            <div>
                Hello from Featured Rooms
                <Loading />
            </div>
        );
    }
}
