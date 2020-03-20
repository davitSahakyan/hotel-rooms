import React from "react";

export default function RoomsList({ rooms }) {
    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        );
    }
    return <div>Hello from roomlist</div>;
}
